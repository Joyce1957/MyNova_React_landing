import React from 'react'
import IconFeatures from '../components/IconFeatures'

export default function FeatureSection() {
    return (
        <div id="features" className="features-section">

    <div className="features-container row">

        <h2 className="features-headline light">FEATURES</h2>

    <IconFeatures 
      src="assets/images/responsive.svg"
      title='FULLY RESPONSIVE'
      content='Looks amazing on any
      device: smartphone, tablet, laptop and desktop.'
    />


<IconFeatures 
      src="assets/images/customizable.svg"
      title='CUSTOMIZABLE'
      content='Change the colors, pictures or any
      of the sections
      to suit your needs.'
    />

<IconFeatures 
      src="assets/images/design.svg"
      title=' SLICK AND BEAUTIFUL DESIGN'
      content='Trendy and fresh design, fits any
      website.'
    />
       
    </div> 
</div> 
    )
}
