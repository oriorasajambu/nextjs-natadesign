import { AlbumModel } from '@/model/props';
import Image from 'next/image';
import Link from 'next/link';

export default function ItemsAblumComponent({ data }: { data: AlbumModel[] }) {
    return (
        <div className="grid grid-cols-3 xs:grid-cols-1 w-full gap-6 lg:mt-20 mt-10">
            {data.map((item, i) => ItemAlbum(i, item))}
        </div>
    )
}

function ItemAlbum(i: number, item: AlbumModel): JSX.Element {
    return <Link key={i} aria-label={item.alt} href={{
        pathname: '/portofolio/[slug]',
        query: { slug: item.slug },
    }}>
        <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center mb-6">
                <h1 className="lg:text-2xl md:text-xl text-partial font-dm-sans font-bold truncate">{item.title}</h1>
                <svg xmlns="http://www.w3.org/2000/svg" className="text-partial" width="25.144" height="14.382"
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
            <div
                className="flex-row justify-between text-partial text-base font-dm-sans mb-6">
                <p>{item.alt}</p>
            </div>
            <div className='basis-[19%] relative w-full grow aspect-square self-center'>
                <Image
                    fill
                    src={`${process.env.BASE_URL + item.image}`}
                    alt={item.alt ? item.alt : item.title} />
            </div>
        </div>
    </Link>;
}

