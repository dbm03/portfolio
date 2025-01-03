import "@/styles/globals.css";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "../providers";
import clsx from "clsx";
import { GithubIcon } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { Toaster } from "sonner";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://davidbarroso.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://davidbarroso.dev",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: "https://davidbarroso.dev/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
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
          "bg-transparent scroll-smooth font-sans antialiased selection:bg-secondary-300 box-border",
          fontSans.variable,
        )}
      >
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "system",
            enableSystem: true,
            children,
          }}
        >
          <Toaster richColors theme={"system"} />{" "}
          {/* Component where toasts will be rendered */}
          <div className="absolute top-0 z-[-2] h-screen w-screen max-w-full overflow-hidden bg-white dark:bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          <div className="flex flex-col items-center min-h-screen">
            <header className="flex items-center justify-center w-full max-w-5xl px-4 pt-6 pb-12 lg:px-0 md:justify-between">
              <Link
                href="/"
                className="hidden w-16 text-4xl transition-opacity md:block hover:opacity-80"
              >
                db
              </Link>
              <div className="h-[52px]"></div>
              <div className="items-center justify-end hidden w-16 gap-3 md:flex">
                <Link
                  className="transition-opacity duration-100 text-default-800 dark:text-default-500 hover:opacity-80"
                  href="https://github.com/dbm03/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon />
                </Link>
                <ThemeSwitch />
              </div>
            </header>
            <main className="flex-grow w-full max-w-5xl px-4 lg:px-0">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
