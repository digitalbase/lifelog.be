import React from 'react';
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {Hero} from "@/components/Hero";
import { Prezly } from '../src/providers/prezly';
import {ExtendedStory} from "@prezly/sdk/dist/types/Story";
import parseNextPathParams from "../src/util/parseNextPathParams";
import {Article} from "@/components/Article";


type ArticlePageProps = {
    story: ExtendedStory;
};

export default class HomePage extends React.Component<ArticlePageProps> {
    render() {
        const { story } = this.props;

        return (
            <>
                <Header />
                    <Article story={story} />
                <Footer />
            </>
        );
    }
}


export async function getStaticProps({ params, preview }) {
    const { slug } = params;
    const prezlyAPI = new Prezly(process.env.PREZLY_ACCESS_TOKEN);
    const story = await prezlyAPI.fetchStoryBySlug(slug);

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
    const prezlyAPI = new Prezly(process.env.PREZLY_ACCESS_TOKEN);
    const { stories } = await prezlyAPI.getStories();

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
