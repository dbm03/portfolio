import ContributionGraphCard from '@/components/cards/ContributionGraphCard';
import ComingSoonCard from '@/components/cards/projects/ComingSoonCard';
import SmallAboutCard from '@/components/cards/SmallAbout';
import TechStackCard from '@/components/cards/TechStackCard';
import TimezoneCard from '@/components/cards/TimeZoneCard';
import UniCard from '@/components/cards/UniCard';
import WorkExperienceCard from '@/components/cards/WorkExperienceCard';
import GTPicture from '@/public/gt.jpg';
import UC3MPicture from '@/public/uc3m.jpg';
import UWaterlooPicture from '@/public/uwaterloo.png';

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
      <div className="col-span-6 col-start-1 row-span-3 row-start-4">
        <WorkExperienceCard />
      </div>
      <div className="col-span-5 col-start-7 row-span-3 row-start-4">
        <UniCard
          backgroundImage={UWaterlooPicture}
          backgroundImageAlt="UWaterloo campus image"
          timestamp="08/2024 - 12/2024"
          title="Study Abroad at"
          name="University of Waterloo"
          studies="Computer Science"
        />
      </div>
      <div className="col-span-6 col-start-1 row-span-3 row-start-7">
        <ContributionGraphCard />
      </div>
      <div className="col-span-5 col-start-7 row-span-3 row-start-7">
        <UniCard
          backgroundImage={GTPicture}
          backgroundImageAlt="Georgia Tech campus image"
          timestamp="08/2023 - 05/2024"
          title="Study Abroad at"
          name="Georgia Institute of Technology"
          studies="Computer Science"
        />
      </div>
      <div className="col-span-6 col-start-1 row-span-3 row-start-10">
        <UniCard
          backgroundImage={UC3MPicture}
          backgroundImageAlt="UC3M campus image"
          timestamp="09/2021 - 05/2025"
          title="Bachelor's degree at"
          name="Universidad Carlos III de Madrid"
          studies="Computer Science and Engineering"
        />
      </div>
      <div className="col-span-5 col-start-7 row-span-3 row-start-10">
        <ComingSoonCard />
      </div>
    </section>
  );
}
