import React from 'react';
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {Hero} from "@/components/Hero";
import ArticleList from "@/components/ArticleList/ArticleList";
import { Prezly } from '../src/providers/prezly';


export default class HomePage extends React.Component<HomePageProps> {
    render() {
        return (
            <>
                <Header />
                <Hero />
                <Footer />
            </>
        );
    }
}


export async function getStaticProps({ params, preview }) {
    //const { path } = params;
    const prezlyAPI = new Prezly(process.env.PREZLY_ACCESS_TOKEN);

    return {
        props: {
        },
    };
}