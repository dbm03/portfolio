"use client";

import {
  Button,
  Card,
  Chip,
  Tooltip,
} from "@heroui/react";
import { GameController, GithubIcon } from "../../icons";

const MarioPyScriptCard = () => {
  return (
    <>
      <Card
        className="hover:opacity-90 shadow-sm bg-black/70 cursor-pointer"
        onClick={() =>
          window.open("https://dbm03.github.io/mariopyscript/", "_blank")
        }
      >
        <Card.Header className="absolute z-10 top-1 flex-col !items-start">
          <p className="font-bold uppercase text-xs text-white/60">
            Super Mario Bros. Clone
          </p>
          <h4 className="font-medium text-white text-lg">Mario PyScript</h4>
        </Card.Header>
        <img
          width={506}
          height={380}
          alt="Card background"
          className="z-0 object-cover w-full h-full"
          src="/mariopyscript_card.png"
        />
        <Card.Footer className="absolute flex flex-col bottom-0 z-10 bg-black/70 border-t border-default-foreground/20 dark:border-default/40">
          <div className="w-full">
            <p className="text-left text-xs text-white/60">Tech Stack</p>
          </div>
          <div className="flex flex-1 w-full h-full">
            <div className="flex max-w-full w-full overflow-x-scroll scrollbar-hide">
              <div className="flex gap-2 items-end h-full">
                <Chip size="sm" className="text-white gap-1.5">
                  <span className="inline-block h-2 w-2 rounded-full bg-python" />
                  Python
                </Chip>
                <Chip size="sm" className="text-white gap-1.5">
                  <span className="inline-block h-2 w-2 rounded-full bg-javascript" />
                  JavaScript
                </Chip>
                <Chip size="sm" className="text-white gap-1.5">
                  <span className="inline-block h-2 w-2 rounded-full bg-danger" />
                  PyScript
                </Chip>
              </div>
            </div>
            <div className="flex gap-2">
              <Tooltip delay={0} closeDelay={100}>
                <Tooltip.Trigger>
                  <a
                    href="https://github.com/dbm03/mariopyscript"
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
                    href="https://dbm03.github.io/mariopyscript/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      isIconOnly
                      aria-label="Like"
                      className="rounded-full"
                      size="sm"
                    >
                      <GameController />
                    </Button>
                  </a>
                </Tooltip.Trigger>
                <Tooltip.Content>Play now</Tooltip.Content>
              </Tooltip>
            </div>
          </div>
        </Card.Footer>
      </Card>
    </>
  );
};

export default MarioPyScriptCard;
