import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import logo from "../assets/Screenshot_2025-09-15_124929_(1)[1].png"
import logo from "../assets/logo1.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "light" : false; 
  });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light-theme", isLight);
    localStorage.setItem("theme", isLight ? "light" : "default");
    document.body.style.backgroundColor = isLight ? "#ffffff" : "";
  }, [isLight]);

  const toggleTheme = () => setIsLight((prev) => !prev);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const navBase = `w-full fixed top-0 z-50 transition-all duration-500 ${isScrolled ? "shadow-lg" : ""}`;
  const navClasses = isLight
    ? `${navBase} bg-white text-gray-900`
    : `${navBase} bg-[#16325c] text-white`;

  const baseLink =
    "px-4 py-2 rounded-lg text-base font-semibold transition-all duration-300 relative overflow-hidden group";
  const active = isLight
    ? "bg-blue-100 text-blue-700 shadow-md"
    : "bg-gradient-to-r from-blue-600 to-blue-400 text-white shadow-lg";
  const inactive = isLight
    ? "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
    : "text-gray-200 hover:bg-blue-600 hover:text-white";

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center space-x-2 text-2xl font-extrabold tracking-tight"
          >
            {/* <span
              className={`px-3 py-1 rounded-lg transition-all duration-300 ${
                isLight
                  ? "bg-blue-100 text-blue-700"
                  : "bg-gradient-to-r from-blue-500 to-blue-400 text-white"
              } shadow-md`}
              style={{
                fontFamily: "Montserrat, sans-serif",
                letterSpacing: "2px",
              }}
            >
              RO
            </span>
            <span className="relative text-blue-500 font-black">Water</span> */}

            <img src={logo} alt="Logo" className="h-[79px]"  />
          </NavLink>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-4">
            {["/", "/about", "/gallery", "/contact"].map((path, i) => {
              const names = ["Home", "About", "Gallery", "Contact"];
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `${baseLink} ${isActive ? active : inactive}`
                  }
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {names[i]}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </NavLink>
              );
            })}
          </div>
          
          {/* Right Controls */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle Button - Always Visible */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${
                isLight
                  ? "bg-gray-200 text-gray-800 hover:bg-gray-300 shadow-md"
                  : "bg-blue-600 text-yellow-300 hover:bg-blue-500 shadow-lg"
              }`}
              aria-label="Toggle theme"
            >
              {isLight ? (
                <MoonIcon className="h-5 w-5 transform transition-transform duration-300 hover:scale-110" />
              ) : (
                <SunIcon className="h-5 w-5 transform transition-transform duration-300 hover:scale-110" />
              )}
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`md:hidden p-2 rounded-md transition-all duration-300 ${
                isLight
                  ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  : "bg-blue-600 text-white hover:bg-blue-500"
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6 transform transition-transform duration-300 hover:scale-110" />
              ) : (
                <Bars3Icon className="h-6 w-6 transform transition-transform duration-300 hover:scale-110" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        } ${isLight ? "bg-white text-gray-900" : "bg-[#16325c] text-white"}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {["/", "/about", "/gallery", "/contact"].map((path, i) => {
            const names = ["Home", "About", "Gallery", "Contact"];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 relative group ${
                    isActive ? active : inactive
                  }`
                }
                onClick={toggleMenu}
              >
                {names[i]}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;