import React from 'react'
import {useState} from 'react'
import { Container } from 'react-bootstrap';
const Contact = () => {
const formInitiaDetails={
    firstName:'',
    lastName:'',
    email:'',
    phoe:'',
    message:'',
}
const [formDetails,setFormDetails]=useState(formInitiaDetails);
const [buttonText,setButtonText]=useState('send');
const [status,setStatus]=useState({});
  return (
 <section className="contact" id="connect">
  <Container>
  <R
  </Container>

 </section>
  )
}

export default Contact