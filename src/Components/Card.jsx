import React from "react";
import miImagen from "../Assets/Images/doctor.jpg"
import { Link } from "react-router-dom";
import { useContextoDental } from "../Context";


const Card = ({dname,dusername,did}) => {

const {stateDental, dispatchDental} = useContextoDental()




  
  const addFav = (e)=>{

    let oldfav = stateDental.favs

    let newfav = [...oldfav, {
        dname: dname,
        dusername: dusername,
        did: did
      
    }]


    dispatchDental({type:"SET_FAV", payload: newfav })

   localStorage.setItem('favs', JSON.stringify(newfav))

   e.target.disabled=true

    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      
      <img src={miImagen} alt="imagenDentista" />
      <Link to={`/dentist/${did}`}><h3>{dname}</h3></Link>
      <h5>{dusername}</h5>


        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
