import React from 'react'
import ContactHero from '../../components/contact/Hero'
import ContactDetails from '../../components/contact/Fleet'
import InquirySection from '../../components/contact/Form'
import MapSection from '../../components/contact/Map'

export const metadata = {
  title: 'Contact Us | Partner with Electrogo Mobility',
  description: 'Get in touch with Rajasthan’s premier EV infrastructure network. Inquire about B2G partnerships, fleet intelligence, or charging hub locations.',
  alternates: {
    canonical: 'https://electrogomobility.com/contact',
  },
  openGraph: {
    title: 'Connect with Electrogo | Powering the 2026 Rollout',
    description: 'Direct channel for government inquiries, corporate partnerships, and career follow-ups.',
    url: 'https://electrogomobility.com/contact',
    images: [{ 
      url: '/logo.png', 
      width: 1200, 
      height: 630,
      alt: 'Electrogo Mobility Contact Center'
    }],
    type: 'website',
  },
};

const page = () => {
  return (
    <>
      <ContactHero />
      <ContactDetails />
      <InquirySection />
      <MapSection />
    </>
  )
}

export default page
