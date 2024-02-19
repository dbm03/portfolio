import SmallAboutCard from "@/components/cards/smallabout";
import RainBackground from "@/components/widgets/rainbackground";
import dynamic from "next/dynamic";
import ComingSoonCard from "@/components/cards/comingsooncard";
import TimezoneCard from "@/components/cards/timezonecard";
import TechStackCard from "@/components/cards/TechStackCard";
import UniCard from "@/components/cards/UniCard";

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

        <div className="flex row-start-3 col-span-11 row-span-2">
          <div className="flex gap-3 flex-col md:flex-row w-full">
            <UniCard backgroundImage="/gt.jpg" 
              backgroundImageAlt="Georgia Tech campus image"
              timestamp="08/2023 - Present"
              title="Study Abroad at"
              name="Georgia Institute of Technology"
              studies="Computer Science"
              imageWidth={1096}
              imageHeight={495}
            />
            <UniCard backgroundImage="/uc3m.jpg"
              backgroundImageAlt="UC3M campus image"
              timestamp="09/2021 - Present"
              title="Bachelor's degree at" 
              name="Universidad Carlos III de Madrid"
              studies="Computer Science and Engineering"
              imageWidth={1000}
              imageHeight={398}
            />
          </div>
        </div>
        <div className="row-start-5 col-start-1 col-span-5 row-span-2">
        </div>
      </section>
  );
}

