import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route,
    NavLink
  } from "react-router-dom";
  

export default function Header() {
    return (
        <Router>
        <div className="header-container header">
            <Link to ="/">
         <img className="logo" src="assets/images/logo.svg" alt=""/> 
        </Link>

        <Route path='/external' component={() => { window.location = 'https://domain.extension/external-without-params'; return null;} }>
            <button className="header-btn"> Download FREE!</button>
        </Route>
        <div className="header-right">
            <NavLink  to="/#team" className="navbar-item">The Team</NavLink>
            <NavLink  to="/#pricing" className="navbar-item">Pricing</NavLink>
            <NavLink to = "/#features" className="navbar-item" >Features
            </NavLink>
        </div>
    </div>
    </Router>
   
    )
}
