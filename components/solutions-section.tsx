"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"

const solutions = [
  {
    id: "translation",
    title: "Real-time language translations",
    description:
      "Break down language barriers instantly. Serve international customers with confidence as our AI translates your menu into 100+ languages in real-time, ensuring every guest feels welcome.",
    image: "/traditional-italian-food-world-tourism-day copy.webp",
  },
  {
    id: "ai-chat",
    title: "AI recommended dishes, and personal chat for your customers",
    description:
      "Engage customers with intelligent recommendations tailored to their preferences. Our AI chatbot answers questions, suggests pairings, and guides diners to their perfect meal.",
    image: "/17-lifestyle-people-ordering-sushi-home.webp",
  },
  {
    id: "customer-care",
    title: "Increased customer care & priority",
    description:
      "Elevate your service standards with AI-powered customer insights. Track preferences, dietary needs, and feedback to deliver personalized experiences that keep guests coming back.",
    image: "/close-up-hands-holding-phone-with-online-menu.webp",
  },
 
  {
    id: "analytics",
    title: "Real-time analytics dashboard",
    description:
      "Make data-driven decisions with live insights into menu performance, customer behavior, and revenue trends. Optimize your offerings and maximize profitability with actionable intelligence.",
    image: "/traditional-mexican-food-world-tourism-day.webp",
  },
 
]

export function SolutionsSection() {
  const [activeId, setActiveId] = useState("translation")
  const activeSolution = solutions.find((s) => s.id === activeId) || solutions[0]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-medium text-[#E68C24] text-center mb-16">
          Why Leading Restaurants Are <br />
          Choosing Saucy Menu
        </h2>

        <div className="px-8 md:px-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#474747] rounded-3xl overflow-hidden lg:divide-x lg:divide-gray-600">
            {/* Left Column - Solutions List */}
            <div className="divide-y divide-gray-600">
              {solutions.map((solution) => (
                <button
                  key={solution.id}
                  onClick={() => setActiveId(solution.id)}
                  className={`w-full text-left p-10 transition-all duration-700 ${
                    activeId === solution.id ? "bg-[#5A5A5A]" : "bg-transparent hover:bg-[#505050]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3
                      className={`text-xl font-medium transition-colors duration-700 ${
                        activeId === solution.id ? "text-[#FF6A00]" : "text-white"
                      }`}
                    >
                      {solution.title}
                    </h3>
                    {activeId === solution.id ? (
                      <ChevronUp className="w-6 h-6 text-[#FF6A00] transition-all duration-700" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400 transition-all duration-700" />
                    )}
                  </div>
                  {activeId === solution.id && (
                    <p className="text-sm leading-relaxed text-white mt-3 animate-in fade-in slide-in-from-top-2 duration-300">
                      {solution.description}
                    </p>
                  )}
                </button>
              ))}
            </div>

            {/* Right Column - Image Display */}
            <div className="relative h-full">
              <Image
                key={activeSolution.id}
                src={activeSolution.image || "/placeholder.svg"}
                alt={activeSolution.title}
                fill
                className="object-cover animate-in fade-in duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
