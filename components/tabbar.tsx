"use client";

import { Tabs, Tab } from "@nextui-org/react";
import { ThemeSwitch } from "./theme-switch";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export const TabBar: React.FC<{}> = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [selected, setSelected] = useState<string | number>(
    pathname === "/" ? "home" : pathname.replace("/", "")
  );

  const selectTab = (key: string | number) => {
    setSelected(key);
    if (key === "home") return router.push("/");

    router.push(`/${key}`);
  };

  return (
    <Tabs
      aria-label="Navbar"
      classNames={{
        base: "",
        tabList: "shadow-sm p-2 flex items-center justify-center sticky",
      }}
      selectedKey={selected}
      onSelectionChange={selectTab}
      radius="full"
      size="lg"
    >
      <Tab key="home" title="Home" />
      <Tab key="about" title="About" />
      <Tab key="projects" title="Projects" />
      <Tab key="contact" title="Contact" />
    </Tabs>
  );
};

export default TabBar;
