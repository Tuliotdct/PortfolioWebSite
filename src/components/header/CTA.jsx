import React from 'react'
import CV from '../../assets/curriculum/CV-TulioCosta.pdf'


const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download="" className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Get In Touch</a>

    </div>
  )
}

export default CTA