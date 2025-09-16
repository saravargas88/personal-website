


import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./projectcards";

export default function Projects() {
  const projects = [
    {
      title: "Personal Website",
      description: "Developed a personal website for a colleague using React and Javascript, featuring responsive design, and integrated routing for seamless navigation.",
      imgSrc: "/thumbnails/qiwebsite.png",   // your own image
      link: "https://qi-personal-website.vercel.app/"
    },
    {
      title: " Quiz App : Express, Node.js",
      description: "A full-stack quiz application built with Express and Node.js",
      imgSrc: "/thumbnails/quiz.png",
      link: "https://quiz-webapp-express.onrender.com/quiz"
    },
    {
      title: " Thesis: The Effects of Paid Parental Leaves on the Labor Force Participation of Mothers ",
      description: "Analysis using R on the impact of Paid Parental Leave (PPL) policies on mothers' labor force participation through demographics.",
      imgSrc: "/thumbnails/thesis.png",
      link: "https://github.com/saravargas88/undergraduate-thesis/blob/main/The%20Effects%20of%20Paid%20Parental%20Leaves%20on%20the%20Labor%20Force%20Participation%20of%20Mothers%20%20(2).pdf"
    },
   
    /// Here you can keep adding more projects as needed 
  ];

  return ( 
    <Container fluid className="my-5">
       <h1>Projects </h1>
       
      <Row>
        {projects.map((project, index) => (
          <Col md={4} className="mb-4" key={index}>
            <ProjectCard {...project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}