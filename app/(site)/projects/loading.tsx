export default function Loading() {
    return (
        <div className="grid md:grid-cols-2 md:grid-rows-3 gap-6 md:gap-3">
            <div className="h-96 bg-content1 rounded-[var(--nextui-radius-large)] animate-skeleton-loader"></div>
            <div className="h-96 bg-content1 rounded-[var(--nextui-radius-large)] animate-skeleton-loader"></div>
            <div className="h-96 bg-content1 rounded-[var(--nextui-radius-large)] animate-skeleton-loader"></div>
            <div className="h-96 bg-content1 rounded-[var(--nextui-radius-large)] animate-skeleton-loader"></div>
            <div className="h-96 bg-content1 rounded-[var(--nextui-radius-large)] animate-skeleton-loader"></div>
            <div className="h-96 bg-content1 rounded-[var(--nextui-radius-large)] animate-skeleton-loader"></div>
        </div>
    )
}
