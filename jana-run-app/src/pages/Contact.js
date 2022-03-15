import React, { useState } from "react";
import Input from "../components/Input";
// import Input from "../components/Input";

let formElements = [{
  label: "name",
  type: "text",
  key: 'name',
},{
  label: "e-mail",
  type: "email",
  key: 'mail',
}]

export default function Contact(props) { 
  const [ formData, setFormData ] = useState( [] );
  const onInputChange = (value, key) => {
    setFormData({ ...formData, ...{ [key]: value } })
  }
  const onSubmit = () => {
    alert(JSON.stringify(formData))
  }
  
  return (
    <form>
      {
        formElements.map(formElement => {
          return <div key={formElement.key}>
              <Input
                labelName={ formElement.label }
                type={ formElement.type }
                value={ formData[ formElement.key ] }
                onChange={ (e) => { e.preventDefault(); onInputChange(e.target.value, formElement.key ) } }                
              />
          </div>
        })
      }
      <button onClick={ onSubmit }>Submit</button>
    </form>
  )
}
