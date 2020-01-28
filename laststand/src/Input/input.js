 import React from 'react';

 const Input = (props) => {

return (


<div className="box"> <hr/> <br/><br/>Input student search   : 
    <input type ="text" onChange = {props.freeText}></input> <br/> <br/><hr/>

</div>

)



 }

 export default Input;