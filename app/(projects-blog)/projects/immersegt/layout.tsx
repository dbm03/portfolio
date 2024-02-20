import { IconArrowReturnLeft } from "@/components/icons"
import Link from "next/link"

export default function ImmerseGTLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="w-full flex flex-col md:flex-row justify-center">
            {children}
        </section>
    )
}

