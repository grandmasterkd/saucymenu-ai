import Image from "next/image";

export function Footer() {

  const footerList = [
    { title: "Product", links: ["Features", "Pricing", "Integrations", "API"] },
    { title: "Contact", links: ["hello@saucymenu.com"] },
   
  ]

  return (
    <section className="py-20 md:py-32 bg-[#343434]" >
      <div className="px-8 md:px-64">
       
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
            
           

        
              <div className="w-full flex flex-col md:flex-row items-end justify-between gap-4" >
                <div className="flex flex-col items-start gap-3" >
                    <div className="bg-white h-fit w-fit rounded-full px-3 py-2 text-xs font-medium flex items-center gap-x-2" ><span className="bg-green-500 animate-pulse w-2 h-2 rounded-full" > </span> All Systems Normal </div>
                      <p className="text-sm text-white/50 max-w-lg">
                            Transform your restaurant with AI-powered menus, real-time translations, and intelligent recommendations.
                            Join leading restaurants already seeing revenue growth.
                      </p>
                </div>
               

                <div>
                <p className="w-full text-white/50 text-sm" > © 2025 SaucyMenu. All Rights Reserved. </p>
                </div>
                      
                </div>
             
              

       
              
           
           
          
          
         
   
      </div>
    </section>
  )
}
