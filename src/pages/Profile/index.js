import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from './styles';

import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/admin/actions';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

//import logo from '~/assets/logo.svg';



const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-amil válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function Profile() {
  const profile = useSelector(state => state.admin.profile);
  console.log(profile)
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest([data, profile.id]));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <div>
        <Link to="/home">HOME</Link>
      </div>
      <Form initialData={profile} onSubmit={handleSubmit}>
       

        <Input name="name" placeholder="Nome completo" />
        <Input name="email" placeholder="Seu endereço completo" />
        <hr />
        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de senha"
        />

        <button type="submit">Atualizar perfil</button>
      </Form>

      <button type="submit" onClick={handleSignOut}>
        Sair 
      </button>
    </Container>
  );
}