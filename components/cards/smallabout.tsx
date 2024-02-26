"use client"

import {
    Card,
    Image,
    CardHeader,
    CardBody,
    Link,
    CardFooter,
    Avatar,
} from "@nextui-org/react"

const SmallAboutCard = () => {
    return (
        <Card
            shadow="sm"
            fullWidth
            classNames={{
                base: "h-full p-2",
            }}
        >
            <CardHeader className="flex gap-3">
                <Avatar isBordered src="profile.webp" size="lg" />

                <div className="flex flex-col">
                    <p className="text-xl">David Barroso</p>
                    <p className="text-small text-default-500">Madrid, Spain</p>
                </div>
            </CardHeader>
            <CardBody className="flex gap-2">
                <p className="text-pretty">
                    Full-stack developer and exchange student in the US at
                    Georgia Tech.
                </p>
                <p className="text-pretty">
                    Passionate about front-end engineering, AI, user-experience, and <span><Link className="text-foreground underline" href="/photos">photography</Link></span>.
                </p>
                {/*
                <p className="text-pretty">
                    In my free time, I enjoy playing videogames and capturing moments through <span><Link className="text-foreground underline" href="/gallery">photography</Link></span> while traveling.
                </p>
                */}
                <p className="text-pretty">
                    Feel free to explore <span><Link className="text-foreground underline" href="/projects">my projects</Link></span> and <span><Link className="text-forground underline" href="/contact">get in touch!</Link></span>
                </p>

            </CardBody>
        </Card>
    )
}

export default SmallAboutCard
