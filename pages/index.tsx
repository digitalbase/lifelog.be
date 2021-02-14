import React from 'react';
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

export default class HomePage extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div>Welcome to lifelog.be!</div>
                <Footer />
            </>
        );
    }
}
