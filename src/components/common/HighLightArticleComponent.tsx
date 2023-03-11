import { ArticleModel } from '@/model/props';
import dynamic from 'next/dynamic';
import useSWR from 'swr';

const ItemsArticleComponent = dynamic(() => import("@/components/common/ItemsArticleComponent"));
const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface PostType {
    title: string;
    loadingItems?: Number;
}

function Loading({ loadingItems }: { loadingItems?: Number }) {
    const items = [...Array(loadingItems)];
    return (
        <div className='grid grid-cols-3 xs:grid-cols-1 gap-6 lg:mt-20 mt-10'>
            {items.map((_, i) => {
                return (
                    i % 2 == 0 ? (
                        <article key={i} className="flex flex-col">
                            <div className='animate-pulse h-2 lg:h-4 md:h-3 bg-secondary mb-3 lg:mb-6 w-1/3 rounded-lg'></div>
                            <div className='animate-pulse basis-[19%] relative w-full grow aspect-square md:h-48 bg-secondary mb-3 lg:mb-6 rounded-lg'></div>
                            <div className="animate-pulse h-3 lg:h-5 md:h-4 bg-secondary mb-3 lg:mb-6 w-1/2 rounded-lg"></div>
                            <div className="animate-pulse h-2 lg:h-4 md:h-3 bg-secondary mb-2 rounded-lg"></div>
                            <div className="animate-pulse h-2 lg:h-4 md:h-3 bg-secondary rounded-lg"></div>
                        </article>
                    ) : (
                        <article key={i} className="flex flex-col">
                            <div className='animate-pulse h-2 lg:h-4 md:h-3 bg-secondary mb-3 lg:mb-6 w-1/3 rounded-lg'></div>
                            <div className="animate-pulse h-3 lg:h-5 md:h-4 bg-secondary mb-3 lg:mb-6 w-1/2 rounded-lg"></div>
                            <div className="animate-pulse h-2 lg:h-4 md:h-3 bg-secondary mb-2 rounded-lg"></div>
                            <div className="animate-pulse h-2 lg:h-4 md:h-3 bg-secondary mb-3 lg:mb-6 rounded-lg"></div>
                            <div className='animate-pulse basis-[19%] relative w-full grow aspect-square md:h-48 bg-secondary rounded-lg'></div>
                        </article>
                    )
                )
            })}
        </div>
    )
}

export default function HighLightArticleComponent({ props }: { props: PostType }) {
    const api = props.title.toLowerCase() == 'ulasan media' ? 'api/articles/filter/ulasan-media/highlight' : 'api/articles/highlight';
    const { data, isLoading, error } = useSWR<ArticleModel[]>(`${process.env.BASE_URL + api}`, fetcher);

    if (isLoading) return <Loading loadingItems={props.loadingItems ? props.loadingItems : 3} />
    if (error) return (<></>)
    if (!data || data.length < 1) return (<></>)
    return (
        <div className='lg:mt-20 mt-10'>
            <ItemsArticleComponent data={data} />
        </div>
    )
}