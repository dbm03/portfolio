'use client';

import { Avatar, Card, CardBody, CardHeader, Link } from '@heroui/react';

const SmallAboutCard = () => {
  return (
    <Card
      shadow="sm"
      fullWidth
      classNames={{
        base: 'h-full p-2',
      }}
    >
      <CardHeader className="flex gap-3">
        <Avatar isBordered src="profile.webp" size="lg" />

        <div className="flex flex-col">
          <p className="text-xl">David Barroso</p>
          <p className="text-default-500 text-small">
            Frotend Software Engineer @{' '}
            <Link
              href="https://nhost.io"
              className="text-default-500 underline text-small"
              referrerPolicy="no-referrer"
              target="_blank"
            >
              Nhost
            </Link>
          </p>
        </div>
      </CardHeader>
      <CardBody className="flex gap-2">
        <p className="text-pretty">
          Software engineer and Computer Science graduate from UC3M. Previously
          exchange student in Canada at UWaterloo and in the US at Georgia Tech.
        </p>
        <p className="text-pretty">
          Passionate about front-end engineering, AI, user-experience, and{' '}
          <span>
            <Link className="text-foreground underline" href="/photos">
              photography
            </Link>
          </span>
          .
        </p>
        <p className="text-pretty">
          Feel free to explore{' '}
          <span>
            <Link className="text-foreground underline" href="/projects">
              my projects
            </Link>
          </span>{' '}
          and{' '}
          <span>
            <Link className="text-forground underline" href="/contact">
              get in touch!
            </Link>
          </span>
        </p>
      </CardBody>
    </Card>
  );
};

export default SmallAboutCard;
