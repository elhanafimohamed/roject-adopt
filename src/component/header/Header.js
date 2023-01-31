import React from 'react'
// import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
      <nav>
         <div className="list-group">
            <a href="/" className="list-group-item list-group-item-action active">HOME </a>
            <a href="Javascript" className="list-group-item list-group-item-action active"> Javascript</a>
            <a href="/Css" className="list-group-item list-group-item-action">Css</a>
            <a href="/Html" className="list-group-item list-group-item-action disabled">HTML </a>
        </div>
      </nav>
     
    </>
  )
}

export default Header
