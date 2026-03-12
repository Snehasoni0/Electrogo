import SafetyContent from "../../components/safety/SafetyContent";

export const metadata = {
  title: 'Safety Protocol | Our Zero-Compromise Standards',
  description: 'The Electrogo safety framework: From AI-monitored fleet tracking to high-voltage grid security. Ensuring passenger and infrastructure safety across Rajasthan.',
  alternates: {
    canonical: 'https://electrogomobility.com/safety-policy',
  },
  openGraph: {
    title: 'Safety First | The Electrogo Reliability Standards',
    description: 'Protecting our passengers, our grid, and the Rajasthan corridor with 24/7 AI-driven surveillance and protocol-compliant safety measures.',
    url: 'https://electrogomobility.com/safety-policy',
    images: [{ 
      url: '/logo.png', 
      width: 1200, 
      height: 630,
      alt: 'Electrogo Safety and Monitoring Systems'
    }],
    type: 'website',
  },
};

const page = () => {
  return (
   <>
    <SafetyContent />
   </>
  );
};

export default page;