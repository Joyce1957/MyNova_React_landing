import React from 'react'
import Plan from '../components/Plan'

export default function PricingSection() {
    return (
<div id="pricing" className="pricing-background">

<h2 className="pricing-section-header light text-center">CHOOSE YOUR PRICING PLAN</h2>
<h4 className=" pricing-section-sub text-center light">Pick any of our super affordable pricing plans</h4>

<div className="pricing-table row">
    <Plan 
    title="BASIC"
    cost="15"
    month="per month"
    projects="Up to 7 Projects"
    developers="2 Additional Developers"
    />

<div className="col-sm-4">
            <div className="mid-plan">
                <h3 className="plan-title light">AGENCY</h3>
                <h4 className="plan-cost bold">55</h4>
                <h5 className="monthly">per month</h5>
                <ul className="plan-features">
                    <li>Up to 25 Projects</li>
                    <li>2 Additional Developers</li>
                    <li>Unlimited Support</li>
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

<Plan 
    title="PRO"
    cost="75"
    month="per month"
    projects="Up to 25 Projects"
    developers="2 Additional Developers"
    unlimited="Unlimited Support"
    disk="1.5GB Disk Space"
    />

    </div>
    </div>
    )
}
