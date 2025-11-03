'use client';

import { forwardRef, type ImgHTMLAttributes, useState, useEffect } from 'react';

const FALLBACK_IMAGE_URL = "https://placehold.co/600x400?text=Image";

export type ImageProps = ImgHTMLAttributes<HTMLImageElement>;

export const Image = forwardRef<HTMLImageElement, ImageProps>(({ src, alt = "Image", ...props }, ref) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(typeof src === 'string' ? src : undefined);

  useEffect(() => {
    if (typeof src === 'string') {
      setImgSrc(src);
    }
  }, [src]);

  if (!src) {
    return <div ref={ref as any} {...props} style={{ background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />;
  }

  return (
    <img 
      ref={ref} 
      src={imgSrc} 
      alt={alt}
      onError={() => setImgSrc(FALLBACK_IMAGE_URL)}
      {...props} 
    />
  );
});

Image.displayName = 'Image';
