import React from 'react'
import {BsGithub} from "react-icons/bs"
import {ImLinkedin} from "react-icons/im"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://github.com/DominicProgrammar98' target={'_blank'}><BsGithub/></a>
        <a href='https://www.linkedin.com/in/abolfazl-bazazpour-7a1449248' target={'_blank'}><ImLinkedin/></a>
    </div>
  )
}

export default HeaderSocials