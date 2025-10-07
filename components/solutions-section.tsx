"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

const solutions = [
  {
    id: "translation",
    title: "Real-Time Translation",
    description:
      "Serve customers in 100+ languages with instant menu translation powered by advanced AI. No more language barriers, no more confusion—just seamless dining experiences for every guest.",
    image: "/multilingual-restaurant-menu-interface-showing-dif.jpg",
  },
  {
    id: "analytics",
    title: "Smart Menu Analytics",
    description:
      "Understand what sells, when it sells, and why. Our AI analyzes customer behavior patterns to help you optimize pricing, highlight popular items, and remove underperformers.",
    image: "/restaurant-analytics-dashboard-with-graphs-and-per.jpg",
  },
  {
    id: "personalization",
    title: "AI-Powered Personalization",
    description:
      "Deliver unique experiences to every customer with intelligent recommendations based on preferences, dietary restrictions, past orders, and trending choices.",
    image: "/personalized-food-recommendations-on-digital-menu-.jpg",
  },
]

export function SolutionsSection() {
  const [activeId, setActiveId] = useState("translation")
  const activeSolution = solutions.find((s) => s.id === activeId) || solutions[0]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black text-center mb-16">
          Solutions That Drive Results
        </h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Solutions List */}
          <div className="space-y-4">
            {solutions.map((solution) => (
              <button
                key={solution.id}
                onClick={() => setActiveId(solution.id)}
                className={`w-full text-left p-6 rounded-2xl border-2 transition-all ${
                  activeId === solution.id
                    ? "border-[#F7941D] bg-[#FFF8F0]"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3
                    className={`text-xl font-semibold ${activeId === solution.id ? "text-[#F7941D]" : "text-gray-700"}`}
                  >
                    {solution.title}
                  </h3>
                  <ChevronRight
                    className={`w-6 h-6 ${activeId === solution.id ? "text-[#F7941D]" : "text-gray-400"}`}
                  />
                </div>
                <p
                  className={`text-sm leading-relaxed ${activeId === solution.id ? "text-gray-800" : "text-gray-500"}`}
                >
                  {solution.description}
                </p>
              </button>
            ))}
          </div>

          {/* Right Column - Image Display */}
          <div className="relative h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden bg-gray-100 border-2 border-gray-200">
            <Image
              src={activeSolution.image || "/placeholder.svg"}
              alt={activeSolution.title}
              fill
              className="object-cover transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
