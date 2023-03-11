import useSWR from 'swr';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { AlbumDetailModel } from '@/model/props';
import dynamic from 'next/dynamic';
import ScrollContainer from 'react-indiana-drag-scroll';

const SubtitleComponent = dynamic(() => import('@/components/common/SubtitleComponent'), { ssr: false });
const DividerXComponent = dynamic(() => import('@/components/common/DividerXComponent'), { ssr: false });
const DividerYComponent = dynamic(() => import('@/components/common/DividerYComponent'), { ssr: false });

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function Loading() {
    return (
        <div className='w-full flex flex-row justify-center lg:pb-20 pb-10 bg-[#FFFBF2]'>
            <div className='lg:w-[1200px] md:w-[768px] sm:w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0'>
                <div className='grid grid-flow-row mb-20'>
                    <div className='flex flex-row justify-between items-center py-14'>
                        <SubtitleComponent className='uppercase text-primary' subTitle={''} />
                    </div>
                    <DividerXComponent />
                    <div className='w-full aspect-square mt-12 animate-pulse bg-secondary relative'>
                    </div>
                    <div className='flex flex-row mt-12 justify-between'>
                        <div className='flex flex-row'>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="74.437" height="37.674" viewBox="0 0 74.437 37.674">
                                    <g id="Group_295" data-name="Group 295" transform="translate(74.437 37.674) rotate(180)">
                                        <g id="Rectangle_69" data-name="Rectangle 69" transform="translate(74.437 37.674) rotate(180)" fill="none" stroke="#404040" strokeWidth="1">
                                            <path d="M18.837,0h55.6a0,0,0,0,1,0,0V37.674a0,0,0,0,1,0,0h-55.6A18.837,18.837,0,0,1,0,18.837v0A18.837,18.837,0,0,1,18.837,0Z" stroke="none" />
                                            <path d="M18.837.5h55.1a0,0,0,0,1,0,0V37.174a0,0,0,0,1,0,0h-55.1A18.337,18.337,0,0,1,.5,18.837v0A18.337,18.337,0,0,1,18.837.5Z" fill="none" />
                                        </g>
                                        <g id="Component_7_12" data-name="Component 7 – 12" transform="translate(26 12)">
                                            <path id="Path_19" data-name="Path 19" d="M0,6.837,6.837,0l6.837,6.837" transform="translate(24.437) rotate(90)" fill="none" stroke="#404040" strokeWidth="1" />
                                            <path id="Path_20" data-name="Path 20" d="M1208.8,3931.5h-24.437" transform="translate(-1184.364 -3924.663)" fill="none" stroke="#404040" strokeWidth="1" />
                                        </g>
                                    </g>
                                </svg>
                            </button>
                            <button>
                                <svg id="Group_294" data-name="Group 294" xmlns="http://www.w3.org/2000/svg" width="74.437" height="37.674" viewBox="0 0 74.437 37.674">
                                    <g id="Rectangle_69" data-name="Rectangle 69" transform="translate(74.437 37.674) rotate(180)" fill="none" stroke="#404040" strokeWidth="1">
                                        <path d="M18.837,0h55.6a0,0,0,0,1,0,0V37.674a0,0,0,0,1,0,0h-55.6A18.837,18.837,0,0,1,0,18.837v0A18.837,18.837,0,0,1,18.837,0Z" stroke="none" />
                                        <path d="M18.837.5h55.1a0,0,0,0,1,0,0V37.174a0,0,0,0,1,0,0h-55.1A18.337,18.337,0,0,1,.5,18.837v0A18.337,18.337,0,0,1,18.837.5Z" fill="none" />
                                    </g>
                                    <g id="Component_7_11" data-name="Component 7 – 11" transform="translate(26 12)">
                                        <path id="Path_19" data-name="Path 19" d="M0,6.837,6.837,0l6.837,6.837" transform="translate(24.437) rotate(90)" fill="none" stroke="#404040" strokeWidth="1" />
                                        <path id="Path_20" data-name="Path 20" d="M1208.8,3931.5h-24.437" transform="translate(-1184.364 -3924.663)" fill="none" stroke="#404040" strokeWidth="1" />
                                    </g>
                                </svg>
                            </button>
                        </div>
                        <div className='border border-partial rounded-full py-[10px] px-[20px]'>
                            <div className='font-dm-sans text-partial text-xs'></div>
                        </div>
                    </div>
                </div>
                <DividerXComponent />
                <div className='flex flex-row xs:flex-col w-full items-stretch gap-[1px] relative'>
                    <div className='lg:basis-1/2 md:basis-1/2 sm:basis-1/2 lg:pr-12 md:pr-12 sm:pr-12 xs:pr-0 py-12'>
                        <div className='font-dm-sans text-2xl text-partial'></div>
                    </div>
                    <DividerXComponent className='hidden xs:block' />
                    <DividerYComponent className='block xs:hidden' />
                    <div className='lg:basis-1/2 md:basis-1/2 sm:basis-1/2 lg:pl-12 md:pl-12 sm:pl-12 xs:pl-0 py-12'>
                        <div className='font-dm-sans text-2xl text-partial'></div>
                    </div>
                </div>
                <DividerXComponent />
            </div>
        </div>
    )
}

