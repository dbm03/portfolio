"use client";

import { Card } from "@nextui-org/react";
import "react-clock/dist/Clock.css";
import dynamic from "next/dynamic";
const ClockWidget = dynamic(() => import("@/components/widgets/ClockWidget"), {
  ssr: false,
});

const TimeZoneCard = () => {
  return (
    <Card
      shadow="sm"
      fullWidth
      classNames={{
        base: "flex flex-row py-4 justify-evenly items-center h-full",
      }}
    >
      <ClockWidget clockTimezone="Europe/Madrid" text={"Madrid"} />
      <ClockWidget clockTimezone="America/Toronto" text={"Waterloo, ON"} />
    </Card>
  );
};

export default TimeZoneCard;
