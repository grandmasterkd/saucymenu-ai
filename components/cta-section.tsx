export function CTASection() {
  return (
    <section className="py-20">
      <div className="px-8 md:px-64">
        <div className="bg-[#F8E6D2] rounded-3xl p-12 w-full mx-auto text-left space-y-3">
          <h2 className="max-w-1/2 text-3xl font-medium" style={{ color: "#FF6A00" }}>
            Ready To Join The AI Age And Profit From It?
          </h2>
          <p className="text-sm text-gray-700 max-w-md">
            Transform your restaurant with AI-powered menus, real-time translations, and intelligent recommendations.
            Join leading restaurants already seeing revenue growth.
          </p>
          <div className="flex items-center gap-2" >
            <label htmlFor="book-now">
            <input id="book-now" placeholder="lesliebrown@gmail.com" type="text" className="w-[300px] bg-white h-12 rounded-lg px-3 text-sm" />
          </label>
          <button className="bg-black text-white h-12 px-3 text-xs rounded-lg font-medium hover:bg-gray-900 transition-colors">
            Book A Demo
          </button>
          </div>
          
        </div>
      </div>
    </section>
  )
}
