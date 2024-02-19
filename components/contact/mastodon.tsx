"use client"

import { Card, CardBody, CardFooter, Link, Tooltip } from "@nextui-org/react"
import { MastodonIcon } from "../icons"

const MastodonCard = () => {
    return (
        <Tooltip content="Mastodon" closeDelay={100}>
            <Card
                shadow="sm"
                as={Link}
                href="https://mastodon.social/@davidbarroso"
                target="_blank"
                className="hover:opacity-90"
                fullWidth
                classNames={{
                    base: "h-full",
                }}
            >
                <CardBody className="flex items-center bg-[#5b4be1] justify-center pb-0">
                    <MastodonIcon size={64} />
                </CardBody>
                <CardFooter className="flex bg-[#5b4be1] justify-center">
                    <p className="text-small">davidbarroso</p>
                </CardFooter>
            </Card>
        </Tooltip>
    )
}

export default MastodonCard
