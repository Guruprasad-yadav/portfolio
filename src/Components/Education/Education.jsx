import React from 'react'
import theme_pattern from "../../assets/theme_pattern.svg"
import './Education.css'
const Education = () => {
  return (
    <div id="education" className='education'>
        <div className='education-title'>
          <h1>My Education</h1>
          <img src={theme_pattern} alt="invalid"></img>
        </div>
      <div className='mca'>
        <div className='details'>
            <h3>MCA — Master Of Computer Applications</h3>
            <h5>Acharya nagarjuna university, Guntur, Andhra pradesh</h5>
            <p>Stream: computer science</p>
            <p>2023-2025</p>
        </div>
        <div className='ed-img'>
          <img src="/src/assets/mca_img.png" alt="invalid"></img>
        </div>
      </div>
      <div className='degree'>
        <div className='details'>
            <h3>B.S.C — Statistics</h3>
            <h5>Sri Sadhana Degree College, Markapur, Andhra pradesh</h5>
            <p>Stream: M.S.Cs</p>
            <p>2019-2022</p>
        </div>
        <div className='ed-img'>
          <img src="/src/assets/degree_img.png" alt="invalid"></img>
        </div>
      </div>
      <div className='inter'>
        <div className='details'>
            <h3>Intermediate</h3>
            <h5>Sri Prathiba Degree college, Ongole, Andhra pradesh</h5>
            <p>Stream: M.P.C</p>
            <p>2017-2019</p>
        </div>
        <div className='ed-img'>
          <img src="/src/assets/inter_img.png" alt="invalid"></img>
        </div>
      </div>
    </div>
  )
}

export default Education
