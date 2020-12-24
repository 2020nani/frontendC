import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import api from '../../services/api';
import Modal from '../Modal';
import { Container, Profile } from '../Header/styles';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  firstname: Yup.string()
    .required('Firstname e obrigatorio'),
  lastname: Yup.string()
    .required('Lastname e obrigatorio'),
  participation: Yup.number()
    .required()
    .min(0.1, "valor minimo e 0.1")
    .max(100, "valor maximo e 100"),
})
export default function Header() {

  const profile = useSelector(state => state.admin.profile);
  const [modal, setModal] = useState(false);
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [participation, setParticipation] = useState();

 async function handleSubmit({ firstname, lastname, participation }) {
    setFirstname(firstname)
    setLastname(lastname)
    setParticipation(participation)
    const response = await api.post('dados', {
      firstname,
      lastname,
      participation
    })
    {response.data != "Porcentagem nao pode ultrapassar 100 porcento." ?
    setModal(true)
    : toast.error("porcentagem acima dos 100% permitido")}
    
  }

  return (
    
    <Container> 
      {modal === false ?
      <>
      <Form schema={schema} onSubmit={handleSubmit} >
        <Input name="firstname" type="text" placeholder="firstname" />
        <Input name="lastname" type="text" placeholder="lastname" />
        <Input name="participation" type="text" placeholder="participation" />

        <button type="submit" >Enviar</button>


      </Form>
      <Profile>
        <span>Administrador</span>
        <strong>{profile.name}</strong>
        <Link to="/profile">Meu perfil</Link>
      </Profile>
      </>
      :<Redirect to="/modal" />}
    </Container>

  );

}
