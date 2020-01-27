import React, { Component } from 'react';
import Input from './Input/input';
import Output from './Output/output';


class App extends Component  {


    state = {
peopleArray:

[
{name: "Ash",age : 30},
{name: "Laura",age : 21},
{name: "Sam",age : 19},
{name: "Daniel",age : 64},
],
showDisplay:  true

    }
    


render(){

let display = null;

if (this.state.showDisplay) {

display = (
<div>

    {this.state.peopleArray.map(peopleArray => {

        return (
        <Output 
        name={peopleArray.name}
        age={peopleArray.age}
/>
    })}
    
        </div>
    )}




return (

<div> Welcome
    
<Input/>
{display}
    
    
    </div>

)








}

}
export default App;