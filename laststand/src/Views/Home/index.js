import React from 'react';
import './home.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = (props) => {
console.log(props);
    return (

<div> 
    <container className="intro">
    <Row className="rowIntro">
         
    <Col></Col>   
    <Col>Eat</Col>
    <Col>Đrink</Col>
    <Col>Vίsίt</Col>
  </Row>
    </container>
</div>

    )
}

export default Home;