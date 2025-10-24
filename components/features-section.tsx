"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface LayerData {
  id: number
  image: string
  headline: string
  subtext: string
}

const layers: LayerData[] = [
  {
    id: 1,
    image: "/safari-window-saucymenudash.svg",
    headline: "See What’s Working, Instantly",
    subtext: "From total dishes to real-time customer interactions, your dashboard tracks what people order, love, and talk about, all in one glance.",
  },
  {
    id: 2,
    image: "/safari-window-saucymenumenu.svg",
    headline: "A Menu That Understands Your Guests",
    subtext: "Tag every dish with cuisine, allergens, and dietary preferences, so customers can find exactly what fits them, faster.",
  },
  {
    id: 3,
    image: "/safari-window-saucymenureviews.svg",
    headline: "Every Review, Linked to Real Orders",
    subtext: "Each dish review connects to an order ID, giving you data that actually means something, not just opinions.",
  },
  {
    id: 4,
    image: "/safari-window-saucymenudishes.svg",
    headline: "Your Menu, Your Control",
    subtext: "Add or remove dishes anytime, no full reuploads, no friction, no fuss. Update in seconds, serve better in minutes.",
  },
]

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeLayer, setActiveLayer] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLayer((prev) => (prev + 1) % layers.length)
    }, 20000)

    return () => clearInterval(interval)
  }, [])

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

  const handlePrevious = () => {
    setActiveLayer((prev) => (prev === 0 ? layers.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveLayer((prev) => (prev === layers.length - 1 ? 0 : prev + 1))
  }

  const currentLayer = layers[activeLayer]

  return (
    <section ref={sectionRef} id="features" className=" py-12 md:py-16">
      <div className="px-8 md:px-60">
        <div className="space-y-4" >
        <h2
          className="text-xl md:text-4xl tracking-tighter font-semibold text-center mb-2 "
          key={`headline-${activeLayer}`}
        >
          {currentLayer.headline}
        </h2>

        <p
          className="text-xs md:text-base text-black/50 text-center mb-2 max-w-3xl mx-auto leading-relaxed "
          key={`subtext-${activeLayer}`}
          style={{ animationDelay: "100ms" }}
        >
          {currentLayer.subtext}
        </p>

        <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4" >
          <button className="cursor-pointer transition ease-in-out duration-500 bg-gradient-to-tr from-black via-black to-transparent text-white rounded-full w-fit h-12 px-5 text-xs font-medium flex items-center gap-x-1" >Book A Free Demo      <ChevronRight size={16} className=" font-normal" /></button>
          <button className="cursor-pointer transition ease-in-out duration-500 text-sm font-medium text-black/50 hover:text-black flex items-center gap-x-1" >Join the waitlist <ChevronRight size={16} className=" font-normal" /> </button>
        </div>
      </div>

        <div className="mt-6 relative w-full overflow-hidden">
          <div className="flex items-center justify-center h-[300px] md:h-[500px] lg:h-[750px]">
            <div
              className="relative w-full transition-all duration-1200 ease-out opacity-0 animate-fadeInUp"
              key={`image-${activeLayer}`}
        
            >
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden h-full">
                <Image
                  src={currentLayer.image || "/placeholder.svg"}
                  alt={currentLayer.headline}
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover md:object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8 md:mt-12 px-4">
            <button
              onClick={handlePrevious}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
              aria-label="Previous layer"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            <div className="flex justify-center gap-2">
              {layers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveLayer(index)}
                  className={`h-1.5 md:h-2 rounded-full transition-all duration-500 ease-out ${
                    index === activeLayer
                      ? "w-6 md:w-8 bg-[#E68C24] scale-110"
                      : "w-1.5 md:w-2 bg-gray-300 hover:bg-gray-400 hover:scale-110"
                  }`}
                  aria-label={`Go to layer ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
              aria-label="Next layer"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
