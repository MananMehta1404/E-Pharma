import './globals.css'

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";

export const metadata = {
    title: "E-Pharma",
    description: "Your Health, Our Priority – Delivering Wellness to Your Doorstep!"
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
            <div className='gradient' />
        </div>

        <main className='app'>
            <Navbar />
            {children}
            <Footer />
        </main>
      </body>
    </html>
  )
}

export default RootLayout;
