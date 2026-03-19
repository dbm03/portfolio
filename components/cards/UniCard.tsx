import Image from "next/image";

import { Card } from "@heroui/react";
import { StudentIcon } from "../icons";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";

interface UniCardProps {
  timestamp: string;
  title: string;
  name: string;
  studies: string;
  backgroundImage: string | StaticImport;
  backgroundImageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
}

const UniCard = ({
  timestamp,
  title,
  name,
  studies,
  backgroundImage,
  backgroundImageAlt,
  imageWidth,
  imageHeight,
}: UniCardProps) => (
  <>
    <Card className="shadow-sm w-full min-h-[284px] h-full bg-black">
      <Card.Header className="absolute z-10 px-5 top-1 flex-col !items-start">
        <div className="bg-background rounded-full w-8 h-8 flex justify-center items-center">
          <StudentIcon size={20} />
        </div>
      </Card.Header>
      <Image
        width={imageWidth}
        height={imageHeight}
        alt={backgroundImageAlt}
        className="z-0 bg-black opacity-60 dark:opacity-40 object-cover w-full h-full"
        src={backgroundImage}
        placeholder="blur"
      />
      <Card.Footer className="absolute bottom-0 z-10">
        <div className="flex flex-col gap-1 justify-between h-full pb-4 px-2">
          <div className="px-2 py-1 text-center max-w-fit text-sm rounded-full bg-background">
            {timestamp}
          </div>
          <h3 className="text-white">{title}</h3>
          <h2 className="text-white text-balance text-xl font-bold">{name}</h2>
          <h3 className="text-white">{studies}</h3>
        </div>
      </Card.Footer>
    </Card>
  </>
);

export default UniCard;
