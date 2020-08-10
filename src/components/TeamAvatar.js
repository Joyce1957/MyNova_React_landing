import React from 'react'

export default function TeamAvatar(props) {
    return (
       
        <div class="col-sm-4 team-member">
        <img src={props.avatar}  alt=""/>
        <div class="team-member-text">
            <h4 class="team-member-position light">{props.title}</h4>
            <h5 class="bold">{props.heading}</h5>
    <p class="light">{props.paratext}</p>
            <a href="http://www.twitter.com"><img class="team-social-icon" src="assets/images/team-twitter.svg" alt=""/></a>
            <a href="http://www.facebook.com"><img class="team-social-icon"
                                                   src="assets/images/team-facebook.svg" alt=""/>
                                                   </a>
            <a href="https://plus.google.com/"><img class="team-social-icon"
                                                    src="assets/images/team-google.svg" alt=""/>
                                                    </a>
        </div>
    </div>
    
    )
}
