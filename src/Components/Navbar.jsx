import React from 'react'
import { Link } from 'react-router-dom'
import { useContextoDental } from '../Context'
import dtb from '../Assets/Images/dtb.png'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {dispatchDental} = useContextoDental()

  const handleClick = () => {
    dispatchDental({type:'TOGGLE_DARK'})
  }



  return (
    <nav className='navbar'>
      <Link to="/home"><h3>Home</h3></Link>
      <Link to="/contacto"><h3>Contact</h3></Link>
      <Link to="/favs"><h3>Favs</h3></Link>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div className="divboton">
      <img onClick={handleClick} className="btn" src={dtb} alt="boton" />
      <button onClick={handleClick}>Change theme</button>
      </div>
    </nav>
  )
}

export default Navbar