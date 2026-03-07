import React from 'react'
import B2GHero from '../../components/business/page2/hero'
import WhiteGloveTacticalUI from '../../components/business/page2/glove'
import FleetShowcase from '../../components/business/page2/fleet'
import B2GContactForm from '../../components/business/page2/contact'

const page = () => {
  return (
    <>
      <B2GHero />
      <WhiteGloveTacticalUI />
      <FleetShowcase />
      <B2GContactForm />
    </>
  )
}

export default page
