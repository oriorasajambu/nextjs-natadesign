import dynamic from 'next/dynamic';
import Link from 'next/link';
const ArticleComponent = dynamic(() => import('@/components/common/ArticleComponent'));
const SubtitleComponent = dynamic(() => import('@/components/common/SubtitleComponent'), { ssr: false });

interface ArticleSectionProps {
    api: string;
    title: string;
    pathName: string;
    className?: string;
}

export default function ArticleSection({ props }: { props: ArticleSectionProps }) {
    return (
        <div className={`bg-[#F2EEE6] py-20 xs:py-10 flex flex-row justify-center ${props.className}`}>
            <div className="lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0">
                <div className="flex flex-col justify-between">
                    <SubtitleComponent subTitle={props.title} className='text-primary' />
                    <ArticleComponent props={{ api: props.api, pathName: props.pathName, paginate: false }} />
                    <Link href={props.pathName} aria-label='See All Articles' className={`border-2 border-[#707070] text-center mt-6 py-6 text-partial font-dm-sans font-bold lg:text-xl text-base`}>Selengkapnya</Link>
                </div>
            </div>
        </div>
    )
}