"use client";

import React from 'react';

export function FallbackImage({ src, alt, fallbackSrc, className }: { src: string, alt: string, fallbackSrc: string, className?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={(e) => {
        e.currentTarget.src = fallbackSrc;
      }}
      className={className}
    />
  );
}
