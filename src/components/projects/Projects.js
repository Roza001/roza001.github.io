import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ristorante from "../../images/ristorante.PNG";
import snake from "../../images/snake3.png";
import html5 from "../../images/html50.png";
import css from "../../images/css50.png";
import js from "../../images/js50.png";
import node50 from "../../images/node50.png";
import sass50 from "../../images/sass50.png";
import bootstrap50 from "../../images/boostrap50.png";
import Project from "./Project";
import "./Projects.scss";

const projects = [
  {
    src: ristorante,
    technologies: [html5, css, js, bootstrap50, sass50, node50],
    title: "Ristorante Con Fusion",
    description: `A web page for a fake restaurant, created while completing the
    "Front-End Web UI Frameworks and Tools: Bootstrap 4" course by The
    Hong Kong University of Science and Technology. The aim of completing
    this course and project was to get more comfortable with using
    Bootstrap 4. On top of that, the course teaches about CSS
    preprosessors, Less and Sass, as well as the basics of Node.js and npm
    scripts.`,
    code: 'https://github.com/Roza001/Front-End-Web-UI-Frameworks-and-Tools-Bootstrap-4',
    demo: 'https://roza001.github.io/bootstrap4/',
  },
  {
    src: snake,
    technologies: [html5, js],
    title: "Snake",
    description: `Classic game Snake as a javascript script on a html page.`,
    code: 'https://github.com/Roza001/jsSnake',
    demo: 'http://htmlpreview.github.io/?https://github.com/Roza001/jsSnake/blob/main/snake.html'
  },
];

function Projects() {
  return (
    <div className="projects" id="projects">
      <Carousel fade>
        {projects.map((project) => (
          <Carousel.Item className="project-item">
            <Project project={project} key={project.src} />
          </Carousel.Item>
        ))}        

         {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
}

export default Projects;
