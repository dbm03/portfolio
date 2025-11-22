'use client';

import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Image,
  Link,
} from "@heroui/react";
import { NhostLogo } from '../icons';

export default function WorkExperienceCard() {
  return (
    <>
      <Card
        shadow="sm"
        fullWidth
        classNames={{
          base: 'max-h-full h-full p-2',
        }}
      >
        <CardHeader className="flex flex-col items-start gap-3">
          <h1 className="pt-1 text-xl">Work Experience</h1>
        </CardHeader>
        <CardBody className="flex flex-col justify-between gap-4 lg:flex-row">
          <div className="flex flex-col justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-nhost">
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
            <div className="flex flex-1 flex-col gap-3">
              <div>
                <p className="text-lg lg:whitespace-nowrap">
                  Frontend Software Engineer
                </p>
                <p className="text-small text-default-500">
                  (10/2024 - Present)
                </p>
              </div>
              <Divider />
              <div>
                <p className="text-lg lg:whitespace-nowrap">
                  Frontend Development Intern{' '}
                </p>
                <p className="text-small text-default-500">
                  (05/2024 - 09/2024)
                </p>
              </div>
            </div>
            <div>
              <Link
                href="https://nhost.io"
                className="text-small text-default-500 underline"
                referrerPolicy="no-referrer"
                target="_blank"
              >
                nhost.io
              </Link>
            </div>
          </div>
          <div className="flex min-w-full max-w-lg justify-center rounded-md md:min-w-0">
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
