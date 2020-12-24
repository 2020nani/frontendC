import styled from 'styled-components';

export const Container = styled.div`
width:100vw;
margin:0;
height:14vh;
background: lightSkyblue;
display:flex;
justify-content:center;
align-items:center
form{
  display:flex;
  flex-direction: inline;
}
input{
  display:flex;
  justify-content:center;
  align-items:center;
  text-transform:capitalize;
  border:0;
  border-radius:4px;
  width:22vw;
  height: 5vh;
  padding:0 15px;
  margin-left:1vw;
  font-size:14px
  @media (max-width:750px) {
    font-size:10px;
    padding: 0 1px;
    }
    @media (max-width:300px) {
    font-size:8px;
    padding: 0 0px;
    width:20vw
  }
}
button{
  text-transform:capitalize;
  display:flex;
  justify-content:center;
  align-items:center;
  width:7vw;
  height: 5vh;
  margin-left:2vw;
  margin-right:5vw;
  font-size:14px;
  transition:all 0.5s ease-in-out;
  &:hover{
    background: lightblue;
  }
  &focus{
    outline:none;
  }
  @media (max-width:750px) {
    font-size:10px;
    width:10vw;
    margin-left:1vw;
    margin-right:1vw
    }
    @media (max-width:300px) {
      font-size:8px;
      width:8vw
      }
}
 #link{
   text-decoration:none
 }

`
export const Profile = styled.div`
display: flex;
padding-right:3vw;
flex-direction: column;
justify-content: center;
align-items: center;
@media (max-width:750px) {
  font-size:10px;
  padding-right:0
  h1{
    font-size: 10px
  }
  }
`


