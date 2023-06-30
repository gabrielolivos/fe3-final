import React from "react";
import miImagen from "../Assets/Images/doctor.jpg";
import { Link } from "react-router-dom";



const Card = ({dname,dusername,did}) => {



  return (
    <div className="card">
      
      <img src={miImagen} alt="imagenDentista" />
      <Link to={`/dentist/${did}`}><h3>{dname}</h3></Link>
      <h5>{dusername}</h5>


        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
    </div>
  );
};

export default Card;
