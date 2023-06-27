import React from 'react'
import { Link } from 'react-router-dom'
import { useContextoDental } from '../Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {dispatchDental} = useContextoDental()

  const handleClick = () => {
    dispatchDental({type:'TOGGLE_DARK'})
  }

  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/contacto">Contact</Link>
      <Link to="/favs">Favs</Link>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handleClick}>Change theme</button>
    </nav>
  )
}

export default Navbar