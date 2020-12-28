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
export default function Modal(props) {
    return (
        <Container>
            <Conteudo>
                <h1 style={{ paddingBottom: '20px' }}>OK!</h1>
                <p>Edicao cancelada com sucesso</p>
                
                <Link to="/">
                    <button >HOME</button>
                </Link>
            </Conteudo>

        </Container>
    )
}