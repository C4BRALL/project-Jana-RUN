import React from "react";
import Input from "../components/Input";

const Contact = (props) => {
  // const [ name, setName ] = useState('');

  return (
    <Input
      type="text"
      name="name"
      labelName="Seu nome: "
      id="name"
      // value={ name }
    />
  )
}

export default Contact;
