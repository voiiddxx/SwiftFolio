import React from 'react'
import "./Darkabout.css"

type darkAboutProps = {
data : any
}
const DarkAbout = ({data} : darkAboutProps) => {
  return (
    <div className="about-main">
    <div className="about-text">
      <h1>About Me</h1>
      <p>{data.about} </p>
    </div>
    <div className="about-image">
<img className='rounded-md'  src={data.resume} alt="aboutherosvg" />
    </div>    
</div>
  )
}

export default DarkAbout
