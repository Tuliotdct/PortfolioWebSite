import React from 'react'
import './about.css'
import ME from '../../assets/img/myface.png'
import {FiAward} from 'react-icons/fi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {RiComputerLine} from 'react-icons/ri'

const About = () => {
  return (
    <section id='about'>
      <br></br>
      <br></br>
      <h5>Know more</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img className='imageaboutface' src={ME} alt="my face smiling" />
          </div>
        </div>  

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FiAward className='about__icon' />
              <h5>Experience</h5>
              <small>6+ Years Working</small>
            </article>

            <article className='about__card'>
              <AiOutlineFundProjectionScreen className='about__icon' />
              <h5>Projects in companies</h5>
              <small>+40 Projects</small>

            </article>

            <article className='about__card'>
              <RiComputerLine className='about__icon' />
              <h5>Courses</h5>
              <small>+1.100 Hours in Courses</small>

            </article>
          </div>

            <p>
            Passionate about data analysis and statistic, I started working with data analysis, both in Power BI, Tableau, TIBCO Spotfire and Excel, beyond databases (Oracle and SQL Server) and python. Thereby where I developed myself as a professional and I could evolve in other skills such as teamwork, leadership and agility to solve problems. I currently have more than 6 years of experience in the area and more than 40 projects developed in 3 companies that I worked.
            <br></br>
            <br></br>Email: tuliotdct@gmail.com
            <br></br>Phone: 55 61 98350-6612
            <br></br>Github: https://github.com/Tuliotdct
            </p>

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>




        </div>

      </div>


    </section>
  )
}

export default About