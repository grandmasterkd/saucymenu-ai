export function GrowthSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black text-center mb-20">
          Global Coverage, On-The-Ground Expertise
        </h2>

        {/* Stats with Vertical Lines */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Lines */}
          <div className="absolute inset-0 flex justify-between pointer-events-none">
            <div className="w-px bg-gray-200 h-full"></div>
            <div className="w-px bg-gray-200 h-full"></div>
            <div className="w-px bg-gray-200 h-full"></div>
            <div className="w-px bg-gray-200 h-full"></div>
          </div>

          {/* Stats Content */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 px-4 md:px-0">
            <StatCard
              title="100K + Concurrent Users"
              description="Handle massive traffic during peak hours without compromising performance or user experience"
            />

            <StatCard
              title="47% Potential Revenue Increase"
              description="Average revenue boost from AI-powered upselling and personalized recommendations"
            />

            <StatCard
              title="AI Powered Digital Menus"
              description="Intelligent menus that adapt in real-time to inventory, trends, and customer preferences"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="text-left max-w-xs">
      <h3 className="text-xl md:text-2xl font-semibold text-black mb-3 leading-tight">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}
