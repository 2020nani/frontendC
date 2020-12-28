/*
    Dados da pagina
   * Nome : CotaboxTeste
   * Objetivo: Testar dominio desenvolvimento fullstack
   * Desenvolvedor: Hernani Almeida
   * data criacao: 22/12/2020 - 27/12/2020
   
*/

import styled from 'styled-components';

export const Container = styled.div`
background: #0E0A14ef;
margin-left: 2%;
width: 98%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
position: 'fixed';


`
export const Conteudo = styled.div`
width: 300px;
height: 300px;
background: white;
padding: 30 50;
display: flex;
flex-direction:column;
justify-content:center;
align-items: center;
text-align:center
p,h1{
    margin-top:2vh;
}
button{
text-transform:capitalize;
  display:flex;
  justify-content:center;
  align-items:center;
  width:200px;
  height: 50px;
  margin-top:4vh;
  font-size:14px;
  transition:all 0.5s ease-in-out;
  &:hover{
    background: lightblue;
  }
  &focus{
    outline:none;
  }
}
`