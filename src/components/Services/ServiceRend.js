import React from 'react'


const ServiceRend = ({pics, text, smallText}) => {
  return (
    <div>
        <img src={pics} alt="icon"/>
        
        <h3>{text}</h3>
        <p>{smallText}</p>
    </div>
  )
}

export default ServiceRend