// CroppedImage.tsx
import React from 'react';

interface CroppedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  position?: string;
  className?: string;
  zoom?: number;
}

const CroppedImage: React.FC<CroppedImageProps> = ({
  src,
  alt,
  width,
  height,
  position,
  className = '',
  zoom = 1,
}) => {
  return (
    <div
      className={`overflow-hidden border border-gray-300 ${className}`}
      style={{
        width,
        height,
      }}
    >
      <img
        src={src}
        alt={alt}
        className="h-full object-none"
        style={{
          objectPosition: position,
          zoom,
        }}
      />
    </div>
  );
};

export default CroppedImage;
