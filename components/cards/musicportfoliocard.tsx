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
} from "@nextui-org/react";
import { RightDownArrow } from "../icons";

const MusicPortfolioCard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card isFooterBlurred isPressable onPress={() => onOpen()} shadow="sm">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Business website
          </p>
          <h4 className="text-white font-medium text-large">
            Musician portfolio
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="/musicportfolio_card.png"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col gap-1">
              <p className="text-tiny text-white/60 text-left">Tech Stack</p>
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
              color="default"
              aria-label="Like"
              radius="full"
              size="sm"
            >
              <RightDownArrow />
            </Button>
          </Tooltip>
        </CardFooter>
      </Card>
      <Modal
        size="5xl"
        isOpen={isOpen}
        onClose={onClose}
        classNames={{
          base: "",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Musician Portfolio
              </ModalHeader>
              <ModalBody>
                <p>Coming soon...</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default MusicPortfolioCard;
