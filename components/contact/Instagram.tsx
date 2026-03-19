"use client";

import { Card, Tooltip } from "@heroui/react";
import { InstagramIcon } from "../icons";

const InstagramCard = () => {
  return (
    <Tooltip delay={0} closeDelay={100}>
      <Tooltip.Trigger>
        <a
          href="https://www.instagram.com/barrosodavid23/"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:opacity-90 w-full h-full"
        >
          <Card className="bg-insta-gradient shadow-sm w-full h-full">
            <Card.Content className="text-white flex justify-center pb-0 items-center">
              <InstagramIcon size={64} />
            </Card.Content>
            <Card.Footer className="text-white bg-black/20 border-t border-zinc-100/50 z-10 flex justify-center">
              <p className="text-sm">@barrosodavid23</p>
            </Card.Footer>
          </Card>
        </a>
      </Tooltip.Trigger>
      <Tooltip.Content>Instagram</Tooltip.Content>
    </Tooltip>
  );
};

export default InstagramCard;
