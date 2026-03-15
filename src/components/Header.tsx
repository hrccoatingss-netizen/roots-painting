"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  { name: "Interior Painting", href: "/services/interior-painting" },
  { name: "Exterior Painting", href: "/services/exterior-painting" },
  { name: "Cabinet Painting", href: "/services/cabinet-painting" },
  { name: "Deck & Fence Staining", href: "/services/deck-fence-staining" },
  { name: "Color Consultation", href: "/services/color-consultation" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <span className="text-2xl font-bold text-primary">Roots</span>
            <span className="text-2xl font-light text-accent">Painting</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="text-sm font-medium text-gray-700 hover:text-primary transition-colors flex items-center gap-1">
                Services
                <svg className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-warm hover:text-primary transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/#contact" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Phone + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:9069144021" className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors">
              (906) 914-4021
            </a>
            <Link
              href="/#contact"
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Get Free Estimate
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-gray-700 py-2">
              Home
            </Link>
            <div className="text-sm font-medium text-gray-500 uppercase tracking-wider py-1">Services</div>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm text-gray-700 py-2 pl-4"
              >
                {s.name}
              </Link>
            ))}
            <Link href="/about" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-gray-700 py-2">
              About
            </Link>
            <Link href="/#contact" onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-gray-700 py-2">
              Contact
            </Link>
            <div className="pt-3 border-t border-gray-100 space-y-3">
              <a href="tel:9069144021" className="block text-center text-sm font-semibold text-primary py-2">
                (906) 914-4021
              </a>
              <Link
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
