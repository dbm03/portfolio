export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-6 md:grid-cols-2 md:grid-rows-3 md:gap-3">
      {children}
    </section>
  );
}
