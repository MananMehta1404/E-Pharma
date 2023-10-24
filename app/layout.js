import './globals.css'

// import Nav from '@components/Nav';

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
            {/* <Nav /> */}
            {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout;
