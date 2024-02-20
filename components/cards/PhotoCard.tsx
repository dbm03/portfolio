import { Card, CardFooter } from "@nextui-org/react";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface PhotoCardProps {
    src: string | StaticImport;
    alt: string;
    width: number;
    height: number;
    title: string;
    style?: React.CSSProperties;
}

const PhotoCard = ({
    src,
    alt,
    width,
    height,
    title,
    style,
}: PhotoCardProps) => {
    return (
        <Card
            shadow="sm"
            fullWidth
            classNames={{
                base: "h-full",
            }}
        >
            <Image src={src} alt={alt} width={width} height={height} className="object-cover"
            style={style}
                placeholder="blur"
            />


            <CardFooter className="absolute bottom-0 z-10">
                <div className="flex flex-col gap-1 justify-between h-full pb-4 px-2">
                    <div className="px-2 py-1 text-center max-w-fit text-small text-white rounded-full bg-black/10 backdrop-blur-lg">
                        {title}
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}

export default PhotoCard