export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grid xs:grid-cols-2 xs:grid-rows-2 gap-6 xs:gap-3">
      {children}
    </section>
  );
}
