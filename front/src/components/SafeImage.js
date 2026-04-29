import React, { useEffect, useState } from 'react';
import { FALLBACK_IMAGE, normalizeImageUrl } from '../utils/imageUtils';

export default function SafeImage({ src, alt, ...props }) {
  const [imageSrc, setImageSrc] = useState(normalizeImageUrl(src));

  useEffect(() => {
    setImageSrc(normalizeImageUrl(src));
  }, [src]);

  const handleError = () => {
    if (imageSrc !== FALLBACK_IMAGE) {
      setImageSrc(FALLBACK_IMAGE);
    }
  };

  return <img src={imageSrc} alt={alt} onError={handleError} {...props} />;
}
