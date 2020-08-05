import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'

export default function LandingSection() {
    return (
        <div className="hero-background">
    <div>
        <img className="strips" src="assets/images/strips.png" alt="" />
    </div>
    <div className="container">
        <Header />
        <HeroSection />
    </div>
    </div>
    )
}
