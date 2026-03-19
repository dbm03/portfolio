import { Card } from "@heroui/react";
import type {
  StaticImport,
  StaticImageData,
} from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface PhotoCardProps {
  src: StaticImageData | StaticImport;
  alt: string;
  title: string;
  style?: React.CSSProperties;
}

const PhotoCard = ({ src, alt, title, style }: PhotoCardProps) => {
  return (
    <Card className="shadow-sm w-full h-full group">
      <Image
        src={src}
        alt={alt}
        className="object-cover w-full h-full"
        style={style}
        placeholder="blur"
      />

      <Card.Footer className="absolute bottom-0 z-10">
        <div className="flex flex-col gap-1 justify-between h-full pb-4 px-2">
          <div
            className="px-2 py-1 text-center max-w-fit text-sm text-white rounded-full bg-black/10 backdrop-blur-lg
                    group-hover:opacity-50 opacity-100 transition-opacity
                    "
          >
            {title}
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default PhotoCard;
