import React from "react";
import { InputForm } from "./Elements/LoginElements";

const Input = (props) => {
  return (
    <div>
        <label htmlFor={ props.id }>
          { props.labelName }
          <br />
          <InputForm
            { ...props }
          />
        </label>
      </div>
  )
}

export default Input;
