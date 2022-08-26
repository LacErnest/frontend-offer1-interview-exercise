import React, { useState } from 'react';
import {Modal, Row, Col, Form, Button} from 'react-bootstrap';
import { CDBIcon } from "cdbreact";

import img2 from './../images/house-2.avif'

function ModalDetails({property}) {
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const uploadPage =()=>{
    
  }

  return (
    <>
      <span className="agent" onClick={handleShow}>View</span>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        scrollable={true}
        // fullscreen={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>House Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
        <Col xs={12} lg={6}>
                    <img src={property.property.primary_image_url} width='100%'className='detail-image' />
                </Col>
                <Col xs={12} lg={6}>
                    <span style={{color: 'blue'}}>How much can you afford?</span>
                    <div className='mb-4' style={{display: 'flex', alignItems: 'center', marginTop: 10}}>
                        <CDBIcon style={{color: '#2E365F'}} icon="square" />
                        <span>For Sale</span>
                    </div>
                    <div className='container'>
                        <h6>{property.property.address.state} - {property.property.address.city} - {property.property.address.address_line1} - {property.property.address.zip}</h6>
                        <span className='property-type'>Type: {property.property.property_type}</span>
                        <hr/>
                        <div className='homeproperty'>
                            <div className='property'>
                                <CDBIcon style={{color: '#2E365F'}} icon="bed" />
                                <span style={{fontSize: 18}}>{property.property.number_bedroom} Bedroom</span>
                            </div>
                            <div className='property'>
                                <CDBIcon style={{color: '#2E365F'}} icon="bath" />
                                <span style={{fontSize: 18}}>{property.property.number_bath} Bathroom</span>
                            </div>
                            
                            <div className='property'>
                                <CDBIcon style={{color: '#2E365F'}} icon="square" />
                                <span style={{fontSize: 18}}>{property.property.square_feet}  Square Feet</span>
                            </div>
                        </div>
                        <hr/>
                        <div style={{  display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <span style={{fontWeight: '700'}}> Price: ${property.price}</span>
                            <span className="">
                                <CDBIcon style={{color: 'green'}} icon="square" />
                                <span style={{fontSize: 18}}>Active</span>
                            </span>
                        </div>
                        <hr/>
                        <div>
                            <h6 style={{color: '#2E365F', fontWeight: '700'}} >Description</h6>
                            <p>
                            {property.property.description}
                            </p>
                        </div>
                        <hr/>
                        <div>
                            <h6 style={{color: '#2E365F', fontWeight: '700'}} >About Agent</h6>
                            <div className='homeproperty'>
                                <div className='property'>
                                    <span style={{fontSize: 14, fontWeight: 600}}>{property.listing_agent.user.first_name} {property.listing_agent.user.last_name}</span>
                                    <span style={{fontSize: 12, color: 'gray'}}>Full Name</span>
                                </div>
                                <div className='property'>
                                    <span style={{fontSize: 14, fontWeight: 600}}>{property.listing_agent.license_state}</span>
                                    <span style={{fontSize: 12, color: 'gray'}}>State</span>
                                </div>
                                <div className='property'>
                                    <span style={{fontSize: 14, fontWeight: 600}}>{property.listing_agent.license_number}</span>
                                    <span style={{fontSize: 12, color: 'gray'}}>Number</span>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div>
                            <h6 style={{color: '#2E365F', fontWeight: '700'}} >Escrow Company</h6>
                            <div className='homeproperty'>
                                <div className='property'>
                                    <span style={{fontSize: 14, fontWeight: 600}}>{property.escrow_company.name}</span>
                                    <span style={{fontSize: 12, color: 'gray'}}>Full Name</span>
                                </div>
                                <div className='property'>
                                    <span style={{fontSize: 14, fontWeight: 600}}>{property.escrow_company.officer_name}</span>
                                    <span style={{fontSize: 12, color: 'gray'}}>Officer name</span>
                                </div>
                                <div className='property'>
                                    <span style={{fontSize: 14, fontWeight: 600}}>{property.escrow_company.email}</span>
                                    <span style={{fontSize: 12, color: 'gray'}}>Email</span>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div>
                            <h6 style={{color: '#2E365F', fontWeight: '700'}} >Title Company</h6>
                            <div className='homeproperty'>
                                <div className='property'>
                                    <span style={{fontSize: 14, fontWeight: 600}}>{property.title_company.name}</span>
                                    <span style={{fontSize: 12, color: 'gray'}}>Name</span>
                                </div>
                                <div className='property'>
                                    <span style={{fontSize: 14, fontWeight: 600}}>{property.title_company.officer_name}</span>
                                    <span style={{fontSize: 12, color: 'gray'}}>Officer</span>
                                </div>
                               
                            </div>
                        </div>
                      
                    </div>
                </Col>
                
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={uploadPage}>
              Contact Agent
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDetails;