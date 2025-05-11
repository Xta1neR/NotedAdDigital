import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/Navbar'
import React from 'react'
import HeroSection from './components/hero'
import InfoLife from './components/infoLife'
import AboutUsFirst from './components/aboutus'
import { HeroHighlightDemo } from './components/heroHighlight'
const LifeNAD = () => {
  return (
    <div  className="absolute top-0 overflow-x-clip w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Navbar />
      <HeroSection />
      <InfoLife />
      <AboutUsFirst />
      <HeroHighlightDemo />
      <Footer />
    </div>
  )
}

export default LifeNAD
export const metadata = {
  title: "NotedAdDigital - Life at NAD",
  description: "Experience the vibrant culture and dynamic work environment at NotedAdDigital. Join us in Jalandhar for a fulfilling career in digital marketing.",
  keywords: "digital marketing, SEO, social media marketing, PPC, online presence, Jalandhar, NotedAdDigital",
  author: "Rituraj Goswami",
  viewport: "width=device-width, initial-scale=1.0",
};
