"use client"
import { useEffect, useRef } from "react"
import RainyDay from "@/lib/rainyday"
import Image from "next/image"
import { Card } from "@nextui-org/react"

const RainBackgroundWidget = () => {
    const ref = useRef(null)

    useEffect(() => {
        const image = ref.current

        var engine = new RainyDay({
            image,
            blur: 30,
            fps: 30,
            position: "absolute",
            left: 0,
            top: 0,

            onInitialized: () => {
                engine.rain(
                    [
                        [3, 3, 0.88],
                        [5, 5, 0.9],
                    ],
                    30
                )
            },
        })
    }, [ref])

    return (
        <Card
            shadow="sm"
            fullWidth
            classNames={{
                base: "h-full relative",
            }}
            isPressable
        >
            <div
                ref={ref}
                className="absolute top-0 left-0 h-full w-full bg-no-repeat bg-center bg-cover overflow-hidden origin-bottom bg-rainy"
            ></div>
        </Card>
    )
}

export default RainBackgroundWidget
