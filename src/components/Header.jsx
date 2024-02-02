import React, { useState } from 'react'

import { Link } from "react-router-dom"
import { FaDumbbell} from "react-icons/fa"





import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css"

const navbardata = [

  {
    text: "Home",
    to: "/"
  },
  {
    text:"blog",
    to:"/Blog"
  },
  {
    text:"About us",
    to:"/Aboutus"
  },
  {
    text:"gallery",
    to:"/Gallery"
  },
  {
    text:"Contact us",
    to:"/Contactus"
  }

]
function Header() {
  return (

    <>
      <Navbar  sticky="top"  collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MUSCLE GAINER<FaDumbbell/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link link>Home</Nav.Link> */}
            {/* <Link to="/"></Link> */}
            {navbardata.map((i) => {
              return(
                <Link to={i.to}>
                  <Nav.Link className='navbar-button' href={i.to}>{i.text}
                  </Nav.Link>
                </Link>)
            })}
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header


/* // function Navbar() {
//     const[click,setclick]= useState(false);
//     const handleclick =()=>setclick(!click)
//   return (
//     <>
//     <nav className="navbar">
//         <div className="navbar-container">
//             <Link to ="/" className='navbar-logo'>
//                 TRAVEL<MdOutlineTravelExplore/>
//             </Link>
//             <div className='menu-icon' onClick={handleclick}>
//                 {/* <i className={click ? <FaBars/> : <FaTimes/>}></i> */


//             </div>
//         </div>
//     </nav>
//     </>
//   )
// } */}
