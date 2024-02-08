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
  Chip,
  Link,
} from "@nextui-org/react";
import { ExternalIcon, EyeIcon, RightDownArrow } from "../icons";

const ImmerseGTCard = () => {
  return (
    <>
      <Card
        as={Link}
        href="https://immersegt.io/"
        target="_blank"
        isFooterBlurred
        isPressable
        className="hover:opacity-90"
        shadow="sm"
      >
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="font-bold uppercase text-tiny text-white/60">
            Virtual Event Platform
          </p>
          <h4 className="font-medium text-white text-large">
            ImmerseGT 2024 Event Platform
          </h4>
          <div className="flex items-center gap-2 animate-pulse">
            <div className="w-2 h-2 rounded-full bg-danger" />
            <span className="text-white text-sm">WIP</span>
          </div>
        </CardHeader>
        <Image
          alt="Card background"
          width={442}
          height={331}
          className="z-0 object-cover w-full h-full"
          src="/immersegt_card.png"
        />
        <CardFooter className="absolute bottom-0 z-10 bg-black/40 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex items-center flex-grow gap-2">
            <div className="flex flex-col gap-1">
              <p className="text-left text-tiny text-white/60">Tech Stack</p>
              <div className="flex flex-row gap-2">
                <Chip
                  variant="dot"
                  size="sm"
                  classNames={{
                    base: "text-white",
                    dot: "bg-white"
                  }}
                >
                  Next.js
                </Chip>
                <Chip
                  variant="dot"
                  size="sm"
                  classNames={{
                    base: "text-white",
                    dot: "bg-supabase"
                  }}
                >
                  Supabase
                </Chip>
              </div>
            </div>
          </div>
          <Tooltip content="View Live" closeDelay={100}>
            <Button
              isIconOnly
              as={Link}
              href="https://immersegt.io/"
              target="_blank"
              color="default"
              aria-label="See more"
              radius="full"
              size="sm"
            >
              <EyeIcon />
            </Button>
          </Tooltip>
        </CardFooter>
      </Card>
    </>
  );
};

export default ImmerseGTCard;
