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

const F1DeepDiveCard = () => {
  const router = useRouter();
  return (
    <Card
      isPressable
      onPress={() => router.push('/projects/f1deepdive')}
      className="hover:opacity-90"
      shadow="sm"
      classNames={{
        base: 'bg-black/70',
      }}
    >
      <CardHeader className="!items-start absolute top-1 z-10 flex-col">
        <p className="font-bold text-tiny text-white/60 uppercase">
          Machine Learning Course Final Project
        </p>
        <h4 className="font-medium text-large text-white">F1 Deep Dive</h4>
      </CardHeader>
      <Image
        alt="Card background"
        width={506}
        height={380}
        className="z-0 h-full w-full object-cover"
        src="/f1deepdive_card.png"
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
                  base: 'text-white',
                  dot: 'bg-python',
                }}
              >
                Python
              </Chip>
              <Chip
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
                  dot: 'bg-firebase',
                }}
              >
                Scikit-learn
              </Chip>
            </div>
          </div>
          <div className="flex gap-2">
            <Tooltip content="View Live" closeDelay={100}>
              <Button
                isIconOnly
                as={Link}
                href="https://f1deepdive.streamlit.app/"
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

export default F1DeepDiveCard;
