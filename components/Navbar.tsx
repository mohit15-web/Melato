"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["About", "Menu", "Gallery", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#f7f1ea]/90 backdrop-blur-xl shadow-sm shadow-[#5b2d8e]/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer flex items-center gap-3"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-11 h-11 rounded-full bg-white shadow-md shadow-[#5b2d8e]/10 flex items-center justify-center">
              <span className="font-display font-bold text-lg text-[#5b2d8e] leading-none">M</span>
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-lg text-[#5b2d8e] tracking-tight">MELATO</div>
              <div className="text-[10px] text-[#5b2d8e]/50 tracking-[0.2em] -mt-1">THE DESSERT BAR</div>
            </div>
          </motion.div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link, i) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollTo(link)}
                className="font-display text-base font-medium text-[#5b2d8e] hover:text-[#7c3aed] transition-colors duration-200 relative group cursor-pointer"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7c3aed] group-hover:w-full transition-all duration-300 rounded-full" />
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo("Contact")}
              className="font-display px-6 py-2.5 rounded-full bg-[#5b2d8e] text-white text-sm font-semibold shadow-lg shadow-[#5b2d8e]/25 hover:bg-[#7c3aed] transition-colors duration-300 cursor-pointer"
            >
              Visit Us
            </motion.button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <motion.span animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="block w-6 h-0.5 bg-[#5b2d8e] rounded-full" />
            <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="block w-6 h-0.5 bg-[#5b2d8e] rounded-full" />
            <motion.span animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="block w-6 h-0.5 bg-[#5b2d8e] rounded-full" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[76px] z-40 bg-[#f7f1ea]/95 backdrop-blur-xl shadow-lg md:hidden"
          >
            <div className="flex flex-col gap-1 p-6">
              {links.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="font-display text-left py-3 text-lg font-medium text-[#5b2d8e] hover:text-[#7c3aed] border-b border-[#5b2d8e]/10 last:border-0 transition-colors cursor-pointer"
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
