import { ChevronRight } from "lucide-react";
import Image from "next/image";

export function CTASection() {
  return (
    <section className="pt-20 pb-36">
      <div className="px-8 md:px-60">
        <div className="relative bg-[#FFF2E4] rounded-3xl p-12 w-full h-[500px] md:h-[400px] flex flex-col md:flex-row items-center">
          <div className="space-y-16" >

         
          <div className="space-y-2" >
            <p className="text-base text-[#F7941D]" >Get a free demo of Saucy Menu today!</p>
            <h2 className="w-full md:w-[60%] text-3xl font-medium" >
              The Future of Dining Isn’t Coming, It’s Already At Your Table
            </h2>      
          </div>
           
          <div>
             <p className="" >Book A Call Now</p>       
            <div className="mt-3 flex items-center gap-2" >
              <label htmlFor="book-now" className="">     
                <input id="book-now" placeholder="myrestaurant@restaurant.com" type="text" className="w-[300px] bg-white h-12 rounded-lg px-5 text-sm" />
              </label>
              <button className="bg-[#F7941D] text-white h-12 px-5 text-xs rounded-full font-medium hover:bg-gray-900 transition-colors">
                Book A Demo
              </button>
            </div>
          </div>
         </div>


 <Image src="/customer-chooseaction.webp" alt="Customer Choose Action" width={800} height={800} className="absolute h-full w-fit aspect-auto right-20 object-contain" />

         
         
          
        </div>
      </div>
    </section>
  )
}
