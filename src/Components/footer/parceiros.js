import React from 'react';

function Test() {
return (
 <div className='container'>
    <div className='item'>
    <img
   className='parceiro1'
    src={require('../imagenes/parceiro1.png')} 
    alt='parceiro1'/>

   <img
    className='parceiro2'
    src={require('../imagenes/parceiro2.jpg')}
    alt='parceiro2'/>

    <img
    className='parceiro3'
    src={require('../imagenes/parceiro3.jpg')}
    alt='parceiro3'/>

    <img
    className='parceiro4'
    src={require('../imagenes/parceiro4.jpg')}
    alt='parceiro4'/>

    <img
    className='parceiro5'
    src={require('../imagenes/parceiro5.png')}
    alt='parceiro5'/>

   <img
    className='parceiro6'
    src={require('../imagenes/parceiro6.jpg')}
    alt='parceiro6'/>
   
   <img
    className='parceiro7'
    src={require('../imagenes/parceiro7.jpg')}
    alt='parceiro7'/>
    
    </div>

  </div>
  
);
}

export default Test;