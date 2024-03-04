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
      <p>Hello! My name is Nikhil Kumar and I enjoy creating things that live on the internet. My interest in App devlopment and creating web/app designs started back in 2021 when I decided to try to learn some app and website devlopment— turns out into a habbit
Fast-forward to today, and I’ve had the privilege of making some good mobile application and web application with clean and minimal function and ui and still learning to make myself better </p>
    </div>
    <div className="about-image">
<img className='rounded-md'  src={data.resume} alt="aboutherosvg" />
    </div>    
</div>
  )
}

export default DarkAbout
