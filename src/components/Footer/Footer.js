import React from 'react';
import "./Footer.css";
import Logo from '../Logo/Logo';
import { FaInstagram, FaYelp, FaFacebook } from "react-icons/fa";
import MapComponent from "../MapComponent/MapComponent"
import { SiUbereats } from "react-icons/si";

function Footer() {
  return (
    <div className='app__footer section__padding' id="footer">
      <div className="app__footer-identity">
        <Logo/>
        <div className="footer__findUs-socials">
          <a href="https://www.instagram.com/syuvancouver/" target="__blank" aria-label='instagram'><FaInstagram fontSize={32}/></a>
          <a href="https://www.ubereats.com/ca/store/syu-japanese-cuisine-%26-sushi-bar/7mPPD04eWBCs59B7II3YFw" target="__blank" aria-label='uber eats'><SiUbereats fontSize={32}/></a>
          <a href="https://www.facebook.com/profile.php?id=100090638766553" target="__blank" aria-label='facebook'><FaFacebook fontSize={32}/></a>
          <a href="https://www.yelp.ca/biz/syu-richmond" target="__blank" aria-label='yelp'><FaYelp fontSize={32}/></a>
        </div>
      </div>
        
      <div className='app__footer-info'>
        <Logo/>
        <div className="footer__info-text">
          <h2 className='headtext__regular'>Address</h2>
          <p className='p__regular'>6628 River Rd #175 <br/>Richmond, BC V6X 1X5</p>
          <h2 className='headtext__regular'>Open Hours</h2>
          <p className='p__regular'>11:30 a.m. - 2:30 p.m.</p>
          <p className='p__regular'>5:30 p.m. - 10 p.m</p>
          <h2 className='headtext__regular'>Contacts</h2>
          <p className='p__regular'>+1 (236) 777-6511</p>
        </div>
      </div>




      <div className="footer__findUs-map">
          <MapComponent />
      </div>
    </div>
  )
}

export default Footer