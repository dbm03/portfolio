export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-6 md:grid md:grid-cols-7 md:grid-rows-3 md:gap-3">
      {children}
    </section>
  );
}
