import PhotoCard from "@/components/cards/PhotoCard"
import Colorado from "@/public/colorado.jpg"
import Boston from "@/public/boston.jpeg"
import Atlanta from "@/public/atl.jpeg"
import Moher from "@/public/moher.jpeg"
import Madrid from "@/public/mad.jpeg"
import Temple from "@/public/temple.jpg"

export default function AboutPage() {
    return (
        // <>
        //     <div className="col-span-4 h-48">
        //         <ComingSoonCard />
        //     </div>
        //     <div className="col-span-2 h-48">
        //         <MinimalComingSoonCard />
        //     </div>
        //     <div className="">
        //         <MinimalComingSoonCard />
        //     </div>
        //     <div className="">
        //         <MinimalComingSoonCard />
        //     </div>
        // </>
<>
        <div className="">
            <PhotoCard
                src={Colorado}
                alt="Colorado Grand Canyon mountains"
                title="Grand Canyon, AZ"
                style={{
                    objectFit: "cover",
                }}
            />
        </div>
        <div className="">
            <PhotoCard
                src={Atlanta}
                alt="Atlanta skyline"
                title="Atlanta, GA"
                style={{
                    objectFit: "contain",
                }}
            />
        </div>
        <div className="">
            <PhotoCard
                src={Moher}
                alt="Cliffs of Moher"
                title="Cliffs of Moher, Ireland"
                style={{
                    objectFit: "cover",
                }}
            />
        </div>
        <div className="">
            <PhotoCard
                src={Boston}
                alt="Boston skyline, long exposure"
                title="Boston, MA"
                style={{
                    objectFit: "cover",
                    objectPosition: "63% 50%",
                }}
            />
        </div>
        <div className="">
            <PhotoCard
                src={Madrid}
                alt="Madrid street view"
                title="Madrid, Spain"
                style={{
                    objectFit: "cover",
                }}
            />
        </div>
        <div className="">
            <PhotoCard
                src={Temple}
                alt="Templo de Debod, Madrid"
                title="Madrid, Spain"
                style={{
                    objectFit: "cover",
                }}
            />
        </div>
        </>
    )
}
