"use client";

import { Card, CardBody, CardFooter, Link, Tooltip } from "@nextui-org/react";
import { DocumentIcon } from "../icons";

const ResumeCard = () => {
  return (
    <Tooltip content="Resume" closeDelay={100}>
        <Card
        shadow="sm"
        as={Link}
        href="/David_s_ResumeWeb.pdf"
        target="_blank"
        className="hover:opacity-90"
        fullWidth
        classNames={{
          base: "h-full",
        }}
      >
        <CardBody className="text-white bg-[#f20f00] flex justify-center items-center pb-0">
          <DocumentIcon size={64} />
        </CardBody>
        <CardFooter className="text-white bg-[#f20f00] flex justify-center">
          <p className="text-small">Resume</p>
        </CardFooter>
      </Card>
    </Tooltip>
  );
};

export default ResumeCard;
