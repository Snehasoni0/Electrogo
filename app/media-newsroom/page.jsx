
import NewsRoomContent from "../../components/newsroom/NewsRoomContent";


export const metadata = {
  title: 'Media & System Logs | Electrogo Mobility News',
  description: 'Track the latest infrastructure updates, B2G partnerships, and technology milestones from the Rajasthan Electric Corridor.',
  alternates: {
    canonical: 'https://electrogomobility.com/media-newsroom',
  },
  openGraph: {
    title: 'Electrogo Media Archive | Real-Time EV Progress',
    description: 'Inside the April 2026 rollout: From Jaipur-Ajmer stress tests to V2G technology alpha testing.',
    url: 'https://electrogomobility.com/media-newsroom',
    images: [{
      url: '/logo.png',
      width: 1200,
      height: 630,
      alt: 'Electrogo System Logs and News'
    }],
    type: 'website',
  },
};

const page = () => {
  return (
    <>
      <NewsRoomContent />
    </>
  );
};

export default page;