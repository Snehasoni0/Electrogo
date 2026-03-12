import TermsServicesContent from "../../components/terms/TermsServicesContent";


export const metadata = {
  title: 'Terms of Service | Electrogo Mobility',
  description: 'The legal framework for using Electrogo services in Rajasthan. Review our user agreement for City Cabs, Charging Hubs, and Enterprise solutions.',
  alternates: {
    canonical: 'https://electrogomobility.com/terms-of-services',
  },
  openGraph: {
    title: 'Terms of Service | Electrogo',
    description: 'Operating guidelines and legal terms for the Rajasthan Electric Corridor.',
    url: 'https://electrogomobility.com/terms-of-services',
    images: [{ url: '/logo.png' }], // Use a consistent legal/corporate image
  },
};

const page = () => {

  return (
    <>
      <TermsServicesContent />
    </>
  );
};

export default page;