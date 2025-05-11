import Footer from '@/components/ui/Footer'
import Navbar from '@/components/ui/Navbar'
import React from 'react'
import HeroSection from './components/hero'
import TrainingProgramPage from './components/training'
import { HeroHighlightDemo } from '../lifeNAD/components/heroHighlight'

const Career = () => {
  return (
    <div  className="absolute top-0 overflow-x-clip w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Navbar />
      <HeroSection />
      <TrainingProgramPage />
      <HeroHighlightDemo />
      <Footer />
    </div>
  )
}

export default Career
export const metadata = {
  title: "NotedAdDigital - Career",
  description:
    "Get a career in digital marketing with NotedAdDigital. We are looking for talented individuals to join our team and help us grow our online presence.",
  keywords: "digital marketing, SEO, social media marketing, PPC, online presence, Jalandhar, NotedAdDigital",
  author: "Rituraj Goswami",
  viewport: "width=device-width, initial-scale=1.0",
};
