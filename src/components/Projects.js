import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import ProjImg1 from "../assets/img/project_img1.jpg";
import ProjImg2 from "../assets/img/project_img2.png";
import ProjImg7 from "../assets/img/project_img7.png";
import ProjImg8 from "../assets/img/project_img8.png";
import ProjImg9 from "../assets/img/project_image9.png";
import ProjImg10 from "../assets/img/project_img10.png";
import ProjImg13 from "../assets/img/project_image13.jpg";
import ProjImg15 from "../assets/img/ProjImg15.png";
import ProjImg16 from "../assets/img/ProjImg16.png";
import ProjImg17 from "../assets/img/ProjImg17.png";
import ProjImg19 from "../assets/img/ProImg19.png";
import ProjImg20 from "../assets/img/ProImg20.png";
import ProjImg21 from "../assets/img/ProImg21.png";
import ProImg23 from "../assets/img/proImg23.png";
import ProImg25 from "../assets/img/proImg24.png";
import ProjectCard from './ProjectCard';
import ProImg26 from '../assets/img/shop.png'
import ProImg27 from '../assets/img/tic.png'
import ProImg28 from '../assets/img/notes.png'
import rose from '../assets/img/rose.jpg'
import DashboardAuth from '../assets/img/DashboardAuth.jpg'
import DashboardApp from '../assets/img/DashboardApp.png'
import exchangeDatePicker from '../assets/img/exchangeDatePicker.jpg';
import hotel from '../assets/img/hotel.jpg';
import tatto from '../assets/img/tatto.jpg';
import gym from '../assets/img/gym.jpg';
import reactstep from '../assets/img/reactstep.jpg'
import food from '../assets/img/food.jpg'
const Projects = () => {
  
const projects = [
  {
    title:'DashboardAuth',
    description:"Development",
    imgUrl:DashboardAuth,
    link2:'https://dashboard-a-uth.vercel.app/',
    link:'https://github.com/OmniaRafat232111121/DashboardAuth'
  }
  ,{
    title: "cryptocurrency",
    description: "Development",
    imgUrl: ProjImg15,
    link2:'https://cryptocurrency-one.vercel.app/',
    link:'https://cryptoappcoin.netlify.app/'
  },
  {
    title:'DashboardApp',
    description:"Development",
    imgUrl:DashboardApp,
    link2:'https://dashboard-tailwind-seven.vercel.app/',
    link:'https://github.com/OmniaRafat232111121/DashboardTailwind'
  },
  {
    title:'ExchangeDatePicker',
    description:"Development",
    imgUrl:exchangeDatePicker,
    link2:'https://data-currency-picker-rf8z6mrh7-omniarafat232111121.vercel.app/',
    link:'https://github.com/OmniaRafat232111121/Exchange_Date_Picker'
  },
  {
    title:'ReactStepper',
    description:"Development",
    imgUrl:reactstep,
    link:'https://github.com/OmniaRafat232111121/reactstepper',
    link2:'https://reactstepper.vercel.app/'
  },
  {
    title: "Reservation hotel",
    description: "Development",
    imgUrl: hotel,
    link2:'https://hotelland.vercel.app/',
    link:'https://github.com/OmniaRafat232111121/hotel-starter'
  
  },
  {
    title: "Tatto Page",
    description: "Development",
    imgUrl: tatto,
    link2:'https://tattoo-teal.vercel.app/',
    link:'https://github.com/OmniaRafat232111121/tatto'
  
  },
  {
    title: "Gym Landing",
    description: "Development",
    imgUrl: gym,
    link2:'https://gymme-landing.vercel.app/',
    link:'https://github.com/OmniaRafat232111121/gymme-landing'
  },
  {
    title: "Tic-Tac-Toe",
    description: "React JS with typescript",
    imgUrl: ProImg27,
    link2:'https://tic-tac-pfrst0z63-omniarafat232111121.vercel.app/',
    link:' https://github.com/OmniaRafat232111121/Tic-Tac-Toe'
  },

  {
    title: "notes",
    description: "React JS with typescript",
    imgUrl: ProImg28,
    link2:'https://notes-9u28couvn-omniarafat232111121.vercel.app/',
    link:'  https://github.com/OmniaRafat232111121/notes'
  },
  {
    title: "Resturant",
    description: "Design & Development",
    imgUrl: rose,
    link2:'https://rose-chi.vercel.app/',
    link:'https://github.com/OmniaRafat232111121/TheROSA'
  },
   
  {
    title: "Furniture room",
    description: "Development",
    imgUrl: ProjImg7,
    link2:'https://room-homepage-master-master.vercel.app/',
    link:'https://github.com/OmniaRafat232111121/room-homepage-master-master'
  },
  {
    title: "Food",
    description: "Development",
    imgUrl: ProjImg8,
    link:'https://github.com/OmniaRafat232111121/FOODIES',
    link2:'https://foodies-taupe.vercel.app/'
  },
  {
    title: "weather",
    description: "Development",
    imgUrl: ProjImg10,
    link:'https://weather-git-main-omniarafat232111121.vercel.app/',
    link:'https://github.com/OmniaRafat232111121/weather'
  },
  {
    title: "TODOLIST",
    description: "Development",
    imgUrl: ProjImg21,
    link2:'https://github.com/OmniaRafat232111121/todo-app',
    link:'https://todo-app-woad-psi.vercel.app/'
  },
  {
    title: "DisenyCone",
    description: "Development",
    imgUrl: ProjImg19,
    link:'https://github.com/OmniaRafat232111121/Diseny_Clone',
    link2:'https://diseny-clone-dzlelgyo4-omniarafat232111121.vercel.app/'
  },
  {
    title: "animateSalon",
    description: "Development",
    imgUrl: ProjImg16,
    link:'https://animate-salon.vercel.app/'
  },


    
   
   
     
      
      {
        title: "RealState",
        description: "Development",
        imgUrl: ProjImg9,
        link2:'http://real-state-alpha-nine.vercel.app/',
        link:'https://github.com/OmniaRafat232111121/real_State'
      },
      {
        title: "NFT Landing",
        description: "Development",
        imgUrl: ProjImg20,
        link:'https://nft-six-dun.vercel.app/'
      },
      
      {
        title: "Grocery",
        description: "Development",
        imgUrl: food,
        link2:'',
        link:'https://food-web-iota.vercel.app/'
      },
      
      
      
      
      
     
      {
        title: "AnimateLanding",
        description: "Development",
        imgUrl: ProjImg17,
        link:'https://github.com/OmniaRafat232111121/animateSalon',
        link2:'https://amazing-50im4kmw9-omniarafat232111121.vercel.app/'
      },
      {
        title: "Manage",
        description: "Development",
        imgUrl: ProjImg13,
        link:'https://github.com/OmniaRafat232111121/manage_landing_Page'
      },
      
    {
      title: "Landing Page",
      description: "Development",
      imgUrl: ProjImg1,
      link:'https://github.com/OmniaRafat232111121/easybank-landing-page-master'
    
    },

    {
      title: "Sunny Summer",
      description: " Development",
      imgUrl: ProjImg2,
      link:'https://github.com/OmniaRafat232111121/sunnyside-agency-landing-page-main'
    },
      
      
      {
        title: "Datawarehouse",
        description: "tailwind&React JS",
        imgUrl: ProImg25,
        link:'https://data-warehouse-one.vercel.app/'
      },
      
      {
        title: "React",
        description: "tailwind&React JS",
        imgUrl: ProImg23,
        link:'https://tailwindreact-nine.vercel.app/'
      },
      {
        title: "shopingCart",
        description: "React JS with typescript",
        imgUrl: ProImg26,
        link2:'https://shopping-ashy-theta.vercel.app/',
        link:' https://github.com/OmniaRafat232111121/shopping'
      },
      
      
      
     




  ];

  return (
   <section className="project" id="project">
   <Container>
   <Row>
   <Col size={12}>
  
     <div>
       <h2>Projects</h2>
       <p>I enjoy every step of the developement process, from discussion and collaboration to concept and execution</p>
       <Tab.Container id="projects-tabs" defaultActiveKey="first">
         {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
           <Nav.Item>
             <Nav.Link eventKey="first">WebSItes</Nav.Link>
           </Nav.Item>
           <Nav.Item>
             <Nav.Link eventKey="second">Animation</Nav.Link>
           </Nav.Item>
           <Nav.Item>
             <Nav.Link eventKey="second">Games JS</Nav.Link>
           </Nav.Item>
           
         </Nav> */}
         <Tab.Content id="slideInUp" >
           <Tab.Pane eventKey="first">
             <Row>
               {
                 projects.map((project, index) => {
                   return (
                     <ProjectCard
                       key={index}
                       {...project}
                       />
                   )
                 })
               }
             </Row>
           </Tab.Pane>
           <Tab.Pane eventKey="section">
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
           </Tab.Pane>
           <Tab.Pane eventKey="third">
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
           </Tab.Pane>
         </Tab.Content>
       </Tab.Container>
     </div>
 
 </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
  
export default Projects
