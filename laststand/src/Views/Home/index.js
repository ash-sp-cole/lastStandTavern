import React from 'react';
import './home.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FadeInView from '../Animate/index';


const Home = (props) => {





    return (

<div> 
    <container className="intro">
    <Row className="rowIntro">
    
    <Col><FadeInView/></Col>   
    <Col>Eat</Col>
    <Col>Đrink</Col>
    <Col>Vίsίt</Col>
  </Row>
    </container>
</div>

    )
}

export default Home;