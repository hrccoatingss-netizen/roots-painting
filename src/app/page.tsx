import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title:
    "Painted Roots LLC - Women-Owned Painting Company | Riverview, FL | Tampa Bay",
  description:
    "Painted Roots LLC is a women-owned painting company in Riverview, FL. Interior & exterior painting, accent walls, color consultation. Fresh perspectives, flawless results. Call (813) 830-3279.",
};

const services = [
  {
    title: "Interior Painting",
    desc: "Transform your living spaces with flawless interior painting. From single rooms to whole-home makeovers, we bring fresh color and clean lines to every wall.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Exterior Painting",
    desc: "Protect and beautify your home's exterior. We use premium paints and proper prep to create a finish that stands up to Florida's sun and storms.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Accent Walls",
    desc: "Make a bold statement with a perfectly painted accent wall. We help you choose the right color and finish to create a stunning focal point.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "Touch-Up & Refresh",
    desc: "Scuffs, chips, and fading happen. Our touch-up service brings your existing paint job back to life without a full repaint.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Color Consultation",
    desc: "Not sure what colors to choose? We help you find the perfect palette that matches your style, lighting, and vision for each room.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "Small Projects Welcome",
    desc: "No job is too small. From a single room to a quick refresh before guests arrive, we bring the same care and quality to every project.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    step: "01",
    title: "Free Consultation",
    desc: "We visit your space, listen to your vision, and provide an honest, detailed quote with no surprises.",
  },
  {
    step: "02",
    title: "Color Vision",
    desc: "We help you choose the perfect colors and finishes that bring your ideas to life and complement your home.",
  },
  {
    step: "03",
    title: "Expert Painting",
    desc: "Our team handles all prep, priming, and painting with meticulous care and premium materials.",
  },
  {
    step: "04",
    title: "Happy Reveal",
    desc: "We do a final walkthrough together to make sure every detail is perfect. Your satisfaction is our priority.",
  },
];

