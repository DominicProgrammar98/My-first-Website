import React from 'react'
import "./Header.css"
import ME from "../../assets/1668852249532.jpg"

const Header = () => {
  return (
    <div>
      <div className='header-container'>
        <h5>Hello I'm</h5>
        <h2>Abolfazl Bazazpour</h2>
        <h5 className='text-light'>Junior React JS Developer</h5>
      </div>
      <div className="me">
          <img src={ME} alt='me' />
        </div>
    </div>
  )
}

export default Header