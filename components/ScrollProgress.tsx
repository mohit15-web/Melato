"use client";

import { motion, useScroll, useSpring } from "framer-motion";

// Thin gradient bar at the very top that fills as you scroll the page.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 origin-left z-[60] bg-gradient-to-r from-[#7c3aed] via-[#5b2d8e] to-[#c4a5e8]"
    />
  );
}
