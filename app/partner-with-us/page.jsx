import React from 'react'
import PartnerHero from '../../components/partners/partnerHero'
import PartnerSelection from '../../components/partners/PartnerSelection'
import ElectrogoEdge from '../../components/partners/ElectrogoEdge'
import PartnershipRoadmap from '../../components/partners/PartnershipRoadmap'
import LeadFormSection from '../../components/partners/LeadFormSection'

const page = () => {
  return (
    <>
      <PartnerHero />
      <PartnerSelection />
      <ElectrogoEdge />
      <PartnershipRoadmap />
      <LeadFormSection />
    </>
  )
}

export default page
