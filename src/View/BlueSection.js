import React from 'react'
import EmailForm from '../components/EmailForm'

export default function BlueSection() {
    return (
        <div className="blue-section">
    <h3 className="blue-section-header bold"> Download FREE!</h3>
    <h4 className="blue-section-subtext light">Take it for a ride for any of your projects!</h4>
    <EmailForm />

    <div id="newsletter-loading-div"></div>

    </div>
    )
}
