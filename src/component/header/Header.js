import React from 'react'
import { Link, NavLink } from "react-router-dom";


const Header = () => {
  return (
    <>

          <Link to="/html">
          <h1>hello</h1>
          </Link>
      <nav className='links'>
              <NavLink className="link home" to='/'>Home</NavLink>
              <NavLink className="link css" to='/Css'>css</NavLink>
              <NavLink className="link js" to='/javascript'>javascript</NavLink>
              <NavLink className="link html" to='/html'>html</NavLink> 
      </nav>   
    </>
  )
}

export default Header
