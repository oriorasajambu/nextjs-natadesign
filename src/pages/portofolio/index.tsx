import dynamic from 'next/dynamic';
import { MetaSeoModel } from '@/model/props';
import { useState } from 'react';
import useSWR from 'swr';

const FullscreenLoading = dynamic(() => import('@/components/common/FullscreenLoading'), { ssr: false });
const CustomHeadComponent = dynamic(() => import('@/components/common/CustomHeadComponent'));
const TopBarSection = dynamic(() => import('@/components/TopBarSection'), { ssr: false });
const ArticleSection = dynamic(() => import('@/components/ArticleSection'));
const ContactSection = dynamic(() => import('@/components/ContactSection'));
const FooterSection = dynamic(() => import('@/components/FooterSection'), { ssr: false });
const AlbumComponent = dynamic(() => import('@/components/common/AlbumComponent'));
const MenuSection = dynamic(() => import('@/components/MenuSection'), { ssr: false });
const SubtitleComponent = dynamic(() => import('@/components/common/SubtitleComponent'), { ssr: false });
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Portofolio() {
    const [showModal, setShowModal] = useState(false);
    const { data, isLoading, error } = useSWR<MetaSeoModel>(`${process.env.BASE_URL + 'api/seo/portofolio'}`, fetcher);
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
            <div className='w-full flex flex-row justify-center lg:pb-20 pb-10 bg-[#FFFBF2]'>
                <div className='lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] lg:px-20 md:px-0 sm:px-0'>
                    <div className='grid grid-flow-row'>
                        <div className='flex flex-row justify-between items-center py-14 border-b-2 border-primary'>
                            <SubtitleComponent className='uppercase text-primary' subTitle='Portofolio' />
                        </div>
                        <AlbumComponent props={{
                            api: `${process.env.BASE_URL + 'api/albums'}`,
                            loadingItems: 9,
                            paginate: true,
                        }} />
                    </div>
                </div>
            </div>
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