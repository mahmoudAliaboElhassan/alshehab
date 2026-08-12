import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatWeBuy from './components/WhatWeBuy'
import WhyUs from './components/WhyUs'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-tajawal" dir="rtl">
      <Navbar />
      <Hero />
      <WhatWeBuy />
      <WhyUs />
      <CTA />
      <Footer />
    </div>
  )
}
