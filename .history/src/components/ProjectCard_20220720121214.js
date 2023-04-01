import React from 'react'
import { Col,Button } from "react-bootstrap";
const ProjectCard = ({ title, description, imgUrl,link }) => {
  return (
    <Col size={12} sm={6} md={4}>
    <div className="proj-imgbx">
    <img src={imgUrl} />
    <div className="proj-txtx">
      <h4>{title}</h4>
      <span>{description}</span>
     
      <Button > {}</Button>
    </div>
  </div>

    </Col>
  )
}

export default ProjectCard
