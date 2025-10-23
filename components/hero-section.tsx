import { Button } from "@/components/ui/button"
import { HeroImage } from "@/components/hero-image"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container mx-auto">
        {/* Hero Body - Centered */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-y-4">
          <h1 className="text-5xl font-semibold text-black tracking-tighter leading-tight">
            Integrate AI Into Your Restaurant And <span className="font-serif italic">Pay Yourself Back</span>
          </h1>

          <p className="text-base text-black/50 max-w-2xl leading-relaxed">
            Transform your restaurant operations with AI-powered digital menus that increase revenue, break language
            barriers, and deliver personalized dining experiences to every customer.
          </p>

<div className="flex items-center gap-2" >
  <label htmlFor="book-now">
            <input id="book-now" placeholder="myrestaurant@restaurant.co.uk" type="text" className="w-[300px] bg-[#F1F1F1] h-12 rounded-lg px-4 text-sm" />
          </label>
          <Button className="bg-[#F7941D] text-white hover:bg-[#E68C24] rounded-lg h-12 px-3 text-xs">
            Book A Demo
          </Button>
</div>
         
        </div>

        {/* Hero Image with Annotations */}
        <HeroImage />
      </div>
    </section>
  )
}
