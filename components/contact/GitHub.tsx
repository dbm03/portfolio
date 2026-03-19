"use client";

import { Card, Tooltip } from "@heroui/react";
import { GithubIcon } from "../icons";

const GithubCard = () => {
  return (
    <Tooltip delay={0} closeDelay={100}>
      <Tooltip.Trigger>
        <a
          href="https://github.com/dbm03"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:opacity-90 w-full h-full"
        >
          <Card className="bg-zinc-800 shadow-sm w-full h-full">
            <Card.Content className="flex text-white items-center justify-center pb-0">
              <GithubIcon size={64} />
            </Card.Content>
            <Card.Footer className="text-white bg-black/20 border-t border-zinc-500/50 z-10 flex justify-center">
              <p className="text-sm">@dbm03</p>
            </Card.Footer>
          </Card>
        </a>
      </Tooltip.Trigger>
      <Tooltip.Content>GitHub</Tooltip.Content>
    </Tooltip>
  );
};

export default GithubCard;
