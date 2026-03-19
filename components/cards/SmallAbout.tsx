'use client';

import { Avatar, Card, Link } from '@heroui/react';
import NextLink from 'next/link';

const SmallAboutCard = () => {
  return (
    <Card className="shadow-sm w-full h-full p-2">
      <Card.Header className="flex gap-3">
        <Avatar className="ring-2 ring-background" size="lg">
          <Avatar.Image src="/profile.webp" alt="David Barroso" />
          <Avatar.Fallback>DB</Avatar.Fallback>
        </Avatar>

        <div className="flex flex-col">
          <p className="text-xl">David Barroso</p>
          <p className="text-muted text-sm">
            Frotend Software Engineer @{' '}
            <Link
              href="https://nhost.io"
              className="text-muted underline text-sm"
              rel="noopener noreferrer"
              target="_blank"
            >
              Nhost
            </Link>
          </p>
        </div>
      </Card.Header>
      <Card.Content className="flex gap-2">
        <p className="text-pretty">
          Software engineer and Computer Science graduate from UC3M. Previously
          exchange student in Canada at UWaterloo and in the US at Georgia Tech.
        </p>
        <p className="text-pretty">
          Passionate about front-end engineering, AI, user-experience, and{' '}
          <span>
            <NextLink className="text-foreground underline" href="/photos">
              photography
            </NextLink>
          </span>
          .
        </p>
        <p className="text-pretty">
          Feel free to explore{' '}
          <span>
            <NextLink className="text-foreground underline" href="/projects">
              my projects
            </NextLink>
          </span>{' '}
          and{' '}
          <span>
            <NextLink className="text-foreground underline" href="/contact">
              get in touch!
            </NextLink>
          </span>
        </p>
      </Card.Content>
    </Card>
  );
};

export default SmallAboutCard;
