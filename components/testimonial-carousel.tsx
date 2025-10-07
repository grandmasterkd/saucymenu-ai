"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    restaurant: "La Bella Cucina",
    logo: "/italian-restaurant-logo.png",
    message:
      "Saucy Menu transformed our customer experience. The AI recommendations increased our average order value by 35%, and our international guests love the instant translation feature.",
  },
  {
    id: 2,
    restaurant: "Dragon Palace",
    logo: "/asian-restaurant-logo.jpg",
    message:
      "The analytics dashboard helped us identify our best-performing dishes and optimize our menu. We saw a 42% increase in revenue within the first three months of implementation.",
  },
  {
    id: 3,
    restaurant: "Burger Haven",
    logo: "/burger-restaurant-logo.png",
    message:
      "Our fast-paced environment needed a solution that could keep up. Saucy Menu handles our peak hours flawlessly, and the upselling features have been a game-changer for our bottom line.",
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  const current = testimonials[currentIndex]

  return (
    <div className="relative bg-[#474747] rounded-xl p-8 md:p-12">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-white">
            <Image
              src={current.logo || "/placeholder.svg"}
              alt={`${current.restaurant} logo`}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h4 className="text-xl font-semibold text-white mb-3">{current.restaurant}</h4>
          <p className="text-gray-300 text-sm leading-relaxed">{current.message}</p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-lg bg-[#343434] hover:bg-[#FF6A00] text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-2 rounded-lg bg-[#343434] hover:bg-[#FF6A00] text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-[#FF6A00] w-8" : "bg-gray-500 hover:bg-gray-400"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
