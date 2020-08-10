import React from 'react'
import WhiteText from '../components/WhiteText'

export default function WhiteSection() {
    return (
        <div className="white-section row">

    <div className="imac col-sm-6">
        <img className="imac-screen img-responsive" src="assets/images/imac.png" alt=""/>
    </div>

    <WhiteText 
    title="SIMPLE AND BEAUTIFUL"
    desc=" Use Nova theme for your next web project.
    It is completely customizable so you can change any of the sections to fit your needs.
    Nova Theme is Free for any kind of use, personal and commercial. Have fun and good luck!"
    />
            
        </div>
    )
}
