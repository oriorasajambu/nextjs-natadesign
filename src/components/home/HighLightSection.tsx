import Image from 'next/image';
import Link from 'next/link';
import HighlightImage from '../../../public/assets/images/highlight.png';
import { motion } from "framer-motion";
import { Reveal } from '@/components/animation/animate';

export default function HighLightSection() {
    return (
        <div className="bg-[#F2EEE6] py-20 flex flex-row justify-center">
            <motion.div className="lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0"
                initial="hidden"
                whileInView="visible"
                variants={Reveal}
                viewport={{ once: true }}>
                <div className='grid grid-cols-1 w-full'>
                    <div className="flex flex-col">
                        <div className="w-full grow self-center relative aspect-section">
                            <Image fill className="aspect-section" src={HighlightImage.src} alt="Highligt Image" />
                            <blockquote className='absolute z-10 lg:bottom-12 md:bottom-12 bottom-6 w-full lg:px-12 px-6 flex justify-center lg:justify-start md:justify-start'>
                                <p className='text-start text-white font-dm-sans lg:text-base md:text-sm text-xs w-48'>&quot;Anda harus dengan sepenuh hati melakukan apa saja untuk mencapai apa pun yang berharga.&quot;</p>
                            </blockquote>
                        </div>
                        <div className="flex flex-wrap lg:flex-nowrap items-center justify-between mt-6">
                            <div className="hidden mr-auto lg:block md:block sm:block md:w-auto" id="navbar-default">
                                <ul
                                    className="flex flex-col pl-0 lg:flex-row md:flex-row sm:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                                    <p className="block py-2 pr-4 text-[#404040] text-lg font-dm-sans md:bg-transparent md:p-0">
                                        Desain Cafe
                                    </p>
                                    <p className="block py-2 pl-3 pr-4 text-[#404040] text-lg font-dm-sans md:bg-transparent md:p-0">
                                        Desain Coffee Shop
                                    </p>
                                    <p className="block py-2 pl-3 pr-4 text-[#404040] text-lg font-dm-sans md:bg-transparent md:p-0">
                                        Desain Restoran
                                    </p>
                                </ul>
                            </div>
                            <Link aria-label="See Our Gallery" href="/portofolio" className="flex items-center text-[#404040] font-dm-sans font-bold">
                                Lihat Gallery Kami
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-primary ml-6" width="25.144" height="14.382"
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
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}