import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

import gt1 from '../assets/gt1.JPG'
import gt2 from '../assets/gt2.JPG'
import gt3 from '../assets/gt3.JPG'
import gt4 from '../assets/gt4.JPG'

import h1 from '../assets/h1.JPG'
import h2 from '../assets/h2.jpeg'
import h3 from '../assets/h3.jpeg'
import h4 from '../assets/h4.jpeg'

import pl1 from '../assets/pl1.jpeg'
import pl2 from '../assets/pl2.jpeg'
import pl3 from '../assets/pl3.jpeg'
import pl4 from '../assets/pl4.png'

import ss1 from '../assets/ss1.JPG'
import ss2 from '../assets/ss2.JPG'
import ss3 from '../assets/ss3.JPG'

import dsg1 from '../assets/dsg1.JPG'
import dsg2 from '../assets/dsg2.JPG'
import dsg3 from '../assets/dsg3.JPG'
import dsg4 from '../assets/dsg4.JPG'

import apolo1 from '../assets/apolo1.jpg'
import apolo2 from '../assets/apolo2.jpg'
import apolo3 from '../assets/apolo3.jpg'
import apolo4 from '../assets/apolo4.jpg'

const fallbackPhotos = [dsg1, dsg2, dsg3, dsg4]

const caseStudies = [
  {
    brand: 'Gujarat Titans',
    title: 'Junior Titans',
    category: 'Community & Grassroots',
    description:
      'Annual community engagement initiative for U-14 children across Tier 2 cities in Gujarat — approx 1,100+ students from 35+ schools participate in sports activities per city.',
    metrics: [
      { value: '18,000+', label: 'Kids Activated (3 Seasons)' },
      { value: '15+', label: 'Cities Covered' },
      { value: '1,100+', label: 'Per City Per Event' },
    ],
    photos: [gt1, gt2, gt3, gt4],
  },
  {
    brand: 'Star Sports',
    title: 'Select FC PL Screenings',
    category: 'Events & IPs',
    description:
      'High-energy Premier League screening events across multiple cities delivering a matchday-first experience with chants, rivalries, predictions and live performances.',
    metrics: [
      { value: '20,000+', label: 'Football Fans Reached' },
      { value: '7+', label: 'Cities (Tier 1)' },
    ],
    photos: [ss1, ss2, ss3],
  },
  {
    brand: 'KFC',
    title: 'ISL Stadium Activation',
    category: 'Brand Solutions',
    description:
      'Activated KFC as central ISL sponsor across 5 cities and 16 matches with a branded street football zone and halftime "Mega KFC Bucket Challenge," broadcast live on the match feed.',
    metrics: [
      { value: '38,000+', label: 'Football Fans Reached' },
      { value: '5', label: 'Cities Activated Simultaneously' },
    ],
    photos: fallbackPhotos,
  },
  {
    brand: 'Premier League',
    title: 'Live Mumbai',
    category: 'Events & IPs',
    description:
      'Fan-park scale match screening at NESCO, Mumbai with 4 marquee matches capped by Chelsea vs. Liverpool, Premier League legend Michael Owen in attendance, and a dedicated VIP zone.',
    metrics: [
      { value: '1,300+', label: 'Fans at Premier League Live' },
      { value: '6+', label: 'Partners Integrated' },
    ],
    photos: [pl1, pl2, pl3, pl4],
  },
  {
    brand: 'Heineken',
    title: 'UCL Final Screening 24-25',
    category: 'Events & IPs',
    description:
      'Premium UEFA Champions League Final viewing experience at JW Marriott Juhu with celebrity presence (Bhaichung Bhutia, Varun Thakur), a VIP lounge, and complimentary Heineken F&B.',
    metrics: [{ value: '250+', label: 'Fans in Attendance' }],
    photos: [h1, h2, h3, h4],
  },
  {
    brand: 'Apollo Tyres',
    title: 'Man United First Team Visit',
    category: 'Community & Grassroots',
    description:
      'Harry Maguire, André Onana and Diogo Dalot visited Mumbai to launch Season 5 of United We Play, Apollo Tyres\' flagship grassroots football programme in India.',
    metrics: [
      { value: '250+', label: 'Fans in Attendance' },
      { value: '50+', label: 'Kids in Workshop' },
      { value: '15+', label: 'Media Houses Present' },
    ],
    photos: fallbackPhotos,
  },
  {
    brand: 'Premier League',
    title: 'Community Showcase',
    category: 'Community & Grassroots',
    description:
      'Grassroots showcase supported by the British Council, bringing together Premier League coaches, Indian community coaches and the British High Commission, including Sir Keir Starmer.',
    metrics: [
      { value: '12+', label: 'Stakeholders Managed' },
      { value: '75+', label: 'Children from Oscar Foundation' },
    ],
    photos: fallbackPhotos,
  },
  {
    brand: 'Apollo Tyres',
    title: 'Man United Legends Visit',
    category: 'Community & Grassroots',
    description:
      'A 2-day visit brought seven Manchester United Legends to Chennai for the finale of United We Play season 2, including a 5v5 tournament with Chennaiyin FC and India players.',
    metrics: [
      { value: '7', label: 'Man United Legends' },
      { value: '5', label: 'Players Won Old Trafford Trip' },
    ],
    photos: [apolo1, apolo2, apolo3, apolo4],
  },
  {
    brand: 'Premier League',
    title: 'Meet & Greet with Michael Owen',
    category: 'Events & IPs',
    description:
      'Exclusive fan meet-and-greet with Premier League legend Michael Owen — career insights, trophy photo ops, live trivia, and strong turnout from supporters\' clubs.',
    metrics: [{ value: '200+', label: 'Fans (OSC Exclusive Seating)' }],
    photos: fallbackPhotos,
  },
  {
    brand: 'Dream Set Go',
    title: 'DSG x HDFC Pixel Visa Masterclass',
    category: 'Community & Grassroots',
    description:
      'Football legend Michael Owen hosted an exclusive masterclass for HDFC Pixel Play Visa customers, with a surprise appearance by Nora Fatehi captaining opposing sides.',
    metrics: [
      { value: '50+', label: 'Participants' },
      { value: '2', label: 'Celebrity Talents' },
    ],
    photos: [dsg1, dsg2, dsg3, dsg4],
  },
  {
    brand: 'Jr. NBA',
    title: 'Jr NBA 3v3 National Tournament',
    category: 'Community & Grassroots',
    description:
      'India\'s largest school-based basketball program for U-14 players, organised with ACG and the Basketball Federation of India across 10 cities with a national final.',
    metrics: [
      { value: '900+', label: 'Schools' },
      { value: '8,000+', label: 'Kids Participated' },
      { value: '10', label: 'Cities' },
    ],
    photos: fallbackPhotos,
  },
  {
    brand: 'Parimatch Sports',
    title: 'Experiences and Events',
    category: 'Experiences & Premium Hospitality',
    description:
      'Premium sports, lifestyle and entertainment experiences for Parimatch Sports\' VIP clients — loyalty programmes covering luxury travel, match access, and hospitality.',
    metrics: [{ value: '2,000+', label: 'VIPs Served To Date' }],
    photos: fallbackPhotos,
  },
]

