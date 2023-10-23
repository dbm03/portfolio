"use client";

import { Card } from "@nextui-org/react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import dynamic from "next/dynamic";
const ClockWidget = dynamic(() => import("@/components/widgets/clock"), {
  ssr: false,
});

const TimezoneCard = () => {
  return (
    <Card
      shadow="sm"
      fullWidth
      classNames={{
        base: "flex flex-row justify-evenly items-center p-2",
      }}
    >
      <ClockWidget clockTimezone="Europe/Madrid" text={"Madrid"} />
      <ClockWidget clockTimezone="America/New_York" text={"Atlanta, GA"} />
    </Card>
  );
};

export default TimezoneCard;
