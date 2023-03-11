import { ServiceModel } from "@/model/props";
import dynamic from "next/dynamic";
import useSWR from 'swr';

const SubtitleComponent = dynamic(() => import("@/components/common/SubtitleComponent"), { ssr: false });
const DividerXComponent = dynamic(() => import("@/components/common/DividerXComponent"), { ssr: false });
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ServicesSection() {
    const { data, isLoading, error } = useSWR<ServiceModel[]>(`${process.env.BASE_URL + 'api/services'}`, fetcher);
    if (isLoading) return <></>
    if (error) return <></>
    if (!data || data.length < 1) return <></>
    return (
        <div className="bg-[#FFFBF2] py-20">
            <div className="flex flex-row justify-center">
                <div className="lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0">
                    <div className="w-full flex flex-col justify-evenly h-full gap-y-10 lg:gap-y-20">
                        <div className="flex flex-row">
                            <SubtitleComponent subTitle={"Memberikan Layanan Terbaik"} className={"text-primary"} />
                        </div>
                        <div className="flex flex-row flex-wrap sm:flex-nowrap sm:flex-col gap-x-10 gap-y-10 lg:gap-x-20 lg:gap-y-12 justify-between">
                            {
                                data && data.map((item, i) => {
                                    return (
                                        i == 0 || i == 1 ? (
                                            <div key={i} className="grow lg:basis-[44%] md:basis-[44%]">
                                                <DividerXComponent />
                                                <h3
                                                    className="font-dm-sans font-normal text-primary pt-6 lg:pt-12 pb-6 lg:text-5xl md:text-[32px] sm:text-[32px] text-xl">
                                                    {item.title}</h3>
                                                <p
                                                    className="font-dm-sans text-partial lg:text-2xl md:text-xl sm:text-xl leading-8">
                                                    {item.content}
                                                </p>
                                            </div>
                                        ) : (
                                            <div key={i} className="grow lg:basis-[44%] md:basis-[44%]">
                                                <DividerXComponent />
                                                <h3
                                                    className="font-dm-sans font-normal text-primary pt-6 lg:pt-12 pb-6 lg:text-5xl md:text-[32px] sm:text-[32px] text-xl">
                                                    {item.title}</h3>
                                                <p
                                                    className="font-dm-sans text-partial pb-12 sm:pb-0 lg:text-2xl md:text-xl sm:text-xl leading-8">
                                                    {item.content}
                                                </p>
                                                <DividerXComponent className={`hidden lg:block md:block`} />
                                            </div>
                                        )
                                    )
                                })
                            }
                            <DividerXComponent className="block lg:hidden md:hidden" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}