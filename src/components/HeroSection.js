import React from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

export default function HeroSection() {
    return (
        <Router>
        <div className="hero row">
        <div className="hero-right col-sm-6 col-sm-6">
            <h1 className="header-headline bold"> Beautiful Free Nova template <br /></h1>
            <h4 className="header-running-text light"> A top notch premium quality template for your next
                web project.</h4>
            <Link to = "https://themewagon.com/themes/project-app-showasing-onepage-bootstrap-template-free/">
                <button className="hero-btn"> Download FREE!</button>
            </Link>
        </div>

        <div className="col-sm-6 col-sm-6 ipad">
            <img className="ipad-screen img-responsive" src="assets/images/screen.png" alt=""/>
        </div>

        <div><img className="mouse" src="assets/images/mouse.svg" alt=""/></div>

    </div>
    </Router>
    )
}
