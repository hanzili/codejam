import React from 'react';

interface AnalysisProgressProps {
  progress: number;
  currentStep: string;
  uploadedImage: string | null;
}

const AnalysisProgress: React.FC<AnalysisProgressProps> = ({ progress, currentStep, uploadedImage }) => {
  return (
    <div className="text-center py-12">
      <p className="text-gray-600 font-medium mb-6">AI Color Analysis in Progress</p>

      <div className="max-w-md mx-auto mb-8">
        <div className="relative pt-1">
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-rose-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-500">{currentStep}</p>
        <p className="mt-2 text-xs text-gray-400">{Math.round(progress)}% complete</p>
      </div>

      {uploadedImage && (
        <img src={uploadedImage} alt="Uploaded" className="mt-6 max-w-xs mx-auto rounded-lg" />
      )}
    </div>
  );
};

export default AnalysisProgress;