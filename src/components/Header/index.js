import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import api from '../../services/api';
import { Container, ConteudoProfile, Profile } from '../Header/styles';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  firstname: Yup.string()
    .required(),
  lastname: Yup.string()
    .required(),
  participation: Yup.number()
    .required("Campo requerido")
    .min(0.1, "valor minimo e 0.1")
    .max(100, "valor maximo e 100"),
    
})

export default function Header() {
  
  const profile = useSelector(state => state.admin.profile);
  const [modal, setModal] = useState(false);
  

 async function handleSubmit({ firstname, lastname, participation }) {
    
    const response = await api.post('dados', {
      firstname,
      lastname,
      participation
    })
    {response.data != "Porcentagem nao pode ultrapassar 100 porcento." ?
    setModal(true)
    : toast.error("porcentagem acima dos 100% permitido")}
    
  }

  return (console.log(profile),
    
    <Container> 
      {modal === false ?
      <>
      
       <Profile>
       <ConteudoProfile>
        <strong>Administrador: </strong>
        <span>ID: {profile.id} NOME: {profile.name}</span>
        <Link to="/profile">Meu perfil</Link>
        </ConteudoProfile>
      </Profile>
      

      <Form schema={schema} onSubmit={handleSubmit} >
        <Input name="firstname" type="text" placeholder="firstname" />
        <Input name="lastname" type="text" placeholder="lastname" />
        <Input name="participation" type="text" placeholder="participation" />

        <button type="submit" >Enviar</button>


      </Form>
     
      </>
      :<Redirect to="/modal" />}
    </Container>

  );

}
