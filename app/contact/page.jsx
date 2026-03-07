import React from 'react'
import ContactHero from '../../components/contact/Hero'
import ContactDetails from '../../components/contact/Fleet'
import InquirySection from '../../components/contact/Form'
import MapSection from '../../components/contact/Map'

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
