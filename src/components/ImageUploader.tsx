import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Camera, AlertCircle, Image, X } from 'lucide-react';

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
  disabled: boolean;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload, disabled }) => {
  const [previewError, setPreviewError] = useState<string | null>(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles, rejectedFiles) => {
      if (rejectedFiles.length > 0) {
        setPreviewError('Please upload a valid image file (JPEG or PNG)');
        return;
      }
      if (acceptedFiles[0]) {
        setPreviewError(null);
        onImageUpload(acceptedFiles[0]);
      }
    },
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
    },
    maxFiles: 1,
    maxSize: 5242880, // 5MB
    disabled,
  });

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Camera className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-sm font-semibold text-gray-900">Color Analysis Photo</h3>
        <p className="mt-1 text-sm text-gray-500">Take or upload a photo in natural lighting</p>
      </div>

      <div
        {...getRootProps()}
        className={`relative group cursor-pointer rounded-xl border-2 border-dashed p-12 transition-all
          ${isDragActive 
            ? 'border-rose-500 bg-rose-50' 
            : 'border-gray-300 hover:bg-gray-50 hover:border-gray-400'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        <input {...getInputProps()} />
        
        <div className="space-y-4 text-center">
          <div className="flex justify-center">
            <div className="space-y-2">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                    <Upload className="h-8 w-8 text-rose-500" />
                  </div>
                  <div className="absolute -right-2 -bottom-2 bg-white rounded-full p-1 shadow-md">
                    <Image className="h-5 w-5 text-gray-500" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center text-sm text-gray-600">
                <span className="relative rounded-md font-medium text-rose-500">
                  Upload a file
                </span>
                <span className="ml-1">or drag and drop</span>
              </div>
            </div>
          </div>
          
          <div className="text-xs text-gray-500">
            JPEG or PNG up to 5MB
          </div>
        </div>

        {/* Guidelines */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <h4 className="text-sm font-medium text-gray-900 mb-4">Photo Guidelines:</h4>
          <ul className="space-y-3">
            {[
              'Use natural daylight for accurate colors',
              'Face the camera directly, with a neutral expression',
              'Avoid heavy makeup or filters',
              'Wear a white or neutral-colored top',
              'Use a plain, light-colored background'
            ].map((tip, index) => (
              <li key={index} className="flex items-start text-sm text-gray-600">
                <div className="flex-shrink-0 h-5 w-5 text-rose-400">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="ml-2">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {previewError && (
        <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 p-3 rounded-md">
          <AlertCircle className="h-5 w-5" />
          <span>{previewError}</span>
          <button 
            onClick={() => setPreviewError(null)}
            className="ml-auto hover:text-red-700"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      <div className="text-xs text-gray-500 text-center">
        By uploading a photo, you agree to our{' '}
        <a href="#" className="text-rose-500 hover:text-rose-600">Terms of Service</a>
        {' '}and{' '}
        <a href="#" className="text-rose-500 hover:text-rose-600">Privacy Policy</a>
      </div>
    </div>
  );
};

export default ImageUploader;