import React from 'react';
import {Hero} from "@/components/Hero";
import {ExtendedStory} from "@prezly/sdk/dist/types/Story";
import {ArticleListHorizontal} from "@/components/ArticleList";
import Page from "@/components/Layout/Page";
import {getPrezlyApi} from "utils/prezly";

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
    const api = getPrezlyApi();
    const stories = await api.getStoriesExtended({ pageSize: 3 });

    return {
        props: {
            stories,
        },
    };
}
