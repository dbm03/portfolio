import dynamic from "next/dynamic"

const ImmerseGTCard = dynamic(
    () => import("@/components/cards/ImmerseGTCard"),
    { ssr: false }
)

const GreenJournalCard = dynamic(
    () => import("@/components/cards/GreenJournalCard"),
    { ssr: false }
)

const LeagueWrappedCard = dynamic(
    () => import("@/components/cards/leaguewrappedcard"),
    { ssr: false }
)

const MusicPortfolioCard = dynamic(
    () => import("@/components/cards/musicportfoliocard"),
    { ssr: false }
)

const MarioPyScriptCard = dynamic(
    () => import("@/components/cards/mariopyscriptcard"),
    { ssr: false }
)

const ComingSoonCard = dynamic(
    () => import("@/components/cards/comingsooncard"),
    { ssr: false }
)

export default function ProjectsPage() {
    return (
        <section className="grid md:grid-cols-2 md:grid-rows-3 gap-6 md:gap-3">
            <ImmerseGTCard />
            <LeagueWrappedCard />
            <GreenJournalCard />
            <MusicPortfolioCard />
            <MarioPyScriptCard />
            <ComingSoonCard />
        </section>
    )
}
