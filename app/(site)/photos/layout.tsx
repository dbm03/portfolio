export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3">
      {children}
    </section>
  );
}
