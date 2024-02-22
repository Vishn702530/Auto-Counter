import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div><Navbar className="head" style={{backgroundColor:"cyan"}}>
    <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src="https://cdn.dribbble.com/users/491923/screenshots/1815379/black-flip.gif"
          width="60"
          height="40"
          className="d-inline-block align-top"
        />{' '}
        Automatic Counter
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header