import { useState } from "react";
import { MottoModel } from "@/model/props";
import useSWR from 'swr';
import dynamic from "next/dynamic";

const ParagraphComponent = dynamic(() => import("@/components/common/ParagraphComponent"), { ssr: false });
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function MottoSection({ className }: { className: string }) {
    const [isActive, setIsActive] = useState(false);
    const { data, isLoading, error } = useSWR<MottoModel>(`${process.env.BASE_URL + 'api/motto'}`, fetcher);
    if (isLoading) return <></>
    if (error) return <></>
    if (!data) return <></>
    return (
        <div className={`${className} pb-20 flex flex-row justify-center`}>
            <div className="lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0">
                <div className="flex flex-col justify-center lg:gap-12 md:gap-10 gap-6">
                    <div className="flex flex-row justify-between items-center content-center">
                        <p className="font-dm-sans text-xl text-partial relative">
                            {data.headline}
                        </p>
                        <button
                            aria-label="Give Us Heart"
                            onClick={() => setIsActive(!isActive)}
                            className="relative flex justify-center items-center">
                            <span className={`${isActive ? 'hidden' : 'animate-ping'} absolute inline-flex h-8 w-8 rounded-full bg-[#d97373] opacity-75`}></span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 67 67">
                                <g id="Ellipse_2" data-name="Ellipse 2" transform="translate(0 -0.499)" fill="none"
                                    stroke="#404040" strokeWidth="2">
                                    <circle cx="33.5" cy="33.5" r="33.5" stroke="none" />
                                    <circle cx="33.5" cy="33.5" r="32.5" fill="none" />
                                </g>
                                <path id="Icon_awesome-heart" data-name="Icon awesome-heart"
                                    d="M25.483,3.187a7.538,7.538,0,0,0-10.286.75L14.111,5.056,13.025,3.937A7.537,7.537,0,0,0,2.74,3.187a7.915,7.915,0,0,0-.546,11.46L12.86,25.66a1.728,1.728,0,0,0,2.5,0L26.023,14.647a7.91,7.91,0,0,0-.54-11.46Z"
                                    transform="translate(18.78 19.654)" fill={`${isActive ? '#d97373' : 'none'}`} stroke={`${isActive ? '#d97373' : '#404040'}`} strokeWidth="2" />
                            </svg>
                        </button>
                    </div>
                    <h2
                        className={`text-primary font-play-serif font-bold text-4xl lg:text-[80px] md:text-[64px] sm:text-[64px] leading-tight`}>
                        {data.title}
                    </h2>
                    <ParagraphComponent className="text-partial">
                        <p dangerouslySetInnerHTML={{ __html: data.content }} />
                    </ParagraphComponent>
                </div>
            </div>
        </div>
    )
}