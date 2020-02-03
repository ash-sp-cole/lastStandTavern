import React from 'react';
import Jumbotron from'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';




const Input = (props) => {

return (
<div> 

<Jumbotron>
  <h1>Please enter your paragraph : </h1>
 

<br/>
  <input type="text" onChange={props.input}></input>
  <p>
      <br/>
    
  </p>
</Jumbotron>




 
</div>
)


}


export default Input;