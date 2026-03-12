import React from 'react'
import BusServiceHero from '../../components/business/page4/hero'
import BusImpactGrid from '../../components/business/page4/why'
import FleetFeatures from '../../components/business/page4/fleet'
import RouteRoadmap from '../../components/business/page4/Map'

export const metadata = {
  title: 'Electric Bus Division | Sustainable Mass Transit Rajasthan',
  description: 'Deploying high-capacity, zero-emission electric bus fleets for urban and inter-city connectivity. Smart mass transit solutions for the Jaipur-Jodhpur corridor.',
  alternates: {
    canonical: 'https://electrogomobility.com/electric-bus-division',
  },
  openGraph: {
    title: 'Electrogo Electric Bus Division | Scaling Mass Mobility',
    description: 'Transforming Rajasthan’s public transport with AI-driven fleet intelligence and 100% electric bus infrastructure.',
    url: 'https://electrogomobility.com/electric-bus-division',
    images: [{ 
      url: '/logo.png',
      width: 1200, 
      height: 630,
      alt: 'Electrogo Electric Bus Fleet'
    }],
    type: 'website',
  },
};

const page = () => {
  return (
    <>
      <BusServiceHero />
      <BusImpactGrid />
      <FleetFeatures />
      <RouteRoadmap />
    </>
  )
}

export default page
