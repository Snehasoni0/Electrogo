import React from 'react'
import BusServiceHero from '../../components/business/page4/hero'
import BusImpactGrid from '../../components/business/page4/why'
import FleetFeatures from '../../components/business/page4/fleet'
import RouteRoadmap from '../../components/business/page4/Map'

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
