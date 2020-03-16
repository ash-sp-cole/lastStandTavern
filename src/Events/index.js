
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { Animated } from "react-animated-css";
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';


const Event = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  


 
return  (
<div>
<div>
      <Animated animationIn="fadeInLeft" animationOut="zoomOutDown" animationInDuration={1500} animationOutDuration={1400} isVisible={true}>

        <Jumbotron className="Style">
          <h1>It's not just a Sports Bar, it's a
DESTINATION!!</h1>
          <p>
            We keep things Simple here at " The Last Stand Tavern ". Good food with Good people!
  </p>
          <p>
            <Button className="butt" variant="outline-dark" onClick={handleShow}>Learn more about our history</Button>

          </p>

        </Jumbotron>

      </Animated>
      <>


        <Modal show={show} onHide={handleClose} animation={true} className="styleModal" >
          <Modal.Header closeButton>
            <Modal.Title>Our history</Modal.Title>
          </Modal.Header>
          <Modal.Body>


            <Card style={{ width: '18rem', margin:'auto'}}>
              <Card.Img variant="top"/>
             
            </Card>

<br/>
            <p>
           
              Fair warning….The Lambeth Family are die hard Steelers fans; although Annette’s favorite NFC team would be the Eagles!  No worries,
               as all sports fans are more than welcomed and always treated with the utmost respect!
          </p>
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
</div>



)


}
export default Event;

