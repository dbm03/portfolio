import { Footer } from '@/components/Footer';
import { GithubIcon } from '@/components/icons';
import { ThemeSwitch } from '@/components/theme-switch';
import { fontSans } from '@/config/fonts';
import { siteConfig } from '@/config/site';
import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import clsx from 'clsx';
import { Metadata } from 'next';
import Link from 'next/link';
import { Toaster } from 'sonner';
import { Providers } from '../providers';

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL('https://davidbarroso.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://davidbarroso.dev',
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: 'https://davidbarroso.dev/og-image.png',
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
          'box-border scroll-smooth bg-transparent font-sans antialiased selection:bg-secondary-300',
          fontSans.variable,
        )}
      >
        <Providers
          themeProps={{
            attribute: 'class',
            defaultTheme: 'dark',
            children,
          }}
        >
          <Toaster richColors theme={'system'} />{' '}
          {/* Component where toasts will be rendered */}
          <div className="absolute top-0 z-[-2] h-screen w-screen max-w-full overflow-hidden bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-black dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          <div className="flex min-h-screen flex-col items-center">
            <header className="flex w-full max-w-5xl items-center justify-center px-4 pb-12 pt-6 md:justify-between lg:px-0">
              <Link
                href="/"
                className="hidden w-16 text-4xl transition-opacity hover:opacity-80 md:block"
              >
                db
              </Link>
              <div className="h-[52px]"></div>
              <div className="hidden w-16 items-center justify-end gap-3 md:flex">
                <Link
                  className="text-default-800 transition-opacity duration-100 hover:opacity-80 dark:text-default-500"
                  href="https://github.com/dbm03/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon />
                </Link>
                <ThemeSwitch />
              </div>
            </header>
            <main className="w-full max-w-5xl flex-grow px-4 lg:px-0">
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
