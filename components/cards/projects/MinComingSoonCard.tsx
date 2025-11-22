// Coming soon without text

"use client";

import { Card, CardBody } from "@heroui/react";

const MinimalComingSoonCard = () => {
  return (
    <Card
      shadow="none"
      classNames={{
        base: "border-dotted border-4 border-black/20 dark:border-white/20 h-full",
      }}
    >
      <CardBody />
    </Card>
  );
};

export default MinimalComingSoonCard;
