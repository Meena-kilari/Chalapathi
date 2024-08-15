import React from 'react';
import './Layout.css';
import { Outlet , Link } from "react-router-dom";



const Layout = () => {
  return (
    <>
      <nav>
        <ul className="layout">
          
          	<Link to="/"><h3>Home</h3></Link>

          	<Link to="/blogs"><h3>Blogs</h3></Link>
 
          	<Link to="/contact"><h3>Contact</h3></Link>
          
        </ul>
      </nav>
        <Outlet />     
    </>
  );
}

export default Layout;

/*import Nav from 'react-bootstrap/Nav';
import { Outlet , Link } from "react-router-dom";

//import {BrowserRouter,Routes,Route} from "react-router-dom"
//import Layout from "./pages/Layout";
//import Home from "./pages/Home";
//import Blogs from "./pages/Blogs";
//import Contact from "./pages/Contact";

function ListExample() {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="blogs">Blogs</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="contact">Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}


export default ListExample;*/
