"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Wave from "./Wave";
import RevealText from "./RevealText";

const reviews = [
  { name: "Priya S.", handle: "@priya_eats", text: "The fruit ice creams are absolutely stunning! Looked too good to eat but tasted even better. Melato is a gem in HSR!", stars: 5 },
  { name: "Rahul M.", handle: "@rahul_foodie", text: "Brought my sister here for her birthday and she was blown away. The mini popsicles are perfection.", stars: 5 },
  { name: "Sneha K.", handle: "@snehak_blr", text: "Most Instagrammable dessert spot in Bangalore, hands down. The scoopable cookies are dangerously good!", stars: 5 },
  { name: "Arjun V.", handle: "@arjunv_blr", text: "Came for the DBC special and left with 5 more things. Every item is a showstopper. Will return!", stars: 5 },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <>
      {/* Top wave into purple */}
      <Wave color="#5b2d8e" />

      <section className="relative bg-[#5b2d8e] py-20 px-6 -mt-1">
        <div className="max-w-7xl mx-auto" ref={ref}>
          <div className="text-center mb-14">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="font-display text-[#e9d5ff] text-sm font-semibold uppercase tracking-[0.2em] mb-4"
            >
              What people are saying
            </motion.p>
            <RevealText
              as="h2"
              stagger={0.08}
              className="font-display text-5xl md:text-6xl font-bold tracking-tight text-white"
              segments={[{ text: "Sweet reviews" }]}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className="relative rounded-3xl bg-white p-6 shadow-xl shadow-[#3d2259]/20 transition-transform duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.stars }).map((_, si) => (
                    <motion.span
                      key={si}
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: i * 0.12 + si * 0.05 + 0.3 }}
                      className="text-[#f5a623] text-sm"
                    >
                      ★
                    </motion.span>
                  ))}
                </div>

                <p className="text-[#3d2259]/70 text-sm leading-relaxed mb-6 italic">&ldquo;{r.text}&rdquo;</p>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#5b2d8e] flex items-center justify-center text-white font-bold text-sm font-display flex-shrink-0">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-display text-[#3d2259] text-sm font-semibold">{r.name}</div>
                    <div className="text-[#3d2259]/40 text-xs">{r.handle}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom wave back to cream */}
      <div className="bg-[#5b2d8e] -mt-1">
        <Wave color="#f7f1ea" />
      </div>
    </>
  );
}
