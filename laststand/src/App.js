
import React, { Component } from 'react';
import Input from './Input/input';
import Output from './Output/output';
import './app.css';
class App extends Component {

render () {


    return (

        <div> <h1>test Quiz </h1> 
    
        <div className ="box"> <Output/></div>
        <div className ="box"> <Input/></div>
        </div>

    )

}



}

export default App;