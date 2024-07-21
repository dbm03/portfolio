"use client";
import { Card, Link } from "@nextui-org/react";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "./icons";

export const Footer: React.FC<{}> = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Card
      as="footer"
      shadow="sm"
      fullWidth
      classNames={{
        base: "h-full",
      }}
      className="flex-grow max-w-5xl my-3 mb-6 flex flex-col items-center justify-center w-full p-5"
    >
      <div className="md:grid md:grid-cols-2 gap-2 w-full ">
        <div className="flex flex-col justify-between">
          <span className="text-default-600">David Barroso Murcia</span>
          <div className="flex flex-col gap-2 pb-4 md:pb-0">
            <Link
              href="/"
              className="hidden w-16 text-black dark:text-white  text-4xl transition-opacity md:block hover:opacity-80"
            >
              db
            </Link>
            <div>
              <p className="text-default-500">{currentYear} Portfolio</p>
              <p className="text-default-500 leading-none">Madrid, ES</p>
            </div>
          </div>
        </div>
        <div className="flex justify-around gap-4">
          <div>
            <h3 className="text-default-600 pb-2 font-semibold text-xl">
              Browse
            </h3>
            <ul className="gap-2 flex flex-col">
              <li>
                <Link href="/" className="text-default-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/photos" className="text-default-500">
                  Photos
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-default-500">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-default-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-default-600 pb-2 font-semibold text-xl">
              Socials
            </h3>
            <ul className="gap-2 flex flex-col">
              <li>
                <Link
                  href="linkedin.com/in/david-barroso-murcia"
                  className="text-default-500 gap-x-1"
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
                  className="text-default-500 gap-x-1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <GithubIcon size={16} /> GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com/barrosodavid23"
                  className="text-default-500 gap-x-1"
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
      {/* <span className="text-default-600">Powered by&nbsp;</span>
                <Link
                    className="transition-opacity duration-100 text-primary hover:opacity-80"
                    href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                    title="nextui.org homepage"
                >
                    NextUI
                </Link>
                &nbsp;&&nbsp;
                <Link
                    className="transition-opacity duration-100 text-secondary hover:opacity-80"
                    href="https://nextjs.org"
                    target="_blank"
                    title="Next.js homepage"
                >
                    Next.js
                </Link> */}
    </Card>
  );
};
