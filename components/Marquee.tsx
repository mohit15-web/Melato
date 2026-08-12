"use client";

import Wave from "./Wave";

const items = [
  "Fruit Ice Creams",
  "Mini Popsicles",
  "Scoopable Cookies",
  "Brioche",
  "Gelato",
  "Mango Sorbet",
  "Berry Blast",
  "DBC Specials",
  "Cherry Scoops",
  "Tropical Treats",
];

export default function Marquee() {
  return (
    <>
      {/* Purple band (flows out of the hero wave) */}
      <div className="relative bg-[#5b2d8e] py-8 -mt-1">
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="marquee-track flex gap-10 pr-10">
            {[...items, ...items].map((item, i) => (
              <span key={i} className="flex items-center gap-10 font-display text-2xl font-medium text-[#f7f1ea]">
                {item}
                <svg width="22" height="22" viewBox="0 0 24 24" className="opacity-70">
                  <path fill="#e9d5ff" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Wave back to cream */}
      <div className="bg-[#5b2d8e] -mt-1">
        <Wave color="#f7f1ea" />
      </div>
    </>
  );
}
