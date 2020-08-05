import React from 'react'

export default function WhiteText(props) {
    return (
        <div className="col-sm-6">

        <div className="white-section-text">

            <h2 className="imac-section-header light">{props.title}</h2>

            <div className="imac-section-desc">

            <span>{props.desc}</span>
            </div>
        </div>
    </div>
    )
}
