export default function Loading() {
  return (
    <>
      <div className="h-48 col-span-4 bg-content1 rounded-[var(--heroui-radius-large)] animate-skeleton-loader"></div>
      <div className="h-48 col-span-2 bg-content1 rounded-[var(--heroui-radius-large)] animate-skeleton-loader"></div>
      <div className="bg-content1 rounded-[var(--heroui-radius-large)] animate-skeleton-loader"></div>
      <div className="bg-content1 rounded-[var(--heroui-radius-large)] animate-skeleton-loader"></div>
    </>
  );
}
