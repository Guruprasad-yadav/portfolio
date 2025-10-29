import React, { useRef, useState } from 'react'
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  let [menu,setmenu]=useState("");
  const menuRef=useRef();

  const openmenu=()=>{
    menuRef.current.style.right="0"
  }
  const closemenu=()=>{
    menuRef.current.style.right="-350px"
  }
  
  return (
    <div className='navbar'>
      <img className="img-link" src="https://static.vecteezy.com/system/resources/previews/011/563/990/original/gp-logo-gp-design-blue-and-red-gp-letter-gp-letter-logo-design-initial-letter-gp-linked-circle-uppercase-monogram-logo-vector.jpg" alt="Invalid"></img>
      <img src={menu_open} alt="invaild" onClick={openmenu} className='nav-mob-open'></img>
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} alt="invlid" onClick={closemenu} className="nav-mob-close"></img>
        <li><a href='/'><p onClick={()=>setmenu("home")}>Home</p>{menu==="home"?<img src={underline}alt=""/>:<></>}</a></li>
        <li><a href="#about"><p onClick={()=>setmenu("about")}>About me</p>{menu==="about"?<img src={underline}alt=""/>:<></>}</a></li>
        <li><a href="#services"><p onClick={()=>setmenu("services")}>My Projects</p>{menu==="services"?<img src={underline}alt=""/>:<></>}</a></li>
        <li><a href="#education"><p onClick={()=>setmenu("education")}>Education</p>{menu==="education"?<img src={underline}alt=""/>:<></>}</a></li>
        <li><a href="#contact"><p onClick={()=>setmenu("contact")}>Contact me</p>{menu==="contact"?<img src={underline}alt=""/>:<></>}</a></li>
      </ul>
      <div className='nav-connect'><a href='#contact'>Connect with me</a></div>
    </div>
  )
}

export default Navbar
