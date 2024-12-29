"use client";

import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Image,
  Tooltip,
  Chip,
  Link,
} from "@nextui-org/react";
import { EyeIcon } from "../../icons";
import { useRouter } from "next/navigation";

const ImmerseGTCard = () => {
  const router = useRouter();
  return (
    <>
      <Card
        onPress={() => router.push("/projects/immersegt")}
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
          width={506}
          height={380}
          className="z-0 object-cover w-full h-full"
          src="/immersegt_card.png"
        />
        <CardFooter className="absolute flex flex-col bottom-0 z-10 bg-black/40 border-t-1 border-default-600 dark:border-default-100">
          <div className="w-full">
            <p className="text-left text-tiny text-white/60">Tech Stack</p>
          </div>
          <div className="flex flex-1 w-full h-full">
            <div className="flex max-w-full w-full overflow-x-scroll scrollbar-hide">
              <div className="flex gap-2 items-end h-full">
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
                  variant="dot"
                  size="sm"
                  classNames={{
                    base: "text-white",
                    dot: "bg-supabase",
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
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default ImmerseGTCard;
