import React from 'react';
import {ExtendedStory} from "@prezly/sdk/dist/types/Story";
import parseNextPathParams from "../src/util/parseNextPathParams";
import {Article} from "@/components/Article";
import Page from "@/components/Layout/Page";
import {getPrezlyApi} from "@/utils/prezly";

type ArticlePageProps = {
    story: ExtendedStory;
};

export default class ArticlePage extends React.Component<ArticlePageProps> {

    render() {
        const { story } = this.props;

        // fall back to preview image if there is no social image
        const socialImage = story.social_image ?? story.preview_image;

        const storyMeta = {
            title: story.title,
            description: story.social_text ?? story.subtitle,
            shareImage: socialImage ? JSON.parse(socialImage) : null,
            canonicalUrl: `/${story.slug}`
        };

        return (
            <>
                <Page meta={storyMeta}>
                    <Article story={story} />
                </Page>
            </>
        );
    }
}


export async function getStaticProps({ params, preview }) {
    const { slug } = params;
    const api = getPrezlyApi();
    const story = await api.getStoryBySlug(slug);

    if (!story) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            story
        },
    };
}

export async function getStaticPaths() {
    const api = getPrezlyApi();
    const { stories } = await api.getStories({pageSize: 3});

    const paths = stories.map((story) => {
        return {
            params: parseNextPathParams(story.slug, '/[slug]'),
        };
    });
    // fallback: false means pages that don’t have the
    // correct id will 404.
    return {
        paths,
        fallback: 'blocking',
    };
}
