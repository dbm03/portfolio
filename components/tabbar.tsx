"use client";

import { Tabs, Tab } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export const TabBar: React.FC<{}> = () => {
  const pathname = usePathname();
  const [selected, setSelected] = useState<string | number>(
    pathname === "/" ? "home" : pathname.replace("/", "")
  );

  useEffect(() => {
     setSelected(pathname === "/" ? "home" : pathname.replace("/", ""));
  }, [pathname]);

  return (
    <Tabs
      as={"ul"}
      aria-label="Navbar"
      classNames={{
        base: "",
        tabList: "shadow-sm p-2 flex items-center justify-center sticky",
      }}
      selectedKey={selected}
      radius="full"
      size="lg"
    >
        <Tab as={Link} key="home" title="Home" href={'/'} tabIndex={2} />
        <Tab as={Link} key="about" title="About" href={'/about'} tabIndex={3} />
        <Tab as={Link} key="projects" title={
          <div className="flex items-center gap-2">
            <div className={`hidden md:block w-2 h-2 rounded-full bg-danger`} />
            <span>Projects</span>
          </div>
        } href='/projects' tabIndex={4} />
        <Tab as={Link} key="contact" title="Contact" href='/contact' tabIndex={5} />
    </Tabs>
  );
};

export default TabBar;
