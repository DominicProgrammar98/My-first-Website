import React from 'react'
import {BsCheckCircleFill} from 'react-icons/bs'
import "./Experience.css"

const Experience = () => {
  return (
    <section id='experience'>
        <h5>What Skills I have</h5>
        <h2>My Experience</h2>

        <div className="experience__container">
            <div className="experience__frontend">
                <h3>Frontend Development</h3>
                <div className="experience__content">
                    <article className='experience__details'>
                        <BsCheckCircleFill className='experience__details-icon'/>
                        <div>
                          <h4>HTML5</h4>
                          <small className='text-light'>amateur</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsCheckCircleFill className='experience__details-icon'/>
                        <div>
                          <h4>CSS3</h4>
                          <small className='text-light'>Beginner</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsCheckCircleFill className='experience__details-icon'/>
                        <div>
                          <h4>React JS</h4>
                          <small className='text-light'>Junior</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsCheckCircleFill className='experience__details-icon'/>
                        <div>
                          <h4>JavaScript</h4>
                          <small className='text-light'>Junior</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsCheckCircleFill className='experience__details-icon'/>
                        <div>
                          <h4>Git</h4>
                          <small className='text-light'>Beginner</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <BsCheckCircleFill className='experience__details-icon'/>
                        <div>
                          <h4>API</h4>
                          <small className='text-light'>amateur</small>
                        </div>
                    </article>
                </div>

            </div>
            <div className="experience__backend">
            <h3>Backend Development</h3>
                <div className="experience__content">
                    <article className='experience__details'>
                        <BsCheckCircleFill className='experience__details-icon'/>
                        <div>
                          <h4>Node.JS</h4>
                          <small className='text-light'>junior</small>
                        </div>
                    </article>
                    
                </div>
     
            </div>
        </div>
    </section>
  )
}

export default Experience