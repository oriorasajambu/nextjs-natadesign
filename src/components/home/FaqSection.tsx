import { FaqModel } from "@/model/props";
import dynamic from "next/dynamic";
import useSWR from 'swr';

const DividerXComponent = dynamic(() => import("@/components/common/DividerXComponent"), { ssr: false });
const SubtitleComponent = dynamic(() => import("@/components/common/SubtitleComponent"), { ssr: false });
const AccordionComponent = dynamic(() => import("@/components/common/AccordionComponent"), { ssr: false });

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function FaqSection() {
    const { data, isLoading, error } = useSWR<FaqModel[]>(`${process.env.BASE_URL + 'api/faq'}`, fetcher);
    if (isLoading) return <></>
    if (error) return <></>
    if (!data || data.length < 1) return <></>
    return (
        <div className="bg-[#FFFBF2] pb-10 pt-20 flex flex-row justify-center">
            <div className="lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0">
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col justify-evenly items-center w-full gap-20">
                        <SubtitleComponent className='text-primary lg:text-center md:text-center sm:text-start' subTitle='Pertanyaan yang Sering diajukan' />
                        <div className="flex flex-col w-full">
                            <DividerXComponent />
                            {
                                data && data.map((item, i) => {
                                    return (
                                        <div key={i}>
                                            <AccordionComponent title={item.title}>
                                                {item.content}
                                            </AccordionComponent>
                                            <DividerXComponent />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}