import SmallAboutCard from "@/components/cards/SmallAbout";
import ComingSoonCard from "@/components/cards/projects/ComingSoonCard";
import TimezoneCard from "@/components/cards/TimeZoneCard";
import TechStackCard from "@/components/cards/TechStackCard";
import UniCard from "@/components/cards/UniCard";
import NhostCard from "@/components/cards/NhostCard";
import ContributionGraphWidget from "@/components/widgets/ContributionGraph";
import UC3MPicture from "@/public/uc3m.jpg";
import UWaterlooPicture from "@/public/uwaterloo.png";
import GTPicture from "@/public/gt.jpg";

export default function Home() {
  return (
    <section className="flex flex-col gap-6 md:grid md:grid-cols-11 md:grid-rows-9 md:gap-3">
      <div className="col-span-4 row-span-3">
        <SmallAboutCard />
      </div>
      <div className="col-span-4 row-span-3">
        <TechStackCard />
      </div>
      <div className="col-span-3 col-start-9 row-span-3">
        <TimezoneCard />
      </div>
      <div className="row-start-4 col-start-1 col-span-6 row-span-3">
        <NhostCard />
      </div>
      <div className="row-start-4 col-start-7 col-span-5 row-span-3">
        <UniCard
          backgroundImage={UWaterlooPicture}
          backgroundImageAlt="UWaterloo campus image"
          timestamp="08/2024 - 12/2024"
          title="Study Abroad at"
          name="University of Waterloo"
          studies="Computer Science"
        />
      </div>
      <div className="row-start-7 col-start-1 col-span-6 row-span-3">
        <ContributionGraphWidget />
      </div>
      <div className="row-start-7 col-start-7 col-span-5 row-span-3">
        <UniCard
          backgroundImage={GTPicture}
          backgroundImageAlt="Georgia Tech campus image"
          timestamp="08/2023 - 05/2024"
          title="Study Abroad at"
          name="Georgia Institute of Technology"
          studies="Computer Science"
        />
      </div>
      <div className="row-start-10 col-span-6 col-start-1 row-span-3">
        <UniCard
          backgroundImage={UC3MPicture}
          backgroundImageAlt="UC3M campus image"
          timestamp="09/2021 - Present"
          title="Bachelor's degree at"
          name="Universidad Carlos III de Madrid"
          studies="Computer Science and Engineering"
        />
      </div>
      <div className="row-start-10 col-span-5 col-start-7 row-span-3">
        <ComingSoonCard />
      </div>
    </section>
  );
}
