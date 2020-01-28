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
{name: "Daniel",age : 64}
],
showDisplay:  true,
freeText: ''

    }
    
eventChangeHandler= (e) => {

this.setState ({
    freeText: e.target.value
})
console.log(this.state.freeText);
}

showChangeHandler = (e)=> {

    const doesShow = this.setState.showDisplay;
    this.setState({
        showDisplay : !doesShow

    });



}

deleteChangeHandler = (peopleArrayIndex) => {

const peopleArray = this.state.peopleArray.slice();
peopleArray.splice(peopleArrayIndex, 1);
this.setState({
    peopleArray: peopleArray
})




}


render(){

let display = null;

if (this.state.showDisplay) {

display = (
<div>
    {this.state.peopleArray.map( (peopleArray,index) => {

        return <Output 

            click={()=> this.deleteChangeHandler(index)}
            name={peopleArray.name} age={peopleArray.age} freeText={this.state.freeText}
        />
    }

    )}
      
 </div>
   

    )}


return (

<div> Welcome
    
<Input freeText ={this.eventChangeHandler} />
<button onClick={this.showChangeHandler}> VIEW RESULTS </button>
{display}
    
    
    </div>

)








}

}
export default App;