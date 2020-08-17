import React from 'react'

export default function TeamAvatar(props) {
    return (
       
        <div className="col-sm-4 team-member">
        <img src={props.avatar}  alt=""/>
        <div className="team-member-text">
            <h4 className="team-member-position light">{props.title}</h4>
            <h5 className="bold">{props.heading}</h5>
    <p className="light">{props.paratext}</p>
            <a href="http://www.twitter.com">
                <img className="team-social-icon" 
                src="assets/images/team-twitter.svg" alt=""/>
                </a>
            <a href="http://www.facebook.com">
                <img className="team-social-icon"
                src="assets/images/team-facebook.svg" alt=""/>
                 </a>
            <a href="https://plus.google.com/">
                <img className="team-social-icon"
                src="assets/images/team-google.svg" alt=""/>
                </a>
        </div>
    </div>
    
    )
}
