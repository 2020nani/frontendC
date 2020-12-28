/*
    Dados da pagina
   * Nome : CotaboxTeste
   * Objetivo: Testar dominio desenvolvimento fullstack
   * Desenvolvedor: Hernani Almeida
   * data criacao: 22/12/2020 - 27/12/2020
   
*/

import styled from 'styled-components';
export const Container = styled.div`
width:100vw;
margin:0;
font-family: Arial, Helvetica, sans-serif;
h1{
  text-align:center
  margin-top:2vw;
  margin-left:2vw
}
p{
  text-align:center;
  margin-top:2vw;
  margin-left:1vw;
  font-size:2vw
}
`
export const Conteudo = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:98vw;
margin-left: 1vw;
@media (max-width:750px) {
 flex-direction: column;
 }
`

export const Tabela = styled.div`
display:flex;
align-items: center;
justify-content:center;
width:55vw;
margin-top: 3vh;
margin-left:1vw;
@media (max-width:750px) {
  width:100vw;
  }

table{
  width:55vw;
  border-collapse: collapse;
  @media (max-width:750px) {
    width:98vw;
    }
}
th{
  width:20vw;
  height:6vh;
  border: 1px solid black;
  font-size:14px
  @media (max-width:350px) {
    font-size:9px
    }
}

td{
  width:20vw;
  height:6vh;
  text-align:center;
  font-size:14px;
  border: 1px solid black;
  @media (max-width:350px) {
    font-size:9px
    }
}

`
export const Grafico = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:30vw;
margin-top: 3vh;
margin-left: 12vw;
margin-right:1vw;
@media (max-width:750px) {
  width:100vw
  }

`
