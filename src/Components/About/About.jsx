import React from 'react'
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
const About = () => {
  return (
    <div id="about" className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="invalid"></img>
      </div>
      <div className='about-sections'>
        <div className="about-left">
            <img className="body-img" src="\src\assets\img-body.jpg"  alt="invalid"></img>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I’m a passionate Python Full Stack Developer skilled in building dynamic, responsive web applications using Django, React, and modern technologies.</p>
                <p> I create efficient backends and seamless user experiences with clean, scalable code.</p>
            </div>
            <div className="about-skills">
                <div className='row1'>
                  <div className="about-skill">
                    <img className="skill-img" src="\src\assets\html_image.png" alt="invalid"></img>
                    <p>HTML5</p>
                  </div>
                  <div className="about-skill">
                    <img className="skill-img" src="\src\assets\css_image.png" alt="invalid"></img>
                    <p>CSS 3</p>
                  </div>
                  <div className="about-skill">
                    <img className="skill-img" src="\src\assets\js.png" alt="invalid"></img>
                    <p>JavaScript</p>
                  </div>
                  <div className="about-skill">
                    <img className="skill-img" src="\src\assets\python_image.png" alt="invalid"></img>
                    <p>Python</p>
                  </div>
                </div>
                <div className='row2'>
                  <div className="about-skill">
                  <img className="skill-img" src="\src\assets\django_image.png" alt="invalid"></img>
                  <p>Django</p>
                </div>
                <div className="about-skill">
                  <img className="skill-img" src="\src\assets\react_image.png" alt="invalid"></img>
                  <p>ReactJS</p>
                </div>
                <div className="about-skill">
                  <img className="skill-img" src="\src\assets\mysql_image.png" alt="invalid"></img>
                  <p>MySql</p>
                </div>
                </div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>projects are completed</p>
        </div>
      </div>
    </div>
  )
}

export default About
