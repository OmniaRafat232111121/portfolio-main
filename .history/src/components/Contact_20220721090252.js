import React from 'react'
import {useState} from 'react'
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
 <section className="con">

 </section>
  )
}

export default Contact