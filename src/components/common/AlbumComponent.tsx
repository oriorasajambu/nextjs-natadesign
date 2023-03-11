import { AlbumPaginationModel } from '@/model/props';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import useSWR from 'swr';

const ItemsAlbumComponent = dynamic(() => import('@/components/common/ItemsAlbumComponent'), { ssr: false }) ;
const PaginationComponent = dynamic(() => import('@/components/common/PaginationComponent'), { ssr: false });
const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface AlbumType {
    api: string,
    loadingItems?: Number,
    paginate?: boolean,
}

function Loading({ loadingItems }: { loadingItems?: Number }) {
    const items = [...Array(loadingItems)];
    return (
        <div className="grid grid-cols-3 xs:grid-cols-1 w-full gap-6 lg:mt-20 mt-10">
            {items.map((_, i) => {
                return (
                    <div key={i} className="flex flex-col">
                        <div className="flex flex-row justify-between items-center mb-6">
                            <h1 className="animate-pulse bg-secondary h-6 w-1/5 rounded-lg"></h1>
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-primary" width="25.144" height="14.382"
                                viewBox="0 0 25.144 14.382">
                                <g id="Component_1_63" data-name="Component 1 – 63" transform="translate(0 0.354)">
                                    <path id="Path_19" data-name="Path 19" d="M0,6.837,6.837,0l6.837,6.837"
                                        transform="translate(24.437) rotate(90)" fill="none" stroke="#404040"
                                        strokeWidth="1" />
                                    <path id="Path_20" data-name="Path 20" d="M1208.8,3931.5h-24.437"
                                        transform="translate(-1184.364 -3924.663)" fill="none" stroke="#404040"
                                        strokeWidth={1} />
                                </g>
                            </svg>
                        </div>
                        <div className="h-4 mb-6 w-full animate-pulse bg-secondary rounded-lg">
                        </div>
                        <div className='basis-[19%] relative w-full grow aspect-square self-center animate-pulse bg-secondary rounded-lg'>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default function AlbumComponent({ props }: { props: AlbumType }) {
    const { query: { page } } = useRouter();
    const { data, isLoading, error } = useSWR<AlbumPaginationModel>(props.api + (page ? `?page=${page}` : ''), fetcher);
    if (isLoading) return <Loading loadingItems={props?.loadingItems ? props?.loadingItems : 3} />
    if (error) return <></>
    if (!data || data.data.length < 1) return <></>
    return (
        <div className="flex flex-col gap-6">
            <ItemsAlbumComponent data={data.data} />
            <PaginationComponent
                props={{
                    enablePagination: props.paginate ? true : false,
                    pageCount: data.last_page ? data.last_page : 0,
                    items: data.total ? data.total : 0,
                    pageSize: data.per_page ? data.per_page : 0,
                    currentPage: data.current_page ? data.current_page : 0,
                    previousUrl: data.prev_page_url ? data.prev_page_url : null,
                    nextUrl: data.next_page_url ? data.next_page_url : null ,
                    pathName: '/portofolio'
                }} />
        </div>
    )
}