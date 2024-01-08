"use client";

import { Card, CardBody, CardFooter, Link, Tooltip } from "@nextui-org/react";
import { InstagramIcon } from "../icons";

const InstagramCard = () => {
  return (
    <Tooltip content="Instagram" closeDelay={100}>
      <Card
        shadow="sm"
        as={Link}
        href="https://www.instagram.com/barrosodavid23/"
        target="_blank"
        className="hover:opacity-90 bg-insta-gradient"
        fullWidth
        classNames={{
          base: "h-full",
        }}
      >
        <CardBody className="text-white flex justify-center pb-0 items-center">
            <InstagramIcon size={64} />
        </CardBody>
        <CardFooter className="text-white bg-black/20 border-t-1 border-zinc-100/50 z-10 flex justify-center">
            <p className="text-small">@barrosodavid23</p>
        </CardFooter>
      </Card>
    </Tooltip>
  );
};

export default InstagramCard;
