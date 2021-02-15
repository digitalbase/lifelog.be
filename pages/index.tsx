import React from 'react';
import {Hero} from "@/components/Hero";
import {ExtendedStory} from "@prezly/sdk/dist/types/Story";
import {ArticleListHorizontal} from "@/components/ArticleList";
import Page from "@/components/Layout/Page";
import {Prezly} from "@/src/providers/prezly";

type HomePageProps = {
    stories: Array<ExtendedStory>;
};

export default class HomePage extends React.Component<HomePageProps> {
    render() {
        const {stories} = this.props;
        const meta = {
            title: 'Lifelog.be',
            description: 'On this page I write about running a company and other things related to the web.'
        }

        return (
            <>
                <Page meta={meta}>
                    <Hero />
                    <ArticleListHorizontal stories={stories} />
                </Page>
            </>
        );
    }
}


export async function getStaticProps({ params, preview }) {
    //const { path } = params;
    const prezlyAPI = new Prezly(process.env.PREZLY_ACCESS_TOKEN);
    const stories = await prezlyAPI.getHomepageStories(Number(process.env.ARTICLES_ON_HOMEPAGE) ?? 3);

    return {
        props: {
            stories,
        },
    };
}