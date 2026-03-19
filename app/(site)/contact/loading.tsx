export default function Loading() {
  return (
    <>
      <div className="h-96 md:h-auto col-span-3 row-span-3 bg-surface rounded-lg animate-skeleton-loader"></div>
      <div className="hidden col-start-6 md:block aspect-square bg-surface rounded-lg animate-skeleton-loader"></div>
      <div className="hidden col-start-7 md:block aspect-square bg-surface rounded-lg animate-skeleton-loader"></div>
      <div className="h-48 md:h-auto md:hidden bg-surface rounded-lg animate-skeleton-loader"></div>
    </>
  );
}
