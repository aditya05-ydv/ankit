import { useState } from 'react'
import { Link } from 'react-router-dom'
import vid1 from '../assets/vid_1.mp4'
import vid2 from '../assets/vid_2.mp4'

const pillars = [
  'Brand Solutions',
  'Events & IPs',
  'Community & Grassroots',
  'Experiences & VIP Hospitality',
]

const videos = [vid1, vid2]

function Hero() {
  const [index, setIndex] = useState(0)

  const goNext = () => setIndex((prev) => (prev + 1) % videos.length)

  return (
    <section className="relative overflow-hidden bg-ink min-h-[90vh] flex items-center">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          key={videos[index]}
          src={videos[index]}
          autoPlay
          muted
          playsInline
          onEnded={goNext}
          className="w-full h-full object-cover animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-36 w-full">
        <span className="animate-fade-in-up font-body text-sm font-bold uppercase tracking-widest text-brand-green inline-block">
          Welcome to TSEC
        </span>

        <h1 className="animate-fade-in-up delay-1 font-display text-5xl md:text-7xl font-bold uppercase text-cream mt-4 leading-[0.95]">
          The Sports & <span className="text-brand-green">Entertainment</span> Company
        </h1>

        <div className="animate-scale-x delay-2 w-24 h-1.5 bg-signal-yellow my-6" />

        <p className="animate-fade-in-up delay-2 text-muted text-lg max-w-2xl mb-10">
          We connect brands with passionate audiences through sports, entertainment,
          and culture — from concept to flawless execution.
        </p>

        <div className="animate-fade-in-up delay-3 flex flex-wrap gap-3 mb-12">
          {pillars.map((p, i) => (
            <span
              key={p}
              style={{ animationDelay: `${0.6 + i * 0.1}s` }}
              className="animate-fade-in-up font-body text-xs md:text-sm font-semibold uppercase tracking-wide bg-forest-light text-cream px-4 py-2 rounded-full border border-brand-green/30 hover:border-brand-green hover:scale-105 transition-all duration-300"
            >
              {p}
            </span>
          ))}
        </div>

        <div className="animate-fade-in-up delay-4 flex gap-4">
          <Link
            to="/services"
            className="bg-brand-green text-ink font-body font-bold uppercase text-sm px-6 py-3 rounded-md hover:bg-brand-green-dark hover:scale-105 transition-all duration-300"
          >
            Our Services
          </Link>
          <Link
            to="/contact"
            className="border border-cream text-cream font-body font-bold uppercase text-sm px-6 py-3 rounded-md hover:bg-cream hover:text-ink hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero