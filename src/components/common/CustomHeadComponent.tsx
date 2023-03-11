import Head from 'next/head';
import { MetaSeoModel } from '@/model/props';
import Icon from '../../../public/assets/images/favicon.svg';
import FavIcon from '../../../public/favicon.ico';

export default function CustomHeadComponent({ props }: { props?: MetaSeoModel }) {
    return (
        <Head>
            <title>{props?.page_title ? props?.page_title : 'Nat.A Design'}</title>
            <link rel="icon" type="image/svg+xml" href={Icon.src} />
            <link rel="apple-touch-icon" href={Icon.src}></link>
            <meta name="description" content={props?.meta_description} />
            <meta name="keywords" content={props?.meta_keywords} />
            <meta name="author" content={props?.meta_authors} />
            <meta property="og:title" content={props?.og_title} />
            <meta property="og:description" content={props?.og_description} />
            <meta property="og:image" content={`${'https://admin.natadesign.id/' + props?.og_image_url}`} />
            <meta property="og:url" content={props?.og_url} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="theme-color" content="#10403C"/>
        </Head>
    )
}
