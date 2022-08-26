import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Form, Modal, Button, ModalDialog } from 'react-bootstrap';
import styled from 'styled-components';
import { CDBIcon } from "cdbreact";

import '../css/home.css';

import NavBar from './../components/Navbar';
import Footer from './../components/Footer';

import axios from '../utils/axios';

import ModalDetails from './../components/ModalDetails'

// import {Alert} from 'rsui'

export default function AllFeatures() {

    const [show, setShow] = useState(false);
    const [nbBed, setNbBed] = useState("Any")
    const bedrooms = ['Any', '1', '2', '3', '4', '5', '6', '7+'];

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [houses, setHouses] = useState([]);
    const [minPrice, setMinPrice] = useState(1000)
    const [maxPrice, setMaxPrice] = useState(5000)
    const [city, setCity] = useState('');

    useEffect(()=>{
        getHouses('all');
        
    }, []);

    const getHouses = async(type)=>{
        var querysearch = ''
        if(type==='filter'){
            querysearch = getHousesbyFilter();
        }
        await axios.get(`/housing-api/search-home/${querysearch}`, {timeout: 30000})
        .then((res)=>{
            console.log(res.data);
            setHouses(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }

    const getHousesbyFilter = ()=>{
        var query = "";
        if(!minPrice || !maxPrice){
            return alert('price range is required')
        }
        if(minPrice >= maxPrice){
            return alert('Minimum price should not be greater than Maximum price')
        }
        
        if(city){
            if(nbBed !== 'Any'){
                var nb = parseInt(nbBed);
                query = `?min=${minPrice}&max=${maxPrice}&bmax=${nb}&city=${city}`;
            }else{
                query = `?min=${minPrice}&max=${maxPrice}&city=${city}`;
            }
        }else{
            if(nbBed !== 'Any'){
                var nb = parseInt(nbBed);
                query = `?min=${minPrice}&max=${maxPrice}&bmax=${nb}`;
            }else{
                query = `?min=${minPrice}&max=${maxPrice}`;
            }
        }

        return query;
    }

    const filterModal = ()=>{

    return(
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            // size="lg"
            // scrollable={true}
            // fullscreen={true}
        >
            <Modal.Header closeButton>
            <Modal.Title>Filters</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <h4>Price Range</h4>
                    <span></span>
                    <Row className="formFilter">
                        <Col>
                            <Form.Control
                                type="text"
                                id="min"
                                aria-describedby="Searchword"
                                style={{height: 50}}
                                placeholder='Min price'
                                value={minPrice}
                                onChange={(e)=> setMinPrice(e.target.value)}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="text"
                                id="max"
                                aria-describedby="Searchword"
                                style={{height: 50}}
                                placeholder='Max price'
                                value={maxPrice}
                                onChange={(e)=> setMaxPrice(e.target.value)}
                            />
                        </Col>
                    </Row>
                </Row>
                <hr/>
                <Row>
                    <h4>Number of bedrooms</h4>
                    <span></span>
                    <div  className="container">
                        <Row>
                            {bedrooms.map((i)=>{
                                return(
                                    <span onClick={()=> setNbBed(i)} key={i} style={i===nbBed ? {backgroundColor: '#028599'}: {}} className="agentup">{i}</span> 
                                )
                            })}
                        </Row>
                    </div>
                </Row>
                <hr/>
                <Row>
                    <h4>Select City</h4>
                    <span></span>
                    <Row className="formFilter">
                        <Col>
                            <Form.Control
                                type="text"
                                id="min"
                                aria-describedby="Searchword"
                                style={{height: 50}}
                                placeholder='Enter city'
                                value={city}
                                onChange={(e)=> setCity(e.target.value)}
                            />
                        </Col>
                    </Row>
                </Row>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={()=> getHouses('filter')}>
                Show now
            </Button>
            </Modal.Footer>
        </Modal>
    )
    }
    

      return (
        <Styles>
          <NavBar />
          
        <Row style={{ margin: 0, marginTop: 50, paddingTop: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  marginBottom: 50 }}>
                    <h4 className="title" style={{ textAlign: 'center'}}>Browse All Houses</h4>
                    <div style={{marginLeft: 20}}>
                        <div className="agent" onClick={handleShow}> 
                        <CDBIcon style={{color: 'green'}} icon="square" />Filters
                        </div>
                    </div>
                </div>
                
              <Container>
                <Row>
                    {houses.length === 0 ? <>
                        <Container>
                            <Row>
                                <p>No Results found from your search</p>
                            </Row>
                        </Container>
                    </>:
                    <>
                    {houses.map((i, j) => (
                <div key={j} className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
                    <div className='dashCard'>
                        
                        <img loading="lazy" src={{url: i.property.primary_image_url}} className="pimg"  style={{position: 'relative', zIndex: 0}}/>
                        <div className='container mt-2'>
                            <h6>{i.property.address.state} - {i.property.address.city} - {i.property.address.address_line1} - {i.property.address.zip}</h6>
                            <div style={{  display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <span className='property-type'>{i.property.property_type || 'Single Home'}</span>
                                <div>
                                    <CDBIcon style={{color: 'green'}} icon="square" />{i.state}
                                </div>
                            </div>
                            
                            <hr/>
                            <div className='homeproperty'>
                                <div className='property'>
                                    <CDBIcon style={{color: '#2E365F'}} icon="bed" />
                                    <span>{i.property.number_bedroom} Beds</span>
                                </div>
                                <div className='property'>
                                    <CDBIcon style={{color: '#2E365F'}} icon="bath" />
                                    <span>{i.property.number_bath}  Bathroom</span>
                                </div>
                                
                                <div className='property'>
                                    <CDBIcon style={{color: '#2E365F'}} icon="square" />
                                    <span>{i.property.square_feet} Sq Ft</span>
                                </div>
                            </div>
                            <hr/>
                            <div style={{  display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <span style={{fontWeight: '700'}}>${i.price}</span>
                                {/* <span className="agent">View </span> */}
                                <ModalDetails property={i}/>
                            </div>
                        
                        </div>
                    </div>
                </div>
            ))}
                    </>}
                
                </Row>
              </Container>
            </Row>
            {filterModal()}
            <Footer />
        </Styles>
      )
    }
    
    
    const Styles = styled.div`
      background-color: #f7f7f7;
      color: black;
      
    
    `;