import Image from "next/image"

export function HeroImage() {
  return (
    <div className="relative w-full md:max-w-6xl mx-auto pt-10 md:pt-16">
      {/* Central iPhone Image */}
      <div className="relative mx-auto w-full max-w-[330px] md:max-w-md lg:max-w-lg">
   
          <Image
            src="/customer-aidishhome.webp"
            alt="Saucy Menu App Interface"
            width={1080}
            height={1080}
            className="object-contain aspect-auto md:object-cover"
          />

      </div>

      {/* Right Side Annotations */}
      <div className="hidden lg:block " >  
        {/* Line and Container 1 */}
        <div className="absolute right-10 top-[38%] flex items-center gap-2">
          <div className="w-36 h-px bg-gray-300"></div>
          <FeatureCard
            title="Added Food Rating"
            description="Customers rate dishes instantly, helping others make informed choices"
          />
        </div>

        {/* Line and Container 2 */}
        <div className="absolute right-0 top-[60%] flex items-center gap-2 ml-12">
          <div className="w-44 h-px bg-gray-300"></div>
          <FeatureCard
            title="AI Recommended Dishes"
            description="Smart suggestions based on preferences and popular choices"
          />
        </div>
    </div>

      {/* Left Side Annotations */}
      <div className="hidden lg:block ">
        {/* Line and Container 3 */}
        <div className="absolute -left-4 top-[32%] flex items-center gap-2 flex-row-reverse">
          <div className="w-44 h-px bg-gray-300"></div>
          <FeatureCard
            title="Suggest More Dishes With AI"
            description="Intelligent recommendations that complement customer selections"
            align="left"
          />
        </div>

        {/* Line and Container 4 */}
        <div className="absolute left-8 top-[75%] flex items-center gap-2 flex-row-reverse mr-12">
          <div className="w-44 h-px bg-gray-300"></div>
          <FeatureCard
            title="Upsell with AI Paired Meals"
            description="Perfect pairings suggested automatically to boost order value"
            align="left"
          />
        </div>
      </div>

      {/* Mobile View - Stacked Cards */}
      <div className="hidden mt-12 space-y-4 max-w-md mx-auto">
        <FeatureCard
          title="Added Food Rating"
          description="Customers rate dishes instantly, helping others make informed choices"
        />
        <FeatureCard
          title="AI Recommended Dishes"
          description="Smart suggestions based on preferences and popular choices"
        />
        <FeatureCard
          title="Suggest More Dishes With AI"
          description="Intelligent recommendations that complement customer selections"
        />
        <FeatureCard
          title="Upsell with AI Paired Sides"
          description="Perfect pairings suggested automatically to boost order value"
        />
      </div>
    </div>
  )
}

function FeatureCard({
  title,
  description,
  align = "left",
}: {
  title: string
  description: string
  align?: "left" | "right"
}) {
  return (
    <div className={`bg-[#F1F1F1] rounded-2xl p-5 w-[275px] ${align === "right" ? "text-right" : ""}`}>
      <div className={`flex items-center gap-2 mb-1 ${align === "right" ? "flex-row-reverse" : ""}`}>
        {/* Pinging Red Circle */}
        <div className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </div>
        <h3 className="font-semibold  text-base">{title}</h3>
      </div>
      <p className="text-sm text-black/50">{description}</p>
    </div>
  )
}
