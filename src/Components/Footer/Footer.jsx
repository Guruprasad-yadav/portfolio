import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
            <img className="img-link" src="https://static.vecteezy.com/system/resources/previews/011/563/990/original/gp-logo-gp-design-blue-and-red-gp-letter-gp-letter-logo-design-initial-letter-gp-linked-circle-uppercase-monogram-logo-vector.jpg" alt="Invalid"></img>
            <p>A passionate Python Full Stack Developer skilled in building dynamic web applications using Django, React, and modern web technologies. Dedicated to delivering clean, efficient, and scalable solutions.</p>
        </div>
        <div className='footer-top-right'>
            <div className="footer-email-input">
                <img src={user_icon} alt="invalid"></img>
                <input type="email" placeholder='Enter your email'></input>
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr/>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
            <p>2023 Gp. All rights reserved</p>
            <div className='footer-bottom-right'>
                <p>Term of services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
