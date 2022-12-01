import React from 'react'
import "./Nav.css"
import {AiFillHome} from "react-icons/ai"
import {FcAbout} from "react-icons/fc"
import {BsFillBookmarkFill} from "react-icons/bs"
import {FcContacts} from "react-icons/fc"

const Nav = () => {
  return (
    <nav>
      <a href='#'><AiFillHome/></a>
      <a href='#about'><FcAbout/></a>
      <a href='#experience'><BsFillBookmarkFill/></a>
      <a href='#contact'><FcContacts/></a>
    </nav>
  )
}

export default Nav