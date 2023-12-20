"use client"
import ComingSoonCard from "@/components/cards/comingsooncard";
import MinimalComingSoonCard from "@/components/cards/mincomingsooncard";
import StripeCard from "@/components/cards/stripecard";
import { title } from "@/components/primitives";
import { Tabs, Tab } from "@nextui-org/react";

export default function AboutPage() {
  return (
    <>
      <div className="col-span-4 h-48">
        <ComingSoonCard />
      </div>
      <div className="col-span-2 h-48">
        <MinimalComingSoonCard />
      </div>
      <div className="">
        <MinimalComingSoonCard />
      </div>
      <div className="">
        <MinimalComingSoonCard />
      </div>
      <div>
      <Tabs
        aria-label="Navbar"
        classNames={{
          base: "",
          tabList: "shadow-sm p-2 flex items-center justify-center sticky",
        }}
        radius="full"
        size="lg"
      >
        <Tab key="asd" title="Home" href="/about"/>
        <Tab key="aout" title="About" />
        <Tab key="pects" title="Projects" />
        <Tab key="cact" title="Contact" />
      </Tabs>
      </div>
    </>
  );
}
