import { WorkflowModel } from "@/model/props";
import dynamic from "next/dynamic";
import useSWR from 'swr';

const DividerXComponent = dynamic(() => import("@/components/common/DividerXComponent"));
const SubtitleComponent = dynamic(() => import("@/components/common/SubtitleComponent"));
const AccordionComponent = dynamic(() => import("@/components/common/AccordionComponent"));
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function WorkFlowsSection() {
    const { data, isLoading, error } = useSWR<WorkflowModel[]>(`${process.env.BASE_URL + 'api/workflow'}`, fetcher);
    if (isLoading) return <></>
    if (error) return <></>
    if (!data || data.length < 1) return <></>
    return (
        <div className="bg-[#F2EEE6] py-20 flex flex-row justify-center">
            <div className="lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] flex flex-row justify-center lg:px-20 md:px-0 sm:px-0">
                <div className="flex flex-col justify-evenly w-full">
                    <div className="flex flex-row justify-center pb-10">
                        <SubtitleComponent subTitle={"Bagaimana Cara Kerjanya?"} className={"text-primary lg:text-center md:text-center sm:text-left leading-tight"} />
                    </div>
                    <DividerXComponent />
                    {
                        data && data.map((item, i) => {
                            return (
                                <div key={i}>
                                    <AccordionComponent
                                        position={i + 1}
                                        className="lg:px-12 md:px-12 sm:px-12"
                                        contentClassName="lg:px-12 md:px-12 sm:px-12"
                                        title={item.title} >
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
    )
}