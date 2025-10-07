"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <section className="flex items-center gap-x-8" >
             <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-black">
             <Image src="/saucymenu-logo.svg" width={100} height={30} alt="Saucy Menu Logo" />
            </Link>
          </div>
            <div className="hidden md:flex items-center gap-8 text-sm text-[#868686]">
            <Link href="#features" className=" hover:text-[#F7941D] transition-colors">
              Features
            </Link>
            <Link href="#solutions" className=" hover:text-[#F7941D] transition-colors">
              Solutions
            </Link>
            <Link href="#pricing" className=" hover:text-[#F7941D] transition-colors">
              Pricing
            </Link>
            <Link href="#security" className=" hover:text-[#F7941D] transition-colors">
              Security
            </Link>
          </div>
          </section>
         

          {/* Nav Items */}
          

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Button className="bg-[#F1F1F1] text-black text-sm hover:bg-[#E1E1E1] rounded-lg p-4 h-auto">
              Join The Waitlist
            </Button>
            <Button className="bg-[#F7941D] text-white text-sm hover:bg-[#E68C24] rounded-lg p-4 h-auto">
              Book A Demo
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
