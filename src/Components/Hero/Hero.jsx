import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div id="home" className='hero'>
      <img class="img-body" src="\src\assets\img-body.jpg" alt="invalid"></img>
      <h1><span>I'm Guru prasad peraboina</span>, python full stack Developer</h1>
      <p>I’m a passionate Python Full Stack Developer skilled in building dynamic, responsive web applications using Django, React, and modern technologies. I create efficient backends and seamless user experiences with clean, scalable code.</p>
      <div className='hero-action'>
        <div className="hero-connect"><a href="#contact">Connect with me</a></div>
        <a href="https://drive.google.com/file/d/1gMoTWa2U5J8wjsZld2lAQQ1LDn7_RPLK/view?usp=sharing"><div className="hero-resume">My Resume</div></a>
      </div>
    </div>
  )
}

export default Hero
