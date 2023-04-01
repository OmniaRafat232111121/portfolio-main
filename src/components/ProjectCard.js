import React from 'react'
import { Col,Button } from "react-bootstrap";
const ProjectCard = ({ title, description, imgUrl,link,link2 }) => {
  return (
    <Col size={12} sm={6} md={4}>
    <div className="proj-imgbx">
    <img src={imgUrl}  alt=""/>
    <div className="proj-txtx">
      <h4 className='fs-6'>{title}</h4>
      <Button  href={link2} className="btn-Card ">view website </Button>

      <Button  href={link} className="btn-Card">view Github</Button>
      </div>

    
  </div>

    </Col>
  )
}

export default ProjectCard
