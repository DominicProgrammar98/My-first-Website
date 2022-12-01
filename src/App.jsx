import React from 'react'
import Header from "./component/Header/Header"
import Nav from "./component/Nav/Nav"
import About from "./component/About/About"
import Experience from './component/Experience/Experience'
import Courses from './component/Courses/Courses'
import Contact from "./component/Contact/Contact"
import Footer from "./component/Footer/Footer"
import CTA from './component/Header/CTA'
import HeaderSocials from './component/Header/HeaderSocials'

const App = () => {
  return (
    <>
        <Header />
        <CTA />
        <HeaderSocials />
        <Nav />
        <About />
        <Experience />
        <Courses />
        <Contact />
        <Footer />
    </>
  )
}

export default App