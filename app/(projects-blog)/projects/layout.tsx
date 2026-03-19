import Link from 'next/link';
import { IconArrowReturnLeft } from '@/components/icons';

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <div className="w-full max-w-[80ch]">
        <nav className="mb-6">
          <ul className="flex flex-col">
            <li>
              <Link
                className="flex max-w-fit items-center gap-1 px-2 py-1 text-default-500 text-lg transition-opacity hover:opacity-80"
                href="/projects"
              >
                <IconArrowReturnLeft size={24} />
                <span>Projects</span>
              </Link>
            </li>
          </ul>
        </nav>
        <article className="prose prose-neutral dark:prose-invert max-w-[80ch] px-2 pb-16">
          {children}
        </article>
      </div>
    </section>
  );
}
