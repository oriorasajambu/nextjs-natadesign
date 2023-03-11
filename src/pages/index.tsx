import dynamic from 'next/dynamic';
import { MetaSeoModel } from '@/model/props';
import { useState } from 'react';
import useSWR from 'swr';
import fixedBackground from 'public/assets/images/fixed_background.webp';

const FullscreenLoading = dynamic(() => import('@/components/common/FullscreenLoading'), { ssr: false });
const CustomHeadComponent = dynamic(() => import('@/components/common/CustomHeadComponent'));
const HeroesSection = dynamic(
  () => import('@/components/home/HeroesSection'),
  {
    loading: () => <FullscreenLoading />, ssr: false
  }
);
const AboutUsSection = dynamic(() => import('@/components/home/AboutUsSection'));
const ServicesSection = dynamic(() => import('@/components/home/ServicesSection'));
const WorkFlowsSection = dynamic(() => import('@/components/home/WorkFlowsSection'));
const ProjectStatSection = dynamic(() => import('@/components/home/ProjectStatSection'), { ssr: false });
const HighLightSection = dynamic(() => import('@/components/home/HighLightSection'), { ssr: false });
const ClientsSection = dynamic(() => import('@/components/home/ClientsSection'));
const TestimonySection = dynamic(() => import('@/components/home/TestimonySection'));
const MottoSection = dynamic(() => import('@/components/home/MottoSection'));
const FaqSection = dynamic(() => import('@/components/home/FaqSection'));
const ProjectsSection = dynamic(() => import('@/components/ProjectsSection'));
const ArticleSection = dynamic(() => import('@/components/ArticleSection'));
const ContactSection = dynamic(() => import('@/components/ContactSection'));
const FooterSection = dynamic(() => import('@/components/FooterSection'), { ssr: false });
const MenuSection = dynamic(() => import('@/components/MenuSection'), { ssr: false });
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const { data, isLoading, error } = useSWR<MetaSeoModel>(`${process.env.BASE_URL + 'api/seo/home'}`, fetcher);

  function dismissModal() {
    setShowModal(false);
  }

  function revealModal() {
    setShowModal(!showModal);
  }

  if (isLoading) return <FullscreenLoading />
  if (error) return null
  if (!data) return null

  return (
    <>
      <CustomHeadComponent props={data} />
      <div style={{ backgroundImage: `url(${fixedBackground.src})` }} className="h-screen w-full bg-no-repeat bg-cover bg-center bg-fixed absolute" />
      {showModal ? <MenuSection props={{ dismissModal }} /> : null}
      <HeroesSection props={{ revealModal }} />
      <AboutUsSection />
      <ServicesSection />
      <WorkFlowsSection />
      <ProjectsSection props={{
        titleClass: 'text-primary text-center leading-none',
        showButton: false,
        paddingTop: 'lg:pt-20 md:pt-20 sm:pt-20 xs:pt-20',
        paddingBot: 'lg:pb-10 md:pb-10 sm:pb-10 xs:pb-10'
      }} />
      <ProjectStatSection />
      <HighLightSection />
      <ClientsSection />
      <TestimonySection />
      <MottoSection className='bg-[#F2EEE6] pt-20' />
      <FaqSection />
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
    </>
  )
}