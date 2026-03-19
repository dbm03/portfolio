"use client";

import { FC } from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";

export interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ className }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLight = !mounted || theme === "light";

  const onChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      type="button"
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      className={`px-px transition-opacity hover:opacity-80 cursor-pointer bg-transparent border-none ${className ?? ""}`}
      onClick={onChange}
    >
      {isLight ? (
        <SunFilledIcon
          className="text-default-foreground dark:text-muted"
          size={24}
        />
      ) : (
        <MoonFilledIcon
          className="text-default-foreground dark:text-muted"
          size={24}
        />
      )}
    </button>
  );
};
