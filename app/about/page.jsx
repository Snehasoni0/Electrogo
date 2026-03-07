"use client";
import { useEffect, useState } from "react";
import { ArrowRight, Leaf, Quote, ShieldCheck, Users, Zap } from "lucide-react";
import Image from "next/image";
import Hero from "../../components/about/Hero"
import WhyNow from "../../components/about/WhyNow";
import MissionAndValues from "../../components/about/MissionAndValues";
import LeadershipSection from "../../components/about/LeadershipSection";
import Pillars from "../../components/about/Pillars";
import SustainabilitySection from "../../components/about/SustainabilitySection";
import Invite from "../../components/about/Invite";


export default function AboutPage() {
  return (
    <>
      <Hero />
      <WhyNow />
      <Pillars />
      <MissionAndValues />
      <LeadershipSection />
      <SustainabilitySection />
      <Invite />
    </>

  );
}

