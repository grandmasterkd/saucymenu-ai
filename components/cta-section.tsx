import { ChevronRight } from "lucide-react";
import Image from "next/image";

export function CTASection() {
  return (
    <section className="pt-20 pb-36">
      <div className="px-8 md:px-32 xl:px-60">
        <div className=" bg-[#FFF2E4] rounded-3xl w-full h-auto md:h-[400px] grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="p-9 md:p-12 space-y-12 md:space-y-16 col-span-1" >

         
          <div className=" space-y-2" >
            <p className="text-base text-[#F7941D]" >Get a free demo of Saucy Menu today!</p>
            <h2 className="w-full text-2xl md:text-3xl font-medium tracking-tighter" >
              The Future of Dining Isn’t Coming, It’s Already At Your Table
            </h2>      
          </div>
           
          <div>
             <p className="" >Book A Call Now</p>       
            <div className="mt-3 flex flex-col md:flex-row items-center gap-2" >
              <label htmlFor="book-now" className="w-full">     
                <input id="book-now" placeholder="hello@myrestaurant.com" type="text" className="w-full  bg-white h-12 rounded-lg px-5 text-sm" />
              </label>
              <button className="bg-[#F7941D] w-full md:w-fit text-white h-12 px-5 text-sm rounded-full font-medium hover:bg-gray-900 transition-colors whitespace-nowrap">
                Book A Demo
              </button>
            </div>
          </div>
         </div>



 <Image src="/customer-chooseaction.webp" alt="Customer Choose Action" width={400} height={400} className="col-span-1 px-3 pr-0 lg:pr-0 md:aspect-square aspect-auto h-fit object-contain" priority />

       

         
         
          
        </div>
      </div>
    </section>
  )
}
