import React from 'react'
import logo from "../../../public/logo.png"
import Facebook from "../../../public/facebook.png"
import Twitter from "../../../public/twitter.png"
import instagram from "../../../public/Shape.svg"
import "./Footer.css"

const Footer  = () => {
  return (
    <div className='footer'>
        <div className='upper'>
            <div className='upper-text'>
                <div className='uppertext-logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='uppertext-card'>
                    <h3>Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Tech2job</li>
                        <li>Find Talents</li>
                    </ul>
                </div>
                <div className='uppertext-card'>
                    <h3>Contact</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Whatsapp</li>
                    </ul>
                </div>
                <div className='uppertext-card'>
                    <h3>Information</h3>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
                <div className='subs'>
                    <p>Subscribe to our newsletter</p>
                    <div>
                        <input type="text" placeholder="What's your email?" />
                        <button>Subscribe</button>
                    </div>
                </div>

            </div>
        </div>

        <div className='socials'>
            <div className='socials-main'>
                <div className='socials-list'>
                    <img src={Facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={Twitter} alt="" />
                </div>
                <div>
                    <p>&#169;2023 OSUN Techstars. All rights reserved</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer