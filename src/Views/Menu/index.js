import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import './menu.css';

import { Animated } from "react-animated-css";
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Menu1 from './menu1.jpg';
import Card from 'react-bootstrap/Card';

const About = (props) => {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <div>
      <Animated animationIn="fadeInLeft" animationOut="zoomOutDown" animationInDuration={1500} animationOutDuration={1400} isVisible={true}>

        <Jumbotron className="Style">
          <h1>Enjoy our twist on a host of Classics</h1>
      
          <p>
            <Button className="butt" variant="outline-dark" onClick={handleShow}>Menu</Button>

          </p>

        </Jumbotron>

      </Animated>
      <>


        <Modal show={show} onHide={handleClose} animation={true} className="styleModal" >
          <Modal.Header closeButton>
            <Modal.Title>Our history</Modal.Title>
          </Modal.Header>
          <Modal.Body >


            <Card style={{ width: '18rem', margin:'auto' }}>
              <Card.Img variant="top" src={Menu1} />
              <Card.Img variant="top" src={Menu1} />
             
            </Card>

<br/>
           
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
          </Button>

          </Modal.Footer>
        </Modal>
      </>
      );
</div>

  )

}

export default About;