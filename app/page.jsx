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


export const metadata = {
  title: 'The Future of Rajasthan is Electric | Electrogo Mobility',
  description: 'Rajasthan’s premier 100% emission-free mobility network. Executive Govt. Taxis, City EV Cabs, and High-Speed Charging Infrastructure. Launching April 2026.',
  keywords: ['Electric Mobility Rajasthan', 'EV Cabs Jodhpur', 'Govt Executive Taxis', 'EV Charging Hubs Rajasthan'],
  
  alternates: {
    canonical: 'https://electrogomobility.com/', 
  },

  openGraph: {
    title: 'Electrogo | Powering Rajasthan’s Net-Zero Future',
    description: 'Join the green waitlist for Rajasthan’s first 100% emission-free EV ecosystem.',
    url: 'https://electrogomobility.com/',
    siteName: 'Electrogo Mobility',
    locale: 'en_IN',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Electrogo Mobility | April 2026 Rollout',
    description: 'The state’s largest transition to clean energy starts here.',
    site: '@ElectrogoIN',
    creator: '@ElectrogoIN',
  },

};

const page = () => {
  return (
    <>
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
