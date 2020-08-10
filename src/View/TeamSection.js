import React from 'react'
import TeamAvatar from '../components/TeamAvatar'

export default function TeamSection() {
    return (
        <div id="team" className="team">
    <h2 className="team-section-header light text-center">THE TEAM</h2>

    <div className="team-container row">

        <TeamAvatar 
        avatar = 'assets/images/cto.png'
        title="CTO"
        heading="Johnny B Good"
        paratext="The brains behind the whole operation"
        />
        <TeamAvatar 
        avatar = 'assets/images/ceo.png'
        title="CEO"
        heading="Roll Over Beethoven"
        paratext="The one that puts it all together "
        />
        <TeamAvatar 
        avatar = 'assets/images/cfo.png'
        title="CFO"
        heading="Chuck Berry"
        paratext="The guy with his hand on the wallet"
        />
        </div>
    </div>
    )
}
