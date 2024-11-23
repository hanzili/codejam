import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Camera, AlertCircle } from 'lucide-react';
import ColorReport from '../components/ColorReport';

// Mock data for seasonal colors
const seasonalColors = {
  Spring: {
    colors: ["#FF9AA2", "#FFB7B2", "#FFDAC1", "#E2F0CB", "#B5EAD7", "#C7CEEA"],
    undertone: "Warm",
    description: "As a Spring, you shine in warm, clear colors with golden undertones. Your best colors are coral, peach, golden yellow, and warm green. Your natural coloring has a warm, clear quality that is enhanced by similarly clear and warm colors."
  },
  Summer: {
    colors: ["#AFC1D6", "#D5A6BD", "#B8D8D8", "#D6BDA4", "#9A8B4F", "#8E9B90"],
    undertone: "Cool",
    description: "As a Summer, you look radiant in soft, cool colors with blue undertones. Your optimal colors include soft pink, powder blue, sage green, and mauve. Your natural coloring has a subtle, cool quality that harmonizes beautifully with gentle, muted colors."
  },
  Autumn: {
    colors: ["#D4A373", "#A3785E", "#8B4513", "#796465", "#654321", "#4A3B2A"],
    undertone: "Warm",
    description: "As an Autumn, you glow in warm, muted colors with golden-brown undertones. Earth tones like rust, olive, warm brown, and deep gold complement your natural warmth and richness. Your coloring has a golden quality that comes alive with nature's palette."
  },
  Winter: {
    colors: ["#1B4B6D", "#7C1D3C", "#2E8B57", "#4B0082", "#800020", "#191970"],
    undertone: "Cool",
    description: "As a Winter, you look best in clear, vivid colors with blue undertones. Your optimal colors are pure white, navy, deep purple, and true red. Your natural coloring has a crisp, clear quality that is enhanced by bold, dramatic colors."
  }
};

const ColorAnalysis = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState(() => {
    const savedResults = localStorage.getItem('colorAnalysis');
    return savedResults ? JSON.parse(savedResults) : null;
  });
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [analysisSteps, setAnalysisSteps] = useState<string[]>([]);

  const analyzeImage = async (imageUrl: string): Promise<void> => {
    return new Promise((resolve) => {
      const steps = [
        "Analyzing facial features...",
        "Detecting skin undertones...",
        "Processing color harmony...",
        "Determining seasonal palette...",
        "Generating recommendations..."
      ];

      let currentStep = 0;
      const interval = setInterval(() => {
        if (currentStep < steps.length) {
          setAnalysisSteps(prev => [...prev, steps[currentStep]]);
          currentStep++;
        } else {
          clearInterval(interval);
          resolve();
        }
      }, 800);
    });
  };

  const generateSeasonalAnalysis = (imageUrl: string) => {
    // Simple "AI" logic - use image data to determine season
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      // Get image data from the center of the face (approximate)
      const centerX = img.width / 2;
      const centerY = img.height / 3; // Assume face is in upper third
      const imageData = ctx.getImageData(centerX - 50, centerY - 50, 100, 100);
      const data = imageData.data;

      // Calculate average RGB values
      let r = 0, g = 0, b = 0;
      for (let i = 0; i < data.length; i += 4) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
      }
      r = r / (data.length / 4);
      g = g / (data.length / 4);
      b = b / (data.length / 4);

      // Simple season determination based on RGB values
      let season;
      const warmth = r - b; // Higher value indicates warmer colors
      const brightness = (r + g + b) / 3;
      const saturation = Math.max(r, g, b) - Math.min(r, g, b);

      if (warmth > 10) {
        if (brightness > 128) season = "Spring";
        else season = "Autumn";
      } else {
        if (saturation > 50) season = "Winter";
        else season = "Summer";
      }

      const analysis = {
        season,
        ...seasonalColors[season],
        date: new Date().toISOString(),
        userImage: imageUrl
      };
      
      localStorage.setItem('colorAnalysis', JSON.stringify(analysis));
      setResults(analysis);
    };
  };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (results) return;
    
    const file = acceptedFiles[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
      setIsAnalyzing(true);
      setAnalysisSteps([]);
      
      // Simulate AI analysis
      await analyzeImage(imageUrl);
      generateSeasonalAnalysis(imageUrl);
      setIsAnalyzing(false);
    }
  }, [results]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    maxFiles: 1,
    disabled: !!results
  });

  if (results) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Color Analysis</h1>
          <div className="inline-flex items-center bg-rose-50 text-rose-700 px-4 py-2 rounded-lg">
            <AlertCircle className="h-5 w-5 mr-2" />
            Color analysis can only be performed once
          </div>
        </div>
        <ColorReport {...results} />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Color Analysis</h1>
        <p className="text-gray-600">Upload a selfie to discover your seasonal color palette</p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg">
        {isAnalyzing ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500 mx-auto mb-4" />
            <p className="text-gray-600 font-medium mb-4">AI Analysis in Progress</p>
            <div className="space-y-2">
              {analysisSteps.map((step, index) => (
                <p key={index} className="text-sm text-gray-500">{step}</p>
              ))}
            </div>
            {uploadedImage && (
              <img
                src={uploadedImage}
                alt="Uploaded"
                className="mt-6 max-w-xs mx-auto rounded-lg"
              />
            )}
          </div>
        ) : (
          <>
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors
                ${isDragActive ? 'border-rose-500 bg-rose-50' : 'border-gray-300 hover:border-rose-500'}`}
            >
              <input {...getInputProps()} />
              <div className="space-y-4">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto">
                  <Upload className="h-8 w-8 text-rose-500" />
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-900">Drop your photo here</p>
                  <p className="text-sm text-gray-500">or click to select a file</p>
                </div>
                <p className="text-xs text-gray-400">
                  Supported formats: JPEG, PNG
                </p>
              </div>
            </div>

            <div className="mt-8">
              <button 
                onClick={() => onDrop([])}
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-500 hover:bg-rose-600"
              >
                <Camera className="h-5 w-5" />
                <span>Take a Photo</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ColorAnalysis;