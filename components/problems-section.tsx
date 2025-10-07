"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import { TestimonialCarousel } from "@/components/testimonial-carousel"

const problems = [
  {
    id: "language",
    title: "Language Barrier",
    description:
      "Break down communication barriers with instant multi-language translation, allowing customers from any country to browse your menu in their native language.",
    image: "/restaurant-menu-showing-multiple-language-options-.jpg",
  },
  {
    id: "performance",
    title: "Food & Menu Performance",
    description:
      "Get real-time insights into which dishes are performing well, identify underperforming items, and optimize your menu based on actual customer behavior and preferences.",
    image: "/analytics-dashboard-showing-food-performance-metri.jpg",
  },
  {
    id: "experience",
    title: "Customer Experience & Reviews",
    description:
      "Capture instant feedback, monitor satisfaction in real-time, and respond to customer concerns before they leave negative reviews online.",
    image: "/customer-rating-interface-with-stars-and-feedback-.jpg",
  },
]

export function ProblemsSection() {
  const [activeId, setActiveId] = useState("language")
  const activeProblem = problems.find((p) => p.id === activeId) || problems[0]

  return (
    <section className="py-20 bg-[#343434]">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#F8E6D2] text-center mb-16">
          What Is Holding Your Restaurant Back Today
        </h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left Column - Problem List */}
          <div className="space-y-4">
            {problems.map((problem) => (
              <button
                key={problem.id}
                onClick={() => setActiveId(problem.id)}
                className={`w-full text-left p-6 rounded-2xl transition-all ${
                  activeId === problem.id ? "bg-[#474747]" : "bg-[#474747] opacity-60 hover:opacity-80"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3
                    className={`text-xl font-semibold ${activeId === problem.id ? "text-[#FF6A00]" : "text-gray-400"}`}
                  >
                    {problem.title}
                  </h3>
                  <ChevronRight className={`w-6 h-6 ${activeId === problem.id ? "text-[#FF6A00]" : "text-gray-400"}`} />
                </div>
                <p className={`text-sm leading-relaxed ${activeId === problem.id ? "text-white" : "text-gray-500"}`}>
                  {problem.description}
                </p>
              </button>
            ))}
          </div>

          {/* Right Column - Image Display */}
          <div className="relative h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden bg-[#474747]">
            <Image
              src={activeProblem.image || "/placeholder.svg"}
              alt={activeProblem.title}
              fill
              className="object-cover transition-opacity duration-300"
            />
          </div>
        </div>

        {/* Testimonial Section */}
        <TestimonialCarousel />
      </div>
    </section>
  )
}
