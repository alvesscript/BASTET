import React from 'react';
import './cores.css';
import youtube from './img/youtube.png';
import totilogo from './img/totilogo.png';
import instagram from './img/instagram.png';
import facebook from './img/facebook.png';
import linkedin from './img/linkedin.png';








const App = () => {
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
  
<img className='totilogo' src={totilogo} alt="foto1" />

<img className='facebook' src={facebook} alt="foto4" />
<img className='linkedin' src={linkedin} alt="foto3" />
<img className='instagram' src={instagram} alt="foto2" />
<img className='imagem1' src={youtube} alt="foto" />
</div>

<div className='textos'>

<h1>FORMAÇÃO</h1>
<h1>BLOG</h1>
<h1>TRABALHE CONOSCO</h1>
<h1>AJUDA</h1>
<h1>LOGIN</h1>
</div>


</div>



);
};
export default App;



