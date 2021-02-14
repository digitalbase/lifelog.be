import React from 'react';
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {Hero} from "@/components/Hero";
import ArticleList from "@/components/ArticleList/ArticleList";
import { Prezly } from '../src/providers/prezly';
import {ExtendedStory} from "@prezly/sdk/dist/types/Story";


type HomePageProps = {
    stories: Array<ExtendedStory>;
};

export default class HomePage extends React.Component<HomePageProps> {
    render() {
        const {stories} = this.props;

        return (
            <>
                <Header />
                <Hero />
                <ArticleList stories={stories} />
                <Footer />
            </>
        );
    }
}


export async function getStaticProps({ params, preview }) {
    //const { path } = params;
    const prezlyAPI = new Prezly(process.env.PREZLY_ACCESS_TOKEN);
    const numberOfArticles = process.env.ARTICLES_ON_HOMEPAGE ?? 6;

    const jsonQuery = {
        "$and": [
            { "visibility": { '$in': ['public']}},
            { "$and": [{ "lifecycle_status": { '$in': ['published']}}]},
            //{ "$and": [{ "visibility": { '$in': ['public']}}]}
        ],
    };

    const { stories } = await prezlyAPI.searchStories({
        limit: numberOfArticles,
        sortOrder: '-published_at',
        jsonQuery: JSON.stringify(jsonQuery)
    } );

    const extendedStories = [];
    for (const story of stories) {
        const extendedStory = await prezlyAPI.getStory(story.id);

        extendedStories.push(extendedStory);
    }

    return {
        props: {
            stories: extendedStories,
        },
    };
}