"use client";

import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Tooltip,
  useDisclosure,
  Link,
  Chip,
} from "@nextui-org/react";
import { RightDownArrow } from "../../icons";

const LeagueWrappedCard = () => {
  return (
    <>
      <Card
        as={Link}
        href="/projects/league-wrapped"
        isFooterBlurred
        isPressable
        className="hover:opacity-90"
        shadow="sm"
        classNames={{
          base: "bg-black/70",
        }}
      >
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="font-bold uppercase text-tiny text-white/60">
            Full Stack Web App
          </p>
          <h4 className="font-medium text-white text-large">League Wrapped</h4>
        </CardHeader>
        <Image
          width={506}
          height={380}
          alt="Card background"
          className="z-0 object-cover w-full h-full"
          src="/leaguewrapped_cover.png"
        />
        <CardFooter className="absolute flex flex-col bottom-0 z-10 bg-black/70 border-t-1 border-default-600 dark:border-default-100">
          <div className="w-full">
            <p className="text-left text-tiny text-white/60">Tech Stack</p>
          </div>
          <div className="flex flex-1 w-full h-full">
            <div className="flex max-w-full w-full overflow-x-scroll scrollbar-hide">
              <div className="flex gap-2 items-end h-full">
                <Tooltip content="Amazon Web Services" closeDelay={100}>
                  <Chip
                    variant="dot"
                    size="sm"
                    classNames={{
                      base: "text-white",
                      dot: "bg-aws",
                    }}
                  >
                    AWS
                  </Chip>
                </Tooltip>
                <Chip
                  variant="dot"
                  size="sm"
                  classNames={{
                    base: "text-white",
                    dot: "bg-white",
                  }}
                >
                  Next.js
                </Chip>
                <Chip
                  color="secondary"
                  variant="dot"
                  size="sm"
                  classNames={{
                    base: "text-white",
                    dot: "bg-reactjs",
                  }}
                >
                  React
                </Chip>
                <Chip
                  color="primary"
                  variant="dot"
                  size="sm"
                  classNames={{
                    base: "text-white",
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
                href="https://dotesports.com/league-of-legends/news/fan-creates-league-of-legends-wrapped-summarizing-your-ranked-season"
                target="_blank"
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
    </>
  );
};

export default LeagueWrappedCard;
