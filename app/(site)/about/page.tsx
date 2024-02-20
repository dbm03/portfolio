import ComingSoonCard from "@/components/cards/comingsooncard"
import MinimalComingSoonCard from "@/components/cards/mincomingsooncard"
import StripeCard from "@/components/cards/stripecard"
import { title } from "@/components/primitives"
import { Tabs, Tab } from "@nextui-org/react"

export default function AboutPage() {
    return (
        <>
            <div className="col-span-4 h-48">
                <ComingSoonCard />
            </div>
            <div className="col-span-2 h-48">
                <MinimalComingSoonCard />
            </div>
            <div className="">
                <MinimalComingSoonCard />
            </div>
            <div className="">
                <MinimalComingSoonCard />
            </div>
        </>

        // <div className="col-span-4 row-span-4">
        //     <PhotoCard 
        //         src={Colorado}
        //         alt="Colorado Grand Canyon mountains"
        //         width={1184}
        //         height={1776}
        //         title="Grand Canyon, AZ"
        //         style={{
        //             objectFit: "fill",
        //         }}
        //     />
        // </div>
        // <div className="col-span-7 row-span-3">
        //     <PhotoCard
        //         src={Boston}
        //         alt="Boston skyline"
        //         title="Boston, MA"
        //         width={1531}
        //         height={1021}
        //         style={{
        //             objectFit: "contain",
        //         }}
        //     />
        // </div>
    )
}
