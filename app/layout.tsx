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
import { Toaster } from "sonner";

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ]
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
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
          "bg-background font-sans antialiased selection:bg-secondary-300 box-border",
          fontSans.variable
        )}
      >
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "system",
            enableSystem: true,
          }}
        >
          <Toaster richColors theme={"system"} /> {/* Component where toasts will be rendered */}
          <div className="flex flex-col items-center h-screen">
            <header className="flex items-center justify-center w-full max-w-4xl px-4 pt-6 pb-12 lg:px-0 md:justify-between">
              <Link
                href="/"
                className="hidden w-16 text-4xl transition-opacity md:block hover:opacity-80"
                tabIndex={1}
              >
                db
              </Link>
              <nav className="sticky top-0">
                <TabBar />
              </nav>
              <div className="items-center justify-end hidden w-16 gap-3 md:flex">
                <Link
                  className="transition-opacity duration-100 text-default-500 hover:opacity-80"
                  href="https://github.com/barrosodavid/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={6}
                >
                  <GithubIcon />
                </Link>
                <ThemeSwitch/>
              </div>
            </header>
            <main className="flex-grow w-full max-w-4xl px-4 lg:px-0">
              {children}
            </main>
            <footer className="flex flex-col items-center justify-center w-full py-3">
              <div className="flex">
                <span className="text-default-600">🚧Under construction🚧</span>
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
                  className="transition-opacity duration-100 text-primary hover:opacity-80"
                  href="https://nextjs.org"
                  title="Next.js homepage"
                >
                  Next.js
                </Link> */}
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
