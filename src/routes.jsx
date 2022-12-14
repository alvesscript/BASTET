import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import { Cadastro } from "./Pages/Cadastro/cadastro";
import {Login} from "./Pages/Login/login";
import Adm from "./Pages/Adm/Adm";



function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Cadastro" element={<Cadastro />}></Route>
                <Route path="/Login" element={<Login/>}></Route>
                <Route path="/Adm" element={<Adm/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas;