import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/Navbar'
import React from 'react'
import HeroSection from './components/hero'
import ContactPage from './components/contactPage'

const Contact = () => {
  return (
    <div  className="absolute top-0 overflow-x-clip w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] z-0">
      <Navbar />
      <HeroSection />
      <ContactPage />
      <Footer />
    </div>
  )
}

export default Contact
export const metadata = {
  title: "NotedAdDigital - Contact",
  description: "Contact us for more information about our services and how we can help you achieve your digital marketing goals.",
  keywords: "Contact, NotedAdDigital, Digital Marketing, Services, Inquiries",
  author: "Rituraj Goswami",
};