const whyPaintedRoots = [
  {
    title: "Women-Owned",
    desc: "Founded by Nicole and Kendra, bringing a fresh perspective and genuine passion to every project.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Detail-Oriented",
    desc: "We sweat the small stuff. Clean lines, proper prep, and a finish that looks professional every time.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Locally Rooted",
    desc: "We live and work in Tampa Bay. When you hire Painted Roots, you are supporting a local small business.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Fresh Perspective",
    desc: "New energy, new ideas, and a genuine love for transforming spaces. We bring your vision to life.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

const aspirations = [
  {
    quote: "Quality work with attention to detail",
    label: "Our Promise",
  },
  {
    quote: "Reliable and friendly service",
    label: "Our Approach",
  },
  {
    quote: "A fresh perspective that brings your vision to life",
    label: "Our Difference",
  },
];

const serviceAreas = [
  "Riverview",
  "Tampa",
  "Brandon",
  "Valrico",
  "Lithia",
  "Ruskin",
  "Sun City Center",
  "Apollo Beach",
];

const faqs = [
  {
    question: "How long does a typical painting project take?",
    answer:
      "Most interior projects take 2-5 days depending on the size of the space and the number of rooms. We will provide you with a detailed timeline during your free consultation so you know exactly what to expect.",
  },
  {
    question: "Do you offer free quotes?",
    answer:
      "Yes! We offer free, no-obligation quotes for all painting projects. Nicole or Kendra will visit your space, discuss your vision, and provide a detailed written estimate.",
  },
  {
    question: "What kind of paint do you use?",
    answer:
      "We use premium paints from trusted brands like Sherwin-Williams and Benjamin Moore. We will recommend the best product for your specific project based on the surface, location, and desired finish.",
  },
  {
    question: "Do you move furniture and protect my belongings?",
    answer:
      "Absolutely. We move and cover all furniture, lay drop cloths on floors, and tape off trim and fixtures. When we leave, your space will be cleaner than when we arrived.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, Painted Roots LLC is a fully registered and insured painting company. We carry liability insurance for your peace of mind on every project.",
  },
  {
    question: "Do you handle exterior painting in Florida's climate?",
    answer:
      "Absolutely. We understand Florida's heat, humidity, and storms. We use weather-appropriate products and schedule around optimal conditions to ensure a durable, long-lasting finish.",
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
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary">
        {/* Organic pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-primary-light blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-accent-light blur-2xl" />
        </div>
        {/* Leaf/organic shapes via CSS */}
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-white/10 rounded-full" />
        <div className="absolute bottom-20 left-16 w-24 h-24 border-2 border-white/5 rounded-full" />
        <div className="absolute top-40 right-1/3 w-16 h-16 border border-white/5 rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 relative">
          <div className="max-w-3xl animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm text-white/90 font-medium">
                Women-Owned & Proudly Local
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-dm-serif)] text-white leading-tight mb-6">
              Fresh Perspectives,
              <br />
              <span className="text-accent-light">Flawless Results</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              Tampa Bay&apos;s newest painting team bringing quality, care, and
              attention to detail to every home we touch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="#contact"
                className="bg-gradient-to-r from-accent to-accent-light hover:from-accent-dark hover:to-accent text-white px-8 py-4 rounded-full font-semibold text-center transition-all shadow-lg hover:shadow-xl"
              >
                Get Your Free Quote
              </Link>
              <a
                href="tel:8138303279"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-center transition-all"
              >
                Call (813) 830-3279
              </a>
            </div>

            {/* Social proof badges */}
            <div className="flex flex-wrap gap-4">
              {[
                "Women-Owned",
                "Tampa Bay Local",
                "Referral-Based",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 text-sm text-white/80"
                >
                  <svg
                    className="w-4 h-4 text-accent-light"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ MISSION STATEMENT ============ */}
      <section className="bg-surface-alt py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-0.5 bg-accent" />
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Our Story
            </span>
            <div className="w-12 h-0.5 bg-accent" />
          </div>
          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-[family-name:var(--font-dm-serif)]">
            We&apos;re Nicole & Kendra — two women with a passion for
            transforming spaces. Born from a love of the craft, Painted Roots
            brings fresh perspective and genuine care to every project.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-1 text-primary font-semibold mt-6 hover:text-primary-dark transition-colors"
          >
            Meet the Founders
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-dm-serif)] text-gray-900 mt-2">
              Our Painting Services
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              From full home painting to small touch-ups, we bring the same
              quality and care to every project.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-xl p-8 border-t-4 border-accent/60 hover:border-accent hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ OUR PROCESS ============ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-dm-serif)] text-gray-900 mt-2">
              Our Simple Process
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-5 shadow-md">
                  <span className="text-xl font-bold text-white">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MEET THE FOUNDERS ============ */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              The Team
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-dm-serif)] text-gray-900 mt-2">
              Meet the Founders
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Two passionate women on a mission to transform homes across Tampa
              Bay.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Nicole */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-light rounded-full mx-auto mb-5 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">NK</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Nicole Kojak
              </h3>
              <p className="text-accent font-medium text-sm mb-3">
                Co-Founder & Owner
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Nicole brings a sharp eye for detail and a deep commitment to
                quality. She believes every home deserves a finish that reflects
                the care put into it, and she makes sure every project meets her
                high standards.
              </p>
            </div>
            {/* Kendra */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-24 h-24 bg-gradient-to-br from-accent to-accent-light rounded-full mx-auto mb-5 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">K</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Kendra</h3>
              <p className="text-accent font-medium text-sm mb-3">
                Co-Founder & Owner
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Kendra&apos;s friendly approach and reliable work ethic make
                every client feel at ease. She is passionate about building
                lasting relationships and delivering results that exceed
                expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY PAINTED ROOTS ============ */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-48 h-48 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-primary-light blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-accent-light uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-dm-serif)] text-white mt-2">
              Why Painted Roots
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyPaintedRoots.map((item) => (
              <div
                key={item.title}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-colors"
              >
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-accent-light">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHAT PEOPLE SAY (Aspiration Cards) ============ */}
      <section className="py-20 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-dm-serif)] text-gray-900 mt-2">
              What Drives Us
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {aspirations.map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-xl p-8 shadow-sm text-center border border-gray-100"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-lg font-[family-name:var(--font-dm-serif)] text-gray-900 mb-4 leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICE AREAS ============ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Coverage
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-dm-serif)] text-gray-900 mt-2">
              Areas We Serve
            </h2>
            <p className="text-gray-600 mt-3">
              Proudly serving Riverview and the greater Tampa Bay area.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="bg-primary/5 text-primary px-5 py-2.5 rounded-full text-sm font-medium border border-primary/10 hover:bg-primary/10 transition-colors"
              >
                {area}, FL
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-dm-serif)] text-gray-900 mt-2">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section id="contact" className="py-20 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                Get Started
              </span>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-dm-serif)] text-gray-900 mt-2 mb-6">
                Ready for a Fresh Look?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you have a clear vision or need help choosing colors, we
                are here to help. Fill out the form and Nicole or Kendra will
                reach out to schedule your free consultation.
              </p>
              <div className="space-y-4">
                <a
                  href="tel:8138303279"
                  className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <svg
                      className="w-5 h-5"
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
                  </div>
                  <span className="font-medium">(813) 830-3279</span>
                </a>
                <a
                  href="https://www.facebook.com/PaintedRootsLLC/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <span className="font-medium">Facebook</span>
                </a>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <svg
                      className="w-5 h-5"
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
                  </div>
                  <span className="font-medium">Riverview, FL 33579</span>
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
