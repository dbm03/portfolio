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
import { useRouter } from 'next/navigation';
import { EyeIcon } from '../../icons';

const ImmerseGTCard = () => {
  const router = useRouter();
  return (
    <>
      <Card
        onPress={() => router.push('/projects/immersegt')}
        isFooterBlurred
        isPressable
        className="hover:opacity-90"
        shadow="sm"
        classNames={{
          base: 'bg-black/70',
        }}
      >
        <CardHeader className="absolute top-1 z-10 flex-col !items-start">
          <p className="font-bold uppercase text-white/60 text-tiny">
            Virtual Event Platform
          </p>
          <h4 className="font-medium text-white text-large">
            ImmerseGT 2024 Event Platform
          </h4>
        </CardHeader>
        <Image
          alt="Card background"
          width={506}
          height={380}
          className="z-0 h-full w-full object-cover"
          src="/immersegt_card.png"
        />
        <CardFooter className="absolute bottom-0 z-10 flex flex-col border-t-1 border-default-600 bg-black/40 dark:border-default-100">
          <div className="w-full">
            <p className="text-left text-white/60 text-tiny">Tech Stack</p>
          </div>
          <div className="flex h-full w-full flex-1">
            <div className="flex w-full max-w-full overflow-x-scroll scrollbar-hide">
              <div className="flex h-full items-end gap-2">
                <Chip
                  variant="dot"
                  size="sm"
                  classNames={{
                    base: 'text-white',
                    dot: 'bg-white',
                  }}
                >
                  Next.js
                </Chip>
                <Chip
                  variant="dot"
                  size="sm"
                  classNames={{
                    base: 'text-white',
                    dot: 'bg-supabase',
                  }}
                >
                  Supabase
                </Chip>
              </div>
            </div>
            <Tooltip content="View Live" closeDelay={100}>
              <Button
                isIconOnly
                as={Link}
                href="https://immersegt.org/"
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
        </CardFooter>
      </Card>
    </>
  );
};

export default ImmerseGTCard;
