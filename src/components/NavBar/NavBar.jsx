import React from 'react'
import logo from "../../../public/logo.png"
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='main'>
      <div className='main-text'>
        <div className='logo'><img src={logo} alt="" /></div>
        <div className='list'>
        <nav >
            <ul className='nav'>
                <li><a href="">Home </a></li>
                <li><a href="">About Us </a></li>
                <li><a href="">Tech Talent Academy </a></li>
                <li><a href="">Talent Bank </a></li>
                <li><a href="">Contact Us </a></li>
            </ul>
        </nav>
        <button className='btn'>Apply Now</button>
        </div>
        </div>
    </div>
  )
}

export default NavBar