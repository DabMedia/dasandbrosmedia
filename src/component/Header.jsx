import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/Logo1.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
    { name: "Hiring", path: "/hiring" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center py-3 font-body">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/">
            <img
              src={Logo}
              alt="Iron & Byte Logo"
              className="h-10 w-auto sm:h-12"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="relative text-[16px] text-white px-2 py-3 group transition duration-300"
            >
              <span
                className={`relative z-10 ${location.pathname === item.path
                  ? "text-[#3ca9f5] font-semibold"
                  : ""
                  }`}
              >
                {item.name}
              </span>
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-300 ${location.pathname === item.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                  }`}
              />

            </Link>
          ))}

        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-gray-800 px-6 py-4 space-y-4 overflow-hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block text-lg font-medium transition duration-300 ${location.pathname === item.path
                  ? "text-[#3ca9f5]"
                  : "text-white hover:text-gray-300"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <button className="px-6 py-2 bg-white text-black 
  hover:bg-gray-100 hover:shadow-lg 
  rounded-md text-lg font-medium transition duration-300">
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
