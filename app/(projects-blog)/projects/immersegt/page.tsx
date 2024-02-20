// ImmerseGT 2024 Event Platform project explaining article

import { IconArrowReturnLeft } from "@/components/icons"
import Image from "next/image"
import Link from "next/link"
import ImmerseGTPhoto from "@/public/immersegt_card.png"

const ImmerseGT = () => {
    return (
        <>
            <nav className="md:hidden mb-6">
                <ul className="flex flex-col">
                    <li>
                        <Link className="flex text-lg hover:opacity-80 transition-opacity text-default-500 items-center gap-1 px-2 py-1 max-w-fit" href="/projects">
                            <IconArrowReturnLeft size={24} />
                            <span>Projects</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <nav className="hidden md:block w-40 pr-8 fixed top-0 translate-x-[-430px] translate-y-32">
                <ul className="flex flex-col gap-1">
                    <li>
                        <Link className="text-default-500 hover:opacity-80 transition-opacity underline flex items-center gap-1" href="/projects">
                            <span>Projects</span>
                            <IconArrowReturnLeft size={16} />
                        </Link>

                    </li>
                    <div className="h-6"></div>

                    <li>
                        <Link className="text-default-500 hover:opacity-80 transition-opacity" href="#immersegt">
                            ImmerseGT
                        </Link>
                    </li>
                    <li>
                        <Link className="text-default-500 hover:opacity-80 transition-opacity" href="#about">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
            <section className="max-w-[80ch] flex flex-col gap-4 px-2">
                <header id="immersegt">
                    <h1 className="text-xl font-semibold text-white">
                        ImmerseGT 2024 Event Platform
                    </h1>
                    <div className="flex items-center gap-2 animate-pulse">
                        <div className="w-2 h-2 rounded-full bg-danger" />
                        <span className="text-white text-sm">WIP</span>
                    </div>
                </header>
                <figure>
                    <Image
                        className="rounded-s"
                        alt="Screenshot of ImmerseGT event platform"
                        src={ImmerseGTPhoto}
                        placeholder="blur"
                    />
                    <figcaption className="text-small py-2 text-white/60">
                        Screenshot of ImmerseGT event platform
                    </figcaption>
                </figure>
                <article id="about" className="flex flex-col gap-2">
                    <h2 className="text-xl"
                    >
                        About</h2>
                    <p className="text-medium text-pretty">
                        This project is currently in progress with an estimated completion date of March 1st. The 2024 ImmerseGT hackathon will be held in April.
                    </p>
                    <p className="text-medium text-pretty">
                        ImmerseGT is a hackathon hosted by the GTXR club and Startup Exchange at Georgia Tech. Participants can enter into various XR / virtual reality-based categories for a chance to win up to $20,000 in prizes.
                    </p>
                    <p className="text-medium text-pretty">
                        The hackathon was first held in 2023, and the organizers were looking to have a virtual platform developed to better run the hackathon in 2024. The goal was for the new platform to help participants register for the hackathon, form teams, see the event schedule, submit projects, and more as a one stop shop for the hackathon.
                    </p>
                </article>
                <footer>
                    <a href="https://immersegt.io/" target="_blank" rel="noopener noreferrer">
                        <span>View Live</span>
                    </a>
                </footer>
            </section>
        </>
    )
}

export default ImmerseGT