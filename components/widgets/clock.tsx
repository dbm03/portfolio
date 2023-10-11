"use client";

import { Card } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

const ClockWidget = () => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Card shadow="sm">
      <Clock
        value={value}
        renderMinuteMarks={false}
        renderHourMarks={false}
        size={80}
      />
    </Card>
  );
};

export default ClockWidget;
