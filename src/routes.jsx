import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import { Cadastro } from "./Pages/Cadastro/cadastro";
import {Login} from "./Pages/Login/login";
<<<<<<< HEAD:src/routes.jsx
import Adm from "./Pages/Adm/Adm";


=======
import {Tabelaapi} from "./Pages/api/apicadastro";
>>>>>>> f401dcc18145ea52719f131d0f950b5f11fcb922:src/routes.js

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Cadastro" element={<Cadastro />}></Route>
<<<<<<< HEAD:src/routes.jsx
                <Route path="/Login" element={<Login/>}></Route>
                <Route path="/Adm" element={<Adm/>}></Route>
=======
                <Route path="/Login" element={<Login />}></Route>
                <Route path="adm" element={<Tabelaapi />}></Route>
>>>>>>> f401dcc18145ea52719f131d0f950b5f11fcb922:src/routes.js
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas;