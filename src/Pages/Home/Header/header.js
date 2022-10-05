import React from 'react';
import './Header.css';
import youtube from '../../../img/youtube.png';
import totilogo2 from '../../../img/totilogo2.png';
import instagram from '../../../img/instagram.png';
import facebook from '../../../img/facebook.png';
import linkedin from '../../../img/linkedin.png';

export function Header() {
    return (

        <div>
            <div className='Container_header'>
                <div className='cor1'></div>
                <div className='cor2'></div>
                <div className='cor3'></div>
                <div className='cor4'></div>
                <div className='cor5'></div>
                <div className='cor6'></div>
            </div>


            <div className='imagens-header'>
                <div className='totilogo2'>
                    <img src={totilogo2} alt="foto1" />
                </div>
                <div className='redes-header'> 
                <a href="https://www.facebook.com/toti.diversidade/" target="_blank"><img className='facebook' src={facebook} alt="foto4" /></a>
                <a href=" https://br.linkedin.com/school/toti-diversidade/" target="_blank"><img className='linkedin' src={linkedin} alt="foto3" /></a>
                <a href=" https://www.instagram.com/toti.diversidade/" target="_blank"><img className='instagram' src={instagram} alt="foto2" /></a>
                <a href=" https://www.youtube.com/c/TotiDiversidade" target="_blank"><img className='imagem1' src={youtube} alt="foto" /></a>
                </div>
            </div>

            <div className='textos'>
                <a href='#'>FORMAÇÃO</a>
                <a href='#'>TRABALHE CONOSCO</a>
                <a href='#'>BLOG</a>
                <a href='#'>AJUDA</a>
                <div className='button_login'>
                    <a href="http://localhost:3002/login"><button className='button_login'>LOGIN</button> </a>

                </div>
            </div>


        </div>



    );
};
