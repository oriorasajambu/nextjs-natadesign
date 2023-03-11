import { AboutUsModel } from "@/model/props";
import dynamic from "next/dynamic";
import useSWR from 'swr';

const ParagraphComponent = dynamic(() => import("@/components/common/ParagraphComponent"), { ssr: false });
const SubtitleComponent = dynamic(() => import("@/components/common/SubtitleComponent"), { ssr: false });
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function AboutUsSection() {
    const { data, isLoading, error } = useSWR<AboutUsModel>(`${process.env.BASE_URL + 'api/aboutus'}`, fetcher);
    if (isLoading) return <></>
    if (error) return <></>
    if (!data) return <></>
    return (
        <div className="bg-primary py-20">
            <div className='w-full flex flex-row justify-center'>
                <div className="lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0">
                    <div className="flex flex-row justify-between relative">
                        <div className="flex flex-col justify-center lg:gap-12 md:gap-10 gap-6">
                            <p className="font-play-serif text-xl text-white">{data.headline}</p>
                            <SubtitleComponent subTitle={data.title_1} className={"text-white"} />
                            <ParagraphComponent className="text-white">
                                <p dangerouslySetInnerHTML={{ __html: data.content_1 }} />
                            </ParagraphComponent>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}