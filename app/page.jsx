import React from 'react'
import Navbar from '../components/Navbar'
import HeroBanner from '../components/home/HeroBanner'
import FourPillars from '../components/home/FourPillars'
import SustainabilityDashboard from '../components/home/SustainabilityDashboard'
import HardwareShowcase from '../components/home/HardwareShowcase'
import Roadmap from '../components/home/Roadmap'
import PartnershipPortals from '../components/home/PartnershipPortals'
import Faq from '../components/home/Faq'
import HomeAbout from '../components/home/HomeAbout'

const page = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <FourPillars />
      <HardwareShowcase />
      <HomeAbout />
      <Roadmap />
      <SustainabilityDashboard />
      <PartnershipPortals />
      <Faq />
    </>
  )
}

export default page
