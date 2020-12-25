import React from 'react'
import {Link} from 'react-router-dom'
import {Container , Conteudo} from './styles'
export default function Modal(props) {
    return (
        <Container>
            <Conteudo>
                <h1>PARABÉNS!</h1>
                <p>Usuario {props.children[0]} {props.children[1]} alterado para</p>
                <strong>Novo cadastro</strong>
                <span>`Firstname = {props.children[0]}`</span>
                <span>`Lastname = {props.children[1]}`</span>
                <span>`Participation = {props.children[2]}`</span>
                <Link to="/">
                    <button >HOME</button>
                </Link>
            </Conteudo>

        </Container>
    )
}