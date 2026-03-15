import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span className="text-2xl font-bold text-white">Roots</span>
              <span className="text-2xl font-light text-accent-light">Painting</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Professional painting services in Green Bay, WI and surrounding areas. 14+ years of experience delivering quality results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-light mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/#services" className="text-sm text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/#contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-light mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/interior-painting" className="text-sm text-gray-300 hover:text-white transition-colors">Interior Painting</Link></li>
              <li><Link href="/services/exterior-painting" className="text-sm text-gray-300 hover:text-white transition-colors">Exterior Painting</Link></li>
              <li><Link href="/services/cabinet-painting" className="text-sm text-gray-300 hover:text-white transition-colors">Cabinet Painting</Link></li>
              <li><Link href="/services/deck-fence-staining" className="text-sm text-gray-300 hover:text-white transition-colors">Deck & Fence Staining</Link></li>
              <li><Link href="/services/color-consultation" className="text-sm text-gray-300 hover:text-white transition-colors">Color Consultation</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-light mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent-light mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-gray-300">Green Bay / Howard, WI</span>
              </li>
              <li>
                <a href="tel:9069144021" className="flex items-start gap-3 hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-accent-light mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm text-gray-300">(906) 914-4021</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@rootspainting.com" className="flex items-start gap-3 hover:text-white transition-colors">
                  <svg className="w-5 h-5 text-accent-light mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm text-gray-300">info@rootspainting.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Roots Painting. All rights reserved.</p>
          <p className="text-sm text-gray-400">
            Proudly serving Green Bay, Howard, and surrounding areas.
          </p>
        </div>
      </div>
    </footer>
  );
}
