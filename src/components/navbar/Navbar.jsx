import React from 'react';
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className='main-navbar'>
    <div className="navbar">
    <div className="nav-container">
        <input className="checkbox" type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>  
      <div className="logo">
        <h1>Navbar</h1>
      </div>
      <div className="menu-items bg-light w-100">
        <li><a href="#">Home</a></li>
        <li><a href="#">about</a></li>
        <li><a href="#">blogs</a></li>
        <li><a href="#">portfolio</a></li>
        <li><a href="#">contact</a></li>
      </div>
    </div>
  </div>
</nav>

  )
}

export default Navbar