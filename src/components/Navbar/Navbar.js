import React from 'react'

import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
            <div className="container">
                <Link to="/" className="navbar-logo text-black">
                  {/* <img className="profitsLogo" src={ProfitsLogo} alt=""/> */}
                  Profit<span className="dollarSign">$</span>
                </Link>
                <div className="nav-links float-right">
                  <NavLink className="mx-4" to="/">Home</NavLink>
                  <NavLink className="mx-4" to="/analysis">Analysis</NavLink>
                  <NavLink className="mx-4" to="/sessions">Sessions</NavLink>
                  <NavLink className="mx-4" to="/clients">Clients</NavLink>
                </div>
            </div>
        </nav>
  )
}

export default Navbar
