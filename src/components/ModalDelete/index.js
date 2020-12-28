/*
    Dados da pagina
   * Nome : CotaboxTeste
   * Objetivo: Testar dominio desenvolvimento fullstack
   * Desenvolvedor: Hernani Almeida
   * data criacao: 22/12/2020 - 27/12/2020
   
*/

import React from 'react'
import {Link} from 'react-router-dom'
import {Container , Conteudo} from './styles'
export default function ModalDelete(firstname) {
    return (console.log(firstname),
        <Container>
            <Conteudo>
                <h1>PARABÉNS!</h1>
                <p> Item removido com sucesso</p>
                <Link to="/">
                    <button >Home</button>
                </Link>
            </Conteudo>

        </Container>
    )
}