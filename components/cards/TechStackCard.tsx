import { Card, CardBody, CardHeader, Chip } from "@nextui-org/react";

const TechStackCard = () => {
    return (
        <Card
            shadow="sm"
            fullWidth
            classNames={{
                base: "h-full p-2",
            }}
        >
            <CardHeader>
                <h1 className="text-xl pt-1">
                    Tech Stack
                </h1>
            </CardHeader>

            <CardBody className="flex gap-4 pt-0">
                <div>
                    <h2 className="leading-loose">Programming languages</h2>
                    <div className="flex flex-wrap gap-1">
                        <Chip
                            variant="dot"
                            size="sm"
                            classNames={{
                                dot: "bg-typescript"
                            }}
                        >
                            TypeScript
                        </Chip>
                        <Chip
                            variant="dot"
                            size="sm"
                            classNames={{
                                dot: "bg-javascript"
                            }}
                        >
                            JavaScript
                        </Chip>
                        <Chip
                            variant="dot"
                            size="sm"
                            classNames={{
                                dot: "bg-python"
                            }}
                        >
                            Python
                        </Chip>
                        <Chip
                            variant="dot"
                            size="sm"
                            classNames={{
                                dot: "bg-java"
                            }}
                        >
                            Java
                        </Chip>
                    </div>
                </div>
                <div>
                    <h2 className="leading-loose">Front-end</h2>
                    <div className="flex flex-wrap gap-1">
                        <Chip
                            variant="dot"
                            size="sm"
                            classNames={{
                                dot: "bg-reactjs"
                            }}
                        >
                            React
                        </Chip>
                        <Chip
                            variant="dot"
                            size="sm"
                            classNames={{
                                dot: "bg-reactjs"
                            }}
                        >
                            React Native
                        </Chip>
                        <Chip
                            variant="dot"
                            size="sm"
                            classNames={{
                                dot: "bg-black dark:bg-white"
                            }}
                        >
                            Next.js
                        </Chip>
                        <Chip
                            variant="dot"
                            size="sm"
                            classNames={{
                                dot: "bg-html"
                            }}
                        >
                            HTML
                        </Chip>
                        <Chip
                            variant="dot"
                            size="sm"
                            classNames={{
                                dot: "bg-css"
                            }}
                        >
                            CSS
                        </Chip>
                    </div>
                </div>
                <div>
                    <h2 className="leading-loose">Back-end</h2>
                    <div className="flex flex-wrap gap-1">
                        <Chip
                            variant="dot"
                            size="sm"
                            classNames={{
                                dot: "bg-nodejs"
                            }}
                        >
                            Node.js
                        </Chip>
                        <Chip

                            variant="dot"
                            size="sm"
                            classNames={{
                                dot: "bg-supabase"
                            }}
                        >
                            Supabase
                        </Chip>
                        <Chip
                            variant="dot"
                            size="sm"
                            classNames={{
                                dot: "bg-firebase"
                            }}
                        >
                            SQL 
                        </Chip>
                        <Chip
                            variant="dot"
                            size="sm"
                            classNames={{
                                dot: "bg-aws"
                            }}
                        >
                            AWS
                        </Chip>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default TechStackCard;
