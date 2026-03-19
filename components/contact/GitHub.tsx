'use client';

import { Card, CardBody, CardFooter, Link, Tooltip } from '@heroui/react';
import { GithubIcon } from '../icons';

const GithubCard = () => {
  return (
    <Tooltip content="GitHub" closeDelay={100}>
      <Card
        shadow="sm"
        as={Link}
        href="https://github.com/dbm03"
        target="_blank"
        className="bg-zinc-800 hover:opacity-90"
        fullWidth
        classNames={{
          base: 'h-full',
        }}
      >
        <CardBody className="flex items-center justify-center pb-0 text-white">
          <GithubIcon size={64} />
        </CardBody>
        <CardFooter className="z-10 flex justify-center border-zinc-500/50 border-t bg-black/20 text-white">
          <p className="text-small">@dbm03</p>
        </CardFooter>
      </Card>
    </Tooltip>
  );
};

export default GithubCard;
