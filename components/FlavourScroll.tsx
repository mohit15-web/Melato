"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RevealText from "./RevealText";

gsap.registerPlugin(ScrollTrigger);

const flavours = [
  { name: "Strawberry", emoji: "🍓", tint: "bg-[#fce7f0]", note: "Sweet, tangy & everyone's first love." },
  { name: "Blueberry", emoji: "🫐", tint: "bg-[#e4ecfb]", note: "Deep berry richness in every scoop." },
  { name: "Mango", emoji: "🥭", tint: "bg-[#fbeecf]", note: "The king of fruits, frozen to perfection." },
  { name: "Grape", emoji: "🍇", tint: "bg-[#efe0fb]", note: "Juicy, playful and totally addictive." },
  { name: "Peach", emoji: "🍑", tint: "bg-[#fde8d3]", note: "Soft, velvety and gently sweet." },
  { name: "Cherry", emoji: "🍒", tint: "bg-[#fbe0e6]", note: "Bold, bright and unmistakably fun." },
];

export default function FlavourScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const distance = () => track.scrollWidth - window.innerWidth;

      // Horizontal scroll driven by vertical scroll while the section is pinned.
      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => "+=" + distance(),
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Parallax the emoji inside each card as they move across.
      gsap.utils.toArray<HTMLElement>(".flavour-emoji").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, rotate: -8 },
          {
            y: -40,
            rotate: 8,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              containerAnimation: tween,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#f7f1ea]">
      <div ref={trackRef} className="flex items-center h-screen w-max px-[8vw]">
        {/* Intro panel */}
        <div className="flex flex-col justify-center w-[70vw] md:w-[38vw] flex-shrink-0 pr-[6vw]">
          <p className="font-display text-[#7c3aed] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Pick your favourite
          </p>
          <RevealText
            as="h2"
            stagger={0.07}
            className="font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-[#3d2259] mb-6"
            segments={[
              { text: "A flavour for" },
              { text: "every mood.", className: "text-[#5b2d8e]" },
            ]}
          />
          <p className="text-[#3d2259]/60 text-lg leading-relaxed max-w-sm">
            Keep scrolling to slide through our rotating line-up of fruit-shaped
            scoops. New flavours drop every season. →
          </p>
        </div>

        {/* Flavour cards */}
        {flavours.map((f) => (
          <div
            key={f.name}
            className={`flavour-card group relative w-[75vw] sm:w-[46vw] md:w-[30vw] flex-shrink-0 mx-[1.5vw] rounded-[36px] ${f.tint} p-10 h-[62vh] flex flex-col justify-between shadow-[0_20px_60px_-25px_rgba(91,45,142,0.4)]`}
          >
            <div className="flex justify-between items-start">
              <span className="font-display text-2xl font-bold text-[#5b2d8e]">
                {String(flavours.indexOf(f) + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-sm font-semibold text-[#5b2d8e]/60 uppercase tracking-widest">
                Fruit Scoop
              </span>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <span className="flavour-emoji text-[9rem] leading-none select-none drop-shadow-lg">
                {f.emoji}
              </span>
            </div>

            <div>
              <h3 className="font-display text-3xl font-bold text-[#3d2259] mb-2">{f.name}</h3>
              <p className="text-[#3d2259]/55 leading-relaxed">{f.note}</p>
            </div>
          </div>
        ))}

        {/* End panel */}
        <div className="flex flex-col justify-center w-[60vw] md:w-[28vw] flex-shrink-0 pl-[4vw]">
          <h3 className="font-display text-4xl md:text-5xl font-bold text-[#5b2d8e] mb-4">
            ...and many more 🍦
          </h3>
          <p className="text-[#3d2259]/60 text-lg">
            The only way to know your favourite is to try them all.
          </p>
        </div>
      </div>
    </section>
  );
}
