"use client";

import dynamic from "next/dynamic";

const ImmerseGTCard = dynamic(
  () => import("@/components/cards/projects/ImmerseGTCard"),
  { ssr: false },
);

const GreenJournalCard = dynamic(
  () => import("@/components/cards/projects/GreenJournalCard"),
  { ssr: false },
);

const LeagueWrappedCard = dynamic(
  () => import("@/components/cards/projects/LeagueWrappedCard"),
  { ssr: false },
);

const MusicPortfolioCard = dynamic(
  () => import("@/components/cards/projects/MusicPortfolioCard"),
  { ssr: false },
);

const MarioPyScriptCard = dynamic(
  () => import("@/components/cards/projects/MarioPyScriptCard"),
  { ssr: false },
);

const F1DeepDiveCard = dynamic(
  () => import("@/components/cards/projects/F1DeepDiveCard"),
  { ssr: false },
);

export default function ProjectsPage() {
  return (
    <>
      <ImmerseGTCard />
      <F1DeepDiveCard />
      <LeagueWrappedCard />
      <GreenJournalCard />
      <MusicPortfolioCard />
      <MarioPyScriptCard />
    </>
  );
}
