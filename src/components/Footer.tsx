import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-1.5 mb-4">
              <span className="text-2xl font-[family-name:var(--font-dm-serif)] text-white">
                Painted
              </span>
              <span className="text-2xl font-[family-name:var(--font-dm-serif)] text-accent-light">
                Roots
              </span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Women-owned painting company proudly serving Riverview, FL and the
              greater Tampa Bay area. Quality work with attention to detail.
            </p>
            <a
              href="https://www.facebook.com/PaintedRootsLLC/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent-light hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Follow us on Facebook
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-light mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-light mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-gray-300">Interior Painting</span>
              </li>
              <li>
                <span className="text-sm text-gray-300">Exterior Painting</span>
              </li>
              <li>
                <span className="text-sm text-gray-300">Cabinet Refinishing</span>
              </li>
              <li>
                <span className="text-sm text-gray-300">Color Consultation</span>
              </li>
              <li>
                <span className="text-sm text-gray-300">Accent Walls</span>
              </li>
              <li>
                <span className="text-sm text-gray-300">Touch-Up & Refresh</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-light mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-accent-light mt-0.5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm text-gray-300">
                  Riverview, FL 33579
                </span>
              </li>
              <li>
                <a
                  href="tel:8138303279"
                  className="flex items-start gap-3 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-accent-light mt-0.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-sm text-gray-300">(813) 830-3279</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/PaintedRootsLLC/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-white transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-accent-light mt-0.5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="text-sm text-gray-300">Facebook</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Painted Roots LLC. All rights
            reserved.
          </p>
          <p className="text-sm text-gray-400">
            Women-owned & proudly serving Tampa Bay.
          </p>
        </div>
      </div>
    </footer>
  );
}
