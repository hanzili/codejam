import React, { useState, useCallback, useEffect } from 'react';
import { AlertCircle } from 'lucide-react';
import ColorReport from '../components/ColorReport';
import ImageUploader from '../components/ImageUploader';
import AnalysisProgress from '../components/AnalysisProgress';
import OpenAI from 'openai';
import { useSupabaseUser } from '../hooks/useSupabase';
import { updateUserSeason } from '../lib/supabase';

const key = import.meta.env.VITE_OPENAI_KEY;
const useOpenAI = import.meta.env.VITE_USE_OPENAI === 'true';

interface ColorAnalysisResult {
  season: string;
  undertone: string;
  characteristics: {
    skinTone: string;
    eyeColor: string;
    hairColor: string;
    contrastLevel: string;
  };
  personalizedDescription: string;
  customRecommendations: {
    bestColors: string[];
    worstColors: string[];
    specificTips: string[];
  };
}

const seasonalColors = {
  Spring: {
    colors: ["#FF9AA2", "#FFB7B2", "#FFDAC1", "#E2F0CB", "#B5EAD7", "#C7CEEA"],
    undertone: "Warm",
    description:
      "As a Spring, you shine in warm, clear colors with golden undertones. Your best colors are coral, peach, golden yellow, and warm green. Your natural coloring has a warm, clear quality that is enhanced by similarly clear and warm colors.",
  },
  Summer: {
    colors: ["#AFC1D6", "#D5A6BD", "#B8D8D8", "#D6BDA4", "#9A8B4F", "#8E9B90"],
    undertone: "Cool",
    description:
      "As a Summer, you look radiant in soft, cool colors with blue undertones. Your optimal colors include soft pink, powder blue, sage green, and mauve. Your natural coloring has a subtle, cool quality that harmonizes beautifully with gentle, muted colors.",
  },
  Autumn: {
    colors: ["#D4A373", "#A3785E", "#8B4513", "#796465", "#654321", "#4A3B2A"],
    undertone: "Warm",
    description:
      "As an Autumn, you glow in warm, muted colors with golden-brown undertones. Earth tones like rust, olive, warm brown, and deep gold complement your natural warmth and richness. Your coloring has a golden quality that comes alive with nature's palette.",
  },
  Winter: {
    colors: ["#1B4B6D", "#7C1D3C", "#2E8B57", "#4B0082", "#800020", "#191970"],
    undertone: "Cool",
    description:
      "As a Winter, you look best in clear, vivid colors with blue undertones. Your optimal colors are pure white, navy, deep purple, and true red. Your natural coloring has a crisp, clear quality that is enhanced by bold, dramatic colors.",
  },
};

