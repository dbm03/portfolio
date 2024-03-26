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
    Link,
    Chip,
} from "@nextui-org/react"
import { RightDownArrow } from "../../icons"

const LeagueWrappedCard = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Card
                as={Link}
                isFooterBlurred
                isPressable
                className="hover:opacity-90"
                onPress={() => onOpen()}
                shadow="sm"
                classNames={{
                    base: "bg-black/70",
                }}
            >
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="font-bold uppercase text-tiny text-white/60">
                        Full Stack Web App
                    </p>
                    <h4 className="font-medium text-white text-large">
                        League Wrapped
                    </h4>
                </CardHeader>
                <Image
                    width={506}
                    height={380}
                    alt="Card background"
                    className="z-0 object-cover w-full h-full"
                    src="/leaguewrapped_cover.png"
                />
                <CardFooter className="absolute bottom-0 z-10 bg-black/40 border-t-1 border-default-600 dark:border-default-100">
                    <div className="flex items-center flex-grow gap-2">
                        <div className="flex flex-col gap-1">
                            <p className="text-left text-tiny text-white/60">
                                Tech Stack
                            </p>
                            <div className="flex flex-row gap-2">
                                <Tooltip
                                    content="Amazon Web Services"
                                    closeDelay={100}
                                >
                                    <Chip
                                        variant="dot"
                                        size="sm"
                                        classNames={{
                                            base: "text-white",
                                            dot: "bg-aws",
                                        }}
                                    >
                                        AWS
                                    </Chip>
                                </Tooltip>
                                <Chip
                                    variant="dot"
                                    size="sm"
                                    classNames={{
                                        base: "text-white",
                                        dot: "bg-white",
                                    }}
                                >
                                    Next.js
                                </Chip>
                                <Chip
                                    color="secondary"
                                    variant="dot"
                                    size="sm"
                                    classNames={{
                                        base: "text-white",
                                        dot: "bg-reactjs",
                                    }}
                                >
                                    React
                                </Chip>
                                <Chip
                                    color="primary"
                                    variant="dot"
                                    size="sm"
                                    classNames={{
                                        base: "text-white",
                                    }}
                                >
                                    Remotion
                                </Chip>
                            </div>
                        </div>
                    </div>
                    <Tooltip content="See more" closeDelay={100}>
                        <Button
                            isIconOnly
                            as={Link}
                            href="https://dotesports.com/league-of-legends/news/fan-creates-league-of-legends-wrapped-summarizing-your-ranked-season"
                            target="_blank"
                            color="default"
                            aria-label="Like"
                            radius="full"
                            size="sm"
                        >
                            <RightDownArrow />
                        </Button>
                    </Tooltip>
                </CardFooter>
            </Card>
            <Modal
                size="5xl"
                isOpen={isOpen}
                onClose={onClose}
                classNames={{
                    base: "",
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                League Wrapped
                            </ModalHeader>
                            <ModalBody>
                                <p>Coming soon...</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="danger"
                                    variant="light"
                                    onPress={onClose}
                                >
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default LeagueWrappedCard
