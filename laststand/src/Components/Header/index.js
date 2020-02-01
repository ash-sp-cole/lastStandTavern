
import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './navbar.css';

const NavBar = () => {



   return ( 
<div className="style"> 




<Navbar.Collapse class="navbar bg-transparent navbar-fixed-top"  >
  <Navbar.Brand as={Link} to="/" className="style" >Last Stand Tavern</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Nav className="mr-auto"  >
      <Nav.Link as={Link} to="/Home"  className="tabs">Home</Nav.Link>
      <Nav.Link as={Link} to="/About"  className="tabs">About</Nav.Link>
      <Nav.Link as={Link} to="/Topics" className="tabs">Topics</Nav.Link>
     
    </Nav>
   
  </Navbar.Collapse>

</div>

)}

export default NavBar;