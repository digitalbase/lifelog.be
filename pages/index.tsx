import React from 'react';
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {Hero} from "@/components/Hero";
import ArticleList from "@/components/ArticleList/ArticleList";

export default class HomePage extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Hero />
                <ArticleList />
                <Footer />
            </>
        );
    }
}
