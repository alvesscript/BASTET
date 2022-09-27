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
        <img className='facebook1' src={facebook} alt="foto4" />
        <img className='linkedin1' src={linkedin} alt="foto3" />
        <img className='instagram1' src={instagram} alt="foto2" />
        <img className='imagem11' src={youtube} alt="foto" />
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