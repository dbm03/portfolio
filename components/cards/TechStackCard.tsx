import { Card, Chip } from '@heroui/react';

const DotChip = ({
  dotColor,
  children,
}: {
  dotColor: string;
  children: React.ReactNode;
}) => (
  <Chip size="sm" className="gap-1.5">
    <span className={`inline-block h-2 w-2 rounded-full ${dotColor}`} />
    {children}
  </Chip>
);

const TechStackCard = () => {
  return (
    <Card className="shadow-sm w-full h-full p-2">
      <Card.Header>
        <h1 className="pt-1 text-xl">Tech Stack</h1>
      </Card.Header>

      <Card.Content className="flex gap-4 pt-0">
        <div>
          <h2 className="leading-loose">Programming languages</h2>
          <div className="flex flex-wrap gap-1">
            <DotChip dotColor="bg-typescript">TypeScript</DotChip>
            <DotChip dotColor="bg-javascript">JavaScript</DotChip>
            <DotChip dotColor="bg-python">Python</DotChip>
            <DotChip dotColor="bg-java">Java</DotChip>
          </div>
        </div>
        <div>
          <h2 className="leading-loose">Front-end</h2>
          <div className="flex flex-wrap gap-1">
            <DotChip dotColor="bg-reactjs">React</DotChip>
            <DotChip dotColor="bg-black dark:bg-white">Next.js</DotChip>
            <DotChip dotColor="bg-reactjs">React Native</DotChip>
            <DotChip dotColor="bg-html">HTML</DotChip>
            <DotChip dotColor="bg-css">CSS</DotChip>
          </div>
        </div>
        <div>
          <h2 className="leading-loose">Back-end</h2>
          <div className="flex flex-wrap gap-1">
            <DotChip dotColor="bg-nodejs">Node.js</DotChip>
            <DotChip dotColor="bg-docker">Docker</DotChip>
            <DotChip dotColor="bg-firebase">SQL</DotChip>
            <DotChip dotColor="bg-aws">AWS</DotChip>
          </div>
        </div>
      </Card.Content>
    </Card>
  );
};

export default TechStackCard;
