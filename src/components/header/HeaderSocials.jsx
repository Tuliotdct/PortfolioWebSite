import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {SiGithub} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/tulio-costa-422787152/' target='blank'><BsLinkedin /></a>
        <a href='https://github.com/Tuliotdct' target='blank'><SiGithub/></a>


    </div>
  )
}

export default HeaderSocials