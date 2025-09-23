import { portfolioDetails, portfolioItems } from "@/data/data"
import { Link } from "react-router"

const Portfolio = () => {
  return (
          <section className="bg-white py-16">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 ">
                <h2 className="sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase">quality work <br />Recently done project</h2>
                <ul>
                  <li>
                    {portfolioItems.map((item) => (
                      <Link
                      key={item.id}
                      to={item.path}
                      className="text-[12px] mr-8 font-medium hover:text-[#9810FA]"
                      >
                      {item.name}
                      </Link>
                    ))}
                  </li>
                </ul>

                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-7">
                  {portfolioDetails.map((item) => (
                    <div
                    key={item.id}
                    >
                    <img src={item.img} alt="" />
                    <Link to={item.path} className="block pt-3 font-semibold uppercase">{item.name}</Link>
                    <span className="text-gray-500 text-sm">{item.type}</span>
                  </div>
                  ))
                  }
                  

                </div>
              </div>
            </section>
  )
}

export default Portfolio
