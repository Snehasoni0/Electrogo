import React from 'react'
import { Download, CarTaxiFront, Leaf } from "lucide-react";
import CityEVHero from '../../components/business/page1/hero';
import ZeroPromise from '../../components/business/page1/promise';
import AppExperience from '../../components/business/page1/app';
import RadarCommandHub from '../../components/business/page1/app';
import HowItWorks from '../../components/business/page1/working';


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
