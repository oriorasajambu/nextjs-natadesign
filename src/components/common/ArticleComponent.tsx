import { ArticlePaginationModel } from '@/model/props';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import dynamic from 'next/dynamic';

const ItemsArticleComponent = dynamic(() => import('@/components/common/ItemsArticleComponent'), { ssr: false });
const PaginationComponent = dynamic(() => import('@/components/common/PaginationComponent'), { ssr: false });
const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface PostType {
    api: string;
    pathName: string;
    loadingItems?: Number;
    paginate?: boolean;
}

function Loading({ loadingItems }: { loadingItems?: Number }) {
    const items = [...Array(loadingItems)];
    return (
        <div className='grid grid-cols-3 xs:grid-cols-1 gap-6 lg:mt-20 mt-10'>
            {items.map((_, i) => {
                return (
                    i % 2 == 0 ? (
                        <div key={i} className='flex flex-col'>
                            <div className='animate-pulse h-2 lg:h-4 md:h-3 bg-secondary mb-3 lg:mb-6 w-1/3 rounded-lg'></div>
                            <div className='animate-pulse basis-[19%] relative w-full grow aspect-square md:h-48 bg-secondary mb-3 lg:mb-6 rounded-lg'></div>
                            <div className='animate-pulse h-3 lg:h-5 md:h-4 bg-secondary mb-3 lg:mb-6 w-1/2 rounded-lg'></div>
                            <div className='animate-pulse h-2 lg:h-4 md:h-3 bg-secondary mb-2 rounded-lg'></div>
                            <div className='animate-pulse h-2 lg:h-4 md:h-3 bg-secondary rounded-lg'></div>
                        </div>
                    ) : (
                        <div key={i} className='flex flex-col'>
                            <div className='animate-pulse h-2 lg:h-4 md:h-3 bg-secondary mb-3 lg:mb-6 w-1/3 rounded-lg'></div>
                            <div className='animate-pulse h-3 lg:h-5 md:h-4 bg-secondary mb-3 lg:mb-6 w-1/2 rounded-lg'></div>
                            <div className='animate-pulse h-2 lg:h-4 md:h-3 bg-secondary mb-2 rounded-lg'></div>
                            <div className='animate-pulse h-2 lg:h-4 md:h-3 bg-secondary mb-3 lg:mb-6 rounded-lg'></div>
                            <div className='animate-pulse basis-[19%] relative w-full grow aspect-square md:h-48 bg-secondary rounded-lg'></div>
                        </div>
                    )
                )
            })}
        </div>
    )
}

export default function ArticleComponent({ props }: { props: PostType }) {
    const { query: { page } } = useRouter();
    const { data, isLoading, error } = useSWR<ArticlePaginationModel>(props.api + (page ? `?page=${page}` : ''), fetcher);
    if (isLoading) return <Loading loadingItems={props?.loadingItems ? props?.loadingItems : 15} />
    if (error) return <></>
    if (!data || !data.data || data.data.length < 1) return <></>
    return (
        <div className='flex flex-col gap-6 lg:mt-20 mt-10'>
            <ItemsArticleComponent data={data.data} />
            <PaginationComponent
                props={{
                    enablePagination: props.paginate ? true : false,
                    pageCount: data.last_page ? data.last_page : 0,
                    items: data.total ? data.total : 0,
                    pageSize: data.per_page ? data.per_page : 0,
                    currentPage: data.current_page ? data.current_page : 0,
                    previousUrl: data.prev_page_url ? data.prev_page_url : null,
                    nextUrl: data.next_page_url ? data.next_page_url : null,
                    pathName: props.pathName
                }} />
        </div>
    )
}
