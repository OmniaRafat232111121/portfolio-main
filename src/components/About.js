import React from "react";
import './About.css'
import 'animate.css';
import Graduated from '../assets/img/Graduated.jpeg'
import { Container, Row, Col } from "react-bootstrap";

function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="about">
      <Container>
        <Row >
          <Col className="col__2 ">
            <img className="animate__backInLeft about__img"  src={Graduated} alt=""  />
          </Col>
          <Col className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
              I'm a frontend developer with a strong focus on React.js and its ecosystem. My expertise includes working with Redux, Redux Toolkit, and React with TypeScript. I'm also proficient in various styling libraries like Bootstrap, TailwindCSS, MaterialUI, AntDesign, CSS, and Sass.
              </p>
              <p className="about__text p__color">
              I have experience in implementing user authentication using Firebase, which helps me build secure and reliable applications. In my current role at startup, I have worked on a variety of projects, including several landing pages for electrical and water companies, as well as dashboards.
              </p>
              <p className="about__text p__color">
              I have a passion for crafting beautiful and intuitive user interfaces, and I'm committed to writing clean and maintainable code. I'm always eager to learn new technologies and collaborate with others to create exceptional web experiences.
              </p>
              <Row>
              <Col className="about__button d__flex align-items-center justify-content-center">
                <a href="#">
                  <button className="about btn pointer">Download Cv</button>
                </a>
                </Col>
                
                <Col className="about__button d__flex align-items-center justify-content-center">
                <a href="#">
                  <button className="about btn pointer">Hire Me</button>
                </a>
                </Col>
                

            </Row>
            </div>
          </Col>
          </Row>
        </Container>
      
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;