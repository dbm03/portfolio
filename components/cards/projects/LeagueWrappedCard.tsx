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
import { RightDownArrow } from '../../icons';

const LeagueWrappedCard = () => {
  const router = useRouter();
  return (
    <Card
      onPress={() => router.push('/projects/league-wrapped')}
      isFooterBlurred
      isPressable
      className="hover:opacity-90"
      shadow="sm"
      classNames={{
        base: 'bg-black/70',
      }}
    >
      <CardHeader className="!items-start absolute top-1 z-10 flex-col">
        <p className="font-bold text-tiny text-white/60 uppercase">
          Full Stack Web App
        </p>
        <h4 className="font-medium text-large text-white">League Wrapped</h4>
      </CardHeader>
      <Image
        width={506}
        height={380}
        alt="Card background"
        className="z-0 h-full w-full object-cover"
        src="/leaguewrapped_cover.png"
      />
      <CardFooter className="absolute bottom-0 z-10 flex flex-col border-default-600 border-t-1 bg-black/70 dark:border-default-100">
        <div className="w-full">
          <p className="text-left text-tiny text-white/60">Tech Stack</p>
        </div>
        <div className="flex h-full w-full flex-1">
          <div className="scrollbar-hide flex w-full max-w-full overflow-x-scroll">
            <div className="flex h-full items-end gap-2">
              <Tooltip content="Amazon Web Services" closeDelay={100}>
                <Chip
                  variant="dot"
                  size="sm"
                  classNames={{
                    base: 'text-white',
                    dot: 'bg-aws',
                  }}
                >
                  AWS
                </Chip>
              </Tooltip>
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
                color="secondary"
                variant="dot"
                size="sm"
                classNames={{
                  base: 'text-white',
                  dot: 'bg-reactjs',
                }}
              >
                React
              </Chip>
              <Chip
                color="primary"
                variant="dot"
                size="sm"
                classNames={{
                  base: 'text-white',
                }}
              >
                Remotion
              </Chip>
            </div>
          </div>
          <Tooltip content="See more" closeDelay={100}>
            <Button
              isIconOnly
              as={Link}
              href="/projects/league-wrapped"
              color="default"
              aria-label="Like"
              radius="full"
              size="sm"
            >
              <RightDownArrow />
            </Button>
          </Tooltip>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LeagueWrappedCard;
