
import React, { useState } from "react";
import {Container,Row,Col} from'react-bootstrap'
import { MultiSelect } from "react-multi-select-component";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Row } from "react-bootstrap";
const skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
 <section className="skill" id='skills'>
 <Container>
 <Row>
 <Col>
<div classname="skill-bx">
</div>
 </Col>
 </Row>
 </Container>
 </section>
  )
}

export default skills