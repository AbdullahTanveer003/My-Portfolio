import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbDownload } from "react-icons/tb";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [hasShadow, setHasShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed px-5 lg:px-28 top-0 left-0 w-full z-50 transition-all duration-300 ${hasShadow
          ? "py-4 bg-slate-950/70 backdrop-blur-md border-b border-slate-900/60 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "py-6 bg-transparent"
        }`}
    >
      <div className="container mx-auto flex lg:grid lg:grid-cols-3 justify-between items-center">
        {/* Typographic Logo */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => scrollToSection("home")}
          className="cursor-pointer flex items-center gap-2"
        >

          <div className="flex flex-col">


          </div>
        </motion.div>

        {/* Desktop Menu Links */}
        <ul className="hidden lg:flex items-center justify-center gap-x-7 font-medium text-slate-300">
          {["home", "about", "skills", "experience", "projects", "education", "contact"].map((section) => (
            <motion.li
              key={section}
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <button
                onClick={() => scrollToSection(section)}
                className="transition-colors duration-300 group-hover:text-cyan-400 capitalize tracking-wide text-xs xl:text-sm font-semibold cursor-pointer"
              >
                {section}
              </button>
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-300 group-hover:w-full"
                layoutId={`underline-${section}`}
              />
            </motion.li>
          ))}
        </ul>

        {/* Download Resume Button & Mobile Toggle (Right Column) */}
        <div className="flex justify-end items-center gap-x-4">
          <a
            href="/resume.pdf"
            download="Abdullah_Tanveer_CV.pdf"
            className="hidden lg:flex items-center gap-x-2 px-5 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            Download CV <TbDownload size={15} />
          </a>

          {/* Mobile Hamburger Toggle */}
          <motion.button
            className="lg:hidden text-2xl text-slate-300 hover:text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <HiX /> : <HiOutlineMenu />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 h-screen w-screen"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed top-0 right-0 h-screen w-[78%] max-w-sm bg-slate-950/95 border-l border-slate-900/80 z-50 p-6 flex flex-col justify-between shadow-2xl"
            >
              <div>
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-900">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center text-white font-black text-xs">
                      AT
                    </div>
                    <span className="text-lg font-bold text-white">
                      Abdullah<span className="text-cyan-400">.T</span>
                    </span>
                  </div>
                  <button
                    className="text-2xl text-slate-400 hover:text-white"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close Menu"
                  >
                    <HiX />
                  </button>
                </div>

                <ul className="flex flex-col gap-y-4 font-semibold text-slate-300 text-base">
                  {["home", "about", "skills", "experience", "projects", "education", "contact"].map((section) => (
                    <motion.li
                      key={section}
                      whileHover={{ x: 8, color: "#22d3ee" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <button
                        onClick={() => scrollToSection(section)}
                        className="capitalize text-left w-full py-1 text-slate-300 hover:text-cyan-400 transition-colors"
                      >
                        {section}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-900">
                <a
                  href="/resume.pdf"
                  download="Abdullah_Tanveer_CV.pdf"
                  className="w-full flex items-center justify-center gap-x-2 px-5 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300 active:scale-95"
                >
                  Download CV <TbDownload size={18} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
