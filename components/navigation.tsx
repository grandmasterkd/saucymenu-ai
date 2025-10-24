"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div className="w-full container bg-transparent rounded-full mx-auto px-4 lg:px-32">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <section className="flex items-center gap-x-8" >
             <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-black">
             <Image src="/saucymenu-logo.svg" width={80} height={30} alt="Saucy Menu Logo" className="aspect-auto" />
            </Link>
          </div>
            <div className="hidden md:flex items-center gap-8 text-sm text-[#868686]">
            <Link href="#features" className=" hover:text-[#F7941D] transition-colors">
              Features
            </Link>
            <Link href="#solutions" className=" hover:text-[#F7941D] transition-colors">
              Solutions
            </Link>
            <Link href="#pricing" className="hidden hover:text-[#F7941D] transition-colors">
              Pricing
            </Link>
            <Link href="#security" className=" hover:text-[#F7941D] transition-colors">
              Contact
            </Link>
          </div>
          </section>
         

          {/* Nav Items */}
          

          {/* CTA Buttons */}
          <div className="flex items-center gap-2">
            <button className="bg-[#F1F1F1] text-black text-xs hover:bg-[#E1E1E1] font-medium tracking-tight rounded-full w-fit h-10  px-5">
              Join The Waitlist
            </button>
            <button className="bg-[#F7941D] text-white text-xs hover:bg-[#E68C24] font-medium tracking-tight rounded-full w-fit h-10  px-5">
              Book A Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
