"use client";

import { Card, CardBody, CardFooter, Link, Tooltip } from "@nextui-org/react";
import { LinkedinIcon } from "../icons";

const LinkedinCard = () => {
  return (
    <Tooltip content="LinkedIn" closeDelay={100}>
      <Card
        shadow="sm"
        as={Link}
        href="https://www.linkedin.com/in/davidbarrosomurcia/"
        target="_blank"
        className="hover:opacity-90"
        fullWidth
        classNames={{
          base: "h-full bg-[#184ec4]",
        }}
      >
        <CardBody className="text-white flex justify-center pb-0 items-center">
          <LinkedinIcon size={64} />
        </CardBody>
        <CardFooter className="text-white bg-black/20 border-t-1 border-zinc-100/30 z-10 flex justify-center">
          <p className="text-small">David B. M.</p>
        </CardFooter>
      </Card>
    </Tooltip>
  );
};

export default LinkedinCard;
