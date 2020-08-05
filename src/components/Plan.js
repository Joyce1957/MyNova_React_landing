import React from 'react'

export default function Plan(props) {
    return (
        <div className="col-sm-4">
        <div className="plan">
    <h3 className="plan-title light">{props.title}</h3>
            <h4 className="plan-cost bold">{props.cost}</h4>
            <h5 className="monthly">{props.month}</h5>
            <ul className="plan-features">
    <li>{props.projects}</li>
    <li>{props.developers}</li>
    <li>{props.unlimited}</li>
    <li>{props.disk}</li>
            </ul>
            <div className="plan-price-div text-center">
                <div className="choose-plan-div">
                    <button className="plan-btn light" >
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}
