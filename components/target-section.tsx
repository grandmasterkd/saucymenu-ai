export function TargetSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold text-[#E68C24] text-center mb-4">
          Built For Global Hospitality In Culinary and Restaurant Delivery
        </h2>

        {/* Subtext */}
        <p className="text-sm md:text-base text-black text-center mb-12 max-w-3xl mx-auto leading-relaxed">
          Whether you&#39;re running a cozy neighborhood bistro or managing a multi-location enterprise, Saucy Menu scales
          with your ambitions and adapts to your unique operational needs.
        </p>

        {/* Three Containers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TargetCard
            title="Small Scale Restaurants"
            description="Perfect for independent restaurants and cafes looking to modernize their menu experience and compete with larger chains through AI-powered personalization."
            image="/cozy-small-restaurant-interior-with-modern-digital.jpg"
          />

          <TargetCard
            title="Large Scale Restaurants"
            description="Enterprise-grade solutions for restaurant groups managing multiple locations, with centralized menu control and real-time analytics across all venues."
            image="/upscale-large-restaurant-dining-room-with-elegant-.jpg"
          />

          <TargetCard
            title="Fast Food Restaurants"
            description="Streamline high-volume operations with quick-service optimized menus, upselling automation, and multilingual support for diverse customer bases."
            image="/modern-fast-food-restaurant-counter-with-digital-o.jpg"
          />
        </div>
      </div>
    </section>
  )
}

function TargetCard({
  title,
  description,
  image,
}: {
  title: string
  description: string
  image: string
}) {
  return (
    <div
      className="relative h-80 rounded-2xl overflow-hidden bg-[#343434] group cursor-pointer"
      style={{
        backgroundImage: `url('${image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#343434] via-[#343434]/60 to-transparent"></div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
