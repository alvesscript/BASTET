import React from 'react';
import './apiprincipal.css';
import './componente.css';
import './grid.css';
import './mensagem.css';
import './reset.css'


export function Tabelaapi() {
  return(
    <div>
      <main>
        <div className='caixacompleta'>
          <h2 className='tituloh2'> Lista de Alunos</h2>

          <div className='row'>
                  <div className='col-10 col-s-12'></div>
                  <div className='col-10 col-s-12'>
                    <button id='btnConsultarAluno' className='btn btn-info'>Consultar</button>
                  </div>
                </div>

          <table id='tabelagral'>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Trabalho</th>
                <th>Prova</th>
                <th>Média</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr className='aluno' id='primeiro-aluno'>
                <td className='td-nome'>Sofia Valentina</td>
                <td className='td-trabalho'>10.0</td>
                <td className='td-prova'>10.0</td>
                <td className='td-media'>0</td>
                <td className='td-acoes'>
                  <span className='btn-excluir'>Excluir</span>
                </td>
              </tr>

              <tr className='aluno' id='segundo-aluno'>
                <td className='td-nome'>Fredy Alves</td>
                <td className='td-trabalho'>08.0</td>
                <td className='td-prova'>10.0</td>
                <td className='td-media'>0</td>
                <td className='td-acoes'>
                  <span className='btn-excluir'>Excluir</span>
                </td>
              </tr>

              <tr className='aluno' id='terceiro-aluno'>
                <td className='td-nome'>Angely Allen</td>
                <td className='td-trabalho'>10.0</td>
                <td className='td-prova'>10.0</td>
                <td className='td-media'>0</td>
                <td className='td-acoes'>
                  <span className='btn-excluir'>Excluir</span>
                </td>
              </tr>

              <tr className='aluno' id='quarto-aluno'>
                <td className='td-nome'>Gilson Agostinho</td>
                <td className='td-trabalho'>10.0</td>
                <td className='td-prova'>10.0</td>
                <td className='td-media'>0</td>
                <td className='td-acoes'>
                  <span className='btn-excluir'>Excluir</span>
                </td>
              </tr>

              <tr className='aluno' id='quinto-aluno'>
                <td className='td-nome'>Basted Group</td>
                <td className='td-trabalho'>10.0</td>
                <td className='td-prova'>10.0</td>
                <td className='td-media'>0</td>
                <td className='td-acoes'>
                  <span className='btn-excluir'>Excluir</span>
                </td>
              </tr>

              <tr className='aluno' id='sexto-aluno'>
                <td className='td-nome'>Totilson</td>
                <td className='td-trabalho'>10.0</td>
                <td className='td-prova'>10.0</td>
                <td className='td-media'>0</td>
                <td className='td-acoes'>
                  <span className='btn-excluir'>Excluir</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </main>

        <section>
          <div className='caixass2'>
            <h2 className='titulo-h2'>Cadastro de Aluno</h2>
            <form id='formaluno'>
              <div className='row'>
                <div className='col-12 col-s-12' id='divMensagens'>
                </div>
              </div>

              <div className='row'>
                <div className='col-4 col-s-12'>
                  <label form='txtNome' className='rotolo'>Nome:</label>
                  <input type='text' id='txtNome' name='nome' placeholder='Informe o nome aqui'></input>
              </div>
              </div>
                <div className='col-4 col-s-6'>
                  <label form='txtTrabalho' className='rotolo'>Nota do Trabalho</label>
                  <input type='number' id='txtTrabalho' name='trabalho' className='caixa-texto'></input>
                </div>
                <div className='col-4 col-s-6'>
                  <label form='txtProva' className='rotolo'>Nota Prova</label>
                  <input type='number' id='txtProva' name='prova' className='caixa-texto'></input>
                </div>
                <div className='row'>
                  <div className='col-10 col-s-12'></div>
                  <div className='col-10 col-s-12'>
                    <button id='btnSalvarAluno' className='btn btn-info'>Salvar</button>
                  </div>
                </div>
            </form>
          </div>
        </section>
    </div>
  )
}

export default Tabelaapi;

