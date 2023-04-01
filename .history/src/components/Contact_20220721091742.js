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
    setFormDetails({
        ...formDetails,
        [category]:value
    })
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
  <Col size={12} sm={6} className="px-1">
 <input  type="text" value={formDetails.firstName} placeholder="firstName" onChange={(e)=>onFormUpdate('firstName',e.target.value)}/>
  </Col>
  <Col size={12} sm={6} className="px-1">
  <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
</Col>
<Col size={12} sm={6} className="px-1">
  <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
</Col>
<Col size={12} sm={6} className="px-1">
  <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
</Col>
<Col size={12} className="px-1">
  <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
  <button type="submit"><span>{buttonText}</span></button>
</Col>
{
    status
}
  </Row>
  </form>
  </Col>
  </Row>
  </Container>

 </section>
  )
}

export default Contact