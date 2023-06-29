/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useContextoDental } from '../Context'
import { useParams } from 'react-router-dom'
import axios from 'axios'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const {stateDental, dispatchDental} = useContextoDental()
  const params = useParams()
  const urlDentist = 'https://jsonplaceholder.typicode.com/users/' + params.id

  useEffect(()=>{
    axios(urlDentist)
    .then(res=> dispatchDental({type:'GET_DENTIST', payload: res.data}))
  },[])
 
  return (
    <div className='divDetail'>
      <h1>Detail Dentist id </h1>
      <table>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
          <td>Website</td>
        </tr>
        <tr>
          <td>{stateDental.dentista?.name}</td>
          <td>{stateDental.dentista?.email}</td>
          <td>{stateDental.dentista?.phone}</td>
          <td>{stateDental.dentista?.website}</td>
        </tr>
        
      </table>
    </div>
  )
}

export default Detail