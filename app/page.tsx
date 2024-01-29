import SmallAboutCard from "@/components/cards/smallabout";
import RainBackground from "@/components/widgets/rainbackground";
import dynamic from "next/dynamic";
import ComingSoonCard from "@/components/cards/comingsooncard";
import TimezoneCard from "@/components/cards/timezonecard";
import ContributionGraphWidget from "@/components/cards/contributiongraph";

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
        <div className="col-span-2 col-start-6 row-span-2">
          <TimezoneCard />
        </div>
        <div className="">
          <ContributionGraphWidget />
        </div>
      </section>
  );
}

