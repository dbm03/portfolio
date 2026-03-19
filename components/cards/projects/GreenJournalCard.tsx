"use client";

import {
  Button,
  Card,
  Chip,
  Tooltip,
} from "@heroui/react";
import { EyeIcon, GithubIcon } from "../../icons";

const GreenJournalCard = () => {
  return (
    <>
      <Card
        className="hover:opacity-90 shadow-sm bg-black/70 cursor-pointer"
        onClick={() =>
          window.open("https://hackgt-sustainability.vercel.app/", "_blank")
        }
      >
        <Card.Header className="absolute z-10 top-1 flex-col !items-start">
          <p className="font-bold uppercase text-xs text-white/60">
            Hackathon Project
          </p>
          <h4 className="font-medium text-white text-lg">Green Journal</h4>
        </Card.Header>
        <img
          alt="Card background"
          width={506}
          height={380}
          className="z-0 object-cover w-full h-full"
          src="/greenjournal_card.png"
        />
        <Card.Footer className="absolute flex flex-col bottom-0 z-10 bg-black/70 border-t border-default-foreground/20 dark:border-default/40">
          <div className="w-full">
            <p className="text-left text-xs text-white/60">Tech Stack</p>
          </div>
          <div className="flex flex-1 w-full h-full">
            <div className="flex max-w-full w-full overflow-x-scroll scrollbar-hide">
              <div className="flex gap-2 items-end h-full">
                <Chip size="sm" className="text-white whitespace-nowrap gap-1.5">
                  Next.js
                </Chip>
                <Chip size="sm" className="text-white whitespace-nowrap gap-1.5">
                  <span className="inline-block h-2 w-2 rounded-full bg-warning" />
                  Three.js
                </Chip>
                <Chip size="sm" className="text-white whitespace-nowrap gap-1.5">
                  <span className="inline-block h-2 w-2 rounded-full bg-accent" />
                  OpenAI API
                </Chip>
              </div>
            </div>
            <div className="flex justify-end pl-2 gap-2">
              <Tooltip delay={0} closeDelay={100}>
                <Tooltip.Trigger>
                  <a
                    href="https://github.com/dbm03/greenjournal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      isIconOnly
                      aria-label="Like"
                      className="rounded-full"
                      size="sm"
                    >
                      <GithubIcon />
                    </Button>
                  </a>
                </Tooltip.Trigger>
                <Tooltip.Content>See on GitHub</Tooltip.Content>
              </Tooltip>
              <Tooltip delay={0} closeDelay={100}>
                <Tooltip.Trigger>
                  <a
                    href="https://hackgt-sustainability.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      isIconOnly
                      aria-label="See more"
                      className="rounded-full"
                      size="sm"
                    >
                      <EyeIcon />
                    </Button>
                  </a>
                </Tooltip.Trigger>
                <Tooltip.Content>View Live</Tooltip.Content>
              </Tooltip>
            </div>
          </div>
        </Card.Footer>
      </Card>
    </>
  );
};

export default GreenJournalCard;
