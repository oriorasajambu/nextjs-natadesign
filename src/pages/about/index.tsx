import dynamic from 'next/dynamic';
import { MetaSeoModel } from '@/model/props';
import { useState } from 'react';
import Image from 'next/image';
import About1 from "../../../public/assets/images/about1.jpg";
import About2 from "../../../public/assets/images/about2.jpg";
import Asset1 from '../../../public/assets/images/Asset_1.png';
import Asset2 from '../../../public/assets/images/Asset_2.png';
import useSWR from 'swr';
import ScrollContainer from 'react-indiana-drag-scroll';

const ContentSection = dynamic(() => import('@/components/about/ContentSection'));
const ItemsEmployeeComponent = dynamic(() => import('@/components/about/ItemsEmployeeComponent'));
const FullscreenLoading = dynamic(() => import('@/components/common/FullscreenLoading'), { ssr: false });
const CustomHeadComponent = dynamic(() => import('@/components/common/CustomHeadComponent'));
const TopBarSection = dynamic(() => import('@/components/TopBarSection'), { ssr: false });
const ArticleSection = dynamic(() => import('@/components/ArticleSection'));
const ProjectsSection = dynamic(() => import('@/components/ProjectsSection'));
const DividerXComponent = dynamic(() => import('@/components/common/DividerXComponent'), { ssr: false });
const DividerYComponent = dynamic(() => import('@/components/common/DividerYComponent'), { ssr: false });
const MottoSection = dynamic(() => import('@/components/home/MottoSection'));
const ServicesSection = dynamic(() => import('@/components/home/ServicesSection'));
const MenuSection = dynamic(() => import('@/components/MenuSection'), { ssr: false });
const ContactSection = dynamic(() => import('@/components/ContactSection'));
const FooterSection = dynamic(() => import('@/components/FooterSection'), { ssr: false });
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Portofolio() {
    const [showModal, setShowModal] = useState(false);
    const { data, isLoading, error } = useSWR<MetaSeoModel>(`${process.env.BASE_URL + 'api/seo/about'}`, fetcher);
    if (isLoading) return <FullscreenLoading />
    if (error) return <></>
    if (!data) return <></>

    function dismissModal() {
        setShowModal(false);
    }

    function revealModal() {
        setShowModal(!showModal);
    }

    return (
        <div className="flex flex-col justify-start">
            <CustomHeadComponent props={data} />
            {showModal ? <MenuSection props={{ dismissModal }} /> : null}
            <div className="w-full flex flex-row justify-center bg-primary">
                <div className='lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] flex flex-col justify-between'>
                    <TopBarSection props={{ backgroundColor: 'bg-primary', revealModal }} />
                </div>
            </div>
            <div className='w-full flex flex-row justify-center bg-[#FFFBF2]'>
                <div className='lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px]'>
                    <div className='grid grid-cols-1 grid-flow-row'>
                        <div className='lg:w-[1200px] md:w-[864px] w-[608px] xs:w-[280px] lg:pl-20 md:pl-0 sm:pl-0'>
                            <ScrollContainer className="flex gap-6 w-[1600px] select-none pt-20 xs:pt-10 lg:pr-[550px] md:pr-[700px] sm:pr-[950px] xs:pr-[1320px]">
                                <div className='lg:h-[550px] md:h-[450px] sm:h-[350px] xs:h-[250px] aspect-about relative'>
                                    <Image src={About1} fill alt='' className='select-none' />
                                </div>
                                <div className='lg:h-[550px] md:h-[450px] sm:h-[350px] xs:h-[250px] aspect-about relative'>
                                    <Image src={About1} fill alt='' className='select-none' />
                                </div>
                                <div className='lg:h-[550px] md:h-[450px] sm:h-[350px] xs:h-[250px] aspect-about relative'>
                                    <Image src={About1} fill alt='' className='select-none' />
                                </div>
                                <div className='lg:h-[550px] md:h-[450px] sm:h-[350px] xs:h-[250px] aspect-about relative'>
                                    <Image src={About1} fill alt='' className='select-none' />
                                </div>
                                <div className='lg:h-[550px] md:h-[450px] sm:h-[350px] xs:h-[250px] aspect-about relative'>
                                    <Image src={About1} fill alt='' className='select-none' />
                                </div>
                                <div className='lg:h-[550px] md:h-[450px] sm:h-[350px] xs:h-[250px] aspect-about relative'>
                                    <Image src={About1} fill alt='' className='select-none' />
                                </div>
                            </ScrollContainer>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row justify-center bg-[#FFFBF2]'>
                <div className='lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0'>
                    <div className='grid grid-cols-1 grid-flow-row'>
                        <ContentSection />
                        <div className='relative'>
                            <DividerYComponent className='xs:hidden block' />
                            <ItemsEmployeeComponent />
                        </div>
                    </div>
                </div>
            </div>
            <ServicesSection />
            <MottoSection className='bg-[#FFFBF2]' />
            <div className='w-full flex flex-row justify-center bg-[#FFFBF2]'>
                <div className='lg:w-[1200px] md:w-[864px] w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0'>
                    <DividerXComponent />
                </div>
            </div>
            <div className='w-full flex flex-row justify-center bg-[#FFFBF2]'>
                <div className='lg:w-[1200px] md:w-[864px] w-[608px] xs:w-[280px] lg:pl-20 md:pl-0 sm:pl-0'>
                    <ScrollContainer className="flex gap-6 w-[1600px] select-none py-20 md:pr-[260px] sm:pr-[620px] xs:pr-[1050px]">
                        <div className='lg:h-[550px] md:h-[450px] sm:h-[350px] xs:h-[250px] aspect-square relative'>
                            <Image src={Asset1} fill alt='' className='select-none' />
                        </div>
                        <div className='lg:h-[550px] md:h-[450px] sm:h-[350px] xs:h-[250px] aspect-square relative'>
                            <Image src={Asset2} fill alt='' className='select-none' />
                        </div>
                        <div className='lg:h-[550px] md:h-[450px] sm:h-[350px] xs:h-[250px] aspect-square relative'>
                            <Image src={Asset1} fill alt='' className='select-none' />
                        </div>
                        <div className='lg:h-[550px] md:h-[450px] sm:h-[350px] xs:h-[250px] aspect-square relative'>
                            <Image src={Asset1} fill alt='' className='select-none' />
                        </div>
                        <div className='lg:h-[550px] md:h-[450px] sm:h-[350px] xs:h-[250px] aspect-square relative'>
                            <Image src={Asset1} fill alt='' className='select-none' />
                        </div>
                        <div className='lg:h-[550px] md:h-[450px] sm:h-[350px] xs:h-[250px] aspect-square relative'>
                            <Image src={Asset1} fill alt='' className='select-none' />
                        </div>
                        <div className='lg:h-[550px] md:h-[450px] sm:h-[350px] xs:h-[250px] aspect-square relative'>

                        </div>
                    </ScrollContainer>
                </div>
            </div>
            <div className='w-full flex flex-row justify-center bg-[#FFFBF2]'>
                <div className='lg:w-[1200px] md:w-[864px] w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0'>
                    <DividerXComponent />
                </div>
            </div>
            <ProjectsSection props={{
                titleClass: 'text-primary text-start leading-none',
                showButton: true,
                paddingTop: 'pt-20',
                paddingBot: 'pb-20'
            }} />
            <ArticleSection props={{
                title: 'Postingan Terbaru',
                api: `${process.env.BASE_URL + 'api/articles/category/all/3'}`,
                pathName: '/articles'
            }} />
            <ContactSection />
            <FooterSection />
        </div>
    )
}