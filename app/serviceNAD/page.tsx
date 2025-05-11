import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/Navbar'
import React from 'react'
import HeroSection from './components/hero'
import { DraggableCardDemo } from './components/draggableHero'
import ServicesList from './components/servicesList'

const Services = () => {
  return (
    <div  className="absolute top-0 overflow-x-clip w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Navbar />
      <HeroSection />
      <DraggableCardDemo />
      <ServicesList />
      <Footer />
    </div>
  )
}

export default Services
export const metadata = {
  title: "NotedAdDigital - Services",
  description: "Get the best digital marketing services with NotedAdDigital. We offer SEO, social media marketing, PPC, and more.",
  keywords: "digital marketing, SEO, social media marketing, PPC, online presence, Jalandhar, NotedAdDigital",
  author: "Rituraj Goswami",
  viewport: "width=device-width, initial-scale=1.0",
};
