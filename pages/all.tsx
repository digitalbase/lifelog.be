import React from 'react';
import { Prezly } from '@/src/providers/prezly';
import {ExtendedStory} from "@prezly/sdk/dist/types/Story";
import ArticleListVertical from "@/components/ArticleList/ArticleListVertical";
import Page from "@/components/Layout/Page";


type HomePageProps = {
    stories: Array<ExtendedStory>;
};

export default class HomePage extends React.Component<HomePageProps> {
    render() {
        const {stories} = this.props;
        const meta = {
            title: 'All articles',
            description: 'All articles i\'ve written'
        }

        return (
            <>
                <Page meta={meta}>
                    <ArticleListVertical stories={stories} />
                </Page>
            </>
        );
    }
}


export async function getStaticProps({ params, preview }) {
    //const { path } = params;
    const prezlyAPI = new Prezly(process.env.PREZLY_ACCESS_TOKEN);
    const stories = await prezlyAPI.getHomepageStories(200);

    return {
        props: {
            stories,
        },
    };
}