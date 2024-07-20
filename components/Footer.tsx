"use client"
import Link from "next/link"

export const Footer: React.FC<{}> = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="flex flex-col items-center justify-center w-full pt-5 pb-3">
            <div className="flex">
                <span className="text-default-600">David, {currentYear}</span>
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
            </div>
        </footer>
    )
}
