import React, {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Container, Conteudo } from '../EditarDadosPessoa/styles';
import { toast } from 'react-toastify';
import { Form, Input } from '@rocketseat/unform';
import api from '../../services/api';
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

export default function EditarDadosPessoa( props ) {
  const [modal, setModal] = useState(false);
 
  
  async function handleSubmit({ firstname, lastname, participation }) {
   // setFirstname(firstname)
   // setLastname(lastname)
   // setParticipation(participation)
  
    const response = await api.put(`dados/${props.children}`, {
      firstname,
      lastname,
      participation
    })
    {response.data !== "Porcentagem nao pode ultrapassar 100 porcento." ?
    setModal(true)
    : toast.error("porcentagem acima dos 100% permitido")}
  }

  return (
     
    <Container>
       
    {modal === false ?
    <>
      <Conteudo>
      
      <div>
        <h1>Editar dados do usuario escolhido</h1>
      </div>
     
      <Form schema={schema} onSubmit={handleSubmit} >
        <Input name="firstname" type="text" placeholder="firstname" />
        <Input name="lastname" type="text" placeholder="lastname" />
        <Input name="participation" type="text" placeholder="participation" />

        <button type="submit" >Enviar</button>
        <Link to = "/modalupdatecancel">Cancelar</Link>

      </Form>

      </Conteudo>
     </>
     :<Redirect to="/modalupdate" />} 
    </Container>
     
  );
  
}