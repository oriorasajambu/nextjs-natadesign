import Image from 'next/image';
import Sample1 from '../../../public/assets/images/sample1.webp';
import Sample2 from '../../../public/assets/images/sample2.webp';
import Sample3 from '../../../public/assets/images/sample3.webp';
import CircleBackground from '../../../public/assets/images/bg-circle.svg'
import dynamic from 'next/dynamic';
const DividerXComponent = dynamic(() => import('@/components/common/DividerXComponent'), { ssr: false });

export default function ProjectStatSection() {
    return (
        <div className="bg-[#FFFBF2] pb-20 flex flex-row justify-center">
            <div className='lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0'>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col w-full gap-6 lg:gap-12">
                        <div className="flex flex-col lg:flex-row md:flex-row sm:flex-row xs:flex-row justify-around xs:justify-between">
                            <div className="flex flex-col items-center mb-4">
                                <h2 className="text-primary font-dm-sans font-bold text-2xl lg:text-[80px] md:text-5xl sm:text-5xl leading-none">100+</h2>
                                <p className="text-partial text-center font-dm-sans lg:text-2xl md:text-2xl sm:text-base xs:text-sm">Proyek telah <br />
                                    terselesaikan.</p>
                            </div>
                            <div className="flex flex-col items-center mb-4">
                                <h2 className="text-primary font-dm-sans font-bold text-2xl lg:text-[80px] md:text-5xl sm:text-5xl leading-none">16640</h2>
                                <p className="text-partial text-center font-dm-sans lg:text-2xl md:text-2xl sm:text-base xs:text-sm">Jam kerja <br /> terlewati.
                                </p>
                            </div>
                            <div className="flex flex-col items-center mb-4">
                                <h2 className="text-primary font-dm-sans font-bold text-2xl lg:text-[80px] md:text-5xl sm:text-5xl leading-none">97%</h2>
                                <p className="text-partial text-center font-dm-sans lg:text-2xl md:text-2xl sm:text-base xs:text-sm">Klien sangat <br /> puas.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 xs:grid-cols-1 gap-4 justify-between lg:mb-14 mb-7">
                            <div className="flex flex-col basis-[31%] justify-center">
                                <div className="aspect-square bg-no-repeat bg-cover bg-center p-6 xs:p-0"
                                    style={{ backgroundImage: `url(${CircleBackground.src})` }}>
                                    <div className="flex justify-center items-center w-full h-full relative">
                                        <Image fill className="aspect-square max-w-full h-auto" placeholder='blur' blurDataURL='data:image/webp;base64,UklGRpYCAABXRUJQVlA4WAoAAAAgAAAAWAAAWAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggqAAAAJAGAJ0BKlkAWQA/cZ7GWbu0qKOwGAuLcC4JZwDMHBb/rl4ktRB+uwPaHl8vH/0GEKwNbLBrnNps33yWfNgA/uwCq/dcB7erkChk2iRQ9DmgOF9G2DuhSrZe2Vl6/P7+BwewnVwPuc8KeTQdWVVtEEiMiAIcNlbDd6aJuwqt/kj1H/C25ndjUk7JfNEL9oboMSxxYc9WLPQ+eQiwmRM91Pxz3P4c8AAAAA==' src={Sample1.src} alt="" />
                                    </div>
                                </div>
                                <h2 className="uppercase text-partial font-play-serif font-bold text-center lg:text-4xl md:text-2xl sm:text-2xl xs:text-xl mt-5 mb-7">Restoran
                                </h2>
                                <DividerXComponent />
                            </div>
                            <div className="flex flex-col basis-[31%] justify-center">
                                <div className="aspect-square bg-no-repeat bg-cover bg-center p-6 xs:p-0"
                                    style={{ backgroundImage: `url(${CircleBackground.src})` }}>
                                    <div className="flex justify-center items-center w-full h-full relative">
                                        <Image fill className="aspect-square max-w-full h-auto" placeholder='blur' blurDataURL='data:image/webp;base64,UklGRpQCAABXRUJQVlA4WAoAAAAgAAAAWAAAWAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggpgAAALAGAJ0BKlkAWQA/cazHW7u4MaQqtqyrcC4JZwb4G3gBq3RxCjpshwP4z6UBdv+m7x2k32QWRXfqqAbf7wWAAP63d32BvBbYaSd/DIOBAqKcli/j7v8tRQr4aGDSl+3lq2ZYZQpLztQwIRVK6HVf1ja//vbXgyduO3fq2YpSje0bJgWLcd6Gy+jOiG2yOyI1jUvhuitsoGWKPZ6RJdFAo2ZLyxKAAAA=' src={Sample2.src} alt="" />
                                    </div>
                                </div>
                                <h2 className="uppercase text-partial font-play-serif font-bold text-center lg:text-4xl md:text-2xl sm:text-2xl xs:text-xl mt-5 mb-7">Coffe Shop
                                </h2>
                                <DividerXComponent />
                            </div>
                            <div className="flex flex-col basis-[31%] justify-center">
                                <div className="aspect-square bg-no-repeat bg-cover bg-center p-6 xs:p-0"
                                    style={{ backgroundImage: `url(${CircleBackground.src})` }}>
                                    <div className="flex justify-center items-center w-full h-full relative">
                                        <Image fill className="aspect-square max-w-full h-auto" placeholder='blur' blurDataURL='data:image/webp;base64,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' src={Sample3.src} alt="" />
                                    </div>
                                </div>
                                <h2 className="uppercase text-partial font-play-serif font-bold text-center lg:text-4xl md:text-2xl sm:text-2xl xs:text-xl mt-5 mb-7">Cafe</h2>
                                <DividerXComponent />
                            </div>
                        </div>
                        <p className="text-partial font-dm-sans font-normal lg:text-2xl md:text-2xl sm:text-2xl self-center text-center">Telah menyelesaikan
                            lebih dari 100
                            proyek desain café, coffee shop, dan restoran di seluruh
                            Indonesia.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}