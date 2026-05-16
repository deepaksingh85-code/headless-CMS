"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-[#dfdfdf] bg-[#f5f5f3] relative z-50">

      <div className="max-w-[1600px] mx-auto">

        {/* DESKTOP */}

        <div className="hidden lg:grid grid-cols-[260px_1fr_220px_100px] min-h-[100px]">

          {/* Logo */}

          <div className="flex items-center px-10 border-r border-[#dfdfdf]">

            <Image
              src="/images/logo.png"
              alt="Deepak Logo"
              width={220}
              height={60}
              className="object-contain"
              priority
            />

          </div>

          {/* Menu */}

          <nav className="flex items-center justify-center gap-16 text-[20px] font-medium">

            <a href="#" className="hover:text-[#ff6b00] transition">
              Home
            </a>

            <a href="#" className="hover:text-[#ff6b00] transition">
              About Me
            </a>

            <a href="#" className="hover:text-[#ff6b00] transition">
              Portfolio
            </a>

            <a href="#" className="hover:text-[#ff6b00] transition">
              Services
            </a>

            <a href="#" className="hover:text-[#ff6b00] transition">
              Contact
            </a>

          </nav>

          {/* CTA */}

          <div className="flex items-center justify-center border-l border-[#dfdfdf]">

            <button className="text-[22px] font-medium hover:text-[#ff6b00] transition">
              Let’s Talk ↗
            </button>

          </div>

          {/* Menu Button */}

          <div className="bg-black flex items-center justify-center cursor-pointer hover:bg-[#111] transition">

            <div className="space-y-2">

              <div className="w-8 h-[2px] bg-white"></div>
              <div className="w-8 h-[2px] bg-white"></div>
              <div className="w-8 h-[2px] bg-white"></div>

            </div>

          </div>

        </div>

        {/* MOBILE NAVBAR */}

        <div className="lg:hidden flex items-center justify-between h-[80px] px-5">

          {/* Logo */}

          <Image
            src="/images/logo.png"
            alt="Deepak Logo"
            width={150}
            height={40}
            className="object-contain"
          />

          {/* Hamburger */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-[55px] h-[55px] bg-black flex flex-col items-center justify-center gap-[6px] rounded-full"
          >

            <div className="w-6 h-[2px] bg-white"></div>
            <div className="w-6 h-[2px] bg-white"></div>
            <div className="w-6 h-[2px] bg-white"></div>

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}

      <div
        className={`lg:hidden fixed top-0 right-0 w-full h-screen bg-black text-white transition-all duration-500 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* Close */}

        <div className="flex justify-end p-6">

          <button
            onClick={() => setMenuOpen(false)}
            className="text-4xl"
          >
            ×
          </button>

        </div>

        {/* Links */}

        <nav className="flex flex-col gap-8 px-10 mt-10 text-[26px] font-medium">

          <a href="#" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#" onClick={() => setMenuOpen(false)}>
            About Me
          </a>

          <a href="#" onClick={() => setMenuOpen(false)}>
            Portfolio
          </a>

          <a href="#" onClick={() => setMenuOpen(false)}>
            Services
          </a>

          <a href="#" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

        </nav>

      </div>

    </header>
  );
}