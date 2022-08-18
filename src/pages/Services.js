import React from 'react'
import user from '../components/Assets/user.png'
import ServiceRend from '../components/Services/ServiceRend'
import './ServicesRend.css'
import About from'../components/About/About'

const Services = () => {
  return (
    <div className='Service'>
        <ServiceRend pics={user} text={"User"} smallText={"tdtduyuycjyhfcyhfyf"} />
        <ServiceRend pics={user} text={"Consult"} smallText={"drydytcdjyicfjc"}/>
        <ServiceRend pics={user} text={"Consult"} smallText={"drydytcdjyicfjc"}/>
        <ServiceRend pics={user} text={"Consult"} smallText={"drydytcdjyicfjc"}/>
        <ServiceRend pics={user} text={"Consult"} smallText={"drydytcdjyicfjc"}/>
        <ServiceRend pics={user} text={"Consult"} smallText={"drydytcdjyicfjc"}/>
        <ServiceRend pics={user} text={"Consult"} smallText={"drydytcdjyicfjc"}/>
        <ServiceRend pics={user} text={"Consult"} smallText={"drydytcdjyicfjc"}/>
        <ServiceRend pics={user} text={"Consult"} smallText={"drydytcdjyicfjc"}/>

        <About/>
    </div>
  )
}

export default Services