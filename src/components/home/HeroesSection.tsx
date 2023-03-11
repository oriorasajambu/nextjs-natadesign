import BottomBarSection from '@/components/BottomBarSection';
import TopBarSection from '@/components/TopBarSection';

import { motion } from 'framer-motion';
import { Reveal } from '@/components/animation/animate';
import Link from 'next/link';

interface HeroesProps {
    revealModal: () => void;
}

export default function HeroesSection({ props }: { props: HeroesProps }) {
    function revealModal() {
        props.revealModal()
    }
    return (
        <motion.div initial='hidden'
            whileInView='visible'
            variants={Reveal}
            viewport={{ once: true }}
            className='bg-gradient-to-b from-transparent to-primary opacity-[.99]'>
            <div className='w-full flex flex-row justify-center h-screen'>
                <div className='lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] flex flex-col justify-between'>
                    <TopBarSection props={{ backgroundColor: 'bg-transparent', revealModal }} />
                    <div className='lg:px-20 md:px-0 sm:px-0'>
                        <div className='flex flex-wrap sm:flex-nowrap flex-row justify-between my-auto'>
                            <div className='flex-1 xl:flex-none lg:flex-none md:flex-none sm:flex-none'>
                                <h1 id='title' data-value='Nat.a Design'
                                    className='text-center lg:text-left md:text-left sm:text-left lg:text-[80px] md:text-[64px] sm:text-[64px] text-5xl text-white font-play-serif font-bold'>
                                    Nat.a Design
                                </h1>
                                <div className='my-12'>
                                    <p
                                        className='text-center lg:text-left md:text-left sm:text-left lg:text-2xl md:text-xl text-base text-white font-dm-sans'>
                                        Arsitek dan Interior Desain spesialis
                                    </p>
                                    <p
                                        className='text-center lg:text-left md:text-left sm:text-left lg:text-2xl md:text-xl text-base text-white font-dm-sans'>
                                        di bidang F&B sejak 2014.
                                    </p>
                                </div>
                                <div className='sm:w-[266px] md:w-[310px]'>
                                    <Link aria-label='Promotion' tabIndex={0} className='text-primary bg-white text-center lg:text-base md:text-base sm:text-sm xs:text-sm font-dm-sans font-bold uppercase rounded-full border px-6 py-6 block'
                                        href='/information'>Dapatkan Penawaran Gratis</Link>
                                </div>
                            </div>
                            <div className='animate-bounce hidden lg:mr-10 md:mr-5 sm:mr-3 lg:block md:block sm:block self-center'>
                                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='167.953' viewBox='0 0 16 167.953'>
                                    <g id='Group_28' data-name='Group 28' transform='translate(-1)' opacity='0.5'>
                                        <text id='Scroll' transform='translate(4) rotate(90)' fill='#fff' fontSize='12' fontFamily='SegoeUI, Segoe UI'><tspan x='0' y='0'>Scroll</tspan></text>
                                        <path id='Path_5' data-name='Path 5' d='M1098,342.6V456.3' transform='translate(-1089.5 -288.35)' fill='none' stroke='#fff' strokeWidth='1' />
                                        <circle id='Ellipse_5' data-name='Ellipse 5' cx='7' cy='7' r='7' transform='translate(1 75)' fill='#fff' />
                                        <circle id='Ellipse_6' data-name='Ellipse 6' cx='4' cy='4' r='4' transform='translate(4 113)' fill='#fff' />
                                        <circle id='Ellipse_7' data-name='Ellipse 7' cx='4' cy='4' r='4' transform='translate(4 145)' fill='#fff' />
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <BottomBarSection />
                </div>
            </div>
        </motion.div>
    )
}