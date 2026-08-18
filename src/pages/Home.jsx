import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'

const services = [
  { title: 'Brand Solutions', desc: 'Stadium activations, BTL/ATL campaigns, and pan-India brand engagement.' },
  { title: 'Events & IPs', desc: 'End-to-end fan experiences for international sports properties entering India.' },
  { title: 'Community & Grassroots', desc: 'Building sports culture through schools, academies, and tournaments.' },
  { title: 'Experiences & VIP Hospitality', desc: 'Curated luxury experiences and white-glove concierge services.' },
]

const clientBrands = [
  { name: 'Premier League', domain: 'premierleague.com' },
  { name: 'Apollo Tyres', domain: 'apollotyres.com' },
  { name: 'Gujarat Titans', domain: 'gujarattitansipl.com' },
  { name: 'Heineken', domain: 'heineken.com' },
  { name: 'KFC', domain: 'kfc.com' },
  { name: 'LaLiga', domain: 'laliga.com' },
]

function Home() {
  return (
    <div className="bg-ink">
      <Hero />

      {/* About preview */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeading eyebrow="Who We Are" title="About TSEC" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <p className="lg:col-span-2 text-muted text-base leading-relaxed">
            TSEC is a full-service sports marketing and experiential agency that connects
            brands with passionate audiences through sports, entertainment, and culture. We
            have partnered with brands across the ISL, Premier League, LaLiga, UEFA Champions
            League, UFC, and Formula 1 — delivering campaigns across 15+ cities in India and
            beyond.
          </p>
          <Link
            to="/about"
            className="group flex items-center gap-2 font-body font-bold uppercase text-sm text-brand-green hover:text-cream transition-colors"
          >
            Read More About Us
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-forest py-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="What We Do" title="Our Services" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-forest-light border border-brand-green/10 rounded-xl p-5 hover:border-brand-green hover:-translate-y-1 transition-all duration-500"
              >
                <h3 className="font-display text-lg font-bold uppercase text-cream mb-2">
                  {s.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 font-body font-bold uppercase text-sm text-brand-green hover:text-cream transition-colors"
          >
            Explore All Services
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      {/* Clients preview */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="Our Work" title="Trusted By The Best" />
        </div>

        <div className="relative mb-10">
          <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] w-max">
            {[...clientBrands, ...clientBrands].map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="flex flex-col items-center justify-center gap-2 bg-cream rounded-lg h-28 w-48 shrink-0 px-5 hover:scale-110 hover:shadow-xl hover:shadow-brand-green/20 transition-all duration-300"
              >
                <img
                  src={`https://logo.clearbit.com/${brand.domain}`}
                  alt={brand.name}
                  className="max-h-10 w-auto object-contain"
                />
                <span className="font-body text-xs font-semibold uppercase tracking-wide text-ink text-center">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <Link
            to="/clients"
            className="group inline-flex items-center gap-2 font-body font-bold uppercase text-sm text-brand-green hover:text-cream transition-colors"
          >
            View Case Studies
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-forest-light py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-3xl font-bold uppercase text-cream mb-2">
              Ready to bring your brand to life?
            </h3>
            <p className="text-muted text-sm">
              Let's talk about your next sports and entertainment campaign.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 bg-brand-green text-ink font-body font-bold uppercase text-sm px-6 py-3 rounded-md hover:bg-brand-green-dark hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home