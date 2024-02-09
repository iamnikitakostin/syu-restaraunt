import React from 'react'
import "./About.css"
import bg from "../../assets/japan_bg.png"

function About() {
  return (
    <div className='app__about section__padding'>
        <div className="app__about-text">
            <p className='headtext__highlight'>
                Opened in 2023 and located in 
                the heart of Richmond.
                <br/>In Syu, we create delicious sushi 
                made of the freshest ingredients.
            </p>
        </div>
        <div className="app__about-img">
            <img src={bg} alt="japan" />
        </div>
    </div>
  )
}

export default About