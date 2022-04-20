import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {SiGithub} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Túlio Costa</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>

      </ul>

      <div className="footer__socials">
      <a href='https://www.linkedin.com/in/tulio-costa-422787152/' target='blank'><BsLinkedin /></a>
      <a href='https://github.com/Tuliotdct' target='blank'><SiGithub/></a>

      </div>

      <div className="footer__copyright">
        <small>&copy; Túlio Costa. All Rights Reserved</small>
      </div>

    </footer>
  )
}

export default Footer