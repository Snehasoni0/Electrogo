import PrivacyContent from "../../components/privacy/PrivacyContent";


export const metadata = {
  title: 'Privacy Policy | Data Protection & Transparency',
  description: 'How Electrogo Mobility handles your data. Our commitment to privacy, data security, and compliance with Indian digital data protection laws.',
  alternates: {
    canonical: 'https://electrogomobility.com/privacy-terms',
  },
  openGraph: {
    title: 'Electrogo Privacy Commitment',
    description: 'Transparent data practices for our EV ecosystem and B2G infrastructure.',
    url: 'https://electrogomobility.com/privacy-terms',
    images: [{ url: '/logo.png' }],
  },
};

const page = () => {

  return (
    <>
      <PrivacyContent />
    </>
  );
};

export default page;