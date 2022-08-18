import React from 'react'
import twitter from '../components/Assets/twitter.png'
import linkedin from '../components/Assets/linkedin.png'
import './ServicesRend.css'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='text2'>
        <h3>Tel: 2348020736247</h3>
        <img src={twitter} alt="twitter"/><span>Anonymo1Adesoye</span><br/>
        <img src={linkedin} alt="linkedin"/><span>AbdulMu'min Adesoye</span>
        <h3>Email: abdulmumeenadesoye19@gmail.com</h3>
        </div>
    </div>
  )
}

export default Contact