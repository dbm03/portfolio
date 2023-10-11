import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import Link from "next/link";
import clsx from "clsx";
import TabBar from "@/components/tabbar";
import { GithubIcon, VercelLogo } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "bg-background font-sans antialiased selection:bg-secondary-500 box-border",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="flex items-center flex-col h-screen">
            <header className="flex justify-between items-center pt-6 pb-12 w-full max-w-4xl">
              <Link
                href="/"
                className="text-4xl transition-opacity hover:opacity-80"
              >
                db
              </Link>
              <div className="sticky top-0">
                <TabBar />
              </div>
              {/* <a
                className="hover:text-secondary-500 transition-colors duration-100"
                href="https://github.com/barrosodavid/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon />
              </a> */}
              <ThemeSwitch />
            </header>
            <main className="max-w-4xl w-full flex-grow">{children}</main>
            <footer className="w-full flex items-center justify-center flex-col py-3">
              <div className="flex">
                <span className="text-default-600">Powered by&nbsp;</span>
                <Link
                  className="text-primary hover:opacity-80 transition-opacity duration-100"
                  href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                  title="nextui.org homepage"
                >
                  NextUI
                </Link>
                &nbsp;&&nbsp;
                <Link
                  className="text-primary hover:opacity-80 transition-opacity duration-100"
                  href="https://nextjs.org"
                  title="Next.js homepage"
                >
                  Next.js
                </Link>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
