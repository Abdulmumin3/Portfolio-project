import React from 'react'
import Services from './Services'
import linkedin from '../components/Assets/linkedin.png'
import twitter from '../components/Assets/twitter.png'
import './ServicesRend.css'
import user2 from '../components/Assets/user2.jpg'
import About from './Education'
import Experience from './Experience'
import Contact from './Contact'

const Homepage = () => {
  return (
    <div className='container'>
      <div className="homepage">
        <header>
        <nav>
          <nav className="navleft">
          <h3>Adesoye AbdulMu'min.</h3>
          <ul  className="navlist">
          <li className='navli'><a href="#">About Me</a></li>
          <li className='navli'><a href="#">Education</a></li>
          <li className='navli'><a href="#">Experience</a></li>
          <li className='navli'><a href="#">Contact Me</a></li>
          
          </ul>
          </nav>
          <div className="imgdiv"><img src={linkedin} alt="linkedin"/>
          <img src={twitter} alt="twitter"/></div>
          
        </nav>
        </header>
        <img src={user2}alt="user2" className='user'/>
        <div className='text'>
        <h3>HI THERE </h3>
        <h3>I am Adesoye AbdulMu'min</h3>
        <h1>A Full-Stack Developer, <br/>Scholar and Mentor.</h1>
        <img src={linkedin} alt="linkedin"/>
        <img src={twitter} alt="twitter"/>
        </div>
      </div>
      {<About/>}
      {<Experience/>}
      {<Contact/>}
       {/* <Services/> */}
    </div>
    
  )
}

export default Homepage