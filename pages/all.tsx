import React from 'react';
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import { Prezly } from '../src/providers/prezly';
import {ExtendedStory} from "@prezly/sdk/dist/types/Story";
import ArticleListVertical from "@/components/ArticleList/ArticleListVertical";


type HomePageProps = {
    stories: Array<ExtendedStory>;
};

export default class HomePage extends React.Component<HomePageProps> {
    render() {
        const {stories} = this.props;

        return (
            <>
                <Header />
                    <ArticleListVertical stories={stories} />
                <Footer />
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