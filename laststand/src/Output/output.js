import React from 'react';


const Output = (props) => {

    return (
<div className="box"> 
<h1>
{props.name}
</h1>
<h5>
{props.age}  
{props.freeText}  
</h5>
 </div>

    )
}


export default Output;