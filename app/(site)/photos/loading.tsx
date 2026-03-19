export default function Loading() {
  return (
    <>
      <div className="h-48 col-span-4 bg-surface rounded-lg animate-skeleton-loader"></div>
      <div className="h-48 col-span-2 bg-surface rounded-lg animate-skeleton-loader"></div>
      <div className="bg-surface rounded-lg animate-skeleton-loader"></div>
      <div className="bg-surface rounded-lg animate-skeleton-loader"></div>
    </>
  );
}
