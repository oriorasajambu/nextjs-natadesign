import Date from '@/components/common/DateComponent';
import Image from 'next/image';
import Link from 'next/link';
import { ArticleModel } from '@/model/props';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import dynamic from 'next/dynamic';

const ArticleSection = dynamic(() => import('@/components/ArticleSection'));
const ProjectsSection = dynamic(() => import('@/components/ProjectsSection'));
const VerticalAlbumComponent = dynamic(() => import('@/components/common/VerticalAlbumComponent'));
const VerticalArticleComponent = dynamic(() => import('@/components/common/VerticalArticleComponent'));
const DividerXComponent = dynamic(() => import('@/components/common/DividerXComponent'), { ssr: false });
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ContentSection() {
    const { query: { slug } } = useRouter();
    const { data, isLoading, error } = useSWR<ArticleModel>(`${process.env.BASE_URL + 'api/articles/get/' + slug}`, fetcher);
    if (isLoading) return <></>
    if (error) return <></>
    if (!data) return <></>
    return (
        <>
            <div className='w-full flex flex-row justify-center lg:pb-20 pb-10 bg-[#FFFBF2]'>
                <div className='lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0'>
                    <div className='flex flex-row sm:flex-col xs:flex-col gap-[1px] bg-primary mt-20'>
                        <div className='lg:basis-2/3 md:basis-2/3 flex-1 lg:pr-12 md:pr-12 pr-0 bg-[#FFFBF2] flex flex-col'>
                            <div className='flex flex-row justify-between items-center mb-20'>
                                <h1 className='text-primary font-dm-sans font-bold text-4xl lg:text-[48px] md:text-5xl leading-tight'>{data.title}</h1>
                            </div>
                            <div className='w-full aspect-square relative mb-12'>
                                <Image priority={true} src={data.thumbnail_url} fill alt={data.title} />
                            </div>
                            <DividerXComponent />
                            <div className='flex flex-row justify-between my-7 items-center'>
                                <p className='text-partial text-xs font-dm-sans font-bold mr-1'>Ditulis Oleh {data.author} <Date props={{ date: data.published_at, class: "text-partial font-dm-sans font-bold text-xs" }} /></p>
                                <div className='flex flex-row ml-auto items-center'>
                                    <p className='text-partial font-dm-sans font-bold text-base mr-6'>Bagikan: </p>
                                    <Link aria-label='Share this post' href="#" className='text-partial font-dm-sans font-bold grow text-end'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="28" viewBox="0 0 25 28">
                                            <g id="Icon_feather-share" data-name="Icon feather-share" transform="translate(0.5 0.5)">
                                                <path id="Path_119" data-name="Path 119" d="M6,18V30a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V18" transform="translate(-6 -6)" fill="none" stroke="#404040" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
                                                <path id="Path_120" data-name="Path 120" d="M24,9,18,3,12,9" transform="translate(-6 -3)" fill="none" stroke="#404040" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
                                                <path id="Path_121" data-name="Path 121" d="M18,3V22.5" transform="translate(-6 -3)" fill="none" stroke="#404040" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
                                            </g>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <DividerXComponent />
                            <p className='mt-12 font-dm-sans text-secondary' style={{ pageBreakBefore: 'always', clear: 'both' }} dangerouslySetInnerHTML={{ __html: data.content }}></p>
                            <div className='mt-12'>
                                <p className='font-dm-sans text-secondary'>Tags: {data.tags}</p>
                                <p className='font-dm-sans text-secondary'>Kategori: {data.category}</p>
                            </div>
                        </div>
                        <div className='lg:flex md:flex sm:hidden xs:hidden basis-1/3 lg:pl-12 md:pl-12 pl-0 flex-col bg-[#FFFBF2]'>
                            <VerticalArticleComponent api={`${process.env.BASE_URL + 'api/articles/category/ulasan-media/3'}`} title="Ulasan Media" />
                            <Link href={'/media'} aria-label='See More Media Review' className="font-dm-sans text-partial">Selengkapnya</Link>
                            <VerticalAlbumComponent api={`${process.env.BASE_URL + 'api/albums/3'}`} />
                            <Link href={'/portofolio'} aria-label='See More Our Portofolio' className="font-dm-sans text-partial">Selengkapnya</Link>
                        </div>
                    </div>
                </div>
            </div>
            <ProjectsSection props={{
                titleClass: 'text-primary text-start leading-none',
                showButton: true,
                paddingTop: 'lg:pt-10 md:pt-10 sm:pt-10 xs:pt-10',
                paddingBot: 'lg:pb-20 md:pb-20 sm:pb-20 xs:pb-20',
                extraClassName: 'hidden sm:flex xs:flex',
            }} />
            <ArticleSection props={{
                api: `${process.env.BASE_URL + 'api/articles/category/ulasan-media/3'}`,
                pathName: '/media',
                title: 'Ulasan Media',
                className: 'hidden sm:flex xs:flex'
            }} />
        </>

    )
}


