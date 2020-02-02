import React ,{Component} from 'react';
import './home.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Animated} from "react-animated-css";
import  { useState } from 'react';

class Home extends Component  {


render() {
    return (

<div> 
    <container className="intro">
    <Row className="rowIntro">
    
    <Col></Col>   
    <Col id="Eat" ><Animated animationIn="fadeInLeft" animationOut="zoomOutDown" animationInDuration={2500} animationOutDuration={1400} isVisible={true}>
    Eat
</Animated></Col>
<Col id="Drink"><Animated animationIn="fadeInLeft" animationOut="zoomOutDown" animationInDuration={2500} animationOutDuration={1400} isVisible={true}>
Đrink
</Animated></Col>
<Col id="Visit"><Animated animationIn="fadeInLeft" animationOut="zoomOutDown" animationInDuration={2500} animationOutDuration={1400} isVisible={true}>
Vίsίt
</Animated></Col>
    
  </Row>
    </container>
</div>

    )
}
}
export default Home;