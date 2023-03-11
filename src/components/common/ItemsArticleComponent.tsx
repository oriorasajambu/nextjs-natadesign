import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
const Date = dynamic(() => import('@/components/common/DateComponent'), { ssr: false });
import { ArticleModel } from "@/model/props";

export default function ItemsArticleComponent({ data }: { data: ArticleModel[] }) {
    if (!data) return <></>
    if (data.length < 1) return <></>
    return (
        <div className="grid grid-cols-3 xs:grid-cols-1 w-full gap-6">
            {data.map((item, i) => i % 2 == 0 ? ItemTopImage(i, item) : ItemBottomImage(i, item))}
        </div>
    )
}

function ItemTopImage(i: number, item: ArticleModel): JSX.Element {
    return (
        <Link key={i} aria-label={item.title} href={{
            pathname: item.category.toLowerCase() == 'ulasan media' ? '/media/[slug]' : '/articles/[slug]',
            query: { slug: item.slug },
        }} >
            <article className="flex flex-col gap-6">
                <Date props={{ date: item.published_at, class: "text-partial font-dm-sans font-bold text-base" }} />
                <div className="basis-[19%] relative w-full grow aspect-square">
                    <Image src={item.thumbnail_url} fill alt={item.title} />
                </div>
                <h2 className="text-partial font-dm-sans font-bold text-xl truncate">{item.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: item.content }} className="text-secondary font-dm-sans text-base leading-6 line-clamp-3"></p>
            </article>
        </Link>
    )
}

function ItemBottomImage(i: number, item: ArticleModel): JSX.Element {
    return (
        <Link key={i} aria-label={item.title} href={{
            pathname: item.category.toLowerCase() == 'ulasan media' ? '/media/[slug]' : '/articles/[slug]',
            query: { slug: item.slug },
        }} >
            <article className="flex flex-col gap-6">
                <Date props={{ date: item.published_at, class: "text-partial font-dm-sans font-bold text-base" }} />
                <h2 className="text-partial font-dm-sans font-bold text-xl truncate">{item.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: item.content }} className="text-secondary font-dm-sans text-base leading-6 line-clamp-3"></p>
                <div className="basis-[19%] relative w-full grow aspect-square">
                    <Image src={item.thumbnail_url} fill alt={item.title} />
                </div>
            </article>
        </Link>
    )

}