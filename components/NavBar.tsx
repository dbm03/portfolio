'use client';

import { Tabs } from '@heroui/react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

export const NavBar: React.FC = () => {
  const pathname = usePathname();
  const selected = pathname === '/' ? 'home' : pathname.replace('/', '');

  const tabs = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'photos', label: 'Photos', href: '/photos' },
    {
      id: 'projects',
      label: (
        <div className="flex items-center gap-2">
          <div className="hidden h-2 w-2 rounded-full bg-danger md:block" />
          <span>Projects</span>
        </div>
      ),
      href: '/projects',
    },
    { id: 'contact', label: 'Contact', href: '/contact' },
  ];

  return (
    <Tabs selectedKey={selected}>
      <Tabs.ListContainer>
        <Tabs.List
          aria-label="Navbar"
          className="shadow-sm p-2 bg-default/75 backdrop-blur-sm flex items-center justify-center sticky rounded-full"
        >
          {tabs.map((tab) => (
            <Tabs.Tab key={tab.id} id={tab.id}>
              <NextLink href={tab.href} className="no-underline text-inherit">
                {tab.label}
              </NextLink>
              <Tabs.Indicator />
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs.ListContainer>
    </Tabs>
  );
};

export default NavBar;
