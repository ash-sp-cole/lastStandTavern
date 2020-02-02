import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import './about.css';
import { Carousel } from 'antd';
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


ReactDOM.render(
  <Carousel effect="fade">
    <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
  </Carousel>,
  mountNode,
);
</div>

)

}

export default About;