import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Camera } from 'lucide-react';

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
  disabled: boolean;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload, disabled }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (acceptedFiles[0]) {
        onImageUpload(acceptedFiles[0]);
      }
    },
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
    },
    maxFiles: 1,
    disabled,
  });

  return (
    <>
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors
          ${isDragActive ? 'border-rose-500 bg-rose-50' : 'border-gray-300 hover:border-rose-500'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
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
          <p className="text-xs text-gray-400">Supported formats: JPEG, PNG</p>
        </div>
      </div>

      <div className="mt-8">
        <button
          onClick={() => {}}
          disabled={disabled}
          className={`w-full flex items-center justify-center space-x-2 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-500 hover:bg-rose-600
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <Camera className="h-5 w-5" />
          <span>Take a Photo</span>
        </button>
      </div>
    </>
  );
};

export default ImageUploader;