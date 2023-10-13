export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grid md:grid-cols-4 md:grid-rows-2 gap-6 md:gap-3">
      {children}
    </section>
  );
}
