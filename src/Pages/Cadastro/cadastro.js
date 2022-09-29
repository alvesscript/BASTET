import React from 'react';
import './cadastro.css'
import undraw from '../../img/undraw.png';

export function Cadastro() {
  return (
    <body>
      <div className='container_formulário'>
        
        <div className='form-img'>
          <img src={undraw} alt='Cadastro' />
        </div>

          <form className="form" >
            <legend className="legend"><b>Criar Conta</b></legend>
            <p>Já é um membro?<a href='http://localhost:3002/login'>Login</a></p>
            <br/>
            <div className="inputBox">
              <input type="text" required="yes" name="nome" id="nome" class="inputUser required" />
              <label for="nome" className="labelInput">Nome Completo</label>
            </div>
            <br/>
            <div className="inputBox">
              <input type="text" required="yes" name="email" id="email" class="inputUser required" />
              <label for="email" className="labelInput">Email</label>
            </div>
            <br/>
            <div className="inputBox">
              <input type="tel" required="yes" name="telefone" id="telefone" class="inputUser required" />
              <label for="telefone" className="labelInput">Telefone</label>
            </div>
            <br/>
            <div className='input-genero'>
            <p>Sexo:</p>
            <input type="radio" id="feminino" name="genero" value="feminino" required />
            <label for="feminino">Feminino</label>
            <input type="radio" id="masculino" name="genero" value="masculino" required />
            <label for="masculino">Masculino</label>
            <input type="radio" id="outro" name="genero" value="outro" required />
            <label for="outro">Outro</label>
            </div>
            <br/>
            <div  className='data'>
            <label for="data-nascimento"><b>Data de Nascimento:</b></label>
            <input type="date" name="data-nascimento" id="data-nascimento" />
            </div>
            <br/>
            <div className="inputBox">
              <input required="yes" name="senha" id="senha" class="inputUser required" />
              <label for="sennha" className="labelInput">Senha</label>
            </div>
            <br/>
            <div className="inputBox">
              <input required="yes" name="confirmar" id="confirmar" class="inputUser required" />
              <label for="confirmar" className="labelInput">Confirmar Senha</label>
            </div>
            <br/>
            <input type="file" />
            <br/>
            <input type="submit" name="submit" id="submit" ></input>
          </form>
     
      </div>
    </body>
  );
};

export default Cadastro;