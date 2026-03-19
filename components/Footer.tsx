'use client';
import { Card, Link } from '@heroui/react';
import { GithubIcon, InstagramIcon, LinkedinIcon } from './icons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Card
      as="footer"
      shadow="sm"
      fullWidth
      classNames={{
        base: 'h-full',
      }}
      className="my-3 mb-6 flex w-full max-w-5xl flex-grow flex-col items-center justify-center p-5"
    >
      <div className="w-full gap-2 md:grid md:grid-cols-2">
        <div className="flex flex-col justify-between">
          <span className="text-default-600">David Barroso Murcia</span>
          <div className="flex flex-col gap-2 pb-4 md:pb-0">
            <Link
              href="/"
              className="hidden w-16 text-4xl text-black transition-opacity hover:opacity-80 md:block dark:text-white"
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
            <h3 className="pb-2 font-semibold text-default-600 text-xl">
              Browse
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/" className="text-default-500 underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/photos" className="text-default-500 underline">
                  Photos
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-default-500 underline">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-default-500 underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="pb-2 font-semibold text-default-600 text-xl">
              Socials
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="https://linkedin.com/in/davidbarrosomurcia/"
                  className="gap-x-1 text-default-500 underline"
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
                  className="gap-x-1 text-default-500 underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <GithubIcon size={16} /> GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com/barrosodavid23"
                  className="gap-x-1 text-default-500 underline"
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
