import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Card } from "@nextui-org/react";
import Image from "next/image";
import SmallAboutCard from "@/components/cards/smallabout";
import RainBackground from "@/components/widgets/rainbackground";
import dynamic from "next/dynamic";
import ComingSoonCard from "@/components/cards/comingsooncard";

const ClockWidget = dynamic(() => import("@/components/widgets/clock"), {
  ssr: false,
});

export default function Home() {
  return (
    <section className="flex flex-col gap-6 md:grid md:grid-cols-7 md:grid-rows-5 md:gap-3">
      <div className="col-span-3 row-span-2">
        <SmallAboutCard />
      </div>
      {/* <div className="h-full col-span-2 col-start-5 row-span-2 aspect-square">
        <RainBackground />
      </div> */}
      <div className="col-span-2 row-span-2">
        <ComingSoonCard />
      </div>
      <div className="h-full col-start-6 aspect-square">
        <ClockWidget timeZone="Europe/Madrid" text={"Madrid"} />
      </div>
      <div className="h-full col-start-7 aspect-square">
        <ClockWidget timeZone="America/New_York" text={"Atlanta, GA"} />
      </div>
    </section>
  );
}
