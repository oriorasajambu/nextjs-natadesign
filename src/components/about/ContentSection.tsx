import { AboutUsModel } from '@/model/props';
import dynamic from 'next/dynamic';
import useSWR from 'swr';

const DividerXComponent = dynamic(() => import('@/components/common/DividerXComponent'), { ssr: false });
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ContentSection() {
    const { data, isLoading, error } = useSWR<AboutUsModel>(`${process.env.BASE_URL + 'api/aboutus'}`, fetcher);
    if (isLoading) return null
    if (error) return null
    if (!data) return null
    return (
        <>
            <div className="flex flex-row flex-wrap md:flex-nowrap lg:flex-nowrap pb-20 mt-20 xs:mt-10">
                <div className='lg:basis-1/3 md:basis-1/3 lg:pr-20 md:pr-0'>
                    <h3 className='text-3xl font-dm-sans font-bold text-partial uppercase'>{data.title_2}</h3>
                </div>
                <div className='lg:basis-2/3 md:basis-2/3 md:pl-12 lg:mt-0 md:mt-0 mt-10'>
                    <p className='font-dm-sans lg:text-2xl md:text-2xl text-partial'>
                        {data.content_2}
                    </p>
                </div>
            </div>
            <DividerXComponent />
            <div className="flex lg:flex-row flex-wrap pb-20 lg:mt-20 mt-10">
                <div className='lg:basis-1/3 md:basis-1/3 lg:pr-20 md:pr-0'>
                    <h3 className='text-3xl font-dm-sans font-bold text-partial uppercase'>{data.title_3}</h3>
                </div>
                <div className='lg:basis-2/3 md:basis-2/3 md:pl-12 lg:mt-0 md:mt-0 mt-10'>
                    <p className='font-dm-sans lg:text-2xl md:text-2xl text-partial'>
                        {data.content_3}
                    </p>
                </div>
            </div>
        </>
    )
}
