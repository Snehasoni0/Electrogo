import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Electrogo Mobility Pvt Ltd",
  description:
    "Electrogo Mobility is Rajasthan’s first 100% emission-free mobility ecosystem launching April 2026.",
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