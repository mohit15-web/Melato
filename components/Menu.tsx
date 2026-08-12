"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import RevealText from "./RevealText";

const products = [
  {
    name: "Mini Fruit Ice Creams",
    description: "Hand-crafted fruit-shaped scoops that look as good as they taste. Raspberry, mango, blueberry & more.",
    price: "₹149",
    emoji: "🍓",
    tint: "bg-[#fce7f0]",
    tag: "Bestseller",
  },
  {
    name: "Mini Popsicles",
    description: "Bite-sized frozen popsicles bursting with real fruit flavours. Perfect for the Bangalore heat.",
    price: "₹99",
    emoji: "🍡",
    tint: "bg-[#ede4fb]",
    tag: "Fan Favourite",
  },
  {
    name: "Scoopable Cookies",
    description: "Warm, gooey cookies topped with a generous scoop of premium ice cream. The perfect duo.",
    price: "₹179",
    emoji: "🍪",
    tint: "bg-[#fbeecf]",
    tag: "Must Try",
  },
  {
    name: "Brioche",
    description: "Buttery French brioche served warm. A delicate balance of sweet and soft that melts in your mouth.",
    price: "₹129",
    emoji: "🥐",
    tint: "bg-[#fde8d3]",
    tag: "Cozy Pick",
  },
  {
    name: "DBC Special",
    description: "Melato's signature DBC — a layered dessert bomb with crunch, cream, and fruit on every bite.",
    price: "₹199",
    emoji: "🎂",
    tint: "bg-[#d9ecfb]",
    tag: "Signature",
  },
  {
    name: "Hot Desserts",
    description: "Seasonal warm desserts that pair beautifully with cold ice cream. The contrast is everything.",
    price: "₹159",
    emoji: "🍮",
    tint: "bg-[#fbe0e6]",
    tag: "Seasonal",
  },
];

function Card({ product, index }: { product: typeof products[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="group relative rounded-[28px] bg-white p-7 cursor-pointer shadow-[0_10px_40px_-15px_rgba(91,45,142,0.25)] hover:shadow-[0_20px_50px_-15px_rgba(91,45,142,0.4)] transition-shadow duration-300"
    >
      {/* Tag */}
      <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#5b2d8e]/10 text-xs font-semibold text-[#5b2d8e] mb-5 font-display">
        {product.tag}
      </div>

      <div className="flex items-start justify-between mb-5">
        <div className={`w-20 h-20 rounded-2xl ${product.tint} flex items-center justify-center`}>
          <motion.span
            className="text-4xl"
            animate={{ rotate: [0, 6, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4, delay: index * 0.5 }}
          >
            {product.emoji}
          </motion.span>
        </div>
        <span className="font-display text-2xl font-bold text-[#5b2d8e]">{product.price}</span>
      </div>

      <h3 className="font-display text-xl font-semibold text-[#3d2259] mb-2">{product.name}</h3>
      <p className="text-sm text-[#3d2259]/55 leading-relaxed">{product.description}</p>

      <motion.div
        className="mt-5 flex items-center gap-2 font-display text-sm font-semibold text-[#5b2d8e] group-hover:gap-3 transition-all"
      >
        Order Now <span>→</span>
      </motion.div>
    </motion.div>
  );
}

export default function Menu() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true });

  return (
    <section id="menu" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div ref={headRef} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            className="font-display text-[#7c3aed] text-sm font-semibold uppercase tracking-[0.2em] mb-4"
          >
            What we serve
          </motion.p>
          <RevealText
            as="h2"
            stagger={0.08}
            className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-5 text-[#3d2259]"
            segments={[
              { text: "Our" },
              { text: "signatures", className: "text-[#5b2d8e]" },
            ]}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[#3d2259]/55 text-lg max-w-xl mx-auto"
          >
            Every item on our menu is crafted to be an experience — not just a dessert.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {products.map((product, i) => (
            <Card key={product.name} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
