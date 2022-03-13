import React from "react";

const Input = (props) => {
  return (
    <div>
        <label htmlFor={ props.id }>
          { props.labelName }
          <br />
          <input
            type={ props.type }
            id={ props.id }
            name={ props.name }
            // value={ props.value }
            // onChange={ props.onChange }
          />
        </label>
      </div>
  )
}

export default Input;
