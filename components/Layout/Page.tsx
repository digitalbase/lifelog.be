import Head from 'next/head';
import { useRouter } from 'next/router';
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

import { SITE_NAME, SITE_URL, TWITTER_USER_NAME } from '@/src/constants';
import { Meta } from '@/src/types/meta';

//inspired by https://github.com/vercel/virtual-event-starter-kit/blob/main/components/page.tsx
type Props = {
    meta: Meta;
    children: React.ReactNode;
};

export default function Page({ meta, children }: Props) {
    const router = useRouter();

    const twitterCardType = meta.twitterCardType || 'summary_large_image';
    const title = meta.title || SITE_NAME;
    const url = meta.canonicalUrl || `${SITE_URL}${router.asPath}`;
    const description = meta.description || SITE_NAME;
    const shareImage = meta.shareImage;

    let shareImageUrl = `${SITE_URL}/twitter-card.png`;
    // passed shareImage property can be a string (url) or an uploadcare object
    if (typeof shareImage === 'object' && shareImage !== null && meta.shareImage) {
        shareImageUrl = `https://cdn.uc.assets.prezly.com/${shareImage.uuid}/-/format/png/opengraphimage.png`;
    } else if (typeof shareImage === 'string') {
        shareImageUrl = shareImage;
    }

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="robots" content="index,follow" />
                <meta name="description" content={description} />
                <link rel="canonical" href={url} />

                <meta property="og:title" content={title} />
                <meta property="og:url" content={url} />
                <meta property="og:description" content={description} />
                <meta property="og:site_name" content="Prezly.com" />
                <meta property="og:image" content={shareImageUrl} />
                <meta property="og:type" content="article" />

                <meta name="twitter:site" content="@prezly" />
                <meta name="twitter:creator" content="@prezly" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:card" content={twitterCardType} />
                <meta name="twitter:image" content={shareImageUrl} />

                {process.env.NODE_ENV === 'production' &&
                <script async defer data-domain="lifelog.be" src={"https://plausible.io/js/plausible.js"}/>
                }
            </Head>
            <Header />
                {children}
            <Footer />
        </>
    );
}
