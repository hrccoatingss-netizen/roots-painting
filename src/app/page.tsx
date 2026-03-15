import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title:
    "Painted Roots LLC - Women-Owned Painting Company | Riverview, FL | Tampa Bay",
  description:
    "Painted Roots LLC is a women-owned painting company in Riverview, FL. Interior & exterior painting, cabinet refinishing, color consultation. Fresh perspectives, flawless results. Call (813) 830-3279.",
};

const services = [
  {
    title: "Interior Painting",
    desc: "Transform your living spaces with flawless interior painting. From single rooms to whole-home makeovers, we bring fresh color and clean lines to every wall.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
  },
  {
    title: "Exterior Painting",
    desc: "Protect and beautify your home's exterior. We use premium paints and proper prep to create a finish that stands up to Florida's sun and storms.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
  },
  {
    title: "Cabinet Refinishing",
    desc: "Give your kitchen a brand new look without a full remodel. Our cabinet refinishing brings new life to tired cabinetry with a smooth, durable finish.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  {
    title: "Color Consultation",
    desc: "Not sure what colors to choose? We help you find the perfect palette that matches your style, lighting, and vision for each room.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
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

const promiseCards = [
  {
    title: "Quality Guarantee",
    desc: "We stand behind every brushstroke. If you are not 100% satisfied, we will make it right. Premium paints, proper prep, and a finish that lasts.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden fees, no surprise charges. You get a clear, detailed estimate upfront so you know exactly what to expect before we start.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Clean & Respectful",
    desc: "We treat your home like our own. Furniture covered, floors protected, and we clean up thoroughly when the job is done.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80", alt: "Beautiful interior living space with fresh paint" },
  { src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80", alt: "Modern home exterior with professional paint job" },
  { src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80", alt: "Freshly painted bedroom with warm tones" },
  { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80", alt: "Kitchen with refinished cabinets" },
  { src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80", alt: "Clean modern bathroom with fresh paint" },
  { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80", alt: "Modern house with beautiful exterior finish" },
];

const serviceAreas = [
  "Riverview",
  "Brandon",
  "Valrico",
  "Lithia",
  "FishHawk",
  "Tampa",
  "Ruskin",
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

      {/* ============ HERO — Full-Bleed Image ============ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
          alt="Beautiful interior home with fresh paint"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 relative z-10 w-full">
          <div className="max-w-3xl animate-fade-in-up">
            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <svg className="w-4 h-4 text-accent-light" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm text-white/90 font-medium">Women-Owned & Operated</span>
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <svg className="w-4 h-4 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-white/90 font-medium">Serving Tampa Bay</span>
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-[family-name:var(--font-dm-serif)] text-white leading-tight mb-4">
              Painted Roots LLC
            </h1>
            <p className="text-xl md:text-2xl text-accent-light font-[family-name:var(--font-dm-serif)] mb-6">
              Riverview&apos;s Newest Women-Owned Painting Company
            </p>
            <p className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed">
              Fresh perspectives, flawless results. Nicole and Kendra bring genuine
              care and attention to detail to every home they touch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="#contact"
                className="bg-gradient-to-r from-accent to-accent-light hover:from-accent-dark hover:to-accent text-white px-8 py-4 rounded-full font-semibold text-center transition-all shadow-lg hover:shadow-xl text-lg"
              >
                Get Your Free Quote
              </Link>
              <a
                href="tel:8138303279"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-center transition-all text-lg"
              >
                Call (813) 830-3279
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRUST BAR ============ */}
      <section className="bg-primary py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {["Women-Owned", "Licensed & Insured", "Free Estimates", "Serving Tampa Bay"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2 text-white/90 text-sm font-medium">
                <svg className="w-5 h-5 text-accent-light" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </span>
            ))}
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

      {/* ============ SERVICES — Image Background Cards ============ */}
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
              From full home painting to cabinet refinishing, we bring the same
              quality and care to every project.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-[family-name:var(--font-dm-serif)] mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-200 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BEFORE / AFTER ============ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              The Difference
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-dm-serif)] text-gray-900 mt-2">
              Before & After
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              See how a fresh coat of paint can completely transform a space.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=80"
                alt="Room before painting - worn and outdated"
                loading="lazy"
                className="w-full h-80 object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-500/90 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                Before
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80"
                alt="Room after painting - fresh and modern"
                loading="lazy"
                className="w-full h-80 object-cover"
              />
              <div className="absolute top-4 left-4 bg-primary/90 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                After
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ OUR PROCESS ============ */}
      <section className="py-20 bg-surface-alt">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              The Team
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-dm-serif)] text-gray-900 mt-2">
              Meet the Founders
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Two passionate women on a mission to transform homes across Tampa Bay.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            {/* Image Side */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Beautiful interior space showcasing quality painting work"
                loading="lazy"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            {/* Founder Cards */}
            <div className="space-y-6">
              {/* Nicole */}
              <div className="bg-surface rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex-shrink-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-white">NK</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Nicole Kojak</h3>
                    <p className="text-accent font-medium text-sm mb-2">Co-Founder & Owner</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Nicole brings a sharp eye for detail and a deep commitment to
                      quality. She believes every home deserves a finish that reflects
                      the care put into it, and she makes sure every project meets her
                      high standards.
                    </p>
                  </div>
                </div>
              </div>
              {/* Kendra */}
              <div className="bg-surface rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-full flex-shrink-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-white">K</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Kendra</h3>
                    <p className="text-accent font-medium text-sm mb-2">Co-Founder & Owner</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Kendra&apos;s friendly approach and reliable work ethic make
                      every client feel at ease. She is passionate about building
                      lasting relationships and delivering results that exceed
                      expectations.
                    </p>
                  </div>
                </div>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors mt-2"
              >
                Read Our Full Story
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ OUR PROMISE (Aspiration Section) ============ */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-48 h-48 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-primary-light blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-accent-light uppercase tracking-wider">
              Our Commitment
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-dm-serif)] text-white mt-2">
              Our Promise to You
            </h2>
            <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
              We may be new, but our standards are anything but. Here is what you
              can expect from every Painted Roots project.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {promiseCards.map((item) => (
              <div
                key={item.title}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-colors"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-5 text-accent-light">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
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

      {/* ============ PHOTO GALLERY ============ */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Our Work
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-dm-serif)] text-gray-900 mt-2">
              Photo Gallery
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              A glimpse at the kind of transformations we create for homeowners across Tampa Bay.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden group aspect-[4/3]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
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
      <section id="contact" className="relative py-20 overflow-hidden">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1920&q=80"
          alt="Professional painter at work"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-sm font-semibold text-accent-light uppercase tracking-wider">
                Get Started
              </span>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-dm-serif)] text-white mt-2 mb-6">
                Ready for a Fresh Look?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Whether you have a clear vision or need help choosing colors, we
                are here to help. Fill out the form and Nicole or Kendra will
                reach out to schedule your free consultation.
              </p>
              <div className="space-y-4">
                <a
                  href="tel:8138303279"
                  className="flex items-center gap-3 text-gray-200 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-accent-light">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="font-medium text-lg">(813) 830-3279</span>
                </a>
                <a
                  href="https://www.facebook.com/PaintedRootsLLC/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-200 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-accent-light">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <span className="font-medium text-lg">Facebook</span>
                </a>
                <div className="flex items-center gap-3 text-gray-200">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-accent-light">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="font-medium text-lg">Riverview, FL 33579</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
