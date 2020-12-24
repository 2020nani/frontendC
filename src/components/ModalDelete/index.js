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