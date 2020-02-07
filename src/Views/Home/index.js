import React ,{Component} from 'react';
import './home.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Animated} from "react-animated-css";
import  { useState } from 'react';






class Home extends Component  {

changeToHome () {
      document.body.style.backgroundImage =  "url(/public/Assests/deckTables.jpg)"; 
}

changeToEat () {
    document.body.style.backgroundImage =  "url(/public/Assests/table.jpg)"; 
}
changeToDrink() {
    document.body.style.background = "green";

}
changeToVisit() {
    document.body.style.background = "red";

}
render() {
    return (

<div> 
    <container className="intro">
    <Row className="rowIntro">
    
    <Col></Col>   
    <Col id="Eat"onMouseEnter={this.changeToEat} onMouseLeave={this.changeToHome}><Animated animationIn="fadeInLeft" animationOut="zoomOutDown" animationInDuration={2500} animationOutDuration={1400} isVisible={true}>
    Eat 

</Animated></Col>
 <Col id="Drink"onMouseEnter={this.changeToDrink} onMouseLeave={this.changeToHome} ><Animated animationIn="fadeInLeft" animationOut="zoomOutDown" animationInDuration={2500} animationOutDuration={1400} isVisible={true}>
Đrink
</Animated></Col>
<Col id="Visit" onMouseEnter={this.changeToVisit} onMouseLeave={this.changeToHome}><Animated animationIn="fadeInLeft" animationOut="zoomOutDown" animationInDuration={2500} animationOutDuration={1400} isVisible={true}>
Vίsίt
</Animated></Col> 
    
  </Row>
    </container>
</div>

    )
}
}
export default Home;