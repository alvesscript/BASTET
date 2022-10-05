import React from 'react';
import './footer2.css';
import youtube from '../../../img/youtube.png';
import totilogo from '../../../img/totilogofooter.png';
import instagram from '../../../img/instagram.png';
import facebook from '../../../img/facebook.png';
import linkedin from '../../../img/linkedin.png';
import contatos from '../../../img/contatos.png';


export function footer2() {
    return (


<div className='principaldiv'>

    <div className='imagensfooter'>
        <img className='totilogofooter' src={totilogo} alt="foto1" />
       
        <div className='corunica'>CONTATOS</div>
        
    <div className='redesbaixo'>
    <a href="https://www.facebook.com/toti.diversidade/" target="_blank"><img className='facebook1' src={facebook} alt="foto4" /></a>
    <a href=" https://br.linkedin.com/school/toti-diversidade/" target="_blank"><img className='linkedin1' src={linkedin} alt="foto3" /></a>
    <a href=" https://www.instagram.com/toti.diversidade/" target="_blank"><img className='instagram1' src={instagram} alt="foto2" /></a>
    <a href=" https://www.youtube.com/c/TotiDiversidade" target="_blank"><img className='imagem11' src={youtube} alt="foto" /></a>
    </div>
    </div>

    <div className='corfinal'></div>
    

    <div className='coresfooter'>
        <div className='cores1'></div>
        <div className='cores2'></div>
        <div className='cores3'></div>
        <div className='cores4'></div>
        <div className='cores5'></div>
        <div className='cores6'></div>
    </div>
</div>

);    
};

export default footer2;