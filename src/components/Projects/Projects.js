import React from "react";
import styles from "./Projects.module.css";
import ts from '../../asset/ts.png';
import sms from '../../asset/sms.png';
import es from '../../asset/e-shop.png';

const projectsData = [
  {
    id: 1,
    title: "School Management System",
    description:
      "A complete school management system with role-based access , attendance tracking, scheduling, and performance analytics using React, Node.js, and SQL Server.",
    image: sms,
    github: "https://github.com/Abinash24Abi/SchoolSystem",
    demo: "#",
  },
  {
    id: 2,
    title: "ElectroMart E-Commerce",
    description:
      "An e-commerce platform for electronic products with product catalog, shopping cart, and order management system using the MERN stack.",
    image: es,
    github: "https://github.com/Abinash24Abi/ElectroMart",
    demo: "https://electro-mart-bice.vercel.app/",
  },
  {
    id: 3,
    title: "Time Sheet Management",
    description:
      "A timesheet management application where employees can log work hours, track productivity, and generate reports for analysis.",
    image: ts,
    github: "https://github.com/Abinash24Abi/TimeSheet",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Projects</h2>
          <p>Some of my recent work showcasing my skills and expertise</p>
        </div>

        <div className={styles.projectGrid}>
          {projectsData.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.image}>
                <img src={project.image} alt={project.title} />
              </div>
              <div className={styles.content}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.links}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
