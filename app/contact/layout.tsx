export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex justify-center">
      {children}
    </section>
  );
}
