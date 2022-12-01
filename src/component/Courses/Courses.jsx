import React from 'react'
import "./Courses.css"
import {AiFillYoutube} from 'react-icons/ai'

const Courses = () => {
  return (
    <section id='courses' className='course__link'>
        <div>
        <h1>My Youtube Courses</h1>
        <h4 className='course__name'>
            React Portfolio Website Tutorial From Scratch - Build & Deploy React JS Portfolio Website (2022)
        </h4>
        <a href='https://www.youtube.com/watch?v=G-Cr00UYokU&t=5917s' target={'_blank'}><AiFillYoutube/></a>
        <h4 className='course__name'>
            Learn React JS - Full Course for Beginners - Tutorial 2019
        </h4>
        <a href='https://www.youtube.com/watch?v=DLX62G4lc44' target={'_blank'}><AiFillYoutube/></a>
        <h4 className='course__name'>
            JavaScript Programming - Full Course
        </h4>
        <a href='https://www.youtube.com/watch?v=jS4aFq5-91M' target={'_blank'}><AiFillYoutube/></a>
        <h4 className='course__name'>
            APIs for Beginners - How to use an API (Full Course / Tutorial)
        </h4>
        <a href='https://www.youtube.com/watch?v=GZvSYJDk-us' target={'_blank'}><AiFillYoutube/></a>
        <h4 className='course__name'>
            Git and GitHub for Beginners - Crash Course
        </h4>
        <a href='https://www.youtube.com/watch?v=RGOj5yH7evk&t=1233s' target={'_blank'}><AiFillYoutube/></a>
        </div>
    </section>
  )
}

export default Courses