import React from 'react';

import { useState } from 'react';

import login from '../../img/login.png';
import './styles.css';
import './fundo.css';
import './logototi.css';
import  './var.cores.css';

import totilogo from '../../img/totilogo.png';
import fundo from '../../img/fundo.png';

export function Login() {
    /// Para input reconhecer quando ele tem um valor e quando não tem 
    /// para ativar a classe Email e senha não hora de digitar os dados
    /// e não descer 
    /// vamos criar um estado (const)
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    ///
    return (
        <div className="container">

            <div className="cores-login">
                <div className="cor1login"></div>
                <div className="cor2login"></div>
                <div className="cor3login"></div>
                <div className="cor4login"></div>
                <div className="cor5login"></div>
                <div className="cor6login"></div>
            </div>

            <span className="fundo">
                <img className="f_undo" src={fundo} alt="" />
            </span>

            <div className="container-login">
                <div className="totilogo">
                    <img className="totilogo_" src={totilogo} alt="totilogo" />
                </div>

                <div className="Wrap-login">
                    <form action="" className="login-form"></form>

                    <span className="login-forn-title">
                        <img src={login} alt="" />
                    </span>



                    <div className="wrap-input">
                        <input className={email !== "" ? "has-val input" : "input"}
                            type="email"
                            value={email}
                            // capitura o e-mail (o valor)
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <span className="focus-input" data-placeholder="Email"></span>
                    </div>

                    <div className="wrap-input">
                        <input className={senha !== "" ? "has-val input" : "input"}
                            type="senha"
                            value={senha}
                            // capitura o senha (o valor)
                            onChange={(e) => setSenha(e.target.value)}
                        />
                        <span className="focus-input" data-placeholder="Senha"></span>
                    </div>

                    <div className="container-login-form-btn">
                        <button className="login-form-btn">Continuar</button>
                    </div>

                    <div className="text-center">
                        <span className="text1">Já possui conta?</span>

                        <a className="text2" href="http://localhost:3002/Cadastro" >Cadastra-se</a>

                    </div>
                </div>

            </div>

            <div className="cores-login">
                <div className="cor1login"></div>
                <div className="cor2login"></div>
                <div className="cor3login"></div>
                <div className="cor4login"></div>
                <div className="cor5login"></div>
                <div className="cor6login"></div>
            </div>

        </div>


    );

}

export default Login;
