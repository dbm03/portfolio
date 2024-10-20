export default function ImmerseGTLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full flex flex-col items-center lg:flex-row justify-center">
      {children}
    </section>
  );
}
