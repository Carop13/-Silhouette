import React from 'react';

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainRoutes from "../MainRoutes/MainRoutes";

import './main.scss';

const Main = () => {
    return (
        <main className={'mainWrapper'}>
            <Header />
            <MainRoutes />
            <Footer />
        </main>
    );
};

export default Main;
