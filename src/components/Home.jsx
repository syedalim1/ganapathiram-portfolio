import React from 'react'
import About from './About'
import Education from './Education'
import Experience from './Experience'
import Awards from './Awards'
import Publications from './Publications'
import ConferencePresentations from './ConferencePresentations'
import AreaOfInterest from './AreaOfInterest'
import PersonalProfile from './PersonalProfile'
import RolesAndResponsibilities from './RolesAndResponsibilities'

function Home() {
  return (
    <div>
        <About/>
        <Education/>
        <Experience/>
        <Awards/>
        <Publications/>
        <ConferencePresentations/>
        <AreaOfInterest/>
        <PersonalProfile/>
        <RolesAndResponsibilities/>
    </div>
  )
}

export default Home