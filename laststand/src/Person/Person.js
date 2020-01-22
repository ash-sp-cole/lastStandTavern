import React from 'react';

const Person = (props) => {

    let age = (Math.random() * 30);

    return (

        <div> Hello w0rld
        <h1> my name is {props.name} </h1>
            <p> I am   {age}</p>

            <p onClick={props.clickMe}> my hobbies are : {props.children}</p>
        </div>
    );
};

export default Person;