"use client"

import {
    Button,
    Card,
    CardFooter,
    CardHeader,
    Image,
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    ModalFooter,
    Tooltip,
    useDisclosure,
    Chip,
    Link,
} from "@nextui-org/react"
import { GameController, GithubIcon, RightDownArrow } from "../../icons"
import { useRouter } from "next/navigation"

const MarioPyScriptCard = () => {
    return (
        <>
            <Card
                isFooterBlurred
                isPressable
                as={Link}
                href={"https://barrosodavid.github.io/mariopyscript/"}
                target="_blank"
                className="hover:opacity-90"
                shadow="sm"
                classNames={{
                    base: "bg-black/70",
                }}
            >
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="font-bold uppercase text-tiny text-white/60">
                        Super Mario Bros. Clone
                    </p>
                    <h4 className="font-medium text-white text-large">
                        Mario PyScript
                    </h4>
                </CardHeader>
                <Image
                    width={506}
                    height={380}
                    alt="Card background"
                    className="z-0 object-cover w-full h-full"
                    src="/mariopyscript_card.png"
                />
                <CardFooter className="absolute flex flex-col bottom-0 z-10 bg-black/70 border-t-1 border-default-600 dark:border-default-100">
                    <div className="w-full">
                        <p className="text-left text-tiny text-white/60">
                            Tech Stack
                        </p>
                    </div>
                    <div className="flex flex-1 w-full h-full">
                        <div className="flex max-w-full w-full overflow-x-scroll scrollbar-hide">
                            <div className="flex gap-2 items-end h-full">
                                <Chip
                                    variant="dot"
                                    size="sm"
                                    classNames={{
                                        base: "text-white",
                                        dot: "bg-python",
                                    }}
                                >
                                    Python
                                </Chip>
                                <Chip
                                    color="warning"
                                    variant="dot"
                                    size="sm"
                                    classNames={{
                                        base: "text-white",
                                        dot: "bg-javascript",
                                    }}
                                >
                                    JavaScript
                                </Chip>
                                <Chip
                                    color="danger"
                                    variant="dot"
                                    size="sm"
                                    classNames={{
                                        base: "text-white",
                                    }}
                                >
                                    PyScript
                                </Chip>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Tooltip content="See on GitHub" closeDelay={100}>
                                <Button
                                    isIconOnly
                                    href="https://github.com/dbm03/mariopyscript"
                                    target="_blank"
                                    as={Link}
                                    color="default"
                                    aria-label="Like"
                                    radius="full"
                                    size="sm"
                                >
                                    <GithubIcon />
                                </Button>
                            </Tooltip>
                            <Tooltip content="Play now" closeDelay={100}>
                                <Button
                                    isIconOnly
                                    href="https://barrosodavid.github.io/mariopyscript/"
                                    target="_blank"
                                    as={Link}
                                    color="default"
                                    aria-label="Like"
                                    radius="full"
                                    size="sm"
                                >
                                    <GameController />
                                </Button>
                            </Tooltip>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}

export default MarioPyScriptCard
