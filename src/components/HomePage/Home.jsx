import React from 'react'
import rectangle3 from '../../../public/Rectangle3.png'
import rectangle4 from '../../../public/Rectangle4.png'
import rectangle5 from '../../../public/Rectangle18.png'
import rectangle6 from '../../../public/image6.png'
import rectangle7 from '../../../public/image7.png'
import arrow from '../../../public/Arrow.png'
import './Home.css'

const Home = () => {
  return (
    <>
    <div className='body'>
            <div className='hero'><h1>OSUN State Investment in young talent for better future</h1></div>
            <div className='mission'><p>Our mission is to close the unemployment gap and to help the youth embrace technology of the future today</p></div>
        <div className='buttons'>
            <button className='btn2'>Apply Now</button>
            <button className='btn3'>Find Talent</button>
        </div>
        
    </div>

    <div className='aboutus'>
        <div className='about-text'>
            <div className='about-header'>
            <div><h4>ABOUT US</h4></div>
            <h2>Our Story</h2>
            </div>
            <div className='aboutus-body'>
                <p>OSUN Techstars is a non-profit organization and we are committed to making OSUN State the institution with the highest percentage of youth in the technology workforce.
                We are embracing the technology of the future and advancing youth in technology from the bootcamp to the workspace.
                Our aim is to contribute to the fast-growing tech industry as technology is the language of the future, and every youth should learn it.
                Today, technology touches almost every aspect of our lives. But we’re still in the early stages of this digital journey, that’s one of the reasons why we need to empower the youth in digital transformation.</p>

                <div className='aboutus-mission'>
                    <h3>MISSION</h3>
                    <p>Our mission is to create a vibrant tech platform,  that nurturing today’s talent, creating tomorrow’s opportunities in technology.</p>
                    <button>Learn More</button>
                </div>

                
            </div>
        </div>
        </div>
        

        <div className='service'>
        <div className='services'>
            <div className='service-text'>
            <h4>SERVICES</h4>
            <h2>What We Do</h2>
            <p>we are dedicated to shaping Nigerian's future by bridging <br /> the gap between tech talent and job oppurtunities</p>
            </div>
            <div className='service-list'>
                <div className='ser-list'>
                    <img src={rectangle3} alt="" />
                    <div>
                        <h2>
                            Tech2Jobs
                        </h2>
                        
                        <p>Tech2jobs is our initiative to equip the youth with the skills they need to thrive in the tech industry. Explore our diverse training programs including</p>
                        
                        <ul>
                            <li>UI/UX Design</li>
                            <li>Cybersecurity</li>
                            <li>Digital Marketing</li>
                            <li> Software Engineering</li>
                        </ul>

                        <button>Apply Now</button>
                    </div>   
                </div>

                <div className='ser-list'>
                    <div>
                        <h2>Talents Bank</h2>

                        <p>Unlock the poential of our tech talent pool for you company. Learn how OSUN Techstars can help you find skilled tech professionals who are ready to contribute to your organization's success</p>

                        <button>Hire Talent</button>
                    </div>
                    <img src={rectangle4} alt="" />
                </div>
                
                <div className='ser-list'>
                    <img src={rectangle5} alt="" />

                    <div>
                        <h2>OSUN Tech Symposium</h2>

                        <p>
                            OTS is a programme that empowers our youth on how to pt the perfect pitch together and facilitates the conversation with potential investors
                        </p>

                        <ul>
                            <li>Idea Pitch Workshop</li>
                            <li>Fund Raising Programme</li>
                            <li>Mentorship</li>
                            <li>Potential Investors</li>
                        </ul>

                        <button>Apply Now</button>
                    </div>
                </div>
                
            </div>

            <div className='dev'>
                <div className='dev-list'>
                    <img src={rectangle7} alt="" />
                    <div>
                        <h3>Software Development</h3>
                        <p>Tech2jobs is our initiative to equip the youth with the skills they need to thrive in the tech industry</p>

                        <ul>
                            <li>UI/UX Design</li>
                            <li>Cybersecurity</li>
                            <li>Digital Marketing</li>
                            <li> Software Engineering</li>
                        </ul>

                        <button>Apply Now</button>
                    </div>
                </div>

                <div className='dev-list'>
                    <img src={rectangle6} alt="" />
                    <div>
                        <h3>Mobile Development</h3>

                        <p>Tech2jobs is our initiative to equip the youth with the skills they need to thrive in the tech industry</p>
                        
                        <ul>
                            <li>UI/UX Design</li>
                            <li>Cybersecurity</li>
                            <li>Digital Marketing</li>
                            <li> Software Engineering</li>
                        </ul>

                        <button id='btns'>Apply Now</button>
                    </div>
                </div>
            </div>

        </div>
        </div>

        <div className='explore'>
            <div>
                <h4><span>Explore</span> Our Courses</h4> 
                <img src={arrow} alt="" />
            </div>

            <div className='expo'>
                <div>
                    <h3>
                        Building A Community That Embodies Technical Growth, Networking, Mentoring And Visibility Amongst All Level Career Roles In Technology
                    </h3>
                </div>

                <div className='btnz'>
                    <button>Apply Now</button>
                    <button style={{backgroundColor: 'transparent', color: 'white'}}>Find Talent</button>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Home