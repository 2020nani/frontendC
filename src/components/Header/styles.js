/*
    Dados da pagina
   * Nome : CotaboxTeste
   * Objetivo: Testar dominio desenvolvimento fullstack
   * Desenvolvedor: Hernani Almeida
   * data criacao: 22/12/2020 - 27/12/2020
   
*/

import styled from 'styled-components';

export const Container = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center
width:100vw;
margin-top:1vh;
margin:0;
background: lightSkyblue;

form{
  width:100vw;
  margin-top: 2vh;
  margin-bottom:2vh;
  display:flex;
  justify-content:center;
  align-items:center
  flex-direction: inline;
  
}
input{
  display:flex;
  justify-content:center;
  align-items:center;
  text-transform:capitalize;
  border:0;
  border-radius:4px;
  width:20vw;
  height: 50px;
  padding:0 15px;
  margin-left:1vw;
  font-size:14px
  @media (max-width:750px) {
    padding: 0 1px;
    width:16vw;
    }
    @media (max-width:510px) {
    padding: 0 0px;
    font-size:10px;
    width:14vw
  }
  @media (max-width:410px) {
    padding: 0 0px;
    font-size:6px;
    width:10vw
  }
}
button{
  text-transform:capitalize;
  display:flex;
  justify-content:center;
  align-items:center;
  width:8vw;
  height: 50px;
  margin-left:1vw;
  margin-right:5vw;
  font-size:12px;
  transition:all 0.5s ease-in-out;
  &:hover{
    background: lightblue;
  }
  &focus{
    outline:none;
  }
  @media (max-width:750px) {
    font-size:10px;
    margin-left:1vw;
    margin-right:1vw
    }
    @media (max-width:350px) {
      font-size:8px;
      }
}
 #link{
   text-decoration:none
 }

`
export const Profile = styled.div`
width:100vw;
margin-top:2vh;
display: flex;
justify-content: center;
align-items: center;

`
export const ConteudoProfile = styled.div`
width:50vw;
display: flex;
justify-content: space-between;
align-items: center;
@media (max-width:750px) {
  width:60vw
  }
  @media (max-width:500px) {
    width:95vw
    }
`


