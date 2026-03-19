export default function ImmerseGTLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex w-full flex-col items-center justify-center lg:flex-row">
      {children}
    </section>
  );
}
