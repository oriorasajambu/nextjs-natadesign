import { MetaSeoModel } from '@/model/props';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import useSWR from 'swr';

const FullscreenLoading = dynamic(() => import('@/components/common/FullscreenLoading'), { ssr: false });
const CustomHeadComponent = dynamic(() => import("@/components/common/CustomHeadComponent"));
const DividerXComponent = dynamic(() => import("@/components/common/DividerXComponent"), { ssr: false });
const SubtitleComponent = dynamic(() => import("@/components/common/SubtitleComponent"), { ssr: false });
const ContactSection = dynamic(() => import("@/components/ContactSection"));
const FooterSection = dynamic(() => import("@/components/FooterSection"), { ssr: false });
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"));
const ArticleSection = dynamic(() => import("@/components/ArticleSection"));
const MenuSection = dynamic(() => import("@/components/MenuSection"), { ssr: false });
const TopBarSection = dynamic(() => import("@/components/TopBarSection"), { ssr: false });

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Contact() {
    const [showModal, setShowModal] = useState(false);
    const { data, isLoading, error } = useSWR<MetaSeoModel>(`${process.env.BASE_URL + 'api/seo/contact'}`, fetcher);
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
                <div className='lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0'>
                    <div className='grid grid-flow-row'>
                        <div className='flex flex-row justify-between items-center py-14'>
                            <SubtitleComponent className='uppercase text-primary' subTitle='Kontak' />
                        </div>
                        <DividerXComponent />
                    </div>
                </div>
            </div>
            <ContactSection />
            <div className='w-full flex flex-row justify-center bg-[#FFFBF2]'>
                <div className='lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0'>
                    <DividerXComponent />
                </div>
            </div>
            <ProjectsSection props={{
                titleClass: 'font-dm-sans font-bold text-5xl text-primary text-start leading-none',
                showButton: true,
                paddingTop: 'pt-20',
                paddingBot: 'pb-20'
            }} />
            <ArticleSection props={{
                title: 'Postingan Terbaru',
                api: `${process.env.BASE_URL + 'api/articles/category/all/3'}`,
                pathName: '/articles'
            }} />
            <FooterSection />
        </div>
    )
}
