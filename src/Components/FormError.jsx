import React from 'react'

const FormError = ({emailCorrect, nameCorrect}) => {



  return (
    <div>
        <h4>Por favor verifique su informacion nuevamente</h4>
        {!emailCorrect && <h5>El email no tiene un formato valido</h5>}
        {!nameCorrect && <h5>El nombre debe tener mas de 5 caracteres</h5>}
    </div>
  )
}

export default FormError
