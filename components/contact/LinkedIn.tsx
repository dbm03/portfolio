"use client";

import { Card, Tooltip } from "@heroui/react";
import { LinkedinIcon } from "../icons";

const LinkedinCard = () => {
  return (
    <Tooltip delay={0} closeDelay={100}>
      <Tooltip.Trigger>
        <a
          href="https://www.linkedin.com/in/davidbarrosomurcia/"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:opacity-90 w-full h-full"
        >
          <Card className="bg-[#184ec4] shadow-sm w-full h-full">
            <Card.Content className="text-white flex justify-center pb-0 items-center">
              <LinkedinIcon size={64} />
            </Card.Content>
            <Card.Footer className="text-white bg-black/20 border-t border-zinc-100/30 z-10 flex justify-center">
              <p className="text-sm">David B. M.</p>
            </Card.Footer>
          </Card>
        </a>
      </Tooltip.Trigger>
      <Tooltip.Content>LinkedIn</Tooltip.Content>
    </Tooltip>
  );
};

export default LinkedinCard;
