"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
// import { TestimonialCarousel } from "@/components/testimonial-carousel"

const problems = [
  {
    id: "language",
    number: "1",
    title: "Language Barrier",
    description:
      "Break down communication barriers with instant multi-language translation, allowing customers from any country to browse your menu in their native language.",
    image: "/language-barrier.webp",
  },
  {
    id: "performance",
    number: "2",
    title: "Food & Menu Performance",
    description:
      "Get real-time insights into which dishes are performing well, identify underperforming items, and optimize your menu based on actual customer behavior and preferences.",
    image: "/food-performance.webp",
  },
  {
    id: "experience",
    number: "3",
    title: "Customer Experience & Reviews",
    description:
      "Capture instant feedback, monitor satisfaction in real-time, and respond to customer concerns before they leave negative reviews online.",
    image: "/customer-experience.webp",
  },
]

export function ProblemsSection() {
  const [activeId, setActiveId] = useState("language")
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const activeProblem = problems.find((p) => p.id === activeId) || problems[0]

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
    <section ref={sectionRef} className="py-20 bg-[#343434]">
      <div className="container mx-auto px-8 md:px-32">
        <div
          className={`flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-medium text-[#F8E6D2] max-w-sm">
            What Is Holding Your Restaurant Back Today
          </h2>

          <div className="lg:max-w-md">
            <h3 className="text-xl md:text-2xl font-medium text-[#FF6A00] mb-2">
              {activeProblem.number}. {activeProblem.title}
            </h3>
            <p className="text-white text-xs leading-relaxed">{activeProblem.description}</p>
          </div>
        </div>

        <div
          className={`flex gap-4 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {problems.map((problem) => (
            <button
              key={problem.id}
              onClick={() => setActiveId(problem.id)}
              className={`relative rounded-3xl overflow-hidden bg-[#474747] cursor-pointer group transition-all duration-500 h-[500px] ${
                problem.id === activeId ? "w-[80%]" : "w-[10%] hover:scale-[1.02]"
              }`}
            >
              <Image
                src={problem.image || "/placeholder.svg"}
                alt={problem.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>

        {/* Testimonial Section */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* <TestimonialCarousel /> */}
        </div>
      </div>
    </section>
  )
}
