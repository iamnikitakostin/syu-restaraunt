import React from 'react'
import "./Nav.css"
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from "react-icons/ai";


function Nav() {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className='header__navigation'>
        <ul className='app__navbar-links'>
            <li className="p__highlight"><a href="#home">Home</a></li>
            <li className="p__highlight"><a href="https://www.sevenrooms.com/reservations/syujapanesecuisine" target='__blank'>Reservations</a></li>
            <li className="p__highlight"><a href="#footer">Contact us</a></li>
        </ul>
        <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <AiOutlineClose
              fontSize={27}
              className='overlay__close'
              onClick={() => setToggleMenu(false)}
              />
            <ul className='app__navbar-smallscreen_links'>
              <li className="p__highlight"><a href='#home' onClick={(() => setToggleMenu(false))}>Home</a></li>
              <li className="p__highlight"><a href='https://www.sevenrooms.com/reservations/syujapanesecuisine' target='__blank'>Reservations</a></li>
              <li className="p__highlight"><a href='#footer' onClick={(() => setToggleMenu(false))}>Contact us</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Nav