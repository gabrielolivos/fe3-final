import React from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form>
        <input type="text" placeholder='Full name'/>
        <input type="text" placeholder='Email'/>
        <button>Send</button>
      </form>
    </div>
  );
};

export default Form;
