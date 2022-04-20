import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img/powerbiadventurework.png'
import IMG2 from '../../assets/img/powerbiwidewordwimporters.png'
import IMG3 from '../../assets/img/tableauvideogamesales.png'
import IMG4 from '../../assets/img/tableaucarsales.png'
import IMG5 from '../../assets/img/pythonNFT.png'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <br></br>
      <br></br>
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      

      <div className="container portfolio__container">

        <article className='portfolio__item'>
          <h2>PowerBI</h2>
          
          <div className='portfolio__item-image'>
            <img className='imagedimensions' src={IMG1} alt="PowerBI Adventure Works Sales" />
          </div>
          <h2>Adventure Work</h2>
          <h4>To develop this dashboard, we used database a called adventure works present since SQL Server 2005 with data from a fictitious company that sells adventure sporting goods such as bicycles, sportswear and accessories. This dashboard will show the company's sales in the internet and resale segment and product sales.</h4>
          <div className='portfolio__item-cta'>
            
          <a href='https://github.com/Tuliotdct/PowerBI/tree/main/AdventureWorks' className='btn' target='blank'>GitHub</a>
          <a href='https://app.powerbi.com/view?r=eyJrIjoiZTgxZTVkYTMtODMxNC00ODA1LWE3MzMtZjEyMjBhNDMzYTdkIiwidCI6IjdiNWZmZDY5LTEwZGItNDRhNS1hNmViLWNjMTRhMTRmZGZiYSJ9&pageName=ReportSection' className='btn btn-primary' target='blank'>Live Demo</a>
          </div>

        </article>

        <article className='portfolio__item'>
          <h2>PowerBI</h2>
          
          <div className='portfolio__item-image'>
            <img className='imagedimensions' src={IMG2} alt="PowerBI Wide World Importers" />
          </div>
          <h2>Wide World Importers</h2>
          <h4>Wide World Importers is a fictitious company created by Microsoft to provide a new sample database that illustrates the core capabilities of SQL Server 2016. Fictitious company importing wholesale goods and selling to companies that resell to US consumers. Through these data, analyzes and mathematical indicators were developed in Powerbi.</h4>
          <div className='portfolio__item-cta'>
          <a href='#' className='btn' target='blank'>GitHub</a>
          <a href='#' className='btn btn-primary' target='blank'>Live Demo</a>
          </div>

        </article>

        <article className='portfolio__item'>
          <h2>Tableau</h2>
          
          <div className='portfolio__item-image'>
            <img className='imagedimensions' src={IMG3} alt="PowerBI Adventure Works Sales" />
          </div>
          <h2>Video Game Sales</h2>
          <h4>The data to create this dashboard in Tableau was taken from the kaggle website and aims to show data on video game sales in the world over time, in addition to being able to visualize sales by segment.</h4>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/Tuliotdct/Tableau/tree/main/VideoGameSales' className='btn' target='blank'>GitHub</a>
          <a href='https://public.tableau.com/app/profile/tulio.da.costa.tom./viz/VideoGameSales_16461055899030/VideoGamesSales' className='btn btn-primary' target='blank'>Live Demo</a>
          </div>

        </article>


        <article className='portfolio__item'>
          <h2>Tableau</h2>
          
          <div className='portfolio__item-image'>
            <img className='imagedimensions' src={IMG4} alt="PowerBI Adventure Works Sales" />
          </div>
          <h2>Car Sales</h2>
          <h4>In this tableau dashboard you can see who buys the most cars in the world, men or women, in addition to being able to see the number of cars purchased by brand.</h4>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/Tuliotdct/Tableau/tree/main/CarSalesByGender' className='btn' target='blank'>GitHub</a>
          <a href='https://public.tableau.com/views/CarSalesAnalysisbyGender/CarSalesByGender?:language=pt-BR&publish=yes&:display_count=n&:origin=viz_share_link' className='btn btn-primary' target='blank'>Live Demo</a>
          </div>

        </article>


        <article className='portfolio__item'>
          <h2>Python</h2>
          
          <div className='portfolio__item-image'>
            <img className='imagedimensions' src={IMG5} alt="PowerBI Adventure Works Sales" />
          </div>
          <h2>NFT Collections</h2>
          <h4>This analysis in python consists of 250 collections of NFT and their all time statistics such as sales, transactions, ownership and buyers a sample EDA performed by me could be found in the Code section.</h4>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/Tuliotdct/PythonAnalysis/tree/main/NFT%20Collections' className='btn' target='blank'>GitHub</a>
          <a href='http://pythonnftcollections.tuliotdct.com/' className='btn btn-primary' target='blank'>Live Demo</a>
          </div>

        </article>


        
        
      </div>
    </section>
  )
}

export default Portfolio