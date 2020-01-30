import React from 'react';


const Validate = (props) => {

 const para = props.name
 const n = para.length
let valid = ' text is not long enough '
if (n > 10) {

valid = "text IS LONG ENOUGH"

}



return (

<div className="box">  
<h5> Length of text input is  : <br/> {n}</h5>
<br/>
{valid}
</div>



)


}

export default Validate;