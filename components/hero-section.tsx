import { Button } from "@/components/ui/button"
import { HeroImage } from "@/components/hero-image"

export function HeroSection() {
  return (
    <section className="pt-24 md:pt-32 pb-12 md:pb-24">
      <div className="container mx-auto">
        {/* Hero Body - Centered */}
        <div className="flex flex-col items-center text-center max-w-xs md:max-w-2xl mx-auto gap-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-black tracking-tighter leading-tight">
            Make Your Restaurant Smarter And <span className="font-serif italic">Pay Yourself Back</span>
          </h1>

          <p className="text-sm md:text-base text-black/50 w-full md:max-w-2xl leading-relaxed">
            Transform your restaurant operations with AI-powered digital menus that increase revenue, break language
            barriers, and deliver personalized dining experiences to every customer.
          </p>

<div className="w-full md:w-fit mt-0 md:mt-2 mx-auto flex items-center gap-2" >
          <label htmlFor="book-now" className="w-full md:w-fit">
            <input id="book-now" placeholder="hello@myrestaurant.com" type="text" className="w-full md:w-[300px] bg-[#F1F1F1] h-12 rounded-lg px-6 text-sm" />
          </label>
          <Button className="bg-[#F7941D] w-fit text-white hover:bg-[#E68C24] rounded-full h-12 px-5 text-xs">
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
