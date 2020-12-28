/*
    Dados da pagina
   * Nome : CotaboxTeste
   * Objetivo: Testar dominio desenvolvimento fullstack
   * Desenvolvedor: Hernani Almeida
   * data criacao: 22/12/2020 - 27/12/2020
   
*/

import React from 'react';
import { Switch} from 'react-router-dom';
import Route from './Route'
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import Modal from '../components/Modal';
import ModalUpdate from '../components/ModalUpdate';
import ModalUpdateCancel from '../components/ModalUpdateCancel';
import ModalDelete from '../components/ModalDelete';

import Profile from '../pages/Profile';
export default function App() {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/cadastro" component={Signup} />

      <Route path="/home" component={Home} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/modal" component={Modal} isPrivate />
      <Route path="/modalupdate" component={ModalUpdate} isPrivate />
      <Route path="/modalupdatecancel" component={ModalUpdateCancel} isPrivate />
      <Route path="/modaldelete" component={ModalDelete} isPrivate />
    
       
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}