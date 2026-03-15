import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title:
    "About Painted Roots LLC | Meet Nicole & Kendra | Women-Owned Painting in Riverview, FL",
  description:
    "Meet Nicole Kojak and Kendra, the women behind Painted Roots LLC. A brand new women-owned painting company in Riverview, FL serving the Tampa Bay area with quality, care, and attention to detail.",
};

const values = [
  {
    title: "Quality Craftsmanship",
    desc: "Every surface is properly prepped, primed, and painted with premium materials. We never cut corners.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Clear Communication",
    desc: "From the first consultation to the final walkthrough, you will always know what to expect and when.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Respect for Your Home",
    desc: "We treat every home like our own. Clean work areas, protected furniture, and meticulous attention to detail.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Community Roots",
    desc: "We are proud to be part of the Tampa Bay community. Our reputation is built on trust, referrals, and results.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero — Full-bleed image */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
          alt="Beautiful home interior showcasing quality painting"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-dm-serif)] text-white mb-4">
            About Painted Roots
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Two women, one mission: bring fresh perspective and flawless
            finishes to homes across Tampa Bay.
          </p>
        </div>
      </section>

      {/* Founders Story — with imagery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-dm-serif)] text-gray-900 mt-2 mb-6">
                Meet Nicole & Kendra
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Painted Roots LLC was born from a simple idea: that painting
                  should be done with heart. Nicole Kojak and Kendra, two women
                  with a shared love for the craft, decided to build something
                  of their own — a painting company rooted in quality, honesty,
                  and genuine care for the spaces they transform.
                </p>
                <p>
                  Based in Riverview, Florida, Painted Roots is proudly
                  women-owned and locally operated. Nicole and Kendra bring
                  fresh energy and a detail-oriented approach to every project,
                  whether it is a single accent wall or a complete interior
                  refresh.
                </p>
                <p>
                  They are already building a strong reputation through
                  referrals from realtors, roofing companies, and general
                  contractors across the Tampa Bay area. That word-of-mouth
                  trust speaks volumes about the quality of their work.
                </p>
                <p>
                  When you hire Painted Roots, you are not just getting
                  painters — you are getting two passionate business owners who
                  personally care about the outcome of your project.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {/* Warm Interior Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                  alt="Modern home with beautiful paint finish"
                  loading="lazy"
                  className="w-full h-64 object-cover"
                />
              </div>
              {/* Nicole Card */}
              <div className="bg-surface rounded-2xl p-8">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex-shrink-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-white">NK</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Nicole Kojak</h3>
                    <p className="text-accent font-medium text-sm">Co-Founder & Owner</p>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                      Nicole&apos;s sharp eye for detail and commitment to doing
                      things right sets the standard for every Painted Roots
                      project. She is the kind of person who will not leave until
                      every line is crisp and every surface is smooth.
                    </p>
                  </div>
                </div>
              </div>
              {/* Kendra Card */}
              <div className="bg-surface rounded-2xl p-8">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-full flex-shrink-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-white">K</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Kendra</h3>
                    <p className="text-accent font-medium text-sm">Co-Founder & Owner</p>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                      Kendra&apos;s warm, reliable nature makes every client feel
                      like family. She brings a calm confidence to every job and
                      ensures the Painted Roots experience is as smooth as the
                      finish on your walls.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values — with background image */}
      <section className="relative py-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1920&q=80"
          alt="Professional painter at work"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-surface/95" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-dm-serif)] text-gray-900 mt-2">
              What We Stand For
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Full-bleed image */}
      <section className="relative py-24 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt="Beautiful home interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-dm-serif)] text-white mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get a free, no-obligation quote from the Painted Roots team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="bg-gradient-to-r from-accent to-accent-light hover:from-accent-dark hover:to-accent text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:8138303279"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-3.5 rounded-full font-semibold transition-all"
            >
              Call (813) 830-3279
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-surface-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-dm-serif)] text-gray-900 mt-2">
              Contact Us
            </h2>
            <p className="text-gray-600 mt-3">
              Fill out the form below and Nicole or Kendra will get back to you
              shortly.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
