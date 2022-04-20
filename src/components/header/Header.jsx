import React from 'react'
import './header.css'
import './CTA'
import CTA from './CTA'
import ME from '../../assets/img/mybody.png'
import HeaderSocials from './HeaderSocials'
import './header.css'
import Typical from 'react-typical'
import {BiMouse} from 'react-icons/bi'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello, I'm</h4>
        <h1>Tulio Costa</h1>

        <div>
          <span>
            {" "}
            <h4 className="text-light "></h4>
              {" "}
              <Typical
              loop={Infinity}
              steps={[
                "Data Science",
                1500, 
                "Data Analytics",
                1500,
                "Big Data",
                1500,
                "Business Intelligence",
                1500, 
              ]}
              
              
              />

          </span>
        </div>
          
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img className='mypicture' src={ME} alt="My face" />
        </div>

        <a href='#contact' className='scroll__down'><BiMouse className='mouse__scrool-down'/>Scroll Down</a>
        

      </div>
    </header>
  )
}

export default Header