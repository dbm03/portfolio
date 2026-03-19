'use client';

import { Card, CardBody, CardFooter, Link, Tooltip } from '@heroui/react';
import { useEffect, useState } from 'react';
import { DocumentIcon } from '../icons';

const ResumeCard = () => {
  const [isNA, setIsNA] = useState(true);

  useEffect(() => {
    const detectRegion = () => {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      if (timeZone.startsWith('America') || timeZone.startsWith('Canada')) {
        setIsNA(true);
      } else {
        setIsNA(false);
      }
    };

    detectRegion();
  }, []);

  const linkHref = isNA ? '/David_s_ResumeWeb.pdf' : '/David_s_CVWeb.pdf';
  const linkText = isNA ? 'Resume' : 'CV';

  return (
    <Tooltip content="Resume" closeDelay={100}>
      <Card
        shadow="sm"
        as={Link}
        href={linkHref}
        target="_blank"
        className="bg-[#f20f00] hover:opacity-90"
        fullWidth
        classNames={{
          base: 'h-full',
        }}
      >
        <CardBody className="flex items-center justify-center pb-0 text-white">
          <DocumentIcon size={64} />
        </CardBody>
        <CardFooter className="bottom-0 z-10 flex justify-center border-zinc-100/50 border-t-1 bg-black/20 text-white">
          <p className="text-small">{linkText}</p>
        </CardFooter>
      </Card>
    </Tooltip>
  );
};

export default ResumeCard;
