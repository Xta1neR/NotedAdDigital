"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "@/public/logo.png";
import React from "react";
import { usePathname } from "next/navigation";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const pathname = usePathname();

  return (
    <div className="sticky top-5 z-50 lg:w-3/4 flex items-center justify-between py-6 px-4 rounded-[6px] md:mx-auto md:px-8 mx-6 bg-gray-800/80">
      <Link href="/" className="flex items-center gap-2">
        <Image src={Logo} alt="Sakhi HR" width={50} height={50} />
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-amber-300 text-2xl"
        onClick={toggleMobileMenu}
      >
        ☰
      </button>

      {/* Desktop Navbar */}
      <div className="hidden md:flex gap-x-6 text-white font-medium text-lg ">
        <Link href="/" className={pathname === "/" ? "active" : "hover:text-yellow-300"}>Home</Link>
        <Link href="/lifeNAD" className={pathname === "/lifeNAD" ? "active" : "hover:text-yellow-300"}>Life at NAD</Link>
        <Link href="/serviceNAD" className={pathname === "/serviceNAD" ? "active" : "hover:text-yellow-300"}>Services</Link>
        <Link href="/Career" className={pathname === "/Career" ? "active" : "hover:text-yellow-300"}>Training</Link>
      </div>

      {/* Book a Call Button */}
      <Link
        href="/Contact"
        className="hidden md:flex px-6 py-2 border-2 border-black rounded-sm bg-black text-white hover:bg-yellow-500 hover:text-yellow-950"
      >
        Book a Call
      </Link>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-amber-300 flex flex-col items-center justify-center space-y-4">
          {/* Close Button (X) */}
          <button
            className="absolute top-4 right-4 text-2xl"
            onClick={toggleMobileMenu}
          >
            ✖
          </button>

          <Link href="/" className="text-lg hover:text-blue-500" onClick={toggleMobileMenu}>Home</Link>
          <Link href="/lifeNAD" className="text-lg hover:text-blue-500" onClick={toggleMobileMenu}>Life at NAD</Link>
          <Link href="/serviceNAD" className="text-lg hover:text-blue-500" onClick={toggleMobileMenu}>Services</Link>
          <Link href="/Career" className="text-lg hover:text-blue-500" onClick={toggleMobileMenu}>Training</Link>

          <Link
            href="/Contact"
            className="px-6 py-2 border-2 border-black rounded-sm bg-black text-white"
            onClick={toggleMobileMenu}
          >
            Book a Call
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
