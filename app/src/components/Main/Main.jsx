import React from 'react';

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainRoutes from "../MainRoutes/MainRoutes";

const Main = () => {
    return (
        <main>
            <Header />
            <MainRoutes />
            <Footer />
        </main>
    );
};

export default Main;
