import React from 'react'
import B2GHero from '../../components/business/page2/hero'
import WhiteGloveTacticalUI from '../../components/business/page2/glove'
import FleetShowcase from '../../components/business/page2/fleet'
import B2GContactForm from '../../components/business/page2/contact'

export const metadata = {
  title: 'Protocol & Prestige | Govt. & Enterprise EV Taxis Rajasthan',
  description: 'Secure, protocol-compliant electric mobility for Rajasthan’s leadership and official delegations. Executive EV fleet solutions for administrative and corporate sectors.',
  alternates: {
    canonical: 'https://electrogomobility.com/gov-enterprise-taxis',
  },
  openGraph: {
    title: 'Govt. & Enterprise Mobility | Electrogo Protocol Services',
    description: 'High-security, zero-emission executive transportation designed for Rajasthan’s administrative officers and corporate leadership.',
    url: 'https://electrogomobility.com/gov-enterprise-taxis',
    images: [{ 
      url: '/logo.png',
      width: 1200, 
      height: 630,
      alt: 'Electrogo Protocol-Compliant Executive EV Taxi'
    }],
    type: 'website',
  },
};

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
