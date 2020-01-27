
import React, { Component } from 'react';
import Input from './Input/input';
import Output from './Output/output';
import './app.css';
class App extends Component {

    state = {

        username: "ashley",
        showOutput: false

    }
  


    usernameChangedHandler = (e) => {


        this.setState({ username: e.target.value })


    }

    togglePersonsHandler = (e) => {

            const doesShow = this.state.showOutput;
            this.setState({showOutput: !doesShow});


    }

    render() {




        return (

            <div> <h1>test Quiz </h1>
                <button
                    onClick={this.togglePersonsHandler}>
        show / hide
        </button>
            {this.state.showOutput ?
                <div className="box">
                <Output
                    userName={this.state.username}

                />
            </div> : null
            }
            <div className="box"> <Input changed={this.usernameChangedHandler}
                currentName={this.state.username} /></div>
            </div >

        )

    }



}

export default App;