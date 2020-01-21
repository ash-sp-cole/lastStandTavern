import React, { Component } from 'react';
import Person from './Person/Person';



class App extends Component {

    state = {

        persons:[
            {name: ' ash'},
            {name: ' james'}
        ]

    };


render(){


    return (

        <div> 

            <Person name={this.state.persons[1].name}> horse riding </Person>
            <button> next person</button>
            <Person name={this.state.persons[0].name}> swimming</Person>
            </div>
    );  
};
};
export default App;