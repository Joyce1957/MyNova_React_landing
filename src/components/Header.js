import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

export default function Header() {
    return (
        <Router>
        <div className="header-container header">
            <Link to ="/">
         <img className="logo" src="assets/images/logo.svg"/> 
        </Link>

        <a href="https://themewagon.com/themes/project-app-showasing-onepage-bootstrap-template-free/">
            <button className="header-btn"> Download FREE!</button>
        </a>
        <div className="header-right">
            <a className="navbar-item" href="#team">The Team</a>
            <a className="navbar-item" href="#pricing">Pricing</a>
            <Link to = "/features" className="navbar-item" >Features
            </Link>
        </div>
    </div>
    </Router>
   
    )
}
