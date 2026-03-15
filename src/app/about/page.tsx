import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "About Roots Painting | Meet Matt Hanson | Green Bay, WI",
  description:
    "Learn about Roots Painting and owner Matt Hanson. 14+ years of professional painting experience in Green Bay, WI. 5.0 stars from 89 reviews.",
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
    desc: "From the first estimate to the final walkthrough, you will always know what to expect and when.",
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
    desc: "We are proud to be part of the Green Bay community. Our reputation is built on trust, referrals, and results.",
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
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Roots Painting</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Deep roots in the community. Deep commitment to quality. Learn what makes us Green Bay&apos;s trusted painting team.
          </p>
        </div>
      </section>

      {/* Matt Hanson Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Meet Matt Hanson
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  With over 14 years of hands-on painting experience, Matt Hanson founded Roots Painting with a simple mission: deliver exceptional painting results while treating every homeowner like a neighbor.
                </p>
                <p>
                  Growing up in the Green Bay area, Matt understands the unique challenges Wisconsin weather brings to homes and businesses. From harsh winters to humid summers, he knows exactly which products and techniques will stand the test of time.
                </p>
                <p>
                  Matt personally oversees every project, from the initial color consultation through the final walkthrough. That hands-on approach is why Roots Painting has earned a 5.0-star rating from 89 reviews and counting.
                </p>
                <p>
                  Whether you need a single room refreshed or your entire exterior transformed, Matt and the Roots Painting team bring the same level of care and precision to every job.
                </p>
              </div>
            </div>
            <div className="bg-warm rounded-2xl p-10 text-center">
              <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* Values */}
      <section className="py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">What We Stand For</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Space?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Get a free, no-obligation estimate from Matt and the Roots Painting team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="bg-accent hover:bg-accent-dark text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:9069144021"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
            >
              Call (906) 914-4021
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-warm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Contact Us</h2>
            <p className="text-gray-600 mt-3">Fill out the form below and Matt will get back to you within 24 hours.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
