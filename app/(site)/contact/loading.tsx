export default function Loading() {
  return (
    <>
      <div className="col-span-3 row-span-3 h-96 animate-skeleton-loader rounded-[var(--heroui-radius-large)] bg-content1 md:h-auto"></div>
      <div className="col-start-6 hidden aspect-square animate-skeleton-loader rounded-[var(--heroui-radius-large)] bg-content1 md:block"></div>
      <div className="col-start-7 hidden aspect-square animate-skeleton-loader rounded-[var(--heroui-radius-large)] bg-content1 md:block"></div>
      <div className="h-48 animate-skeleton-loader rounded-[var(--heroui-radius-large)] bg-content1 md:hidden md:h-auto"></div>
    </>
  );
}
