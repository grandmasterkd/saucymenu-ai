"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: "Does this replace our staff or waiters?",
    answer:
      "Not at all. It supports them — freeing your team to focus on service while AI handles menu questions and recommendations.",
  },
  {
    question: "How difficult is setup?",
    answer:
      "It’s plug-and-play. Once your menu is uploaded, AI begins learning from your dishes and customers instantly.",
  },
  {
    question: "Is this system safe for user data?",
    answer:
      "Yes. No personal data is collected or stored. The AI only interacts through your restaurant’s menu data.",
  },
  {
    question: "Can we customize the menu to match our brand?",
    answer:
      "Absolutely. Saucy Menu offers white-label customization, allowing you to match your brand colors, fonts, and style. Your customers will experience a seamless extension of your restaurant's identity.",
  },
  {
    question: "How does this improve revenue?",
    answer:
      "By guiding guests to dishes they’ll love (and likely reorder), improving satisfaction and reducing order hesitation.",
  },
  {
    question: "Is there a contract or can we cancel anytime?",
    answer:
      "We offer flexible month-to-month plans with no long-term contracts. You can upgrade, downgrade, or cancel anytime. We're confident you'll love the results, so we don't lock you in.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 ">
      <div className="px-8 md:px-60">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter  mb-2">
                Got Questions? <br/> Let's Clear the Table.
              </h2>
              <p className="text-black/50 text-sm md:text-base mb-8">
                Everything you need to know before your first AI-powered dish goes live.
              </p>
            </div>

            {/* Still Got Questions Container */}
            <div className="bg-black rounded-3xl p-8 mt-8 md:mt-0">
              <h3 className="text-xl md:text-2xl font-medium text-white mb-1">Still Got Questions?</h3>
              <p className="text-white/50 text-sm mb-6">
                Our team is here to help you make the right decision for your restaurant. Book a demo and let's talk.
              </p>
              <button className="w-full bg-white text-black py-4 px-6 rounded-xl font-medium hover:bg-gray-200 transition-colors duration-300">
                Book A Demo Call
              </button>
            </div>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-xl overflow-hidden transition-all duration-500 ease-in-out"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#F0C9A6] transition-colors duration-300"
                >
                  <span className="font-normal text-black pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`flex-shrink-0 w-5 h-5 text-black transition-transform duration-500 ease-in-out ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5 pt-2">
                      <p className="text-black/50 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
