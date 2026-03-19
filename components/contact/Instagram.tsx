'use client';

import { Card, CardBody, CardFooter, Link, Tooltip } from '@heroui/react';
import { InstagramIcon } from '../icons';

const InstagramCard = () => {
  return (
    <Tooltip content="Instagram" closeDelay={100}>
      <Card
        shadow="sm"
        as={Link}
        href="https://www.instagram.com/barrosodavid23/"
        target="_blank"
        className="bg-insta-gradient hover:opacity-90"
        fullWidth
        classNames={{
          base: 'h-full',
        }}
      >
        <CardBody className="flex items-center justify-center pb-0 text-white">
          <InstagramIcon size={64} />
        </CardBody>
        <CardFooter className="z-10 flex justify-center border-zinc-100/50 border-t-1 bg-black/20 text-white">
          <p className="text-small">@barrosodavid23</p>
        </CardFooter>
      </Card>
    </Tooltip>
  );
};

export default InstagramCard;
