import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";

export const metadata = {
  metadataBase: new URL('https://electrogo.in'),
  title: {
    default: 'Electrogo Mobility | Rajasthan’s First 100% EV Ecosystem',
    template: '%s | Electrogo'
  },
  description: 'Launching April 2026. Premium EV Cabs, Executive Govt. Taxis, and High-Speed Charging Infrastructure across Jodhpur, Jaipur, and Udaipur.',
  icons: {
    icon: [
      {
        url: '/logo.png', // Ensure this file is in your /public folder
        type: 'image/png',
        sizes: '40x40',
      },
    ],
    apple: '/logo.png', // For iOS home screen bookmarks
  },
  keywords: [
    'Electric Mobility Rajasthan',
    'EV Cabs Jodhpur',
    'Govt Executive Taxis',
    'EV Charging Hubs Rajasthan',
    'Sustainable Transport India'
  ],
  authors: [{ name: 'Electrogo Mobility Pvt Ltd' }],
  themeColor: '#0052FF',
  openGraph: {
    title: 'The Future of Rajasthan is Electric | Electrogo',
    description: 'Join the green waitlist for Rajasthan’s premier zero-emission mobility network.',
    url: 'https://electrogomobility.com/',
    siteName: 'Electrogo Mobility',
    images: [
      {
        url: '/logo..png', 
        width: 1200,
        height: 630,
        alt: 'Electrogo - Powering Rajasthan with Clean Energy',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Electrogo Mobility | April 2026',
    description: '100% emission-free mobility for Rajasthan’s Leadership and Citizens.',
    images: ['/twitter-card.jpg'],
    site: '@ElectrogoIN',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}