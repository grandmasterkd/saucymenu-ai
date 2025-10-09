"use client"

import { Check, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const pricingTiers = [
  {
    name: "Starter",
    price: "£30",
    description: "Perfect for small restaurants getting started with AI",
    features: [
      "AI-powered digital menu",
      "Basic language translation",
      "Up to 50 menu items",
      "Email support",
      "Basic analytics",
    ],
  },
  {
    name: "Pro",
    price: "£60",
    description: "Ideal for growing restaurants seeking more features",
    features: [
      "Everything in Starter",
      "Advanced AI recommendations",
      "Unlimited menu items",
      "Priority support",
      "Real-time analytics dashboard",
      "Customer chat integration",
    ],
  },
  {
    name: "Premium",
    price: "£90",
    description: "Complete solution for large-scale operations",
    features: [
      "Everything in Pro",
      "White-label branding",
      "Custom AI training",
      "Dedicated account manager",
      "Advanced integrations",
      "Multi-location support",
    ],
  },
]

const customerProfiles = [
  "/booking-headshot-1.webp",
  "/booking-headshot-2.webp",
  "/booking-headshot-3.webp",
  "/booking-headshot-1.webp",
]

export function PricingSection() {
  return (
    <section className="py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-medium text-[#E68C24] mb-4">Simple, Predictable Pricing</h2>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          Choose the plan that fits your restaurant&apos;s needs. All plans include our core AI features with no hidden
          fees.
        </p>
      </div>

      {/* Customer testimonial banner */}
      <Link
        href="#book-demo"
        className="flex items-center justify-center gap-3 mb-12 group hover:opacity-80 transition-opacity"
      >
        <div className="flex -space-x-3">
          {customerProfiles.map((profile, index) => (
            <div key={index} className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden">
              <Image src={profile || "/placeholder.svg"} alt={`Customer ${index + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
        <span className="text-sm md:text-base text-gray-700 font-medium">Join our 100+ happy customers</span>
        <ChevronRight className="w-5 h-5 text-gray-700 group-hover:translate-x-1 transition-transform" />
      </Link>

      {/* Pricing tiers */}
      <section className="px-32">
        <div className="px-32 grid grid-cols-1 md:grid-cols-3 gap-3">
        {pricingTiers.map((tier) => (
          <div key={tier.name} className="bg-[#343434] rounded-3xl p-8 flex flex-col">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-white mb-2">{tier.name}</h3>
              <div className="text-4xl font-bold text-white mb-3">
                {tier.price}
                <span className="text-lg font-normal text-gray-400">/month</span>
              </div>
              <p className="text-sm text-gray-400">{tier.description}</p>
            </div>

            <div className="border-t border-gray-600 mb-6"></div>

            <ul className="space-y-4 mb-8 flex-grow">
              {tier.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#F7941D] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="#book-demo"
              className="w-full bg-white text-black font-medium py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors text-center"
            >
              Book A Demo
            </Link>
          </div>
        ))}
      </div>
    </section>
    </section>
  )
}
