export default function Loading() {
    return (
        <>
            <div className="h-96 md:h-auto col-span-3 row-span-3 bg-content1 rounded-[var(--nextui-radius-large)] animate-skeleton-loader"></div>
            <div className="hidden col-start-6 md:block aspect-square bg-content1 rounded-[var(--nextui-radius-large)] animate-skeleton-loader"></div>
            <div className="hidden col-start-7 md:block aspect-square bg-content1 rounded-[var(--nextui-radius-large)] animate-skeleton-loader"></div>
            <div className="h-48 md:h-auto md:hidden bg-content1 rounded-[var(--nextui-radius-large)] animate-skeleton-loader"></div>
        </>
    )
}
