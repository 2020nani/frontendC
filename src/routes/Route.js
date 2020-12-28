/*
    Dados da pagina
   * Nome : CotaboxTeste
   * Objetivo: Testar dominio desenvolvimento fullstack
   * Desenvolvedor: Hernani Almeida
   * data criacao: 22/12/2020 - 27/12/2020
   
*/

import React from 'react';
import { store } from '~/store'
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';


//funcao que define auntenticacao para rotas atraves dos componentes
export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed } = store.getState().auth;
 /* se admin nao estiver logado redireciona login */
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }
  /* se admin logado redireciona para pagina home */
  if (signed && !isPrivate) {
    return <Redirect to="/home" />;
  }

/* se usuario logado e nao houver redirect acessa outras paginas */
  return (
    <Route
      {...rest}
      component={Component}
    />
  );
}

/* defini tipos das props is Private e component */
RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};
/* defini tipos da prop is Private false por default*/
RouteWrapper.defaultProps = {
  isPrivate: false,
};