'use client';

import {
  Card,
  Link,
  Separator,
} from "@heroui/react";
import { NhostLogo } from '../icons';

export default function WorkExperienceCard() {
  return (
    <>
      <Card className="shadow-sm w-full max-h-full h-full p-2">
        <Card.Header className="flex flex-col items-start gap-3">
          <h1 className="pt-1 text-xl">Work Experience</h1>
        </Card.Header>
        <Card.Content className="flex flex-col justify-between gap-4 lg:flex-row">
          <div className="flex flex-col justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-nhost">
                <NhostLogo size={18} />
              </div>
              <p>
                <Link
                  href="https://nhost.io"
                  className="text-lg text-foreground underline"
                  rel="noopener noreferrer"
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
                <p className="text-sm text-muted">
                  (10/2024 - Present)
                </p>
              </div>
              <Separator />
              <div>
                <p className="text-lg lg:whitespace-nowrap">
                  Frontend Development Intern{' '}
                </p>
                <p className="text-sm text-muted">
                  (05/2024 - 09/2024)
                </p>
              </div>
            </div>
            <div>
              <Link
                href="https://nhost.io"
                className="text-sm text-muted underline"
                rel="noopener noreferrer"
                target="_blank"
              >
                nhost.io
              </Link>
            </div>
          </div>
          <div className="flex min-w-full max-w-lg justify-center rounded-md md:min-w-0">
            <img
              alt="Nhost Landing page Screenshot"
              src="/nhost-screenshot.png"
              className="rounded-lg"
            />
          </div>
        </Card.Content>
      </Card>
    </>
  );
}
