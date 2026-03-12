import React from 'react'
import PartnerHero from '../../components/partners/partnerHero'
import PartnerSelection from '../../components/partners/PartnerSelection'
import ElectrogoEdge from '../../components/partners/ElectrogoEdge'
import PartnershipRoadmap from '../../components/partners/PartnershipRoadmap'
import LeadFormSection from '../../components/partners/LeadFormSection'

export const metadata = {
  title: 'Partner with Us | Scaling Rajasthan’s EV Infrastructure',
  description: 'Join Electrogo in building India’s most advanced electric corridor. Partnerships for charging station hosts, fleet owners, and B2G infrastructure projects.',
  alternates: {
    canonical: 'https://electrogomobility.com/partner-with-us',
  },
  openGraph: {
    title: 'Collaborate with Electrogo | Powering the 2026 Grid',
    description: 'Grow your business with the Rajasthan Electric Corridor. Inquire about hosting, fleet integration, and investment opportunities.',
    url: 'https://electrogomobility.com/partner-with-us',
    images: [{ 
      url: '/logo.png',
      width: 1200, 
      height: 630,
      alt: 'Electrogo Partnership and Infrastructure Network'
    }],
    type: 'website',
  },
};

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
