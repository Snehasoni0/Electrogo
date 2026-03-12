import RoadmapContent from "../../components/roadmap/RoadmapContent";


export const metadata = {
  title: 'Development Roadmap | The Path to April 2026',
  description: 'Explore the strategic phases of Electrogo. From infrastructure stress tests to the launch of Rajasthan’s largest electric vehicle network.',
  alternates: {
    canonical: 'https://electrogomobility.com/roadmap-2026',
  },
  openGraph: {
    title: 'Electrogo Strategic Roadmap | 2024 - 2026',
    description: 'A timeline of Rajasthan’s green transition. Tracking our progress from V2G alpha testing to state-wide fleet deployment.',
    url: 'https://electrogomobility.com/roadmap-2026',
    images: [{ 
      url: '/logo.png', 
      width: 1200, 
      height: 630,
      alt: 'Electrogo Mobility Infrastructure Roadmap'
    }],
    type: 'website',
  },
};

const RoadmapTimeline = () => {

  return (
    <>
      <RoadmapContent />
    </>
  );
};

export default RoadmapTimeline;