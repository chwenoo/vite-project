import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/blog'>Blog</Link>
    </nav>
  )
}

export default Nav