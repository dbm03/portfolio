// ImmerseGT 2024 Event Platform project explaining article

import { IconArrowReturnLeft } from '@/components/icons';
import ImmerseGTPhoto from '@/public/immersegt_card.png';
import Image from 'next/image';
import Link from 'next/link';

const ImmerseGT = () => {
  return (
    <>
      <nav className="mb-6 lg:hidden">
        <ul className="flex flex-col">
          <li>
            <Link
              className="flex max-w-fit items-center gap-1 px-2 py-1 text-lg text-default-500 transition-opacity hover:opacity-80"
              href="/projects"
            >
              <IconArrowReturnLeft size={24} />
              <span>Projects</span>
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="fixed top-0 hidden w-40 translate-x-[-430px] translate-y-32 pr-8 lg:block">
        <ul className="flex flex-col gap-1">
          <li>
            <Link
              className="flex items-center gap-1 text-default-500 underline transition-opacity hover:opacity-80"
              href="/projects"
            >
              <span>Projects</span>
              <IconArrowReturnLeft size={16} />
            </Link>
          </li>
          <div className="h-6"></div>

          <li>
            <Link
              className="text-default-500 transition-opacity hover:opacity-80"
              href="#immersegt"
            >
              ImmerseGT
            </Link>
          </li>
          <li>
            <Link
              className="text-default-500 transition-opacity hover:opacity-80"
              href="#about"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
      <section className="flex max-w-[80ch] flex-col gap-4 px-2">
        <header id="immersegt">
          <h1 className="text-xl font-semibold text-foreground">
            ImmerseGT 2024 Event Platform
          </h1>
        </header>
        <figure>
          <Image
            className="rounded-md"
            alt="Screenshot of the ImmerseGT event platform"
            src={ImmerseGTPhoto}
            placeholder="blur"
          />
          <figcaption className="py-2 text-white/60 text-small">
            Screenshot of ImmerseGT event platform
          </figcaption>
        </figure>
        <article id="about" className="flex flex-col gap-2">
          <h2 className="text-xl">About</h2>
          <p className="text-pretty text-medium">
            This project is currently in progress with an estimated completion
            date of March 1st. The 2024 ImmerseGT hackathon will be held in
            April.
          </p>
          <p className="text-pretty text-medium">
            ImmerseGT is a hackathon hosted by the GTXR club and Startup
            Exchange at Georgia Tech. Participants can enter into various XR /
            virtual reality-based categories for a chance to win up to $20,000
            in prizes.
          </p>
          <p className="text-pretty text-medium">
            The hackathon was first held in 2023, and the organizers were
            looking to have a virtual platform developed to better run the
            hackathon in 2024. The goal was for the new platform to help
            participants register for the hackathon, form teams, see the event
            schedule, submit projects, and more as a one stop shop for the
            hackathon.
          </p>
        </article>
        <footer>
          <a
            href="https://immersegt.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View Live</span>
          </a>
        </footer>
      </section>
    </>
  );
};

export default ImmerseGT;
