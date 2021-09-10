import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import logo from '../logo.svg'


const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="nav-center">
          <BrowserRouter>
            <Link to="/">
              <img src={logo} alt="cocktail db logo" className="logo" />
            </Link>
          </BrowserRouter>
          <ul className="nav-links">
            <li>
              <BrowserRouter>
                <Link to="/">
                  Home
                </Link>
              </BrowserRouter>
            </li>
            <li>
              <BrowserRouter>
                <Link to="/about">
                  About
                </Link>
              </BrowserRouter>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Navbar
