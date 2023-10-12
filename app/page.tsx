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
import ClockWidget from "@/components/widgets/clock";

export default function Home() {
  return (
    <section className="grid grid-cols-7 gap-2 grid-rows-5">
      <div className="col-span-3 row-span-2">
        <SmallAboutCard />
      </div>
      <div className="col-start-7 h-full aspect-square">
        <ClockWidget timeZone="America/New_York" />
      </div>
    </section>
  );
}
