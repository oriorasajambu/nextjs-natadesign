import Link from 'next/link';
import dynamic from 'next/dynamic';

const AlbumComponent = dynamic(() => import('@/components/common/AlbumComponent'));
const SubtitleComponent = dynamic(() => import('@/components/common/SubtitleComponent'), { ssr: false });

interface ProjectsSectionProps {
    titleClass?: string,
    showButton: Boolean,
    paddingTop?: string,
    paddingBot?: string,
    extraClassName?: string;
}

export default function ProjectsSection({ props }: { props: ProjectsSectionProps }) {
    return (
        <div className={`bg-[#FFFBF2] w-full flex flex-row justify-center ${props.paddingTop} ${props.paddingBot} ${props.extraClassName}`}>
            <div className='lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0'>
                <div className="grid grid-col-1">
                    <SubtitleComponent subTitle='Project Terbaru' className={`${props.titleClass}`} />
                    <AlbumComponent props={{ api: `${process.env.BASE_URL + 'api/albums/3'}` }} />
                    <Link aria-label='See Our Portofolio' href='/portofolio' className={`${props.showButton ? '' : 'hidden'} border-2 border-[#707070] text-center mt-6 py-6 text-partial font-dm-sans font-bold lg:text-xl text-base`}>
                        Selengkapnya
                    </Link>
                </div>
            </div>
        </div>
    )
}
