
import React, { useState } from "react";
import {Container,Row,Col} from'react-bootstrap'
import { MultiSelect } from "react-multi-select-component";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
<h2> Skills</h2>
<p>You Can Imagine,
I Can Do !
I have built more than 10 websites for my clients in different industries, and have been able to increase the number of visitors to existing websites through code and design improvements as well as SEO.</p>
</div>
 </Col>
 </Row>
 </Container>
 </section>
  )
}

export default skills