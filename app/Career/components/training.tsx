'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const TrainingProgramPage = () => {
  const router = useRouter();

  return (
    <section className=" text-white min-h-screen py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#D9FF1F]/10 blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-[#D9FF1F]/10 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-[#D9FF1F]/10 blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header with animated gradient text */}
        <div className="text-center mb-16 relative">
          
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-[#D9FF1F] to-white animate-text-shine">
            Ready to turn your <span className="text-[#D9FF1F]">passion</span> into a paycheck?
          </h1>
          <p className="text-white/80 mt-6 text-lg md:text-xl max-w-2xl mx-auto relative">
            <span className="absolute -left-6 top-2 text-[#D9FF1F] text-2xl">✦</span>
            Whether you&apos;re an aspiring creator, budding marketer, or entrepreneur with fire in your belly — we&apos;ve got the tools, tricks, and tea to level you up.
            <span className="absolute -right-6 bottom-2 text-[#D9FF1F] text-2xl">✦</span>
          </p>
        </div>

        {/* Feature Grid with 3D effect */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2c2c2c] rounded-3xl p-10 shadow-2xl mb-12 border border-white/5 transform perspective-1000 hover:rotate-y-6 transition-transform duration-500">
          <div className="flex justify-center mb-6">
            <div className="bg-[#D9FF1F] text-black px-4 py-2 rounded-full font-bold text-sm inline-flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              POWERFUL SKILLS
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 relative">
            <span className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[#D9FF1F]"></span>
            What You&#39;ll Master
            <span className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[#D9FF1F]"></span>
          </h2>
          <ul className="grid gap-6 md:grid-cols-2 text-lg">
            <li className="flex items-start">
              <div className="bg-[#D9FF1F] text-black rounded-full p-1 mr-3 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span><span className="font-semibold text-[#D9FF1F]">Social Media Sorcery</span> – Reels, reach & results</span>
            </li>
            <li className="flex items-start">
              <div className="bg-[#D9FF1F] text-black rounded-full p-1 mr-3 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span><span className="font-semibold text-[#D9FF1F]">Performance Marketing</span> – Ads that sell, not just &apos;impress&apos;</span>
            </li>
            <li className="flex items-start">
              <div className="bg-[#D9FF1F] text-black rounded-full p-1 mr-3 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span><span className="font-semibold text-[#D9FF1F]">Content That Converts</span> – Because &quot;likes&quot; don&#39;t pay bills</span>
            </li>
            <li className="flex items-start">
              <div className="bg-[#D9FF1F] text-black rounded-full p-1 mr-3 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span><span className="font-semibold text-[#D9FF1F]">Strategy & Scaling</span> – From &apos;small brand&apos; to &apos;big buzz&apos;</span>
            </li>
          </ul>
          <div className="mt-8 flex justify-center">
            <Image 
              src="/images/social-media-dashboard.jpg" 
              alt="Social media dashboard illustration"
              width={400}
              height={200}
              className="opacity-80 rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Learn from Pros with floating cards */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 shadow-xl mb-12 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#D9FF1F]/10 blur-3xl"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 relative z-10">
            Learn From the <span className="text-[#D9FF1F]">Creators</span>, Not Just Commentators
          </h2>
          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            <div className="bg-black/30 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#D9FF1F] text-black rounded-full p-2 mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg">Live sessions + recorded gold</h3>
              </div>
              <p className="text-white/70">Interactive workshops with Q&A, plus evergreen content you can revisit anytime.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#D9FF1F] text-black rounded-full p-2 mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg">Hands-on tasks & real feedback</h3>
              </div>
              <p className="text-white/70">Practical exercises with personalized critiques from industry experts.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#D9FF1F] text-black rounded-full p-2 mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg">Insider secrets we actually use</h3>
              </div>
              <p className="text-white/70">Proven strategies from our successful agency, not just theory.</p>
            </div>
            <div className="bg-black/30 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="bg-[#D9FF1F] text-black rounded-full p-2 mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg">Certificate to flex</h3>
              </div>
              <p className="text-white/70">Showcase your new skills to clients and on LinkedIn with our verified certificate.</p>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <Image 
              src="/images/team-collaboration.jpg" 
              alt="Team collaboration illustration"
              width={350}
              height={200}
              className="opacity-90 rounded-full"
            />
          </div>
        </div>

        {/* Audience Section with animated cards */}
        <div className="bg-gradient-to-tr from-[#252525] to-[#3a3a3a] p-10 rounded-3xl shadow-lg mb-12 relative overflow-hidden">
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-[#D9FF1F]/10 blur-3xl"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 relative z-10">
            Who&#39;s It <span className="text-[#D9FF1F]">For</span>?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {[
              { icon: '💡', title: 'Digital dreamers', desc: 'Turning ideas into income' },
              { icon: '🎥', title: 'Content creators', desc: 'Monetize your creativity' },
              { icon: '👔', title: 'Business owners', desc: 'Grow your brand online' },
              { icon: '📈', title: 'Marketing newbies', desc: 'Fast-track your career' },
              { icon: '🔍', title: 'Career changers', desc: 'Break into digital marketing' },
              { icon: '🚀', title: 'Side hustlers', desc: 'Build profitable skills' }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-black/20 p-6 rounded-2xl border border-white/10 hover:border-[#D9FF1F]/50 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          
        </div>

        {/* Call To Action with floating elements */}
        <div className="text-center relative bg-[#D9FF1F] text-black py-16 px-6 rounded-3xl shadow-xl overflow-hidden">
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-black/10 blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-black/10 blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="absolute -top-24 left-1/2 transform -translate-x-1/2">
              <div className="relative">
                <Image
                  src="/Rocket.png"
                  alt="Creative Thinking"
                  className="w-28 h-28 object-cover rounded-full border-4 border-black shadow-xl"
                  width={112}
                  height={112}
                />
                <div className="absolute -bottom-2 -right-2 bg-black text-[#D9FF1F] rounded-full p-2 border-2 border-[#D9FF1F]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl md:text-4xl font-bold mb-4 mt-20 pt-10">
              Enrollment Open <span className="underline decoration-black/30 decoration-wavy">Now</span>!
            </h3>
            <p className="text-md md:text-lg max-w-xl mx-auto mb-6 relative">
              <span className="absolute -left-6 top-1/2 transform -translate-y-1/2 text-2xl">✨</span>
              Seats are limited (because we keep it personal & powerful). Wanna be the next digital success story?
              <span className="absolute -right-6 top-1/2 transform -translate-y-1/2 text-2xl">✨</span>
            </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfL8Ev7S1FPWOD0wX8wOfOub6XdIOgQNHvxmXif3lIFv5VIqA/viewform?pli=1"><button
              className="bg-black text-[#D9FF1F] px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center">
                <span className="mr-2">👉</span> Join the Training Program
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#D9FF1F]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button></a>
            
            <p className="mt-6 italic text-sm text-black/80 flex items-center justify-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              Lets turn your scroll into skill.
            </p>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Image 
              src="/Images/illustration.png" 
              alt="Rocket launch illustration"
              width={200}
              height={100}
              className="opacity-90 "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingProgramPage;