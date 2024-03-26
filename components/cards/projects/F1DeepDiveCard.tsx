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
import { ExternalIcon, EyeIcon, GithubIcon, RightDownArrow } from "../../icons"

const F1DeepDiveCard = () => {
    return (
        <>
            <Card
                as={Link}
                href="https://ml-final-project.streamlit.app/"
                target="_blank"
                isPressable
                className="hover:opacity-90"
                shadow="sm"
                classNames={{
                    base: "bg-black/70",
                }}
            >
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <p className="font-bold uppercase text-tiny text-white/60">
                        Machine Learning Course Final Project
                    </p>
                    <h4 className="font-medium text-white text-large">
                        F1 Deep Dive
                    </h4>
                </CardHeader>
                <Image
                    alt="Card background"
                    width={506}
                    height={380}
                    className="z-0 object-cover w-full h-full"
                    src="/f1deepdive_card.png"
                />
                <CardFooter className="absolute bottom-0 z-10 bg-black/70 border-t-1 border-default-600 dark:border-default-100">
                    <div className="flex items-center flex-grow gap-2">
                        <div className="flex flex-col gap-1">
                            <p className="text-left text-tiny text-white/60">
                                Tech Stack
                            </p>
                            <div className="flex flex-row gap-2">
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
                                        dot: "bg-firebase",
                                    }}
                                >
                                    Scikit-learn
                                </Chip>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Tooltip content="View Live" closeDelay={100}>
                            <Button
                                isIconOnly
                                as={Link}
                                href="https://ml-final-project.streamlit.app/"
                                target="_blank"
                                color="default"
                                aria-label="See more"
                                radius="full"
                                size="sm"
                            >
                                <EyeIcon />
                            </Button>
                        </Tooltip>
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}

export default F1DeepDiveCard
