export default function ParagraphComponent({ className, children }: { className: string, children: React.ReactNode }) {
    return (
        <div className={`${className} font-dm-sans font-normal text-sm lg:text-2xl md:text-xl sm:text-xl leading-8`}>
            {children}
        </div>
    )
}