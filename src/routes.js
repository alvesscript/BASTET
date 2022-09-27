import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import { Cadastro } from "./Pages/Cadastro/cadastro";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Cadastro" element={<Cadastro />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas;