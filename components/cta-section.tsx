import { ChevronRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20">
      <div className="px-8 md:px-64">
        <div className="bg-[#F8E6D2] rounded-3xl p-12 w-full mx-auto text-left space-y-8">
          <div className="space-y-2" >
          <p className="text-base text-[#F7941D]" >Get a free demo of Saucy Menu today!</p>
          <h2 className="max-w-[55%] text-2xl font-medium" >
            See how Saucy Menu accelerates your restaurant’s growth
          </h2>
          <div className="text-gray-500 flex items-center gap-x-1" >
            <p>See how</p>
            <ChevronRight size={20} />
          </div>
          </div>
        
          
          <div>
          <h2 className="">
            Book a demo call now
          </h2>
          <div className="flex items-center gap-2" >
            <label htmlFor="book-now">
            <input id="book-now" placeholder="lesliebrown@gmail.com" type="text" className="w-[300px] bg-white h-12 rounded-lg px-4 text-sm" />
          </label>
          <button className="bg-[#F7941D] text-white h-12 px-5 text-xs rounded-full font-medium hover:bg-gray-900 transition-colors">
            Book A Demo
          </button>
          </div>
          </div>
         
          
        </div>
      </div>
    </section>
  )
}
