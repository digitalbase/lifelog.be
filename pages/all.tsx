import React from 'react';
import {ExtendedStory} from "@prezly/sdk/dist/types/Story";
import ArticleListVertical from "@/components/ArticleList/ArticleListVertical";
import Page from "@/components/Layout/Page";
import {getPrezlyApi} from "@/utils/prezly";


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
    const api = getPrezlyApi();
    const { stories } = await api.getStories({ pageSize: 200 });

    return {
        props: {
            stories,
        },
    };
}
