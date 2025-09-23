const Hero = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 md:grid md:grid-cols-2 md:items-center md:gap-8 lg:py-32">
        
        {/* Left */}
        <div className="text-left">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Understand user flow and
            <span className="text-indigo-600"> increase </span>
            conversions
          </h1>
          <p className="mt-4 text-base text-gray-700 sm:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi. Natus, provident accusamus impedit minima harum corporis iusto.
          </p>
          <div className="mt-6 flex gap-4">
            <a className="rounded border-2 border-[#854FEE] bg-[#854FEE] px-6 py-3 text-white font-semibold hover:bg-white hover:text-[#854FEE] transition" href="#">
              Get Started
            </a>
            <a className="rounded border-2 border-[#854FEE] px-6 py-3 font-medium text-gray-700 hover:bg-[#854FEE] hover:text-white transition" href="#">
              Learn More
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="mt-10 md:mt-0">
          <img src="/img/banner/home-right.png" alt="Hero Banner" className="w-full h-auto" />
        </div>
      </div>
    </section>
  )
}

export default Hero
