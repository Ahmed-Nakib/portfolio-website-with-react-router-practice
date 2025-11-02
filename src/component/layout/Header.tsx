import { useState } from "react";
import { navItems } from "@/data/data";
import { NavLink, useNavigate } from "react-router-dom";
import { ModeToggle } from "@/component/layout/mode-toggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-white dark:bg-blue-950 shadow relative z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div>
            <NavLink to="/" className="flex items-center">
              <strong className="text-3xl font-bold text-blue-950 dark:text-white">
                NAKIB<span className="text-[#854FEE]">.</span>
              </strong>
            </NavLink>
          </div>

          {/* Navigation (Desktop) */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm font-medium">
              {navItems.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-xl transition-all duration-300 ease-in-out ${
                        isActive
                          ? "bg-[#854FEE] text-white shadow-md dark:bg-white dark:text-[#854FEE]"
                          : "text-gray-600 hover:text-[#854FEE] hover:bg-[#854fee1a] dark:text-white dark:hover:text-[#C6A9FF]"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right buttons */}
          <div className="flex items-center gap-4">
            <ModeToggle />
            <button
              onClick={() => navigate("contact")}
              className="rounded-md border-2 bg-[#854FEE] px-5 py-2 text-sm font-medium text-white shadow hover:bg-white hover:text-[#854FEE] hover:border-[#854FEE] transition-all duration-300"
            >
              Contact
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="block md:hidden rounded bg-gray-100 p-2 text-gray-600"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-blue-950 shadow-md z-40">
          <nav>
            <ul className="flex flex-col items-start gap-4 p-6 text-sm font-medium">
              {navItems.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block w-full rounded-md px-4 py-2 transition-all duration-300 ${
                        isActive
                          ? "bg-[#854FEE] text-white dark:bg-white dark:text-[#854FEE]"
                          : "text-gray-600 hover:text-[#854FEE] hover:bg-[#854fee1a] dark:text-white"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    navigate("contact");
                  }}
                  className="block w-full rounded-md border-2 bg-[#854FEE] px-5 py-2 text-sm font-medium text-white shadow hover:bg-white hover:text-[#854FEE] hover:border-[#854FEE] transition-all duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
