'use client';

import { Card, CardBody } from '@heroui/react';

const ComingSoonCard = () => {
  return (
    <Card
      shadow="none"
      classNames={{
        base: 'border-dotted border-4 border-black/20 dark:border-white/20 h-full',
      }}
    >
      <CardBody className="flex items-center justify-center">
        <h1 className="text-center text-2xl text-black/60 dark:text-white/60">
          Coming soon...
        </h1>
      </CardBody>
    </Card>
  );
};

export default ComingSoonCard;
