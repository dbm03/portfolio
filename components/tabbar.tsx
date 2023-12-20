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
      as={"nav"}
      aria-label="Navbar"
      classNames={{
        base: "",
        tabList: "shadow-sm p-2 flex items-center justify-center sticky",
      }}
      selectedKey={selected}
      radius="full"
      size="lg"
    >
      <Tab as={Link} key="home" title="Home" href={'/'} />
      <Tab as={Link} key="about" title="About" href={'/about'} />
      <Tab as={Link} key="projects" title="Projects" href='/projects' />
      <Tab as={Link} key="contact" title="Contact" href='/contact' />
    </Tabs>
  );
};

export default TabBar;
