"use client";

import { Card, CardBody, CardFooter, Link, Tooltip } from "@nextui-org/react";
import { GithubIcon } from "../icons";

const GithubCard = () => {
  return (
    <Tooltip content="GitHub" closeDelay={100}>
      <Card
        shadow="sm"
        as={Link}
        href="https://github.com/barrosodavid"
        target="_blank"
        className="hover:opacity-90"
        fullWidth
        classNames={{
          base: "h-full",
        }}
      >
        <CardBody className="flex text-white bg-zinc-800 items-center justify-center pb-0">
          <GithubIcon size={64} />
        </CardBody>
        <CardFooter className="flex text-white bg-zinc-800 justify-center">
          <p className="text-small">@barrosodavid</p>
        </CardFooter>
      </Card>
    </Tooltip>
  );
};

export default GithubCard;
