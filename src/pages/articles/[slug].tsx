import { MetaSeoModel, ArticleSlug } from '@/model/props';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { GetStaticProps, GetStaticPathsResult, InferGetStaticPropsType } from 'next';

const CustomHeadComponent = dynamic(() => import('@/components/common/CustomHeadComponent'));
const TopBarSection = dynamic(() => import('@/components/TopBarSection'), { ssr: false });
const ContactSection = dynamic(() => import('@/components/ContactSection'));
const FooterSection = dynamic(() => import('@/components/FooterSection'), { ssr: false });
const MenuSection = dynamic(() => import('@/components/MenuSection'), { ssr: false });
const ContentSection = dynamic(() => import('@/components/articles/ContentSection'));

export default function ArticlesPage({ meta }: InferGetStaticPropsType<typeof getStaticProps>) {
    const [showModal, setShowModal] = useState(false);

    function dismissModal() {
        setShowModal(false);
    }

    function revealModal() {
        setShowModal(!showModal);
    }

    return (
        <div className="flex flex-col justify-start">
            <CustomHeadComponent props={meta} />
            {showModal ? <MenuSection props={{ dismissModal }} /> : null}
            <div className="w-full flex flex-row justify-center bg-primary">
                <div className='lg:w-[1200px] md:w-[864px] sm:w-[608px] xs:w-[280px] flex flex-col justify-between'>
                    <TopBarSection props={{ backgroundColor: 'bg-primary', revealModal }} />
                </div>
            </div>
            <ContentSection />
            <ContactSection />
            <FooterSection />
        </div>
    )
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export const getStaticProps: GetStaticProps = async (context) => {
    const slug = context.params?.slug;
    const res = await fetch(`${process.env.BASE_URL + 'api/seo/' + slug}`);
    const meta: MetaSeoModel = await res.json();

    return {
        props: {
            meta,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds
    }
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export const getStaticPaths = async ({ }): Promise<GetStaticPathsResult<{slug: string}>> => {
    const res = await fetch(`${process.env.BASE_URL + 'api/articles/slugs'}`);
    const slugs = await res.json() as ArticleSlug[];

    // Get the paths we want to pre-render based on posts
    const paths = slugs.map((slug) => ({
        params: { slug: slug.slug }
    }))
    // We'll pre-render only these paths at build time.
    // { fallback: 'blocking' } will server-render pages
    // on-demand if the path doesn't exist.
    return {
        paths,
        fallback: 'blocking',
    };
};