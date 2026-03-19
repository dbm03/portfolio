'use client';

import { Card, CardFooter, CardHeader } from '@heroui/react';
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { StudentIcon } from '../icons';

interface UniCardProps {
  timestamp: string;
  title: string;
  name: string;
  studies: string;
  backgroundImage: string | StaticImport;
  backgroundImageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
}

const UniCard = ({
  timestamp,
  title,
  name,
  studies,
  backgroundImage,
  backgroundImageAlt,
  imageWidth,
  imageHeight,
}: UniCardProps) => (
  <>
    <Card
      shadow="sm"
      fullWidth
      classNames={{
        base: 'min-h-[284px] h-full bg-black',
      }}
    >
      <CardHeader className="!items-start absolute top-1 z-10 flex-col px-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-background">
          <StudentIcon size={20} />
        </div>
      </CardHeader>
      <Image
        width={imageWidth}
        height={imageHeight}
        alt={backgroundImageAlt}
        className="z-0 h-full w-full bg-black object-cover opacity-60 dark:opacity-40"
        src={backgroundImage}
        placeholder="blur"
      />
      <CardFooter className="absolute bottom-0 z-10">
        <div className="flex h-full flex-col justify-between gap-1 px-2 pb-4">
          <div className="max-w-fit rounded-full bg-background px-2 py-1 text-center text-small">
            {timestamp}
          </div>
          <h3 className="text-white">{title}</h3>
          <h2 className="text-balance font-bold text-white text-xl">{name}</h2>
          <h3 className="text-white">{studies}</h3>
        </div>
      </CardFooter>
    </Card>
  </>
);

export default UniCard;
