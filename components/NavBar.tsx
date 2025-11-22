'use client';

import { Tab, Tabs } from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavBar: React.FC = () => {
  const pathname = usePathname();
  const selected = pathname === '/' ? 'home' : pathname.replace('/', '');

  return (
    <Tabs
      aria-label="Navbar"
      classNames={{
        base: '',
        tabList:
          'shadow-sm p-2 bg-default-100/75 backdrop-blur-sm flex items-center justify-center sticky',
      }}
      selectedKey={selected}
      radius="full"
      size="lg"
    >
      <Tab as={Link} key="home" title="Home" href={'/'} />
      <Tab as={Link} key="photos" title="Photos" href={'/photos'} />
      <Tab
        as={Link}
        key="projects"
        title={
          <div className="flex items-center gap-2">
            <div className={`hidden h-2 w-2 rounded-full bg-danger md:block`} />
            <span>Projects</span>
          </div>
        }
        href="/projects"
      />
      <Tab as={Link} key="contact" title="Contact" href="/contact" />
    </Tabs>
  );
};

export default NavBar;
