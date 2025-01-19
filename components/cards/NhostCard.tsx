"use client";

import {
  Card,
  CardFooter,
  CardHeader,
  Image,
  Link,
  CardBody,
} from "@nextui-org/react";
import { NhostLogo } from "../icons";

export default function NhostCard() {
  return (
    <>
      <Card
        shadow="sm"
        fullWidth
        classNames={{
          base: "max-h-full h-full p-2",
        }}
      >
        <CardHeader className="flex flex-col gap-3 items-start">
          <h1 className="text-xl pt-1">Work Experience</h1>
        </CardHeader>
        <CardBody className="flex flex-col lg:flex-row gap-4 justify-between">
          <div className="flex flex-col justify-between">
            <div className="flex gap-2 items-center">
              <div className="bg-nhost rounded-full w-8 h-8 flex justify-center items-center">
                <NhostLogo size={18} />
              </div>
              <p>
                <Link
                  href="https://nhost.io"
                  className="text-lg text-foreground underline"
                  referrerPolicy="no-referrer"
                  target="_blank"
                >
                  Nhost
                </Link>
              </p>
            </div>
            <div className="flex flex-col flex-1 gap-3">
              <div>
                <p className="text-lg lg:whitespace-nowrap">
                  Frontend Software Engineer
                </p>
                <p className="text-small text-default-500">
                  (10/2024 - Present)
                </p>
              </div>
              <div>
                <p className="text-lg lg:whitespace-nowrap">
                  Frontend Development Intern{" "}
                </p>
                <p className="text-small text-default-500">
                  (05/2024 - 09/2024)
                </p>
              </div>
            </div>
            <div>
              <Link
                href="https://nhost.io"
                className="text-default-500 text-small underline"
                referrerPolicy="no-referrer"
                target="_blank"
              >
                nhost.io
              </Link>
            </div>
          </div>
          <div className="flex justify-center rounded-md max-w-lg min-w-full md:min-w-0">
            <Image
              alt="Nhost Landing page Screenshot"
              src="/nhost-screenshot.png"
            />
          </div>
        </CardBody>
      </Card>
    </>
  );
}
