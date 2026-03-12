import Hero from "../../components/about/Hero"
import WhyNow from "../../components/about/WhyNow";
import MissionAndValues from "../../components/about/MissionAndValues";
import LeadershipSection from "../../components/about/LeadershipSection";
import Pillars from "../../components/about/Pillars";
import SustainabilitySection from "../../components/about/SustainabilitySection";
import Invite from "../../components/about/Invite";

export const metadata = {
  title: 'Our Mission: A Net-Zero Rajasthan by 2026 | Electrogo',
  description: 'Learn about Electrogo’s journey to build India’s most reliable EV ecosystem. From executive protocol mobility to high-speed charging hubs.',
  alternates: {
    canonical: 'https://electrogomobility.com/about',
  },
  openGraph: {
    title: 'About Electrogo Mobility | Powering Rajasthan’s Future',
    description: 'Our mission to transition Rajasthan to 100% emission-free mobility by April 2026.',
    url: 'https://electrogomobility.com/about',
    images: [{ url: '/logo.png', width: 1200, height: 630 }],
    type: 'website',
  },
};

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

