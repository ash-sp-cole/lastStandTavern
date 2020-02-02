
import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome} from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {

  const element = <FontAwesomeIcon icon={faHome} />

   return ( 
<div className="style"> 

<h3 className="right">Lаst Ѕtanđ Τavern</h3>


<Navbar.Collapse class="navbar bg-transparent navbar-fixed-top " >
  <Navbar.Brand as={Link} to="/" className="style" >Ф</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Nav className="mr-auto"className="justify-content-end"  >
   
      <Nav.Link as={Link} to="/About"  className="tabs">Ôur Story</Nav.Link>
      <Nav.Link as={Link} to="/Home"  className="tabs">Мenu</Nav.Link>
      <Nav.Link as={Link} to="/Topics" className="tabs">Ёvents</Nav.Link>
     
    </Nav>
   
  </Navbar.Collapse>

</div>

)}

export default NavBar;

