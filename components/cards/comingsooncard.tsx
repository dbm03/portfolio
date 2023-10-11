"use client";

import { Card, CardBody } from "@nextui-org/react";

const ComingSoonCard = () => {
  return (
    <Card
      isPressable
      shadow="none"
      classNames={{
        base: "border-dotted border-4 border-black/20 dark:border-white/20",
      }}
    >
      <CardBody className="flex justify-center items-center">
        <h1 className="text-3xl text-center text-black/60 dark:text-white/60">
          Coming Soon...
        </h1>
      </CardBody>
    </Card>
  );
};

export default ComingSoonCard;
