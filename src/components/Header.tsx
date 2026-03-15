"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5">
            <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <span className="text-2xl font-[family-name:var(--font-dm-serif)] text-primary">
              Painted
            </span>
            <span className="text-2xl font-[family-name:var(--font-dm-serif)] text-accent">
              Roots
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#services"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Phone + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:8138303279"
              className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              (813) 830-3279
            </a>
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-accent to-accent-light hover:from-accent-dark hover:to-accent text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-gray-700 py-2"
            >
              Home
            </Link>
            <Link
              href="/#services"
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-gray-700 py-2"
            >
              Services
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-gray-700 py-2"
            >
              About
            </Link>
            <Link
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-gray-700 py-2"
            >
              Contact
            </Link>
            <div className="pt-3 border-t border-gray-100 space-y-3">
              <a
                href="tel:8138303279"
                className="block text-center text-sm font-semibold text-primary py-2"
              >
                (813) 830-3279
              </a>
              <Link
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center bg-gradient-to-r from-accent to-accent-light text-white px-5 py-2.5 rounded-full text-sm font-semibold"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
