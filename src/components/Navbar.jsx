import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Clock, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LondonClock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Europe/London",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      setTime(now.toLocaleTimeString("en-GB", options));
    };
    const timer = setInterval(updateTime, 1000);
    updateTime();
    return () => clearInterval(timer);
  }, []);

  return <span>{time} in London</span>;
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { label: "Studio", path: "/#studio" },
    { label: "Projects", path: "/#projects" },
    { label: "Journal", path: "/journal" },
    { label: "Connect", path: "/connect" },
  ];

  return (
    <>
      <nav className="relative z-20 mx-auto max-w-[1440px] px-2 sm:px-3 pt-6 w-full">
        <div className="bg-white rounded-full p-[5px] flex items-center justify-between w-full mx-auto max-w-[1440px] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          {/* Left Section */}
          <div className="flex items-center gap-6">
            <Link
              to="/"
              aria-label="Home"
              className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 rounded-full flex items-center justify-center hover:opacity-85 transition-opacity"
            >
              <span className="text-white text-[15px] leading-[11px] font-bold tracking-tight">
                NF
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((item) => {
                const isActive =
                  (item.label === "Journal" &&
                    location.pathname === "/journal") ||
                  (item.label === "Connect" &&
                    location.pathname === "/connect");

                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`text-[14px] font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-[#F26522] font-semibold"
                        : "text-gray-900 hover:text-gray-500"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Section Desktop */}
          <div className="hidden md:flex items-center gap-6 pr-2">
            <span className="text-[13px] text-gray-600 hidden lg:block">
              Taking on projects for Q1 2026
            </span>
            <div className="flex items-center gap-1.5 text-[13px] text-gray-600">
              <Clock size={14} />
              <LondonClock />
            </div>

            <button
              type="button"
              onClick={() => navigate('/connect')}
              className="
    group relative overflow-hidden
    bg-gray-900
    hover:bg-gray-800
    text-white
    rounded-full
    pl-5 pr-2 py-2
    flex items-center gap-3
    transition-all duration-500
    ease-[cubic-bezier(0.25,0.1,0.25,1)]
    shadow-[0_8px_24px_rgba(0,0,0,0.15)]
    hover:shadow-[0_12px_36px_rgba(0,0,0,0.2)]
    hover:-translate-y-[2px]
  "
            >
              {/* Text */}
              <div className="relative h-5 overflow-hidden flex flex-col justify-center text-[13px] font-medium leading-none">
                <span
                  className="
        flex items-center h-full
        transition-transform duration-500
        ease-[cubic-bezier(0.25,0.1,0.25,1)]
        group-hover:-translate-y-full
      "
                >
                  Book a strategy call
                </span>

                <span
                  className="
        flex items-center h-full
        absolute left-0 top-full
        transition-transform duration-500
        ease-[cubic-bezier(0.25,0.1,0.25,1)]
        group-hover:-translate-y-full
      "
                >
                  Book a strategy call
                </span>
              </div>

              {/* Icon */}
              <div
                className="
      w-6 h-6
      bg-white
      rounded-full
      flex items-center justify-center
      text-gray-900
      transition-all duration-500
      group-hover:scale-110
    "
              >
                <ArrowRight
                  size={14}
                  className="
        transition-all duration-500
        ease-[cubic-bezier(0.25,0.1,0.25,1)]
        group-hover:-rotate-45
      "
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-label="Toggle mobile menu"
            className="md:hidden w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center pointer-events-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-white w-full mx-3 mb-3 sm:mb-0 sm:max-w-md rounded-2xl p-6 flex flex-col gap-8"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-gray-600 text-sm bg-gray-100 px-4 py-2 rounded-full">
                  <Clock size={14} />
                  <LondonClock />
                </div>
                <button
                  type="button"
                  aria-label="Close mobile menu"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-900"
                  onClick={() => setMenuOpen(false)}
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {navLinks.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="text-[28px] sm:text-[32px] font-medium text-gray-900"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <button 
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  navigate('/connect');
                }}
                className="w-full group bg-gray-900 text-white rounded-full p-4 flex items-center justify-between mt-4"
              >
                <span className="text-lg font-medium pl-2">Start a project</span>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900">
                  <ArrowRight size={20} className="icon-rotate" />
                </div>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
