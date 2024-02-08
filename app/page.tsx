import SmallAboutCard from "@/components/cards/smallabout";
import RainBackground from "@/components/widgets/rainbackground";
import dynamic from "next/dynamic";
import ComingSoonCard from "@/components/cards/comingsooncard";
import TimezoneCard from "@/components/cards/timezonecard";
import TechStackCard from "@/components/cards/TechStackCard";

export default function Home() {
  return (
      <section className="flex flex-col gap-6 md:grid md:grid-cols-11 md:grid-rows-5 md:gap-3">
        <div className="col-span-4 row-span-2">
          <SmallAboutCard />
        </div>
        {/* <div className="h-full col-span-2 col-start-5 row-span-2 aspect-square">
        <RainBackground />
      </div> */}
        <div className="col-span-4 row-span-2">
          <TechStackCard />
        </div>
        <div className="col-span-3 col-start-9 row-span-2">
          <TimezoneCard />
        </div>
      </section>
  );
}

