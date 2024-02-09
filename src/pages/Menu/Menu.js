import React from 'react'
import "./Menu.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import menu from "../../constants/menu.json";

function Menu() {
  return (
    <div className='app__menu' id="menu">
        <div className="app__menu-categories">
            <Carousel infiniteLoop={true} dynamicHeight={false} emulateTouch={true} showThumbs={false}>
                {menu.map((category) => (
                    <div className="menu__category" key={category.nameOfCategory}>
                        <div className="menu__category-name">
                            <h2 className='headtext__highlight'>
                                {category.nameOfCategory}
                            </h2>
                        </div>
                        <ul className='menu__category-items'>
                            {category.items.map((item => (
                                <li key={item.nameOfProduct}>
                                    <h3>{item.nameOfProduct}</h3>
                                    <p>{item.price}</p>
                                </li>
                            )))}
                        </ul>
                    </div>
                ))}
            </Carousel>
        </div>
    </div>
  )
}

export default Menu