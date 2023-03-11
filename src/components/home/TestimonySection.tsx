import useSWR from 'swr';
import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';
import { motion } from "framer-motion";
import { Reveal } from "@/components/animation/animate";
import { TestimonyModel } from '@/model/props';

const DividerXComponent = dynamic(() => import("@/components/common/DividerXComponent"), { ssr: false });
const fetcher = (url: string) => fetch(url).then((res) => res.json());

let count = 0;
export default function TestimonySection() {
    const { data, isLoading, error } = useSWR<TestimonyModel[]>(
        `${process.env.BASE_URL + 'api/testimony'} `,
        fetcher,
        { refreshInterval: 1000 * 10 }
    );
    const [index, setIndex] = useState(0);
    const slideRef = useRef<HTMLDivElement>(null);

    if (isLoading) return <></>
    if (error) return <></>
    if (!data || data.length < 1) return <></>

    const onNextClicked = () => {
        count = (count + 1) % data.length;
        setIndex(count);
        slideRef.current?.classList.add("fade-anim");
    };
    const onPreviousClicked = () => {
        count = (count + data.length - 1) % data.length;
        setIndex(count);
        slideRef.current?.classList.add("fade-anim");
    };
    const removeAnimation = () => {
        slideRef.current?.classList.remove("fade-anim");
    };
    const autoPlay = () => {
        setInterval(() => {
            onNextClicked();
        }, 5000);
    };
    autoPlay()
    slideRef.current?.addEventListener("animationend", removeAnimation);

    return (
        <div className="bg-[#FFFBF2] pb-20 flex flex-row justify-center">
            <div className='lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0 flex flex-col items-center'>
                <DividerXComponent />
                <motion.div variants={Reveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }} className="lg:py-20 lg:px-20 md:px-20 sm:px-0 relative">
                    <div className="flex flex-col justify-between items-center py-10 lg:py-0 ">
                        <p className="text-partial font-dm-sans text-center text-2xl mb-12">Apa kata
                            mereka?
                        </p>
                        <div ref={slideRef} className='grow'>
                            <blockquote
                                className="xs:h-28 lg:mx-24 md:mx-12 mx-0 italic leading-9 font-play-serif text-partial lg:text-4xl md:text-2xl sm:text-xl xs:text-base text-center">
                                &quot;{data[index].content}&quot;
                            </blockquote>
                            <p className="font-dm-sans font-bold text-partial text-center lg:text-2xl md:text-xl sm:text-lg xs:text-base lg:mt-6">- {data[index].author} -</p>
                        </div>
                    </div>
                    <button aria-label='Previous Testimony' className='hidden lg:block md:block absolute top-1/2 -translate-y-1/2 left-0 hover:scale-110' onClick={onPreviousClicked}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55">
                            <g id="Group_225" data-name="Group 225" transform="translate(-140 -7288)">
                                <g id="Ellipse_4" data-name="Ellipse 4" transform="translate(140 7288)" fill="none" stroke="#10403c" strokeWidth="1">
                                    <circle cx="27.5" cy="27.5" r="27.5" stroke="none" />
                                    <circle cx="27.5" cy="27.5" r="27" fill="none" />
                                </g>
                                <path id="Path_17" data-name="Path 17" d="M0,12,12,0,24,12" transform="translate(159.5 7327.5) rotate(-90)" fill="none" stroke="#10403c" strokeWidth="1" />
                            </g>
                        </svg>
                    </button>
                    <button aria-label='Next Testimony' className='hidden lg:block md:block absolute top-1/2 -translate-y-1/2 right-0 hover:scale-110' onClick={onNextClicked}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55">
                            <g id="Group_226" data-name="Group 226" transform="translate(-1205 -7316)">
                                <g id="Ellipse_4" data-name="Ellipse 4" transform="translate(1260 7371) rotate(180)" fill="none" stroke="#10403c" strokeWidth="1">
                                    <circle cx="27.5" cy="27.5" r="27.5" stroke="none" />
                                    <circle cx="27.5" cy="27.5" r="27" fill="none" />
                                </g>
                                <path id="Path_17" data-name="Path 17" d="M0,12,12,0,24,12" transform="translate(1240.5 7331.5) rotate(90)" fill="none" stroke="#10403c" strokeWidth="1" />
                            </g>
                        </svg>
                    </button>
                </motion.div>
                <DividerXComponent />
            </div>
        </div>
    )
}