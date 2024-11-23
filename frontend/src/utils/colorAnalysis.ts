import cv from '@techstark/opencv-js';

interface ColorFeatures {
  hue: number;
  saturation: number;
  value: number;
  contrast: number;
  warmth: number;
}

export async function analyzeImageColors(imageElement: HTMLImageElement): Promise<string> {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not get canvas context');

    canvas.width = imageElement.width;
    canvas.height = imageElement.height;
    ctx.drawImage(imageElement, 0, 0);

    // Convert to OpenCV format
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const mat = cv.matFromImageData(imgData);

    // Convert to HSV color space
    const hsvMat = new cv.Mat();
    cv.cvtColor(mat, hsvMat, cv.COLOR_RGB2HSV);

    // Calculate average HSV values
    const means = cv.mean(hsvMat);
    const features = extractColorFeatures(mat, hsvMat);

    // Clean up
    mat.delete();
    hsvMat.delete();

    // Determine season based on color features
    const season = determineSeasonFromFeatures(features);
    resolve(season);
  });
}

function extractColorFeatures(rgbMat: any, hsvMat: any): ColorFeatures {
  // Calculate average HSV values
  const meanHsv = cv.mean(hsvMat);
  
  // Calculate contrast using standard deviation of value channel
  const valueMat = new cv.Mat();
  const valueChannels = new cv.MatVector();
  cv.split(hsvMat, valueChannels);
  valueMat.copyTo(valueChannels.get(2));
  const stdDev = new cv.Mat();
  cv.meanStdDev(valueMat, new cv.Mat(), stdDev);
  const contrast = stdDev.data64F[0];

  // Calculate warmth using red-blue difference
  const rgbChannels = new cv.MatVector();
  cv.split(rgbMat, rgbChannels);
  const redMean = cv.mean(rgbChannels.get(0))[0];
  const blueMean = cv.mean(rgbChannels.get(2))[0];
  const warmth = redMean - blueMean;

  // Clean up
  valueMat.delete();
  stdDev.delete();
  valueChannels.delete();
  rgbChannels.delete();

  return {
    hue: meanHsv[0],
    saturation: meanHsv[1],
    value: meanHsv[2],
    contrast,
    warmth
  };
}

function determineSeasonFromFeatures(features: ColorFeatures): string {
  const { hue, saturation, value, contrast, warmth } = features;

  // Normalize values
  const normalizedContrast = contrast / 255;
  const normalizedSaturation = saturation / 255;
  const normalizedValue = value / 255;

  // Decision tree based on color theory
  if (warmth > 10) { // Warm undertone
    if (normalizedValue > 0.6 && normalizedSaturation > 0.5) {
      return "Spring"; // Bright and warm
    } else {
      return "Autumn"; // Muted and warm
    }
  } else { // Cool undertone
    if (normalizedContrast > 0.5 && normalizedSaturation > 0.5) {
      return "Winter"; // High contrast and cool
    } else {
      return "Summer"; // Soft and cool
    }
  }
}