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
          base: "h-full",
        }}
      >
        <CardBody className="text-white bg-[#184ec4] flex justify-center pb-0 items-center">
          <LinkedinIcon size={64} />
        </CardBody>
        <CardFooter className="text-white bg-[#184ec4] flex justify-center">
          <p className="text-small">David B. M.</p>
        </CardFooter>
      </Card>
    </Tooltip>
  );
};

export default LinkedinCard;
