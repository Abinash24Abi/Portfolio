import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>About Me</h2>
          <p>Passionate Developer Creating Modern Web Solutions</p>
        </div>

        <div className={styles.content}>
          {/* Left Text */}
          <div className={styles.text}>
            <p>
              I am <strong>Abinash K.</strong>, a MERN Stack Developer with expertise in building 
              responsive and interactive web applications. I enjoy writing clean, maintainable code, 
              solving real-world problems, and transforming ideas into functional digital solutions. 
              My focus is on creating user experiences that are both efficient and visually appealing.
            </p>
            <p>
              With experience in React, Node.js, SQL, and modern web technologies, I am constantly 
              learning and adapting to new tools to deliver high-quality software solutions.
            </p>
          </div>

          {/* Right Skills */}
          <div className={styles.skills}>
            <h3>My Skills</h3>

            <div className={styles.skill}>
              <span>React.js</span>
              <div className={styles.skillBar}>
                <div className={styles.skillLevel} style={{ width: "90%" }}></div>
              </div>
            </div>

            <div className={styles.skill}>
              <span>Node.js</span>
              <div className={styles.skillBar}>
                <div className={styles.skillLevel} style={{ width: "85%" }}></div>
              </div>
            </div>

            <div className={styles.skill}>
              <span>SQL & Databases</span>
              <div className={styles.skillBar}>
                <div className={styles.skillLevel} style={{ width: "80%" }}></div>
              </div>
            </div>

            <div className={styles.skill}>
              <span>HTML, CSS & JS</span>
              <div className={styles.skillBar}>
                <div className={styles.skillLevel} style={{ width: "95%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
