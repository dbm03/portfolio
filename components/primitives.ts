import clsx from "clsx";

export function title({
  color,
  size = "md",
  fullWidth,
}: {
  color?: "violet" | "yellow" | "blue" | "cyan" | "green" | "pink" | "foreground";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
} = {}) {
  const sizeClasses = {
    sm: "text-3xl lg:text-4xl",
    md: "text-[2.3rem] lg:text-5xl leading-9",
    lg: "text-4xl lg:text-6xl",
  };

  const colorClasses: Record<string, string> = {
    violet: "from-[#FF1CF7] to-[#b249f8]",
    yellow: "from-[#FF705B] to-[#FFB457]",
    blue: "from-[#5EA2EF] to-[#0072F5]",
    cyan: "from-[#00b7fa] to-[#01cfea]",
    green: "from-[#6FEE8D] to-[#17c964]",
    pink: "from-[#FF72E1] to-[#F54C7A]",
    foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
  };

  return clsx(
    "tracking-tight inline font-semibold",
    sizeClasses[size],
    fullWidth && "w-full block",
    color && colorClasses[color],
    color && "bg-clip-text text-transparent bg-gradient-to-b",
  );
}

export function subtitle({ fullWidth = true }: { fullWidth?: boolean } = {}) {
  return clsx(
    "w-full md:w-1/2 my-2 text-lg lg:text-xl text-muted block max-w-full",
    fullWidth && "!w-full",
  );
}
