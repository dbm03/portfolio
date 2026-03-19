"use client";

import {
  Button,
  Card,
  Chip,
  Tooltip,
} from "@heroui/react";
import { EyeIcon } from "../../icons";

const F1DeepDiveCard = () => {
  return (
    <>
      <Card
        className="hover:opacity-90 shadow-sm bg-black/70 cursor-pointer"
        onClick={() =>
          window.open("https://f1deepdive.streamlit.app/", "_blank")
        }
      >
        <Card.Header className="absolute z-10 top-1 flex-col !items-start">
          <p className="font-bold uppercase text-xs text-white/60">
            Machine Learning Course Final Project
          </p>
          <h4 className="font-medium text-white text-lg">F1 Deep Dive</h4>
        </Card.Header>
        <img
          alt="Card background"
          width={506}
          height={380}
          className="z-0 object-cover w-full h-full"
          src="/f1deepdive_card.png"
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
                  <span className="inline-block h-2 w-2 rounded-full bg-reactjs" />
                  React
                </Chip>
                <Chip size="sm" className="text-white gap-1.5">
                  <span className="inline-block h-2 w-2 rounded-full bg-firebase" />
                  Scikit-learn
                </Chip>
              </div>
            </div>
            <div className="flex gap-2">
              <Tooltip delay={0} closeDelay={100}>
                <Tooltip.Trigger>
                  <a
                    href="https://f1deepdive.streamlit.app/"
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

export default F1DeepDiveCard;
