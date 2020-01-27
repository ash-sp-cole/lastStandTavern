import React from 'react';



const Output = (props) => {
return (


<div> <h3> Text ENTER </h3>

<input type="text">{props.children}</input>
</div>
)

}


export default Output;