"use client";

import { Tabs, Tab } from "@nextui-org/react";
import { ThemeSwitch } from "./theme-switch";

export const TabBar: React.FC<{}> = () => {
  return (
    <Tabs
      aria-label="Navbar"
      classNames={{
        base: "",
        tabList: "shadow-sm p-2 flex items-center justify-center",
      }}
      radius="full"
      size="lg"
    >
      <Tab key="notes" title="Home" />
      <Tab key="tasks" title="About" />
      <Tab key="files" title="Projects" />
      <Tab key="contact" title="Contact" />
    </Tabs>
  );
};

export default TabBar;
