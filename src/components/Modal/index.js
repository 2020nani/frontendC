import React from 'react'
import {Link} from 'react-router-dom'
import {Container , Conteudo} from './styles'
export default function Modal(firstname) {
    return (console.log(firstname),
        <Container>
            <Conteudo>
                <h1>PARABÉNS!</h1>
                <p> Cadastro relizado com sucesso</p>
                <Link to="/">
                    <button >Novo cadastro</button>
                </Link>
            </Conteudo>

        </Container>
    )
}