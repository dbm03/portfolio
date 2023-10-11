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
    <Card shadow="sm">
      <CardHeader className="flex gap-3">
        <Avatar isBordered src="profile.png" size="lg" />

        <div className="flex flex-col">
          <p className="text-md">David Barroso</p>
          <p className="text-small text-default-500">
            Software Developer & Student
          </p>
        </div>
      </CardHeader>
      <CardBody>
        <p></p>
      </CardBody>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SmallAboutCard;