const ColorAnalysis = () => {
  const { user, loading } = useSupabaseUser();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState('');
  const [results, setResults] = useState<any>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [showReport, setShowReport] = useState(false);

  useEffect(() => {
    if (user && user.report_data && !results && !isAnalyzing) {
      setResults(user.report_data);
      setShowReport(true);
    }
  }, [user]);

  const handleImageUpload = useCallback(
    async (file: File) => {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
      setIsAnalyzing(true);
      setProgress(0);
      setCurrentStep('Starting analysis...');

      simulateProgress();

      const base64Image = await convertToBase64(file);

      const analysis = useOpenAI 
        ? await sendImageToOpenAI(base64Image) 
        : getRandomAnalysis();

      const fullAnalysis = generateSeasonalAnalysis(analysis.season, analysis);

      if (user) {
        try {
          await updateUserSeason(user.id, fullAnalysis.season, fullAnalysis);
        } catch (error) {
          console.error('Error updating user season:', error);
        }
      }

      setIsAnalyzing(false);
      setProgress(100);
      setCurrentStep('Analysis complete');
      setResults(fullAnalysis);
      setShowReport(true);
    },
    [user]
  );

  const handleRedoAnalysis = () => {
    setResults(null);
    setUploadedImage(null);
    setShowReport(false);
  };

  const simulateProgress = () => {
    let progressValue = 0;
    const interval = setInterval(() => {
      if (progressValue >= 90) {
        clearInterval(interval);
      } else {
        progressValue += Math.random() * 10;
        setProgress(Math.min(progressValue, 90));
      }
    }, 500);
  };

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = (reader.result as string).split(',')[1];
        resolve(base64);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const sendImageToOpenAI = async (base64Image: string): Promise<ColorAnalysisResult> => {
    const prompt = `Analyze this person's coloring for a seasonal color analysis. Consider skin tone, eye color, hair color, and overall contrast.

Provide a detailed response in the following JSON format **without any code blocks or additional formatting**:
{
  "season": "Spring|Summer|Autumn|Winter",
  "undertone": "Warm|Cool|Neutral",
  "characteristics": {
    "skinTone": "detailed description",
    "eyeColor": "detailed description",
    "hairColor": "detailed description",
    "contrastLevel": "Low|Medium|High with explanation"
  },
  "personalizedDescription": "2-3 sentences about their unique coloring",
  "customRecommendations": {
    "bestColors": ["specific color 1", "specific color 2", "specific color 3"],
    "worstColors": ["specific color 1", "specific color 2"],
    "specificTips": ["personalized tip 1", "personalized tip 2"]
  }
}

Focus on providing highly personalized insights based on the individual's unique features.

**Please provide the response as plain JSON without any code blocks or formatting.**`;

    const context = `You are an expert color analyst with years of experience in personal color analysis. Provide detailed, personalized color recommendations based on the individual's unique features. **Ensure the response is in plain JSON format without any code blocks or Markdown formatting.**`;
    const imgType = "image/jpeg";

    const openai = new OpenAI({ apiKey: key, dangerouslyAllowBrowser: true });

    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: context },
          {
            role: 'user',
            content: [
              { type: 'text', text: prompt },
              {
                type: 'image_url',
                image_url: { url: `data:${imgType};base64,${base64Image}` }
              },
            ],
          },
        ],
        max_tokens: 1000,
      });

      let content = response.choices[0].message?.content;

      if (content) {
        // Remove any code block markers or whitespace
        content = content.trim();

        // Regex to remove code block markers and language hints
        content = content.replace(/^```[\w]*\n/, '').replace(/```$/, '');

        try {
          return JSON.parse(content) as ColorAnalysisResult;
        } catch (error) {
          console.error('Error parsing OpenAI response:', error);
          return getRandomAnalysis();
        }
      }

      return getRandomAnalysis();
    } catch (error) {
      console.error('Error sending image to OpenAI:', error);
      return getRandomAnalysis();
    }
  };

  const getRandomAnalysis = (): ColorAnalysisResult => {
    const seasons = ['Spring', 'Summer', 'Autumn', 'Winter'];
    const randomSeason = seasons[Math.floor(Math.random() * seasons.length)];
    
    return {
      season: randomSeason,
      undertone: randomSeason === 'Spring' || randomSeason === 'Autumn' ? 'Warm' : 'Cool',
      characteristics: {
        skinTone: "Medium with neutral undertones",
        eyeColor: "Brown",
        hairColor: "Dark brown",
        contrastLevel: "Medium"
      },
      personalizedDescription: "Your natural coloring creates a harmonious blend of warm and cool tones.",
      customRecommendations: {
        bestColors: ["Navy blue", "Forest green", "Deep burgundy"],
        worstColors: ["Neon yellow", "Hot pink"],
        specificTips: [
          "Focus on deep, rich colors that complement your natural contrast",
          "Avoid overly bright or neon shades"
        ]
      }
    };
  };

  const generateSeasonalAnalysis = (season: string, aiAnalysis?: ColorAnalysisResult) => {
    const seasonData = seasonalColors[season as keyof typeof seasonalColors];
    
    return {
      season,
      undertone: aiAnalysis?.undertone || seasonData.undertone,
      colors: seasonData.colors,
      description: aiAnalysis?.personalizedDescription || seasonData.description,
      characteristics: aiAnalysis?.characteristics,
      customRecommendations: aiAnalysis?.customRecommendations,
      date: new Date().toISOString(),
      userImage: uploadedImage,
    };
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : showReport && results ? (
        <>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Color Analysis</h1>
            <div className="inline-flex items-center justify-center space-x-4">
              <div className="inline-flex items-center bg-rose-50 text-rose-700 px-4 py-2 rounded-lg">
                <AlertCircle className="h-5 w-5 mr-2" />
                Color analysis complete
              </div>
              <button
                onClick={handleRedoAnalysis}
                className="inline-flex items-center border-2 border-rose-700 hover:bg-rose-700 
                  text-rose-700 hover:text-white px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Redo Analysis
              </button>
            </div>
          </div>
          <ColorReport {...results} />
        </>
      ) : (
        <>
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Color Analysis</h1>
            <p className="text-gray-600">Upload a selfie to discover your seasonal color palette</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            {isAnalyzing ? (
              <AnalysisProgress
                progress={progress}
                currentStep={currentStep}
                uploadedImage={uploadedImage}
              />
            ) : (
              <ImageUploader onImageUpload={handleImageUpload} disabled={isAnalyzing} />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ColorAnalysis;