import React from 'react';
import './Header.css';
import youtube from '../../assests/youtube.png';
import totilogo from '../../assests/totilogo.png';
import instagram from '../../assests/instagram.png';
import facebook from '../../assests/facebook.png';
import linkedin from '../../assests/linkedin.png';

export function Header() {
    return (

        <div>
            <div className='container'>
                <div className='cor1'></div>
                <div className='cor2'></div>
                <div className='cor3'></div>
                <div className='cor4'></div>
                <div className='cor5'></div>
                <div className='cor6'></div>
            </div>


            <div className='todasimagens'>
                <div className='totilogo'>
                <img src={totilogo} alt="foto1" />
                </div>
                <div className='redes'>
                <img className='facebook' src={facebook} alt="foto4" />
                <img className='linkedin' src={linkedin} alt="foto3" />
                <img className='instagram' src={instagram} alt="foto2" />
                <img className='imagem1' src={youtube} alt="foto" />
                </div>
            </div>

            <div className='textos'>
                <a href='#'>FORMAÇÃO</a>
                <a href='#'>TRABALHE CONOSCO</a>
                <a href='#'>BLOG</a>
                <a href='#'>AJUDA</a>
                <div className='button_login'>
                <button className='button_login'>LOGIN</button>
                </div>
            </div>


        </div>



    );
};


