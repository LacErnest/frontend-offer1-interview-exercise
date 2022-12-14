import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export default function NavBar(){

  const navigate = useNavigate();

  const gotoProfile = ()=>{
    navigate('/my-account')
  }

  

  return(
    <Styles style={{ position: 'fixed', top: 0, left: 0, zIndex: 100, width: '100vw', height: 85 }}>
      <Navbar style={{ borderBottom: '1px solid #dbdbdb', backgroundColor: '#028599' }} bg="#028599" className="navbar-toggle" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand style={{ display: 'flex', alignItems: 'center' }} href="/">
            <h4 className="d-none d-md-block">Offer1</h4>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto ml-auto">
              <NavLink exact to="/" activeClassName="anavlink" className="navlink"><div/></NavLink>
              <NavLink to="/houses" activeClassName="anavlink" className="navlink">All Houses<div/></NavLink>
            </Nav>

            {/* <Nav>
                <button onClick={() => navigate('/login')} style={{ backgroundColor: 'transparent', border: 0, cursor: 'pointer' }} className="navlink" >Sign In</button>
                <button onClick={() => navigate('/signup')} className="actbtn btn-primary">Create Account</button>
            </Nav> */}

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Styles>
  )
}


const Styles = styled.div`
  .navlink{
    padding: 4px 10px 4px 10px;
    text-decoration: none;
    font-size: 14px;
    color: #424242;
    align-items: center;
    display: flex;
    flex-direction: column;
    outline: none;

    &: hover{
      color: white;
    }
  }

  .anavlink{
    font-weight: bold;
    color: white;
  }

  .anavlink div{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: white;
  }

  #dropdown-basic {
    background-color: #F8F8FF;
    border: 0px;
    color: slategray;
  }

  .actbtn{
    border-radius: 3px;
    color: blue;
    border: 1px solid blue;
    background-color: white;
    margin-right: 15px;
    font-size: 13px;
    padding: 4px 10px;
    outline: none;
    cursor: pointer;
    height: 50px

    &: hover{
      color: white;
      background-color: blue;
    }
  }
`
