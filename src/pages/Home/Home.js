import React from 'react'
import bg from "../../assets/bg-img.jpg"
import "./Home.css"
import Logo from '../../components/Logo/Logo'
import Nav from '../../components/Nav/Nav'

function Home() {
  return (
    <div className='home' id="home">
      <div className="header">
        <Logo/>
        <Nav/>
      </div>
      <div className="home__content section__padding">
        <h1 className='headtext__main'>Japanese Cuisine & Sushi Bar</h1>
        <a href="#menu"><button className='custom__button'>Menu</button></a>
      </div>
      <div className="home__bg">
        <img src={bg} alt="background sushi" />
      </div>
    </div>
  )
}

export default Home