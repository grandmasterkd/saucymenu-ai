"use client"

import { ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function TargetSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-xl w-full md:max-w-[45%] mx-auto md:text-4xl font-medium text-[#E68C24] text-center mb-4">
          Built for Restaurants Everywhere,
        
          Powered by Global Intelligence
        </h2>

        <p className="text-xs md:text-sm text-black text-center mb-12 max-w-3xl mx-auto leading-relaxed">
          Whether you're running a cozy neighborhood bistro or managing a multi-location enterprise, Saucy Menu scales
          with your ambitions and adapts to your unique operational needs.
        </p>

        <div className="px-8 md:px-32 space-y-6">
          {/* Top Row - 2 Containers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SmallScaleCard isVisible={isVisible} />
            <LargeScaleCard isVisible={isVisible} />
          </div>

          {/* Bottom Row - Full Width Container */}
          <FastFoodCard isVisible={isVisible} />
        </div>
      </div>
    </section>
  )
}

function SmallScaleCard({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className={`relative h-[400px] rounded-3xl overflow-hidden bg-[#343434] transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <Image
        src="/cheficon.svg"
        alt="Small scale restaurant interior"
        width={110}
        height={110}      
        className="object-cover mx-auto mt-48 transition transform duration-500 hover:scale-120 hover:animate-outward-pulse"
      />

      <div className="absolute top-8 left-8">
        <div className="bg-gradient-to-r from-[#FFDEB8] via-0% to-transparent rounded-full px-5 py-2">
          <span className="text-xs font-semibold text-white">8 - 24 Capacity</span>
        </div>
      </div>

      

      <div className="absolute top-14 left-0 right-0 p-8">
        <h3 className="text-2xl font-medium text-white mb-1">Small Scale Restaurants</h3>
        <p className="text-xs text-white/40 leading-relaxed">
          Perfect for independent restaurants and cafes looking to modernize their menu experience and compete with
          larger chains through AI-powered personalization.
        </p>
      </div>
    </div>
  )
}

function LargeScaleCard({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className={`relative h-[400px] rounded-3xl overflow-hidden bg-[#343434] transition-all duration-700 delay-150 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <Image
        src="/chefsicon.svg"
        alt="Large scale restaurant interior"
        width={350}
        height={350}      
        className="object-cover mx-auto mt-48 transition transform duration-500 hover:scale-120 hover:animate-outward-pulse"
      />

      <div className="absolute top-8 left-8">
        <div className="bg-gradient-to-r from-[#FFDEB8] via-0% to-transparent rounded-full px-5 py-2">
          <span className="text-xs font-semibold text-white">24 - 100+ Capacity</span>
        </div>
      </div>


      <div className="absolute top-14 left-0 right-0 p-8">
        <h3 className="text-2xl font-medium text-white mb-2">Large Scale Restaurants</h3>
        <p className="text-xs text-white/40 leading-relaxed">
          Enterprise-grade solutions for restaurant groups managing multiple locations, with centralized menu control
          and real-time analytics across all venues.
        </p>
      </div>
    </div>
  )
}

function FastFoodCard({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className={`relative h-[600px] rounded-3xl overflow-hidden bg-[#343434] transition-all duration-700 delay-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <Image
        src="/macOS Sequoia Light.jpg"
        alt="Fast food restaurant interior"
      fill
        className="w-full object-cover"
      />

      <div className="absolute top-24 right-8 z-20" >
         <Image
        src="/real-time-dashboard.webp"
        alt="Fast food restaurant interior"
      width={940}
      height={720}
        className="w-full mx-auto object-none object-bottom-right skew-y-0"
      />
      </div>

      <div className="absolute top-8 left-8 right-8 flex items-center justify-between">
        <div
          className="rounded-full px-6 py-2 bg-gradient-to-r from-[#000000] via-0% to-transparent"
         
        >
          <span className="text-sm font-medium text-white">Setting A Future With Sustainable Growth</span>
        </div>

        <a href="#book-demo" className="flex items-center gap-2 text-white hover:text-[#F7941D] transition-colors">
          <span className="text-sm font-medium">Book demo call</span>
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>

      

      <div className="hidden absolute bottom-0 left-0 right-0 p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard
            title="100K + Concurrent Users"
            description="Handle massive traffic during peak hours without compromising performance"
          />
          <StatCard
            title="47% Potential Revenue Increase"
            description="Average revenue boost from AI-powered upselling and recommendations"
          />
          <StatCard
            title="AI Powered Digital Menus"
            description="Intelligent menus that adapt in real-time to inventory and preferences"
          />
        </div>
      </div>
    </div>
  )
}

function StatCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="text-left">
      <h3 className="max-w-[70%] text-lg md:text-2xl font-medium text-[#E68C24] mb-2 leading-tight">{title}</h3>
      <p className="text-xs text-white leading-relaxed">{description}</p>
    </div>
  )
}
