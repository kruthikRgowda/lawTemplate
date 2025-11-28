"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    tagline: "FIND THE LEGAL SUPPORT YOU NEED TODAY.",
    heading: "Where exceptional service meets accessible expertise",
    highlightWords: ["exceptional"],
    bg: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=2400&q=80",
  },
  {
    tagline: "FIND THE LEGAL SUPPORT YOU NEED TODAY.",
    heading: "Where exceptional service meets accessible expertise",
    highlightWords: ["service", "accessible"],
    bg: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&w=2400&q=80",
  },
  {
    tagline: "FIND THE LEGAL SUPPORT YOU NEED TODAY.",
    heading: "Where exceptional service meets accessible expertise",
    highlightWords: ["expertise"],
    bg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=2400&q=80",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative isolate overflow-hidden bg-[var(--ink)] text-white min-h-[85vh] flex items-center">
      {/* Background Image with Transition */}
      <div className="absolute inset-0" aria-hidden>
        {slides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === i ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src={s.bg}
              alt=""
              fill
              className="object-cover"
              priority={i === 0}
              quality={90}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)]/95 via-[var(--ink)]/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          {/* Tagline */}
          <div
            className={`mb-6 transition-all duration-500 ${isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
          >
            <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.3em] text-[var(--gold)]/90">
              {slide.tagline}
            </p>
          </div>

          {/* Main Heading */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] mb-8 transition-all duration-500 delay-100 ${isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
          >
            {slide.heading.split(" ").map((word, i) => {
              const isHighlighted = slide.highlightWords.some(
                (hw) => hw.toLowerCase() === word.toLowerCase()
              );
              return (
                <span key={`${word}-${i}`} className="inline-block mr-3 sm:mr-4">
                  {isHighlighted ? (
                    <span className="text-[var(--gold)]">{word}</span>
                  ) : (
                    <span className="text-white">{word}</span>
                  )}
                </span>
              );
            })}
          </h1>

          {/* CTA Button */}
          <div
            className={`transition-all duration-500 delay-200 ${isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-md border-2 border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 text-base font-semibold uppercase tracking-wide text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105"
            >
              Learn More
              <span className="text-sm">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setIndex(i);
                setIsTransitioning(false);
              }, 300);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${index === i
                ? "w-8 bg-[var(--gold)]"
                : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
