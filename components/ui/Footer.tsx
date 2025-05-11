'use client';
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#121212] text-white relative overflow-hidden">
      {/* Top scrolling text bar */}
      <div className="w-full bg-amber-300 overflow-hidden whitespace-nowrap">
        <div
          className="inline-block animate-marquee text-black font-bold text-lg px-4"
          style={{ animationDuration: '30s' }}
        >
          <span>
            <strong className="mx-20">Marketing</strong>
            <span className="opacity-70"> . </span>
            <span className="opacity-70 font-normal">Advertising</span>
            <span className="opacity-70"> . </span>
            <strong className="mx-20">Promotion</strong>
            <span className="opacity-70"> . </span>
            <span className="opacity-70 font-normal">Marketing</span>
            <span className="opacity-70"> . </span>
            <strong className="mx-20">Development</strong>
            <span className="opacity-70"> . </span>
            <span className="opacity-70 font-normal">Advertising</span>
            <span className="opacity-70"> . </span>
            <strong className="mx-20">Marketing</strong>
            <span className="opacity-70"> . </span>
            <span className="opacity-70 font-normal">Advertising</span>
            <span className="opacity-70"> . </span>
          </span>
          {/* Duplicate content for continuous scrolling */}
          <span aria-hidden="true">
            <strong className="mx-20">Marketing</strong>
            <span className="opacity-70"> . </span>
            <span className="opacity-70 font-normal">Advertising</span>
            <span className="opacity-70"> . </span>
            <strong className="mx-20">Promotion</strong>
            <span className="opacity-70"> . </span>
            <span className="opacity-70 font-normal">Marketing</span>
            <span className="opacity-70"> . </span>
            <strong className="mx-20">Development</strong>
            <span className="opacity-70"> . </span>
            <span className="opacity-70 font-normal">Advertising</span>
            <span className="opacity-70"> . </span>
            <strong className="mx-20">Marketing</strong>
            <span className="opacity-70"> . </span>
            <span className="opacity-70 font-normal">Advertising</span>
            <span className="opacity-70"> . </span>
          </span>
        </div>
      </div>

      {/* Main Footer Content */}
      <main className="max-w-full mx-auto px-6 md:px-12 lg:px-24 py-20 flex flex-col md:flex-row md:justify-between md:items-start gap-20 md:gap-0">
        {/* Left Text Block */}
        <div className="md:w-1/3 space-y-2">
          <h2 className="text-white font-extrabold text-lg leading-tight uppercase max-w-[280px]">
            DISCUSS NEW PROJECT
            <br />
            OR JUST TO SAY HELLO
            <br />
            GET IN TOUCH WITH US
          </h2>
        </div>

        {/* Middle Links Block */}
        <div className="md:w-1/3 text-gray-500">
          <p className="mb-4 text-sm">NAD Social Links</p>
          <ul className="space-y-2 font-semibold text-white max-w-[160px]">
            <li><a href="#">Facebook</a></li>
            {/* <li><a href="#">Dribbble</a></li> */}
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            {/* <li><a href="#">Behance</a></li> */}
          </ul>
        </div>

        {/* Right Address Block */}
        <div className="md:w-1/3 text-gray-500 max-w-[280px]">
          <p className="mb-4 text-sm">Our address</p>
          <p className="font-semibold text-white mb-4">
          2nd Floor, G Square Building, Maqsudan, Jalandhar, Punjab, 144008
          </p>
          <p className="mb-2 text-sm">Send email</p>
          <p className="font-semibold text-white"><a href="mailto:md@notedaddigital.com">md@notedaddigital.com</a><br /><a href="mailto:ceo@notedaddigital.com">ceo@notedaddigital.com</a></p>
        </div>
      </main>

      {/*  Logo */}
      <div className="relative max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
        <h1
          className="text-amber-300 pb-20 font-extrabold text-7xl md:text-[250px] leading-none tracking-tight max-w-full select-none mx-auto text-center"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Noted Ad Digital
        </h1>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation-name: marquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-fill-mode: forwards;
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default Footer;
