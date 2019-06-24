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
                  <NavLink className="mr-4" to="/" exact activeClassName="active-link">Home</NavLink>
                  <NavLink className="mx-4" to="/analysis" exact activeClassName="active-link">Analysis</NavLink>
                  <NavLink className="mx-4" to="/sessions" exact activeClassName="active-link">Sessions</NavLink>
                  <NavLink className="ml-4" to="/clients" exact activeClassName="active-link">Clients</NavLink>
                </div>
            </div>
        </nav>
  )
}

export default Navbar
