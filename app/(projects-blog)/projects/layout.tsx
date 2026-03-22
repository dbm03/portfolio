import Link from 'next/link';
import { IconArrowReturnLeft } from '@/components/icons';

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full px-4 lg:grid lg:grid-cols-[1fr_60ch_1fr] lg:justify-center lg:px-0">
      <nav className="mb-6 lg:hidden">
        <Link
          className="flex items-center gap-1 px-2 py-1 text-default-500 text-lg transition-opacity hover:opacity-80"
          href="/projects"
        >
          <IconArrowReturnLeft size={20} />
          <span>Projects</span>
        </Link>
      </nav>
      <aside className="hidden pr-8 lg:block">
        <nav className="sticky top-28">
          <Link
            className="flex items-center gap-1 text-base text-default-500 transition-opacity hover:opacity-80"
            href="/projects"
          >
            <IconArrowReturnLeft size={20} />
            <span>Projects</span>
          </Link>
        </nav>
      </aside>
      <article className="prose prose-neutral dark:prose-invert max-w-[60ch] pb-16">
        {children}
      </article>
    </section>
  );
}
