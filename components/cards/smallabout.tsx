"use client";

import {
  Card,
  Image,
  CardHeader,
  CardBody,
  Link,
  CardFooter,
  Avatar,
} from "@nextui-org/react";

const SmallAboutCard = () => {
  return (
    <Card
      shadow="sm"
      fullWidth
      classNames={{
        base: "h-full",
      }}
    >
      <CardHeader className="flex gap-3">
        <Avatar isBordered src="profile.webp" size="lg" />

        <div className="flex flex-col">
          <p className="text-md">David Barroso</p>
          <p className="text-small text-default-500">Madrid, Spain</p>
        </div>
      </CardHeader>
      <CardBody>
        <p>
          Frontend Developer and exchange student in the US at Georgia Tech. I strive to bring
          cultures together through seamless and user-centric design.
        </p>
        <p>Feel free to explore my projects and get in touch!</p>
      </CardBody>
    </Card>
  );
};

export default SmallAboutCard;
