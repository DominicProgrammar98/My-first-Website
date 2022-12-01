import React from 'react'
import "./About.css"
import ME from '../../assets/me-about.jpg'
import {BsAward} from 'react-icons/bs'
import {HiUsers} from 'react-icons/hi'
import {AiTwotoneFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
     <h5>Get To Know</h5>
     <h2>About Me</h2>

      <div className="about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image' />
          </div>
        </div>
           
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsAward className='about__icon' />
              <h5>Experience</h5>
              <small>Junior</small>
            </article>

            <article className='about__card'>
              <HiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>Yet to come</small>
            </article>

            <article className='about__card'>
              <AiTwotoneFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>+5 And many more to come</small>
            </article>
          </div>

           <p>
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit vero hic nostrum excepturi odit odio rem sequi facere pariatur ab? Fugit debitis expedita asperiores quos illum iste doloribus nisi veritatis?
           </p>

           <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About