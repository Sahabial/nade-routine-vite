// ImagePreview.tsx
import React from 'react';

import CroppedImage from './CroppedImage';

interface ImagePreviewProps {
  imgSrc: string;
  onError: React.ReactEventHandler<HTMLImageElement>;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ imgSrc, onError }) => {
  return (
    <div className="relative flex overflow-hidden rounded-xl border bg-gray-100">
      <img src={imgSrc} width={400} height={400} alt="img" onError={onError} />
      <div className="absolute flex w-full flex-row justify-between">
        <CroppedImage
          src={imgSrc}
          alt="Top Left Crop"
          width={150}
          height={150}
          position="-50px -45px"
          zoom={0.5}
        />
        <CroppedImage
          src={imgSrc}
          alt="Center Crop"
          width={150}
          height={150}
          zoom={0.5}
        />
      </div>
    </div>
  );
};

export default ImagePreview;
