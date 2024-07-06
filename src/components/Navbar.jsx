import React from 'react'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* <Sidebar></Sidebar> */}
      <div className="wrapper">
        <span>JkDeveloper</span>
        <div className='social'>
        <a href='#' ><img src='./github.png'></img></a>
          <a href='#' ><img src='./instagram.png'></img></a>
          <a href='#' ><img src='./linkedin.png'></img></a>
          <a href='#' ><img src='./facebook.png'></img></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar