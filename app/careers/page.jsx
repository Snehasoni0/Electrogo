import CareersContent from '../../components/careers/CareersContent';

export const metadata = {
  title: 'Join the Mission | Careers at Electrogo',
  description: 'Building Rajasthan’s electric spine. Explore openings for EV Engineers, Designers, and Infrastructure Leads in Jaipur, Jodhpur, and Udaipur.',
  alternates: {
    canonical: 'https://electrogomobility.com/careers',
  },
  openGraph: {
    title: 'Work at Electrogo Mobility',
    description: 'Help us scale Rajasthan’s electric corridor. Launching April 2026.',
    images: [{ url: '/logo.png' }],
  },
};

const page = () => {


  return (
    <>
      <CareersContent />
    </>
  );
};

export default page;