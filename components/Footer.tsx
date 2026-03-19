"use client";
import { Card, Link } from "@heroui/react";
import NextLink from "next/link";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "./icons";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Card
      className="flex-grow max-w-5xl my-3 mb-6 flex flex-col items-center justify-center w-full p-5 shadow-sm h-full"
    >
      <div className="md:grid md:grid-cols-2 gap-2 w-full ">
        <div className="flex flex-col justify-between">
          <span className="text-muted">David Barroso Murcia</span>
          <div className="flex flex-col gap-2 pb-4 md:pb-0">
            <NextLink
              href="/"
              className="hidden w-16 text-black dark:text-white text-4xl transition-opacity md:block hover:opacity-80 no-underline"
            >
              db
            </NextLink>
            <div>
              <p className="text-muted">{currentYear} Portfolio</p>
              <p className="text-muted leading-none">Madrid, ES</p>
            </div>
          </div>
        </div>
        <div className="flex justify-around gap-4">
          <div>
            <h3 className="text-muted pb-2 font-semibold text-xl">Browse</h3>
            <ul className="gap-2 flex flex-col">
              <li>
                <NextLink href="/" className="text-muted underline">
                  Home
                </NextLink>
              </li>
              <li>
                <NextLink href="/photos" className="text-muted underline">
                  Photos
                </NextLink>
              </li>
              <li>
                <NextLink href="/projects" className="text-muted underline">
                  Projects
                </NextLink>
              </li>
              <li>
                <NextLink href="/contact" className="text-muted underline">
                  Contact
                </NextLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-muted pb-2 font-semibold text-xl">Socials</h3>
            <ul className="gap-2 flex flex-col">
              <li>
                <Link
                  href="https://linkedin.com/in/davidbarrosomurcia/"
                  className="text-muted gap-x-1 underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <LinkedinIcon size={16} />
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/dbm03"
                  className="text-muted gap-x-1 underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <GithubIcon size={16} /> GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com/barrosodavid23"
                  className="text-muted gap-x-1 underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <InstagramIcon size={16} /> Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div></div>
      </div>
    </Card>
  );
};
