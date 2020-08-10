import React from 'react';
import LandingSection from './View/LandingSection'
import FeatureSection from './View/FeatureSection'
import LogoSection from './View/LogoSection'
import WhiteSection from './View/WhiteSection'
import PricingSection from './View/PricingSection'
import TeamSection from './View/TeamSection'
import BlueSection from './View/BlueSection'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="body">
    
      <LandingSection />
      <FeatureSection />
      <LogoSection />
      <WhiteSection />
      <PricingSection />
      <TeamSection />
      <BlueSection />
      <Footer />
    </div>
  );
}

export default App;
