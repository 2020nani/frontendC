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
width: 100vw
height: 100vh;
display: flex;
justify-content: center;
align-items: center;


`
export const Conteudo = styled.div`
max-width: 400px;
max-height: 400px;
background: white;
padding: 30 50;
display: flex;
flex-direction:column;
justify-content:center;
align-items: center;
text-align:center

p{
    margin-top:4px;
}
button{
text-transform:capitalize;
  display:flex;
  justify-content:center;
  align-items:center;
  width:200px;
  height: 50px;
  margin-top:4vh;
  font-size:12px;
  transition:all 0.5s ease-in-out;
  &:hover{
    background: lightblue;
  }
  &focus{
    outline:none;
  }
}
`