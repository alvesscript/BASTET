import React from 'react';

export function Test() {
return (
 <div className='container'>
    <div className='item'>
    <img
   className='parceiro1'
    src={require('../../../img/parceiro1.png')} 
    alt='parceiro1'/>

   <img
    className='parceiro2'
    src={require('../../../img/parceiro2.jpg')}
    alt='parceiro2'/>

    <img
    className='parceiro3'
    src={require('../../../img/parceiro3.jpg')}
    alt='parceiro3'/>

    <img
    className='parceiro4'
    src={require('../../../img/parceiro4.jpg')}
    alt='parceiro4'/>

    <img
    className='parceiro5'
    src={require('../../../img/parceiro5.png')}
    alt='parceiro5'/>

   <img
    className='parceiro6'
    src={require('../../../img/parceiro6.jpg')}
    alt='parceiro6'/>
   
   <img
    className='parceiro7'
    src={require('../../../img/parceiro7.jpg')}
    alt='parceiro7'/>
    
    </div>

  </div>
  
);
}

export default Test;