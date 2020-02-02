import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import './about.css';
const About = (props) => {




return (
<div>
<Jumbotron className="Style">
  <h1>It's not just a Sports Bar, it's a 
DESTINATION!!</h1>
  <p>
   We keep things Simple here at " The Last Stand Tavern ". Good food with Good people!
  </p>
  <p>
    <Button variant="primary">Learn more about our history</Button>
  </p>
</Jumbotron>
</div>

)

}

export default About;