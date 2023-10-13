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

const MusicPortfolioCard = () => {
  return (
    <>
      <Card
        as={Link}
        href="https://luisbarrososaxofonista.com/"
        target="_blank"
        isFooterBlurred
        isPressable
        className="hover:opacity-90"
        shadow="sm"
      >
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="font-bold uppercase text-tiny text-white/60">
            Business website
          </p>
          <h4 className="font-medium text-white text-large">
            Musician portfolio
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 object-cover w-full h-full"
          src="/musicportfolio_card.png"
        />
        <CardFooter className="absolute bottom-0 z-10 bg-black/40 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex items-center flex-grow gap-2">
            <div className="flex flex-col gap-1">
              <p className="text-left text-tiny text-white/60">Tech Stack</p>
              <div className="flex flex-row gap-2">
                <Chip
                  color="default"
                  variant="dot"
                  size="sm"
                  classNames={{
                    base: "text-white",
                  }}
                >
                  Next.js
                </Chip>
                <Chip
                  color="primary"
                  variant="dot"
                  size="sm"
                  classNames={{
                    base: "text-white",
                  }}
                >
                  Tailwind CSS
                </Chip>
              </div>
            </div>
          </div>
          <Tooltip content="See more" closeDelay={100}>
            <Button
              isIconOnly
              as={Link}
              href="https://luisbarrososaxofonista.com/"
              target="_blank"
              color="default"
              aria-label="See more"
              radius="full"
              size="sm"
            >
              <ExternalIcon />
            </Button>
          </Tooltip>
        </CardFooter>
      </Card>
    </>
  );
};

export default MusicPortfolioCard;
