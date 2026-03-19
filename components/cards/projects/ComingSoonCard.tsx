"use client";

import { Card } from "@heroui/react";

const ComingSoonCard = () => {
  return (
    <Card className="border-dotted border-4 border-black/20 dark:border-white/20 h-full shadow-none">
      <Card.Content className="flex justify-center items-center">
        <h1 className="text-2xl text-center text-black/60 dark:text-white/60">
          Coming soon...
        </h1>
      </Card.Content>
    </Card>
  );
};

export default ComingSoonCard;
