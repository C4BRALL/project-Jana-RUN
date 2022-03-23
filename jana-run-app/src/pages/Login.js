import React, { useState } from "react";
import { Forms, LoginBody } from "../components/Elements/LoginElements";
import Input from "../components/Input";

let formElements = [{
  label: "name",
  type: "text",
  key: 'name',
},{
  label: "e-mail",
  type: "email",
  key: 'email',
}]

export default function Login(props) { 
  const [ formData, setFormData ] = useState( [] );
  const onInputChange = (value, key) => {
    setFormData({ ...formData, ...{ [key]: value } })
  }
  const onSubmit = () => {
    alert(JSON.stringify(formData))
  }
  
  return (
    <div>
      <LoginBody>
        <h1>Faça seu login: </h1>
      </LoginBody>
      <Forms>
        {
          formElements.map(formElement => {
            return <div key={formElement.key}>
                <Input
                  labelName={ formElement.label }
                  type={ formElement.type }
                  value={ formData[ formElement.key ] }
                  onChange={ (e) => { e.preventDefault(); onInputChange(e.target.value, formElement.key ) } }                
                />
                <br/>
            </div>
          })
        }
        <button onClick={ onSubmit }>Submit</button>
      </Forms>
    </div>
  )
}
