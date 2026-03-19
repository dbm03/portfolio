"use client";

import {
  Button,
  Card,
  Chip,
  Tooltip,
} from "@heroui/react";
import { RightDownArrow } from "../../icons";
import { useRouter } from "next/navigation";

const LeagueWrappedCard = () => {
  const router = useRouter();
  return (
    <>
      <Card
        className="hover:opacity-90 shadow-sm bg-black/70 cursor-pointer"
        onClick={() => router.push("/projects/league-wrapped")}
      >
        <Card.Header className="absolute z-10 top-1 flex-col !items-start">
          <p className="font-bold uppercase text-xs text-white/60">
            Full Stack Web App
          </p>
          <h4 className="font-medium text-white text-lg">League Wrapped</h4>
        </Card.Header>
        <img
          width={506}
          height={380}
          alt="Card background"
          className="z-0 object-cover w-full h-full"
          src="/leaguewrapped_cover.png"
        />
        <Card.Footer className="absolute flex flex-col bottom-0 z-10 bg-black/70 border-t border-default-foreground/20 dark:border-default/40 backdrop-blur-md">
          <div className="w-full">
            <p className="text-left text-xs text-white/60">Tech Stack</p>
          </div>
          <div className="flex flex-1 w-full h-full">
            <div className="flex max-w-full w-full overflow-x-scroll scrollbar-hide">
              <div className="flex gap-2 items-end h-full">
                <Tooltip delay={0} closeDelay={100}>
                  <Tooltip.Trigger>
                    <Chip size="sm" className="text-white gap-1.5">
                      <span className="inline-block h-2 w-2 rounded-full bg-aws" />
                      AWS
                    </Chip>
                  </Tooltip.Trigger>
                  <Tooltip.Content>Amazon Web Services</Tooltip.Content>
                </Tooltip>
                <Chip size="sm" className="text-white gap-1.5">
                  <span className="inline-block h-2 w-2 rounded-full bg-white" />
                  Next.js
                </Chip>
                <Chip size="sm" className="text-white gap-1.5">
                  <span className="inline-block h-2 w-2 rounded-full bg-reactjs" />
                  React
                </Chip>
                <Chip size="sm" className="text-white gap-1.5">
                  <span className="inline-block h-2 w-2 rounded-full bg-accent" />
                  Remotion
                </Chip>
              </div>
            </div>
            <Tooltip delay={0} closeDelay={100}>
              <Tooltip.Trigger>
                <a
                  href="https://dotesports.com/league-of-legends/news/fan-creates-league-of-legends-wrapped-summarizing-your-ranked-season"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    isIconOnly
                    aria-label="Like"
                    className="rounded-full"
                    size="sm"
                  >
                    <RightDownArrow />
                  </Button>
                </a>
              </Tooltip.Trigger>
              <Tooltip.Content>See more</Tooltip.Content>
            </Tooltip>
          </div>
        </Card.Footer>
      </Card>
    </>
  );
};

export default LeagueWrappedCard;
