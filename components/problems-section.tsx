"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

const problems = [
  {
    id: "language",
    number: "Speak Every Language of Hospitality",
    title: "Global Guests, Local Comfort",
    description:
      "From English to Arabic, Spanish to Japanese — your customers can read, chat, and order in their own language. No barriers, just better experiences.",
    image: "/customer-languages.webp",
  },
  {
    id: "performance",
    number: "Smarter Care for Dietary & Allergy Needs",
    title: "Serve Safety, Not Uncertainty",
    description:
      "AI matches each guest's preferences and allergens to the right dishes — making your restaurant inclusive, responsible, and trusted.",
    image: "/customer-allergies.webp",
  },
  {
    id: "experience",
    number: "AI Chat Concierge",
    title: "Your Menu's Smartest Waiter",
    description:
      "Guests can chat directly with your restaurant's AI assistant — asking about dishes, ingredients, or getting instant recommendations when they can't decide.",
    image: "/customer-aichat.webp",
  },
]

export function ProblemsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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
    <section id="solutions" ref={sectionRef} className="py-16">
      <div className="container mx-auto px-8 md:px-32">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="w-full md:w-5/6 mx-auto text-3xl md:text-4xl font-semibold tracking-tighter mb-2">
            The Modern Way to Care for Every Guest
          </h2>
          <p className="w-full md:w-3/4 mx-auto text-black/50 text-base" >Smarter menus, faster choices, and personalized experiences, all working quietly behind the scenes to make dining simple, seamless, and unforgettable.</p>
        </div>

        <div
          className={`flex flex-col gap-16 md:gap-24 mb-16 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {problems.map((problem, index) => (
            <div
              key={problem.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-12 items-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image container */}
              <div className="w-full md:w-1/2 flex-shrink-0">
                <div className="relative w-full h-[400px] md:h-[500px] bg-[#FFF2E4] rounded-3xl overflow-hidden">
                  <Image
                    src={problem.image || "/placeholder.svg"}
                    alt={problem.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Text content */}
              <div className="w-full md:w-1/2 h-auto md:h-[500px] flex flex-col items-start justify-center md:justify-evenly gap-6">
                <div className="bg-black rounded-full px-6 h-12 text-white flex items-center justify-center text-sm">
                  {problem.number}
                </div>

                <div>
                  <h3 className="tracking-tight text-xl md:text-2xl font-semibold mb-3">{problem.title}</h3>
                  <p className="text-black/50 text-base leading-relaxed">{problem.description}</p>
                </div>

                <div>
                  <button className="flex items-center gap-1 hover:gap-2 transition-all">
                    Book A Demo Call <ChevronRight size={16} className="font-normal" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
