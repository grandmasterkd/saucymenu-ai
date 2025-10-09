export function GrowthSection() {
  return (
    <section className="py-20 ">
      <div className="px-8 md:px-32 container mx-auto">
        <h2 className="text-xl w-full md:max-w-[45%] mx-auto md:text-4xl font-medium text-[#E68C24] text-center mb-16">
          Global Coverage, On-The-Ground Expertise
        </h2>

        {/* Stats with Vertical Lines */}
        <div className="relative mx-auto">
          {/* Vertical Lines */}
          <div className="hidden inset-0 justify-between pointer-events-none">
            <div className="w-px bg-gray-200 h-full"></div>
            <div className="w-px bg-gray-200 h-full"></div>
            <div className="w-px bg-gray-200 h-full"></div>
            <div className="w-px bg-gray-200 h-full"></div>
          </div>

          {/* Stats Content */}
          <div className="grid grid-cols-1 md:grid-cols-3">
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
      <h3 className="text-2xl max-w-[80%] md:text-2xl font-medium mb-3 leading-tight">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}