const brands = [
  { name: 'Tata', domain: 'tata.com' },
  { name: 'Apollo Tyres', domain: 'apollotyres.com' },
  { name: 'Gujarat Titans', domain: 'gujarattitansipl.com' },
  { name: 'LaLiga', domain: 'laliga.com' },
  { name: 'Heineken', domain: 'heineken.com' },
  { name: 'KFC', domain: 'kfc.com' },
  { name: 'DHL', domain: 'dhl.com' },
  { name: 'Premier League', domain: 'premierleague.com' },
  { name: 'Star Sports', domain: 'starsports.com' },
  { name: 'Dream Set Go', domain: 'dreamsetgo.com' },
  { name: 'Parimatch Sports', domain: 'parimatch.com' },
  { name: 'Maruti Suzuki', domain: 'marutisuzuki.com' },
  { name: 'First Coffee', domain: 'firstcoffee.in' },
  { name: 'Jr. NBA', domain: 'nba.com' },
  { name: 'Havas Play', domain: 'havasplay.com' },
]

function Clients() {
  const [activeStudy, setActiveStudy] = useState(null)
  const [photoIndex, setPhotoIndex] = useState(0)

  const openGallery = (study) => {
    setActiveStudy(study)
    setPhotoIndex(0)
  }

  const closeGallery = () => setActiveStudy(null)

  const nextPhoto = () =>
    setPhotoIndex((prev) => (prev + 1) % activeStudy.photos.length)

  const prevPhoto = () =>
    setPhotoIndex((prev) => (prev - 1 + activeStudy.photos.length) % activeStudy.photos.length)

  return (
    <div className="bg-ink">
      {/* Case Studies */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeading
          eyebrow="Our Work"
          title="Select Case Studies"
          subtitle="From stadium activations to VIP experiences — a look at how we bring brands to life through sport."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              onClick={() => openGallery(study)}
              className="group cursor-pointer bg-forest border border-forest-light rounded-xl overflow-hidden hover:border-brand-green hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-green/10 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={study.photos[0]}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <span className="absolute top-4 left-4 text-xs font-bold uppercase tracking-wide text-cream bg-brand-green/90 px-3 py-1 rounded-full">
                  {study.category}
                </span>
              </div>

              <div className="p-7">
                <h3 className="font-display text-3xl font-bold uppercase text-cream mb-1">
                  {study.title}
                </h3>
                <p className="text-xs font-semibold text-brand-green mb-4">{study.brand}</p>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {study.description}
                </p>
                <div className="flex flex-wrap gap-6 pt-5 border-t border-forest-light">
                  {study.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-display text-2xl font-bold text-cream">
                        {m.value}
                      </div>
                      <div className="text-muted text-[10px] uppercase tracking-wide">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Gallery Modal */}
      {activeStudy && (
        <div
          className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={closeGallery}
        >
          <button
            onClick={closeGallery}
            className="absolute top-6 right-6 text-cream hover:text-brand-green transition-colors"
          >
            <X size={32} />
          </button>

          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeStudy.photos[photoIndex]}
              alt={activeStudy.title}
              className="w-full max-h-[75vh] object-contain rounded-lg"
            />

            <button
              onClick={prevPhoto}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-ink/60 hover:bg-brand-green text-cream rounded-full p-2 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-ink/60 hover:bg-brand-green text-cream rounded-full p-2 transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            <div className="text-center mt-4">
              <h3 className="font-display text-2xl font-bold uppercase text-cream">
                {activeStudy.title}
              </h3>
              <p className="text-muted text-sm mt-1">
                {photoIndex + 1} / {activeStudy.photos.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Brands wall */}
      <section className="bg-forest py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center mb-16">
          <span className="font-body text-sm font-bold uppercase tracking-widest text-brand-green animate-fade-in-up inline-block">
            Trusted By
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase text-cream mt-3 leading-[0.95] animate-fade-in-up delay-1">
            Brands We Have <span className="text-brand-green">Worked With</span>
          </h2>
          <div className="w-24 h-1.5 bg-signal-yellow mx-auto mt-6 animate-scale-x delay-2" />
        </div>

        <div className="relative">
          <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] w-max">
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="flex flex-col items-center justify-center gap-2 bg-cream rounded-lg h-32 w-56 shrink-0 px-6 hover:scale-110 hover:shadow-xl hover:shadow-brand-green/20 transition-all duration-300"
              >
                <img
                  src={`https://logo.clearbit.com/${brand.domain}`}
                  alt={brand.name}
                  className="max-h-12 w-auto object-contain"
                />
                <span className="font-body text-xs font-semibold uppercase tracking-wide text-ink text-center">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-forest to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-forest to-transparent" />
        </div>
      </section>
    </div>
  )
}

export default Clients