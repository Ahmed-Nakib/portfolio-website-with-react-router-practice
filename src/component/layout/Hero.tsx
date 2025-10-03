import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <section className="bg-white dark:bg-black">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 md:grid md:grid-cols-2 md:items-center md:gap-8 lg:py-32">
        {/* Left */}
        <div className="text-left">
          <h1 className="text-[40px] font-bold text-gray-900">
            <div className="relative">
              <span className="sm:text-2xl md:text-3xl dark:text-white">HEllO</span>
              <div className="h-0.5 w-60 bg-black dark:bg-white absolute bottom-6 left-24"></div>
            </div>
            <strong className="dark:text-white">I AM AHMED NAKIB</strong>
          </h1>
          <p className="mt-4 text-base text-blue-950 dark:text-gray-500 sm:text-lg uppercase font-extrabold leading-relaxed">
            <ReactTyped
              strings={[
                "senior full stack developer",
                "frontend engineer",
                "backend specialist",
                "react & node.js expert",
              ]}
              typeSpeed={60} 
              backSpeed={40} 
              loop 
            />
          </p>
          <div className="mt-6 flex gap-4">
            <a
              className="rounded border-2 border-[#854FEE] dark:border-0 bg-[#854FEE] px-6 py-3 text-white font-semibold hover:bg-white hover:text-[#854FEE] transition"
              href="#"
            >
              Hire Me
            </a>
            <a
              className="rounded border-2 border-[#854FEE] px-6 py-3 font-medium text-gray-700 hover:bg-[#854FEE] hover:text-white dark:bg-white dark:text-[#854FEE] dark:hover:bg-[#854FEE] dark:hover:text-white dark:border-0  transition"
              href="#"
            >
              Get CV
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="mt-10 md:mt-0">
          <img
            src="/img/banner/home-right.png"
            alt="Hero Banner"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
