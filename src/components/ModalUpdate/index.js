import React from 'react'
import {Link} from 'react-router-dom'
import {Container , Conteudo} from './styles'
export default function Modal(props) {
    return (
        <Container>
            <Conteudo>
                <h1 style={{ paddingBottom: '20px' }}>PARABÉNS!</h1>
                <p>Dados do usuario id {props.children[3]} editado com sucesso</p>
                <strong>`Firstname = {props.children[0]}`</strong>
                <strong>`Lastname = {props.children[1]}`</strong>
                <strong>`Participation = {props.children[2]}`</strong>
                <Link to="/">
                    <button >HOME</button>
                </Link>
            </Conteudo>

        </Container>
    )
}