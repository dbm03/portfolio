"use client"

import { Card, CardFooter, CardHeader, Image } from "@nextui-org/react"
import { useState } from "react"

const GalleryWidget = () => {
    const [imageSrc, setImageSrc] = useState<string>("/img3.jpg")

    return (
        <Card
        shadow="sm"
        className=""
        fullWidth
        classNames={{
          base: "h-full",
        }}
        >
            <CardHeader>
                <h1>Gallery Widget</h1>
            </CardHeader>

            <Image 
                alt="Card background"
                className="z-0 object-cover w-full h-full"
                src={imageSrc}
            />

            <CardFooter className="flex justify-around text-2xl">
                <button onClick={() => setImageSrc("/img1.jpg")}>🌲</button>
                <button onClick={() => setImageSrc("/img2.jpg")}>🏙️</button>
                <button onClick={() => setImageSrc("/img3.jpg")}>📚</button>
            </CardFooter>
        </Card>
    )   
}

export default GalleryWidget