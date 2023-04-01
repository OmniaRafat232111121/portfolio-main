import React from 'react'
import {useState} from 'react'
import { Container,Col,Row } from 'react-bootstrap';
import ContactImg from '../assets/img/contact-img.svg'
const Contact = () => {
const formInitiaDetails={
    firstName:'',
    lastName:'',
    email:'',
    phoe:'',
    message:'',
}
const onFormUpdate=(category,value)=>{
    setFormDetails()
}
const [formDetails,setFormDetails]=useState(formInitiaDetails);
const [buttonText,setButtonText]=useState('send');
const [status,setStatus]=useState({});
  return (
 <section className="contact" id="connect">
  <Container>
  <Row clssName="align-items-center">
  <Col md={6}>
  <img  src={ContactImg} />
  <h2>Get In Touch</h2>
  <form>
  <Row>
  <Col sm={6} className="px-1">
 <input  type="text" value={formDetails.firstName} placeholder="firstName" onChange={(e)=>{}}/>
  </Col>
  </Row>
  </form>
  </Col>
  </Row>
  </Container>

 </section>
  )
}

export default Contact