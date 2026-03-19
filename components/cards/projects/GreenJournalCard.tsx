'use client';

import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Chip,
  Image,
  Link,
  Tooltip,
} from '@heroui/react';
import { EyeIcon, GithubIcon } from '../../icons';

const GreenJournalCard = () => {
  return (
    <Card
      isPressable
      onPress={() =>
        window.open('https://hackgt-sustainability.vercel.app/', '_blank')
      }
      className="hover:opacity-90"
      shadow="sm"
      classNames={{
        base: 'bg-black/70',
      }}
    >
      <CardHeader className="!items-start absolute top-1 z-10 flex-col">
        <p className="font-bold text-tiny text-white/60 uppercase">
          Hackathon Project
        </p>
        <h4 className="font-medium text-large text-white">Green Journal</h4>
      </CardHeader>
      <Image
        alt="Card background"
        width={506}
        height={380}
        className="z-0 h-full w-full object-cover"
        src="/greenjournal_card.png"
      />
      <CardFooter className="absolute bottom-0 z-10 flex flex-col border-default-600 border-t-1 bg-black/70 dark:border-default-100">
        <div className="w-full">
          <p className="text-left text-tiny text-white/60">Tech Stack</p>
        </div>
        <div className="flex h-full w-full flex-1">
          <div className="scrollbar-hide flex w-full max-w-full overflow-x-scroll">
            <div className="flex h-full items-end gap-2">
              <Chip
                variant="dot"
                size="sm"
                classNames={{
                  base: 'text-white whitespace-nowrap',
                  content: 'overflow-ellipsis overflow-hidden',
                }}
              >
                Next.js
              </Chip>
              <Chip
                color="warning"
                variant="dot"
                size="sm"
                classNames={{
                  base: 'text-white whitespace-nowrap',
                  content: 'overflow-ellipsis overflow-hidden',
                }}
              >
                Three.js
              </Chip>
              <Chip
                color="primary"
                variant="dot"
                size="sm"
                classNames={{
                  base: 'text-white whitespace-nowrap',
                  content: 'overflow-ellipsis overflow-hidden',
                }}
              >
                OpenAI API
              </Chip>
            </div>
          </div>
          <div className="flex justify-end gap-2 pl-2">
            <Tooltip content="See on GitHub" closeDelay={100}>
              <Button
                isIconOnly
                href="https://github.com/dbm03/greenjournal"
                target="_blank"
                as={Link}
                color="default"
                aria-label="Like"
                radius="full"
                size="sm"
              >
                <GithubIcon />
              </Button>
            </Tooltip>
            <Tooltip content="View Live" closeDelay={100}>
              <Button
                isIconOnly
                as={Link}
                href="https://hackgt-sustainability.vercel.app/"
                target="_blank"
                color="default"
                aria-label="See more"
                radius="full"
                size="sm"
              >
                <EyeIcon />
              </Button>
            </Tooltip>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default GreenJournalCard;
