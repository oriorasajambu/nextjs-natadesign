import Image from 'next/image';
import useSWR from 'swr';
import { AlbumPaginationModel } from '@/model/props';
import Link from 'next/link';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function Loading({ loadingItems }: { loadingItems?: Number }) {
    const items = [...Array(loadingItems)];
    return (
        <div className='grid grid-cols-1 mt-12'>
            {
                items.map((_, i) => {
                    return (
                        <div key={i} className='grid grid-cols-1'>
                            <div className='animate-pulse bg-secondary rounded-lg h-6 w-4' />
                            <div className="animate-pulse bg-secondary rounded-lg h-3 w-full my-6" />
                            <div className='w-full h-auto aspect-square animate-pulse bg-secondary rounded-lg' />
                        </div>
                    )
                })
            }
        </div>
    )
}

interface VerticalAlbumComponentProps {
    api: string;
}

export default function VerticalAlbumComponent(props: VerticalAlbumComponentProps) {
    const { data, isLoading, error } = useSWR<AlbumPaginationModel>(props.api, fetcher);
    if (isLoading) return <Loading loadingItems={3} />
    if (error) return <></>
    if (!data || data.data.length < 1) return <></>
    return (
        <div className='grid grid-cols-1 my-12 gap-6'>
            {
                data.data.map((item, i) => {
                    return (
                        <Link key={i} aria-label={item.title} href={{
                            pathname: '/portofolio/[slug]',
                            query: { slug: item.slug },
                        }}>
                            <div key={i} className='grid grid-cols-1'>
                                <h2 className='font-dm-sans font-bold text-partial text-2xl'>{item.title}</h2>
                                <p className="text-partial font-dm-sans text-xs leading-6 line-clamp-3 my-6">{item.alt}</p>
                                <div className='w-full h-auto aspect-square relative'>
                                    <Image priority={true} src={`${process.env.BASE_URL + item.image}`} fill alt={item.alt ? item.alt : item.title} />
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}
