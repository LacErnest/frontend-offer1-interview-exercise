import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './../css/footer.css';

export default function Footer(){
  return(
    <div style={{backgroundColor: '#105f6c',
      color: '#dbdbdb'}}>
      <Container>
        <Row style={{ margin: 0, paddingTop: 70, marginBottom: 100 }}>
          <Col md="4">
            <p>Get a house to rent easily,buy a house easily with Estate-Houses</p>
          </Col>
          <Col md="4">
            <Row>
              <Col md="6">
                <h6>Help</h6>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Link className="link" to="#">Privacy Policy</Link>
                  <Link className="link" to="#">Contact Support</Link>
                  <Link className="link" to="#">Knowledgebase</Link>
                  <Link className="link" to="#">Careers</Link>
                  <Link className="link" to="#">FAQS</Link>
                </div>
              </Col>
              <Col md="6">
                <h6>Links</h6>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Link className="link" to="#">Contact</Link>
                  <Link className="link" to="#">Register</Link>
                  <Link className="link" to="#">Login</Link>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md="4">
            <h6>Newsletter</h6>
            <p>Subscribe to our newsletters for more</p>
            <input type="text" className="inp" placeholder="Email Address" />
            <button className="sbtn">Submit</button>
          </Col>
        </Row>
        <div style={{ width: '100%', borderBottom: '1px solid #999999' }}/>
        <div style={{ textAlign: 'center', padding: 15 }}>Copyright ©2022 All rights reserved</div>
      </Container>
    </div>
  )
}

