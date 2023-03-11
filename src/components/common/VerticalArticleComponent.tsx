import { ArticlePaginationModel } from "@/model/props";
import dynamic from "next/dynamic";
import Image from 'next/image';
import Link from "next/link";
import useSWR from 'swr';

const Date = dynamic(() => import('@/components/common/DateComponent'), { ssr: false });
const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface VerticalArticleComponentProps {
    title: string;
    api: string;
    children?: React.ReactNode;
}

function Loading({ loadingItems }: { loadingItems?: Number }) {
    const items = [...Array(loadingItems)];
    return (
        <div className='grid grid-cols-1 pb-12'>
            <div className='h-12 w-5 animate-pulse bg-secondary rounded-lg' />
            {
                items.map((_, i) => {
                    return (
                        <div key={i} className='grid grid-cols-1 mt-12'>
                            <div className='w-full h-auto aspect-square animate-pulse bg-secondary rounded-lg'>
                            </div>
                            <div className='mt-6 h-6 animate-pulse bg-secondary rounded-lg' />
                            <div className='h-3 my-6 w-5 animate-pulse bg-secondary rounded-lg' />
                            <div className="h-4 w-full animate-pulse bg-secondary rounded-lg" />
                            <div className="h-4 w-full mt-2 animate-pulse bg-secondary rounded-lg" />
                            <div className="h-4 w-full animate-pulse bg-secondary rounded-lg" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default function VerticalArticleComponent(props: VerticalArticleComponentProps) {
    const { data, isLoading, error } = useSWR<ArticlePaginationModel>(props.api, fetcher);
    if (isLoading) return <Loading loadingItems={3} />
    if (error) return <></>
    if (!data || data.data.length < 1) return <></>
    return (
        <div className='grid grid-cols-1 pb-12'>
            <h2 className='text-5xl text-primary font-dm-sans font-bold'>{props.title}</h2>
            {
                data.data.map((item, i) => {
                    return (
                        <Link key={i} aria-label={item.title} href={{
                            pathname: props.title.toLowerCase() == 'ulasan media' ? '/media/[slug]' : '/articles/[slug]',
                            query: { slug: item.slug },
                        }}>
                            <div className='grid grid-cols-1 mt-12'>
                                <div className='w-full h-auto aspect-square relative'>
                                    <Image priority={true} src={item.thumbnail_url} fill alt={item.title} />
                                </div>
                                <h3 className='mt-6 font-dm-sans font-bold text-2xl text-partial'>{item.title}</h3>
                                <p className='font-dm-sans font-bold text-xs my-6 text-partial'>Ditulis oleh {item.author} <Date props={{ date: item.published_at, class: "text-partial font-dm-sans font-bold text-xs" }} /></p>
                                <p dangerouslySetInnerHTML={{ __html: item.content }} className="text-secondary font-dm-sans text-base leading-6 line-clamp-3" />
                            </div>
                        </Link>
                    )
                })
            }
            {props.children}
        </div>
    )
}
