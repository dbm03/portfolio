'use client';

import { Card, CardBody, CardFooter, Link, Tooltip } from '@heroui/react';
import { LinkedinIcon } from '../icons';

const LinkedinCard = () => {
  return (
    <Tooltip content="LinkedIn" closeDelay={100}>
      <Card
        shadow="sm"
        as={Link}
        href="https://www.linkedin.com/in/davidbarrosomurcia/"
        target="_blank"
        className="hover:opacity-90"
        fullWidth
        classNames={{
          base: 'h-full bg-[#184ec4]',
        }}
      >
        <CardBody className="flex items-center justify-center pb-0 text-white">
          <LinkedinIcon size={64} />
        </CardBody>
        <CardFooter className="z-10 flex justify-center border-zinc-100/30 border-t-1 bg-black/20 text-white">
          <p className="text-small">David B. M.</p>
        </CardFooter>
      </Card>
    </Tooltip>
  );
};

export default LinkedinCard;
