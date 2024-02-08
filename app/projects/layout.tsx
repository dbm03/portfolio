export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grid md:grid-cols-2 md:grid-rows-3 gap-6 md:gap-3">
      {children}
    </section>
  );
}
