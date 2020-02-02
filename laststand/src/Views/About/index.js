import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import './about.css';
import  Carousel  from 'react-bootstrap/Carousel';
import porch from './porch.jpg';
import bulb from './bulb.jpg';
import milk from './milkDrop.jpg';
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
  <container className ="caroBox">
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={porch}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img 
      className="d-block w-100"
      src={bulb}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={milk}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</container>
</Jumbotron>


</div>

)

}

export default About;