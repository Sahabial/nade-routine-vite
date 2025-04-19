// NadeContainer.tsx
import React from 'react';

import ActionsPanel from './ActionsPanel';
import ImagePreview from './ImagePreview';

interface Props {
  imgSrc?: string;
}

const DEFAULT_IMG_URL = './../../assets/react.svg';

const handeImageError: React.ReactEventHandler<HTMLImageElement> = (e) => {
  e.currentTarget.src = 'test';
};

const NadeContainer: React.FC<Props> = ({ imgSrc = DEFAULT_IMG_URL }) => {
  return (
    <div className="m-4 flex flex-row space-x-4 rounded-xl border p-4 shadow-md">
      <ImagePreview imgSrc={imgSrc} onError={handeImageError} />
      <ActionsPanel>
        {/* You can pass custom actions here if needed */}
      </ActionsPanel>
    </div>
  );
};

export default NadeContainer;
