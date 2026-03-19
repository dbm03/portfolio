export default function Loading() {
  return (
    <>
      <div className="col-span-4 h-48 animate-skeleton-loader rounded-[var(--heroui-radius-large)] bg-content1"></div>
      <div className="col-span-2 h-48 animate-skeleton-loader rounded-[var(--heroui-radius-large)] bg-content1"></div>
      <div className="animate-skeleton-loader rounded-[var(--heroui-radius-large)] bg-content1"></div>
      <div className="animate-skeleton-loader rounded-[var(--heroui-radius-large)] bg-content1"></div>
    </>
  );
}
