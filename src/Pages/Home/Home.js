import React from "react";
import { Banner } from './Banner/banner';
import { Banner_2 } from './Banner_2/banner_2';
// import {Cadastro} from './Pages/Cadastro/Cadastro/cadastro';
import { Header } from './Header/header';
import { Footer } from './Footer/footer';
import { Cardpr } from './Card/Cardpr';


export function Home() {
    return (
        <>
            <Header />
            <Banner />
            <Banner_2 />
            <Cardpr />
            <Footer />
        </>
    );
};

export default Home;