export default function ContentSection() {
    const { query: { slug } } = useRouter();
    const { data, isLoading, error } = useSWR<AlbumDetailModel>(`${process.env.BASE_URL + 'api/albums/get/' + slug}`, fetcher);
    if (isLoading) return <Loading />
    if (error) return <></>
    if (!data || data.photos.length < 1) return <></>
    return (
        <div className='w-full flex flex-row justify-center lg:pb-20 pb-10 bg-[#FFFBF2]'>
            <div className='lg:w-[1200px] md:w-[768px] sm:w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0'>
                <div className='grid grid-flow-row mb-20 xs:mb-10'>
                    <div className='flex flex-row justify-between items-center pt-14'>
                        <SubtitleComponent className='uppercase text-primary' subTitle={data.title} />
                    </div>
                </div>
                <DividerXComponent />
                <ScrollContainer className="flex gap-6 w-[1600px] select-none py-20 xs:py-10 md:pr-[360px] sm:pr-[620px] xs:pr-[1050px]">
                    {
                        data.photos.map((item, i) => {
                            return (
                                <div key={i} className='lg:h-[550px] md:h-[450px] sm:h-[350px] xs:h-[250px] aspect-square relative'>
                                    <Image src={`${process.env.BASE_URL + item.original}`} fill alt={item.alt} className='select-none' />
                                </div>
                            )
                        })
                    }
                    <div className='lg:h-[550px] md:h-[450px] sm:h-[350px] xs:h-[250px] aspect-square relative'>
                    </div>
                </ScrollContainer>
                <DividerXComponent />
                <div className='flex flex-row xs:flex-col w-full items-stretch gap-[1px] relative'>
                    <div className='lg:basis-1/2 md:basis-1/2 sm:basis-1/2 lg:pr-12 md:pr-12 sm:pr-12 xs:pr-0 py-12'>
                        <p className='font-dm-sans lg:text-2xl md:text-2xl sm:text-xl xs:text-xl text-partial' dangerouslySetInnerHTML={{ __html: data.album_detail }}></p>
                    </div>
                    <DividerXComponent className='hidden xs:block' />
                    <DividerYComponent className='block xs:hidden' />
                    <div className='lg:basis-1/2 md:basis-1/2 sm:basis-1/2 lg:pl-12 md:pl-12 sm:pl-12 xs:pl-0 py-12'>
                        <p className='font-dm-sans lg:text-2xl md:text-2xl sm:text-xl xs:text-xl text-partial' dangerouslySetInnerHTML={{ __html: data.album_description }}></p>
                    </div>
                </div>
                <DividerXComponent />
            </div>
        </div>
    )
}
