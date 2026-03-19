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
import { GameController, GithubIcon } from '../../icons';

const MarioPyScriptCard = () => {
  return (
    <Card
      isFooterBlurred
      isPressable
      onPress={() =>
        window.open('https://dbm03.github.io/mariopyscript/', '_blank')
      }
      className="hover:opacity-90"
      shadow="sm"
      classNames={{
        base: 'bg-black/70',
      }}
    >
      <CardHeader className="!items-start absolute top-1 z-10 flex-col">
        <p className="font-bold text-tiny text-white/60 uppercase">
          Super Mario Bros. Clone
        </p>
        <h4 className="font-medium text-large text-white">Mario PyScript</h4>
      </CardHeader>
      <Image
        width={506}
        height={380}
        alt="Card background"
        className="z-0 h-full w-full object-cover"
        src="/mariopyscript_card.png"
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
                color="warning"
                variant="dot"
                size="sm"
                classNames={{
                  base: 'text-white',
                  dot: 'bg-javascript',
                }}
              >
                JavaScript
              </Chip>
              <Chip
                color="danger"
                variant="dot"
                size="sm"
                classNames={{
                  base: 'text-white',
                }}
              >
                PyScript
              </Chip>
            </div>
          </div>
          <div className="flex gap-2">
            <Tooltip content="See on GitHub" closeDelay={100}>
              <Button
                isIconOnly
                href="https://github.com/dbm03/mariopyscript"
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
            <Tooltip content="Play now" closeDelay={100}>
              <Button
                isIconOnly
                href="https://dbm03.github.io/mariopyscript/"
                target="_blank"
                as={Link}
                color="default"
                aria-label="Like"
                radius="full"
                size="sm"
              >
                <GameController />
              </Button>
            </Tooltip>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default MarioPyScriptCard;
