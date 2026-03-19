"use client";

import { Card, Tooltip } from "@heroui/react";
import { DocumentIcon } from "../icons";
import { useEffect, useState } from "react";

const ResumeCard = () => {
  const [isNA, setIsNA] = useState(true);

  useEffect(() => {
    const detectRegion = () => {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      if (timeZone.startsWith("America") || timeZone.startsWith("Canada")) {
        setIsNA(true);
      } else {
        setIsNA(false);
      }
    };

    detectRegion();
  }, []);

  const linkHref = isNA ? "/David_s_ResumeWeb.pdf" : "/David_s_CVWeb.pdf";
  const linkText = isNA ? "Resume" : "CV";

  return (
    <Tooltip delay={0} closeDelay={100}>
      <Tooltip.Trigger>
        <a
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:opacity-90 w-full h-full"
        >
          <Card className="bg-[#f20f00] shadow-sm w-full h-full">
            <Card.Content className="text-white flex justify-center items-center pb-0">
              <DocumentIcon size={64} />
            </Card.Content>
            <Card.Footer className="text-white bg-black/20 border-t bottom-0 border-zinc-100/50 z-10 flex justify-center">
              <p className="text-sm">{linkText}</p>
            </Card.Footer>
          </Card>
        </a>
      </Tooltip.Trigger>
      <Tooltip.Content>Resume</Tooltip.Content>
    </Tooltip>
  );
};

export default ResumeCard;
