import React, { Component } from 'react';
import Input from './Input/input';
import Display from './Output/output';
import Validate from './Validate/validate';
import Button from 'react-bootstrap/Button';

import Header from './Header/header';

class App extends Component {

state = {

input:'',

inputArr : []

}

InputChangeHandler = (e) => {

this.setState({
    input: e.target.value

})

}

buttonChangeHandler = (input) => {
  this.setState({
    inputArr:  [...this.state.inputArr, this.input]


  })
  console.log(input);
};





render(){


return (

<div> 
    <Header/>
        <Input input={this.InputChangeHandler}/>
        <Button variant="primary" onClick= {this.buttonChangeHandler}>Submit</Button>
        <Display output={this.state.input}/>

        <Validate name={this.state.input}/>
       
       
     </div>

)
}

}


export default App;