import React from 'react'
import InfraHero from '../../components/business/page3/hero'
import TechSpecsGrid from '../../components/business/page3/techSpeed'
import LandownerPitch from '../../components/business/page3/hostStation'
import ExpansionMap from '../../components/business/page3/ExpansionMap'


export const metadata = {
  title: 'EV Charging Network | High-Speed Infrastructure Rajasthan',
  description: 'Powering the Rajasthan electric corridor with high-speed EV charging hubs. Strategic grid connectivity for the Jaipur, Jodhpur, and Ajmer highways.',
  alternates: {
    canonical: 'https://electrogomobility.com/ev-charging-network',
  },
  openGraph: {
    title: 'The Grid | Electrogo High-Speed EV Charging Hubs',
    description: 'Scaling Rajasthan’s most reliable electric vehicle charging infrastructure. 100% clean energy for a net-zero future.',
    url: 'https://electrogomobility.com/ev-charging-network',
    images: [{ 
      url: '/logo.png',
      width: 1200, 
      height: 630,
      alt: 'Electrogo High-Speed Charging Station in Rajasthan'
    }],
    type: 'website',
  },
};

const page = () => {
  return (
    <>
      <InfraHero />
      <TechSpecsGrid />
      <LandownerPitch />
      <ExpansionMap />
    </>
  )
}

export default page
