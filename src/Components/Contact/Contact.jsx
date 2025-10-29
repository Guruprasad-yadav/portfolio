import React from 'react';
import './Contact.css';

function Contact() {
  
  return (
    <div id="contact" className="contact container py-5 mt-3">
      <div className='contact-title'>
        <h1 className="text-center mb-4 fw-bold">
        Get in <span className="highlight">touch</span>
        </h1>
      </div>
      <div className="row">
        <div className="col-md-5 mb-4 left">
          <h2 className="mb-3">
            <span className="lets">Let</span>
            <span className="talk">’s talk</span>
          </h2>
          <p>
            I’m currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i> peraboinaguruprasad@gmail.com<br/>
            <i className="fa-solid fa-phone"></i> +91-9182465750<br/>
            <i className="fa-solid fa-location-dot"></i> Yerrabalem, Andhra pradesh,India
          </p>
          <div className='social-icons' id="s-icons" >
            <a href="https://www.linkedin.com/in/guruprasad-peraboina-15b5b9345/"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://www.instagram.com/prasad_yadav756/"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://x.com/king49870090"><i class="fa-brands fa-x-twitter"></i></a>
          </div>
        </div>
        <div className="col-md-7">
          <form action="https://api.web3forms.com/submit" method="POST" class="contact">
           <input type="hidden" name="access_key" value="1d7383c9-3925-43ce-b49c-fb9561f061fa"></input>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" name="name" className="form-control" id="name" placeholder="Enter your name"/>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input type="email" name="email" className="form-control" id="email" placeholder="Enter your email"/>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Write your message here</label>
              <textarea className="form-control" name='message' id="message" rows="5" placeholder="Enter your message"></textarea>
            </div>
            <button className="btn btn-gradient" type="submit">Submit now</button>
          </form>
        </div>
      </div>
    </div>
    
  );
}

export default Contact;
