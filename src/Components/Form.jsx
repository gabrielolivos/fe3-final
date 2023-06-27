/* eslint-disable eqeqeq */
import React, { useState } from "react";
import FormConfirm from "./FormConfirm";
import FormError from "./FormError";




const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const[fullName, setFullName] = useState('')
  const[email, setEmail] = useState("")
  const[formCorrect, setFormCorrect] = useState(0)
  const[nameCorrect, setNameCorrect] = useState(false)
  const[emailCorrect, setEmailCorrect] = useState(false)

  const handleBlurName = (e) => {
    setFullName(e.target.value)
    if(e?.target.value.length>=5){
      setNameCorrect(true)

    }
    else{setNameCorrect(false)}
  }

  const handleBlurEmail = (e) => {
    let emailForm = e.target.value
    const validMail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

    if(validMail.test(emailForm)){
      setEmailCorrect(true)
      setEmail(emailForm)
    }
    else{setEmailCorrect(false)}



  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(emailCorrect&&nameCorrect){
      setFormCorrect(1)
      console.log("email :" + email)
      console.log("full name :" + fullName)
    }
    else{setFormCorrect(2)}


  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Full name' onBlur={handleBlurName}/>
        <input type="text" placeholder='Email'onBlur={handleBlurEmail} />
        <button>Send</button>
        {formCorrect== 1 && <FormConfirm fullName={fullName}/> }
        {formCorrect == 2 && <FormError emailCorrect={emailCorrect} nameCorrect={nameCorrect} /> }
      </form>
    </div>
  );
};

export default Form;
