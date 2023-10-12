"use client";

import { Card } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

// Timezone string from https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
const getUTCDateForTimezone = (timeZone: string | undefined): Date => {
  const format = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  });

  const date = new Date();

  const result = new Date(format.format(date));
  result.setMilliseconds(date.getMilliseconds());

  return result;
};

const ClockWidget = ({ timeZone }: { timeZone?: string }) => {
  const [value, setValue] = useState(getUTCDateForTimezone(timeZone));

  useEffect(() => {
    const interval = setInterval(
      () => setValue(getUTCDateForTimezone(timeZone)),
      1000
    );

    return () => {
      clearInterval(interval);
    };
  }, [timeZone]);

  return (
    <Card
      shadow="sm"
      fullWidth
      classNames={{
        base: "h-full flex justify-evenly items-center p-2",
      }}
    >
      <Clock
        value={value}
        renderMinuteMarks={false}
        renderHourMarks={false}
        size={80}
      />
      <p>Atlanta, GA</p>
    </Card>
  );
};

export default ClockWidget;
