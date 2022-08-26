import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import { CDBIcon } from "cdbreact";
import NavBar from './../components/Navbar';
import Footer from './../components/Footer';
import ModalDetails from './../components/ModalDetails'
import '../css/home.css';

import s1 from './../images/house-1.avif';
import s2 from './../images/house-2.avif';
import s3 from './../images/house-3.avif';

import axios from '../utils/axios';


export default function Rent() {
  const ref = useRef(null);
  const properties = [
    {
      img: s1
    }, {
      img: s2,

    }, {
      img: s3,
     
    }
  ]

  useEffect(()=>{
    getHouses();
    
}, []);

const [houses, setHouses] = useState([]);

const getHouses = async()=>{
    await axios.get('/housing-api/search-home', {timeout: 30000})
    .then((res)=>{
        console.log(res.data);
        setHouses(res.data)
    }).catch((err)=>{
        console.log(err);
    })
}


  return (
    <Styles>
      <NavBar />
      <div style={{position: 'relative'}}>
        <Carousel pause={false} fade={true} controls={false}  style={{ position: 'relative', zIndex: 1, width: '100%', height: '92vh', maxHeight: 550 }}>
            {properties.map(i => {
            return(
                <Carousel.Item interval={3500} style={{ width: '100%', height: '92vh' }}>
                <div className="backimg" style={{ backgroundImage: "url("+i.img+")"}}>
                    
                </div>
                </Carousel.Item>
            )
            })}
        </Carousel>
        <div className="introsec" style={{position: 'absolute', top: 0, zIndex:2}}>
            <div className="container">
                <div className="sect">
                    <h4 className="title">Offer1 Estates Houses</h4>
                </div>
            </div>
        </div>
    </div>
            
      
    <Row className="homess" style={{ margin: 0, marginTop: 75 }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  marginBottom: 50 }}>
                <h4 className="title" style={{ textAlign: 'center'}}>Latest Houses</h4>
                <div style={{marginLeft: 20}}>
                    <div className="agent"> 
                    View All
                    </div>
                </div>
            </div>
            
          <Container>
            <Row>
            {houses.map((i, j) => (
                <div key={j} className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
                    <div className='dashCard'>
                        
                        <img loading="lazy" src={i.property.primary_image_url} className="pimg"  style={{position: 'relative', zIndex: 0}}/>
                        <div className='container mt-2'>
                            <h6>{i.property.address.state} {i.property.address.city} {i.property.address.address_line1} {i.property.address.zip}</h6>
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
            </Row>
          </Container>
        </Row>
        
        <Footer />
    </Styles>
  )
}


const Styles = styled.div`
  background-color: #f7f7f7;
  color: black;
  

`;