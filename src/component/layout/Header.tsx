import { navItems } from "@/data/data"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/img/logo.png" alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm font-medium">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link to={item.path} className="text-gray-600 hover:text-[#854FEE] transition">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Button + Mobile menu */}
          <div className="flex items-center gap-4">
            <a
              className="rounded-md border-2 bg-[#854FEE] px-5 py-2 text-sm font-medium text-white shadow hover:bg-white hover:text-[#854FEE] hover:border-[#854FEE] transition"
              href="#"
            >
              Contact
            </a>
            {/* Mobile Menu Button */}
            <button className="block md:hidden rounded bg-gray-100 p-2 text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
