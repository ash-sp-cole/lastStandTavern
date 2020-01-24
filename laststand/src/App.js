import React, { Component } from 'react';
import Person from './Person/Person';


class App extends Component {

    state = {

        persons:[
            {name: ' ash'},
       
        ]

    };


    switchNameHandler = () =>{

            this.setState({
        
                persons:[
                    {name: ' tim'},
                    {name: ' james'}
                ]

            })
    }

    

render(){


    return (

        <div> 

            <Person name={this.state.persons[1].name}> horse riding </Person>
            <button onClick={this.switchNameHandler}> next person</button>
            <Person 
            name={this.state.persons[0].name}
            clickMe={this.switchNameHandler}
            > swimming</Person>
            </div>
    );  
};
};
export default App;