'use client';

import {
  Button,
  Card,
  Chip,
  Tooltip,
} from '@heroui/react';
import { useRouter } from 'next/navigation';
import { EyeIcon } from '../../icons';

const ImmerseGTCard = () => {
  const router = useRouter();
  return (
    <>
      <Card
        className="hover:opacity-90 shadow-sm bg-black/70 cursor-pointer"
        onClick={() => router.push('/projects/immersegt')}
      >
        <Card.Header className="absolute top-1 z-10 flex-col !items-start">
          <p className="font-bold uppercase text-white/60 text-xs">
            Virtual Event Platform
          </p>
          <h4 className="font-medium text-white text-lg">
            ImmerseGT 2024 Event Platform
          </h4>
        </Card.Header>
        <img
          alt="Card background"
          width={506}
          height={380}
          className="z-0 h-full w-full object-cover"
          src="/immersegt_card.png"
        />
        <Card.Footer className="absolute bottom-0 z-10 flex flex-col border-t border-default-foreground/20 bg-black/40 backdrop-blur-md dark:border-default/40">
          <div className="w-full">
            <p className="text-left text-white/60 text-xs">Tech Stack</p>
          </div>
          <div className="flex h-full w-full flex-1">
            <div className="flex w-full max-w-full overflow-x-scroll scrollbar-hide">
              <div className="flex h-full items-end gap-2">
                <Chip size="sm" className="text-white gap-1.5">
                  <span className="inline-block h-2 w-2 rounded-full bg-white" />
                  Next.js
                </Chip>
                <Chip size="sm" className="text-white gap-1.5">
                  <span className="inline-block h-2 w-2 rounded-full bg-supabase" />
                  Supabase
                </Chip>
              </div>
            </div>
            <Tooltip delay={0} closeDelay={100}>
              <Tooltip.Trigger>
                <a
                  href="https://immersegt.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    isIconOnly
                    aria-label="See more"
                    className="rounded-full"
                    size="sm"
                  >
                    <EyeIcon />
                  </Button>
                </a>
              </Tooltip.Trigger>
              <Tooltip.Content>View Live</Tooltip.Content>
            </Tooltip>
          </div>
        </Card.Footer>
      </Card>
    </>
  );
};

export default ImmerseGTCard;
