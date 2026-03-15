import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Roots Painting - Professional Painting in Green Bay, WI | 14+ Years Experience",
  description:
    "Green Bay's trusted painting professionals. Interior, exterior, cabinet painting, deck staining & color consultation. 5.0 stars from 89 reviews. Free estimates. Call (906) 914-4021.",
};

const services = [
  {
    title: "Interior Painting",
    desc: "Transform your living spaces with flawless interior painting. From single accent walls to whole-home makeovers, we deliver clean lines and lasting finishes.",
    href: "/services/interior-painting",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Exterior Painting",
    desc: "Protect and beautify your home's exterior. We use premium paints and proper prep to withstand Wisconsin's tough weather year after year.",
    href: "/services/exterior-painting",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Cabinet Painting",
    desc: "Give your kitchen a fresh new look without a full remodel. Our cabinet painting process delivers a factory-smooth finish that lasts.",
    href: "/services/cabinet-painting",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "Deck & Fence Staining",
    desc: "Restore and protect your outdoor wood surfaces. We clean, prep, and apply premium stains to extend the life of your deck and fences.",
    href: "/services/deck-fence-staining",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
  {
    title: "Color Consultation",
    desc: "Not sure what colors to choose? Our expert color consultation helps you find the perfect palette for your home's style and lighting.",
    href: "/services/color-consultation",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
];

const whyChoose = [
  {
    title: "14+ Years Experience",
    desc: "Over a decade of painting expertise means we have seen and solved it all. No surprises, just results.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Premium Quality",
    desc: "We use top-tier paints and materials, combined with thorough prep work, for a finish that looks great and lasts.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "5.0-Star Reviews",
    desc: "89 five-star reviews and counting. Our customers consistently rate us the best painters in Green Bay.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: "Locally Owned",
    desc: "We live and work in Green Bay. When you hire Roots Painting, you are supporting a local family business.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const reviews = [
  {
    name: "Sarah M.",
    text: "Matt and his team did an incredible job painting our entire interior. The prep work was thorough, the paint lines were crisp, and they left our home spotless. Could not recommend them more!",
    rating: 5,
  },
  {
    name: "Tom & Lisa K.",
    text: "We hired Roots Painting for our exterior and could not be happier. They worked around the weather, communicated every step, and our house looks brand new. Worth every penny.",
    rating: 5,
  },
  {
    name: "Jennifer R.",
    text: "Had our kitchen cabinets painted and the transformation is unreal. Matt helped us pick the perfect color and the finish is smooth as glass. Friends keep asking who did it!",
    rating: 5,
  },
];

const serviceAreas = [
  "Green Bay",
  "Howard",
  "Ashwaubenon",
  "De Pere",
  "Bellevue",
  "Allouez",
  "Suamico",
  "Pulaski",
  "Wrightstown",
  "Denmark",
  "Hobart",
  "Lawrence",
];

const faqs = [
  {
    question: "How long does a typical interior painting project take?",
    answer:
      "Most interior projects take 2-5 days depending on the size of the space and the number of rooms. We will provide you with a detailed timeline during your free estimate so you know exactly what to expect.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes! We offer free, no-obligation estimates for all painting projects. Matt will visit your home, discuss your vision, and provide a detailed written estimate within 24 hours.",
  },
  {
    question: "What kind of paint do you use?",
    answer:
      "We use premium paints from trusted brands like Sherwin-Williams and Benjamin Moore. We will recommend the best product for your specific project based on the surface, location, and desired finish.",
  },
  {
    question: "Do you move furniture and protect my belongings?",
    answer:
      "Absolutely. We move and cover all furniture, lay drop cloths on floors, and tape off trim and fixtures. When we leave, your home will be cleaner than when we arrived.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking 2-4 weeks in advance, especially during our busy season (spring and summer). However, we always do our best to accommodate urgent projects.",
  },
  {
    question: "Do you handle exterior painting in Wisconsin's climate?",
    answer:
      "Yes! With 14+ years of experience in Wisconsin, we know exactly when and how to paint exteriors for maximum durability. We use weather-appropriate products and schedule around optimal conditions.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ============ HERO ============ */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(139,108,66,0.15)_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-300">5.0 from 89 Reviews</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Green Bay&apos;s Trusted<br />
              Painting Professionals
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
              14+ years of delivering flawless finishes for homeowners across the Green Bay area. From interiors to exteriors, cabinets to decks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold text-center transition-colors"
              >
                Get Your Free Estimate
              </Link>
              <a
                href="tel:9069144021"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-center transition-colors"
              >
                Call (906) 914-4021
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATISTICS ============ */}
      <section className="bg-white py-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-gray-200">
            {[
              { value: "14+", label: "Years Experience" },
              { value: "89", label: "5-Star Reviews" },
              { value: "5.0", label: "Average Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center py-6">
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="bg-warm py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Deep Roots. Lasting Finishes.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Like a tree with deep roots, our work stands strong through every season. We are grounded in quality, craftsmanship, and a genuine commitment to your home.
          </p>
          <Link
            href="#contact"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
          >
            Start Your Project Today
          </Link>
        </div>
      </section>

      {/* ============ ABOUT / TEAM ============ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Painting Done Right,<br />Every Time
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Roots Painting was founded by Matt Hanson with one goal: provide Green Bay homeowners with painting they can trust. With 14+ years in the trade, Matt brings a level of care and precision that is hard to find.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Every project starts with a thorough consultation, honest pricing, and a clear plan. We prep every surface properly, use premium paints, and leave your home cleaner than we found it.
              </p>
              <Link
                href="/about"
                className="text-primary font-semibold hover:text-primary-dark transition-colors inline-flex items-center gap-1"
              >
                Learn More About Us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-warm rounded-2xl p-10 text-center">
              <div className="w-28 h-28 bg-primary/10 rounded-full mx-auto mb-5 flex items-center justify-center">
                <svg className="w-14 h-14 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Matt Hanson</h3>
              <p className="text-accent font-medium">Owner & Lead Painter</p>
              <p className="text-sm text-gray-500 mt-1">14+ Years of Experience</p>
              <div className="flex items-center justify-center gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-1">5.0 from 89 Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services" className="py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Our Painting Services</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              From walls to cabinets to decks, we deliver professional results that last.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{s.desc}</p>
                <span className="text-primary font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Why Roots Painting</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Why Homeowners Choose Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ REVIEWS ============ */}
      <section className="py-20 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">What Our Customers Say</h2>
            <p className="text-gray-600 mt-3">5.0 stars from 89 reviews</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.name} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
                <p className="text-sm font-semibold text-gray-900">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICE AREAS ============ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Coverage</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Areas We Serve</h2>
            <p className="text-gray-600 mt-3">Proudly serving the greater Green Bay area.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="bg-primary/5 text-primary px-5 py-2.5 rounded-full text-sm font-medium"
              >
                {area}, WI
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Frequently Asked Questions</h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section id="contact" className="py-20 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">Get Started</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Ready for a Fresh Coat?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you have a clear vision or need help choosing colors, we are here to help. Fill out the form and Matt will personally reach out within 24 hours to schedule your free estimate.
              </p>
              <div className="space-y-4">
                <a href="tel:9069144021" className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="font-medium">(906) 914-4021</span>
                </a>
                <a href="mailto:info@rootspainting.com" className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="font-medium">info@rootspainting.com</span>
                </a>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="font-medium">Green Bay / Howard, WI</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
