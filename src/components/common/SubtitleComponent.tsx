export default function SubtitleComponent({ className, subTitle }: { className: string, subTitle?: string }) {
    return (
        <h2
            className={`${className} font-play-serif font-bold text-4xl lg:text-[80px] md:text-[64px] sm:text-[64px] leading-tight`}>
            {subTitle}
        </h2>
    )
}
