import { useState } from 'react';
import { MetaSeoModel } from '@/model/props';
import useSWR from 'swr';
import dynamic from 'next/dynamic';

const FullscreenLoading = dynamic(() => import('@/components/common/FullscreenLoading'), { ssr: false });
const CustomHeadComponent = dynamic(() => import('@/components/common/CustomHeadComponent'));
const MenuSection = dynamic(() => import('@/components/MenuSection'), { ssr: false });
const PriceEstimation = dynamic(() => import('@/components/PriceEstimation'));
const TopBarSection = dynamic(() => import('@/components/TopBarSection'), { ssr: false });
const ContactSection = dynamic(() => import('@/components/ContactSection'));
const FooterSection = dynamic(() => import('@/components/FooterSection'), { ssr: false });
const ArticleSection = dynamic(() => import('@/components/ArticleSection'));
const ProjectsSection = dynamic(() => import('@/components/ProjectsSection'));
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Information() {
    const [modal, setModal] = useState<boolean>(false);
    const { data, isLoading, error } = useSWR<MetaSeoModel>(`${process.env.BASE_URL + 'api/seo/information'}`, fetcher);
    if (isLoading) return <FullscreenLoading />
    if (error) return <></>
    if (!data) return <></>

    function dismissModal() {
        setModal(false);
    }

    function revealModal() {
        setModal(!modal);
    }

    return (
        <div className="flex flex-col justify-start">
            <CustomHeadComponent props={data} />
            {modal ? <MenuSection props={{ dismissModal }} /> : null}
            <div className="w-full flex flex-row justify-center bg-primary">
                <div className='lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] flex flex-col justify-between'>
                    <TopBarSection props={{ backgroundColor: 'bg-primary', revealModal }} />
                </div>
            </div>
            <PriceEstimation />
            <ProjectsSection props={{
                titleClass: 'text-primary text-start leading-none',
                showButton: true,
                paddingTop: 'lg:pt-10 md:pt-10 sm:pt-10 xs:pt-10',
                paddingBot: 'lg:pb-20 md:pb-20 sm:pb-20 xs:pb-20'
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
