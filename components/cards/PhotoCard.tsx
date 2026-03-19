'use client';

import { Card, CardFooter } from '@heroui/react';
import type {
  StaticImageData,
  StaticImport,
} from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface PhotoCardProps {
  src: StaticImageData | StaticImport;
  alt: string;
  title: string;
  style?: React.CSSProperties;
}

const PhotoCard = ({ src, alt, title, style }: PhotoCardProps) => {
  return (
    <Card
      shadow="sm"
      fullWidth
      classNames={{
        base: 'h-full group',
      }}
    >
      <Image
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        style={style}
        placeholder="blur"
      />

      <CardFooter className="absolute bottom-0 z-10">
        <div className="flex h-full flex-col justify-between gap-1 px-2 pb-4">
          <div className="max-w-fit rounded-full bg-black/10 px-2 py-1 text-center text-small text-white opacity-100 backdrop-blur-lg transition-opacity group-hover:opacity-50">
            {title}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PhotoCard;
