import Image from "next/image";

export function Footer() {
  return (
    <section className="py-20 md:py-32 bg-black" >
      <div className="px-8 md:px-32">
        <div className=" max-w-3xl mx-auto text-center space-y-6">
            <div className="grid place-items-center" >
                <Image src="/saucymenu-logowhite.svg" alt="Saucy Menu Logo" width={200} height={200} />
            </div>
          
          <p className="text-base md:text-lg text-white max-w-2xl mx-auto">
            Transform your restaurant with AI-powered menus, real-time translations, and intelligent recommendations.
            Join leading restaurants already seeing revenue growth.
          </p>
         <p className="text-white" >All Rights Reserved. Copyright saucymenu.co.uk 2025</p>
        </div>
      </div>
    </section>
  )
}
