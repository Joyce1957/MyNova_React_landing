import React from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

export default function Footer() {
    return (
        <Router>
        <div className="footer">
        <div className="container">
            <div className="row">
    
                <div className="col-sm-2"></div>
    
                <div className="col-sm-8 webscope">
                    <span className="webscope-text"> A free template by </span>
                    <Link to="/https://webscopeapp.com"> 
                    <img src="assets/images/webscope.svg" alt=""/> 
                    </Link>
                </div>
            
    
                <div className="col-sm-2">
                    <div className="social-links">
                        <Link to="/https://twitter.com/webscopeapp"> 
                        <img className="social-link"
                        src="assets/images/twitter.svg" alt=""/>
                         </Link>
                        <Link to="/https://www.facebook.com/webscopeapp/?ref=aymt_homepage_panel"> 
                        <img
                        src="assets/images/facebook.svg" alt=""/> 
                        </Link>
                    </div>
                    
                </div>     
    
            </div>  
    
        </div>
        
    </div>
    </Router>
    )
}
