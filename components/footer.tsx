import Image from "next/image";

export function Footer() {

  const footerList = [
    { title: "Product", links: ["Features", "Pricing", "Integrations", "API"] },
    { title: "Contact", links: ["hello@saucymenu.com"] },
   
  ]

  return (
    <section id="contact" className="pt-20 pb-8 bg-black" >
      <div className="px-8 md:px-60">
       
          <div className="flex flex-col md:flex-row items-start justify-between gap-4" >
            <Image src="/saucymenu-logo-white.svg" alt="Saucy Menu Logo" width={150} height={150} />

            <div className="flex items-start gap-16" >
              {footerList.map((section) => (
                <div key={section.title} className="flex flex-col items-start mb-6" >
                  <h3 className="text-white text-xl font-medium mb-2" >{section.title}</h3>
                 {section.links.map((link) => (
                    <span key={link} className="text-white/60 hover:text-white text-sm transition-colors">{link}</span>
                 ))}
                </div>
              ))}

            </div>       
          </div>
            
        
              <div className="mt-8 w-full flex flex-col md:flex-row items-end justify-between gap-4" >
                <div className="flex flex-col items-start gap-3" >
                  <div className="bg-white h-fit w-fit rounded-full px-4 py-2 text-xs font-medium flex items-center gap-x-2" ><span className="bg-green-500 animate-pulse w-2 h-2 rounded-full" > </span> All Systems Normal </div>                     
                </div>
               
                <div>
                  <p className="w-full text-white/50 text-sm" > © 2025 SaucyMenu. All Rights Reserved. </p>
                </div>                    
              </div>
             
            <div className="pt-12" >         
              <div className="bg-white/15 h-0.5 w-full" ></div> 

              <div className="mt-8 w-full text-sm text-white/30 leading-relaxed" >
                Our system never requests or stores additional customer data — everything runs securely within your menu environment. 

                All allergen classifications follow the UK Government’s 14 recognized allergens. Restaurants can add their own details, but the defaults are always compliant. <br /> <br />

                ⚠️ Disclaimer: The AI system is a digital recommendation tool. It cannot verify ingredient handling or food preparation. Developers are not liable for any injury or health issues arising from inaccurate allergen reporting or food mismanagement within the restaurant.
              </div>
            </div>
       
              
           
           
          
          
         
   
      </div>
    </section>
  )
}
