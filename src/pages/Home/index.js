import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Chart } from 'react-google-charts';
import { MdDelete,MdSystemUpdateAlt} from 'react-icons/md'
import Header from '../../components/Header';
import EditarDadosPessoa from '../../components/EditarDadosPessoa';
import { Container, Grafico, Tabela, Conteudo } from '../Home/styles'
import api from '../../services/api'

export default function Home() {
  const [options, setOptions] = useState({
    title: 'Grafico de participacao',
    is3D: true
  });
  const [idEdit, setIdEdit] = useState( );
  const [edit, setEdit] = useState( false );
  const [data, setData] = useState([
    ['nome', 'participacao'],

  ]);
  const [dados, setDados] = useState([])

  useEffect(() => {
    async function loadDados() {

      const response = await api.get('dados')
     
      response.data.map(elem => (

        data.push([elem.firstname, elem.participation])
      ))
      setDados(response.data)


    }
    loadDados()
  }, [])

  async function remover(id) {
    await api.delete(`dados/${id}`)
  }

  function handleSubmit(id) {
    setIdEdit(id)
    setEdit(true)
  
  }

  return (
     
    <Container>
       <Header />
       {edit === false ?
       <>
      <h1>DATA</h1>
      <p>lorem ipsum dolor sit amet consectetuer adipiscing elit</p>
      
      <Conteudo>
     
        <Tabela>
          <table>
            <tr>
              <th></th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Participation</th>
              <th>Atualizar </th>
              <th>Deletar</th>
            </tr>
            {dados.map((data,index) => (
              <tr>
                <td>{index+1}</td>
                <td>{data.firstname}</td>
                <td>{data.lastname}</td>
                <td>{data.participation+'%'}</td>
                <td >
                      <button type="button" onClick={() => handleSubmit(data.id)}><MdSystemUpdateAlt color="#7159c1" /></button>
                </td>
                <td >
                  <Link  to='/modaldelete'>
                    <button id="remover" type="button" onClick={() => remover(data.id)}>
                      <MdDelete  color="#7159c1" />
                    </button>
                  </Link>
                </td>
              </tr>


            ))}

          </table>
          </Tabela>

        <Grafico>
          <Chart
            width={'400px'}
            height={'400px'}
            chartType="PieChart"
            data={data}
            options={options}
           
          />
        </Grafico>

      </Conteudo>
       </>
       : <EditarDadosPessoa>{idEdit}</EditarDadosPessoa>}
    </Container>
    
  );
  
}

