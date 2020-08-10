import React from 'react'


export default function IconFeatures(props) {
    return (
        <div className="col-sm-4 feature">

        <div className="feature-icon ">
            <img className="feature-img" src={props.src}  alt=""/>
        </div>
        <h5 className="feature-head-text ">{props.title}</h5>
        <p className="feature-subtext light ">{props.content}</p>
    </div>
    )
}
