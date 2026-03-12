import React from 'react'
import { Download, CarTaxiFront, Leaf } from "lucide-react";
import CityEVHero from '../../components/business/page1/hero';
import ZeroPromise from '../../components/business/page1/promise';
import AppExperience from '../../components/business/page1/app';
import RadarCommandHub from '../../components/business/page1/app';
import HowItWorks from '../../components/business/page1/working';

export const metadata = {
  title: 'City EV Cabs | Premium Zero-Emission Rides in Rajasthan',
  description: 'Experience silent, app-based, and zero-surge electric cab services. Premium urban mobility for Jodhpur, Jaipur, and Udaipur. Launching April 2026.',
  alternates: {
    canonical: 'https://electrogomobility.com/city-ev-cabs',
  },
  openGraph: {
    title: 'Electrogo City Cabs | The Modern Way to Commute',
    description: 'Eco-friendly, silent, and smart. Book your 100% electric ride across Rajasthan’s major cities.',
    url: 'https://electrogomobility.com/city-ev-cabs',
    images: [{ 
      url: '/logo.png',
      width: 1200, 
      height: 630,
      alt: 'Electrogo City EV Cab on a Rajasthan city street'
    }],
    type: 'website',
  },
};

const page = () => {
  return (
    <>
      <CityEVHero />
      <ZeroPromise />
      <RadarCommandHub />
      <HowItWorks />
    </>
  )
}

export default page
