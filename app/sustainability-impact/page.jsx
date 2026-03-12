import SustainabilityHero from '../../components/sustainability/Sustainability-hero'
import SustainabilityBento from '../../components/sustainability/Sustainability-bento'
import SolarToSocket from '../../components/sustainability/SolarToSocket'
import GlobalAlignment from '../../components/sustainability/GlobalAlignment'

export const metadata = {
  title: 'Sustainability & Net-Zero Vision | Electrogo Rajasthan',
  description: 'Our mission to eliminate fossil fuel dependency in Rajasthan. Scaling clean energy transit through V2G technology and zero-emission EV infrastructure.',
  alternates: {
    canonical: 'https://electrogomobility.com/sustainability-impact',
  },
  openGraph: {
    title: 'Powering a Greener Rajasthan | The Electrogo Impact',
    description: 'Targeting a 100% carbon-neutral transit corridor by 2026. Join the movement toward sustainable, AI-driven mobility.',
    url: 'https://electrogomobility.com/sustainability-impact',
    images: [{ 
      url: '/logo.png', 
      width: 1200, 
      height: 630,
      alt: 'Electrogo Green Energy and Sustainability Initiative'
    }],
    type: 'website',
  },
};

const page = () => {
  return (
    <>
      <SustainabilityHero />
      <SustainabilityBento />
      <SolarToSocket />
      <GlobalAlignment />
    </>
  )
}

export default page
