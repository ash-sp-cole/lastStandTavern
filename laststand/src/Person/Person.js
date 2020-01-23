import React from 'react';

import './person.css';



const Person = (props) => {

    let age = (Math.random() * 30);

    return (

        <div className="Person"> Hello w0rld
        <h1> my name is {props.name} </h1>
            <p> I am   {age}</p>

            <p onClick={props.clickMe}> my hobbies are : {props.children}</p>
           
        </div>
    );
};

export default Person;