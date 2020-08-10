import React from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  

export default function Header() {
    return (
        <Router>
        <div className="header-container header">
            <Link to ="/">
         <img className="logo" src="assets/images/logo.svg" alt=""/> 
        </Link>

        <Link to="/https://themewagon.com/themes/project-app-showasing-onepage-bootstrap-template-free/">
            <button className="header-btn"> Download FREE!</button>
        </Link>
        <div className="header-right">
            <Link  to="/#team" className="navbar-item">The Team</Link>
            <Link  to="/#pricing" className="navbar-item">Pricing</Link>
            <Link to = "/#features" className="navbar-item" >Features
            </Link>
        </div>
    </div>
    </Router>
   
    )
}
