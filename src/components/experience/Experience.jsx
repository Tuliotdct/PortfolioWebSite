import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <section id='experience'>
      <br></br>
      <br></br>
      <h5>My Expertises</h5>
      <h2>MY Experience</h2>

      <div className='container experience__container'>
        <div className="experience__data-science">
          <h3>Data Science</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <div>
                <h4>Python</h4>
                <small className=''text-light>Experient</small>
              </div>

            </article>
            <article className='experience__details'>
              <div>
                <h4>Oracle DataBase</h4>
                <small className=''text-light>Experient</small>
              </div>

            </article>
            <article className='experience__details'>
              <div>
                <h4>SQL Server</h4>
                <small className=''text-light>Experient</small>
              </div>

            </article>
            <article className='experience__details'>
              <div>
              <h4>Statistic</h4>
              <small className=''text-light>Experient</small> 
              </div>

            </article>
          </div>
          

        </div>

        <div className="experience__data-analytics">

          <h3>Data Analytics</h3>
            <div className='experience__content'>
              <article className='experience__details'>
                <div>
                  <h4>PowerBI</h4>
                  <small className=''text-light>Experient</small>

                </div>

              </article>
              <article className='experience__details'>
                <div>
                  <h4>Tableau</h4>
                  <small className=''text-light>Experient</small>

                </div>

              </article>
              <article className='experience__details'>
                <div>
                  <h4>Tibco - Spotfire</h4>
                  <small className=''text-light>Experient</small>

                </div>

              </article>
              <article className='experience__details'>
                <div>
                  <h4>ETL-Pentaho</h4>
                  <small className=''text-light>Intermediate</small>

                </div>

              </article>

              <article className='experience__details'>
                <div>
                  <h4>ETL-Integration Services</h4>
                  <small className=''text-light>Intermediate</small>

                </div>

              </article>

              <article className='experience__details'>
                <div>
                  <h4>Excel</h4>
                  <small className=''text-light>Experient</small>

                </div>

              </article>
            </div>
          

        </div>
    
          
      </div>

      <div className='container'>

        <div className='timeline'>
          <div>
            <h3 className='year'>Boas Notas<br></br>2016- 2017</h3>
            <div className='linebotton'></div>
            <h4 className='description'>I taught physics and mathematics classes to elementary and high school students, in addition to assisting them in activities. Com o objetivo de ajudar os estudantes a solucionar suas dúvidas.</h4>
          </div>

          <div>
            <h3 className='year'>Brasal Veículos<br></br>2017 - 2019</h3>
            <div className='linetop'></div>
            <h4 className='description'>As a Marketing Intelligence Analyst, I developed tasks that aim to bring results to the business segment through mathematical indicators in the after sales segment and in parallel with the development of projects. I developed several projects such as systems implementation, data analysis and creation of dashboards in business intelligence in order to optimize processes to maximize profitability.

            <br></br>I worked with several projects such as systems implementation, data analysis and creation of Dashboards in business intelligence in Power Bi and Excel in order to optimize processes to maximize profitability.</h4>

          </div>

          <div>
            <h3 className='year'>Maminfo<br></br>2020 - 2020</h3>
            <div className='linebotton'></div>
            <h4 className='description'>In this company I developed mathematical analysis and created interactive panels, in addition to developing some python programs and analysis in the database, beloyd to creating Power BI dashboards.</h4>

          </div>

          <div>
            <h3 className='year'>Algar Telecom<br></br>2020 - This Moment</h3>
            <div className='linetop'></div>
            <h4 className='description'>I currently develop market analysis focused on the development of mathematical indicators within the business intelligence area in addition to the creation of interactive panels to visualize opportunities within the market using data visualization tools and I also work with developing SQL queries and creating python programs. At algar telecom, I developed projects in the commercial, financial, strategic and georeferencing dashboard segments.
            <br></br>While I was a marketing analyst I developed a market analysis that found more than 10 million reais in opportunities within the algar telecom network. From this analysis developed to be able to move up the area within the company to become a senior data analyst.
            </h4>


          </div>
         </div> 


      </div>




 




    </section>
  )
}

export default Experience