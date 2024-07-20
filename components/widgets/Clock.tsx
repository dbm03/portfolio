"use client";

import { useEffect, useMemo, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

// Timezone string from https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
const getUTCDateForTimezone = (timeZone: string | undefined): Date => {
  if (!timeZone) return new Date();

  const format = new Intl.DateTimeFormat("sv-se", {
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
  result.setMilliseconds(date.getMilliseconds()); // Seconds are the same in both timezones, but not included in the format

  return result;
};

const getTimeZoneDate = (timeZone: string): Date => {
  // Get a local ISO 8601 string for a given time zone.
  const date = new Date();
  let iso = date
    .toLocaleString("sv-se", { timeZone, hour12: false })
    .replace(", ", "T");

  // Include the milliseconds from the original timestamp
  iso += "." + date.getMilliseconds().toString().padStart(3, "0");

  // Lie to the Date object constructor that it's a UTC time.
  const lie = new Date(iso + "Z");
  return lie;
};

interface ClockWidgetProps {
  clockTimezone?: string;
  text?: string;
}

const ClockWidget = ({ clockTimezone, text }: ClockWidgetProps) => {
  const [value, setValue] = useState(getUTCDateForTimezone(clockTimezone));

  const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const diffHours: string = useMemo(() => {
    if (!clockTimezone) return "+0HRS";
    const localDate = getTimeZoneDate(localTimezone);
    const timeZoneDate = getTimeZoneDate(clockTimezone);
    const hoursDiff = Math.round(-(+localDate - +timeZoneDate) / 3600 / 1000);
    return hoursDiff < 0 ? `${hoursDiff}HRS` : `+${hoursDiff}HRS`; // Format as +XHRS or -XHRS
  }, [localTimezone, clockTimezone]);

  const dayText: "Today" | "Tomorrow" | "Yesterday" = useMemo(() => {
    if (!clockTimezone) return "Today";
    const localDate = getTimeZoneDate(localTimezone);

    const date = getTimeZoneDate(clockTimezone);
    let diff = date.getUTCDay() - localDate.getUTCDay();

    diff = diff > 0 ? diff % 5 : diff % -5;

    if (diff === 1) return "Tomorrow";
    if (diff === -1) return "Yesterday";
    if (diff === 0) return "Today";

    // unknown day difference
    return "Today";
  }, [localTimezone, clockTimezone]);

  useEffect(() => {
    const interval = setInterval(
      () => setValue(getUTCDateForTimezone(clockTimezone)),
      1000,
    );

    return () => {
      clearInterval(interval);
    };
  }, [clockTimezone]);

  return (
    <div className="flex flex-col items-center h-full p-2 justify-center gap-3">
      <Clock
        value={value}
        renderMinuteMarks={false}
        renderHourMarks={false}
        size={80}
        // useMillisecondPrecision
      />
      <div className="flex flex-col pt-2 leading-tight text-center gap-1">
        <p>{text}</p>
        <p className="text-default-400">{dayText}</p>
        <p className="text-default-400">{diffHours}</p>
      </div>
    </div>
  );
};

export default ClockWidget;
