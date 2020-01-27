import React from 'react';



 const Input = (props) => {


return (
    <div> <h3> {props.name}</h3>

    <input type="text"  onChange = {props.changed} value={props.currentName} ></input>

    </div>

)


}

export default Input;