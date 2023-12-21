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
import { GameController, GithubIcon, RightDownArrow } from "../icons";
import { useRouter } from "next/navigation";

const MarioPyScriptCard = () => {
  return (
    <>
      <Card
        isFooterBlurred
        isPressable
        as={Link}
        href={"https://barrosodavid.github.io/mariopyscript/"}
        target="_blank"
        className="hover:opacity-90"
        shadow="sm"
      >
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="font-bold uppercase text-tiny text-white/60">
            Super Mario Bros. Clone
          </p>
          <h4 className="font-medium text-white text-large">Mario PyScript</h4>
        </CardHeader>
        <Image
          width={442}
          height={331}
          alt="Card background"
          className="z-0 object-cover w-full h-full"
          src="/mariopyscript_card.png"
        />
        <CardFooter className="absolute bottom-0 z-10 bg-black/40 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex items-center flex-grow gap-2">
            <div className="flex flex-col gap-1">
              <p className="text-left text-tiny text-white/60">Tech Stack</p>
              <div className="flex flex-row gap-2">
                <Chip
                  color="primary"
                  variant="dot"
                  size="sm"
                  classNames={{
                    base: "text-white",
                  }}
                >
                  Python
                </Chip>
                <Chip
                  color="warning"
                  variant="dot"
                  size="sm"
                  classNames={{
                    base: "text-white",
                  }}
                >
                  JavaScript
                </Chip>
                <Chip
                  color="danger"
                  variant="dot"
                  size="sm"
                  classNames={{
                    base: "text-white",
                  }}
                >
                  PyScript
                </Chip>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Tooltip content="See on GitHub" closeDelay={100}>
              <Button
                isIconOnly
                href="https://github.com/barrosodavid/mariopyscript"
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
                href="https://barrosodavid.github.io/mariopyscript/"
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
        </CardFooter>
      </Card>
    </>
  );
};

export default MarioPyScriptCard;
