"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/team", label: "Team" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shwetha-ravishankar-bangalore",
    icon: (
      <svg
        aria-hidden
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="currentColor"
      >
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.5h4.56V24H.22zM8.08 8.5h4.38v2.11h.06c.61-1.16 2.1-2.38 4.33-2.38 4.63 0 5.48 3.05 5.48 7.01V24h-4.56v-7.22c0-1.72-.03-3.95-2.41-3.95-2.41 0-2.78 1.88-2.78 3.82V24H8.08z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/advocate.shwetharavishankar?igsh=cm8zdHM1YmJqbHZy",
    icon: (
      <svg
        aria-hidden
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="currentColor"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1AebAoBe73/",
    icon: (
      <svg
        aria-hidden
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="currentColor"
      >
        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.9.2 1.9.2v2h-1.1c-1 0-1.3.7-1.3 1.3V12h2.2l-.3 3h-1.9v7A10 10 0 0 0 22 12" />
      </svg>
    ),
  },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-sm bg-[var(--ink)] text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 gap-4">
        <Link href="/" className="flex items-center">
          <Image
            src="https://shwetha.org/wp-content/uploads/2025/03/logo_sw-5.png"
            alt="Lawyera logo"
            width={120}
            height={48}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span className="block h-[2px] w-5 bg-white mb-[5px]" />
          <span className="block h-[2px] w-5 bg-white mb-[5px]" />
          <span className="block h-[2px] w-5 bg-white" />
        </button>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`uppercase tracking-wide hover:text-[var(--gold)] transition-colors ${active ? "text-[var(--gold)]" : "text-white/90"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors"
              aria-label={social.label}
            >
              {social.icon}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--gold)] text-[var(--black)] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide hover:bg-[#c99b04] transition-colors"
          >
            Free Consultation
          </Link>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[var(--ink)]/95 backdrop-blur">
          <nav className="flex flex-col px-4 py-3 gap-3">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-2 text-sm uppercase tracking-wide border-b border-white/5 last:border-b-0 ${active ? "text-[var(--gold)]" : "text-white/90"
                    }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="flex items-center gap-3 py-2">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-2 inline-flex w-full items-center justify-center bg-[var(--gold)] text-[var(--black)] px-4 py-3 rounded-md font-semibold uppercase tracking-wide"
              onClick={() => setOpen(false)}
            >
              Free Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
