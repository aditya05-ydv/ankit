import SectionHeading from '../components/SectionHeading'

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
  },
  {
    brand: 'Heineken',
    title: 'UCL Final Screening 24-25',
    category: 'Events & IPs',
    description:
      'Premium UEFA Champions League Final viewing experience at JW Marriott Juhu with celebrity presence (Bhaichung Bhutia, Varun Thakur), a VIP lounge, and complimentary Heineken F&B.',
    metrics: [{ value: '250+', label: 'Fans in Attendance' }],
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
  },
  {
    brand: 'Premier League',
    title: 'Meet & Greet with Michael Owen',
    category: 'Events & IPs',
    description:
      'Exclusive fan meet-and-greet with Premier League legend Michael Owen — career insights, trophy photo ops, live trivia, and strong turnout from supporters\' clubs.',
    metrics: [{ value: '200+', label: 'Fans (OSC Exclusive Seating)' }],
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
  },
  {
    brand: 'Parimatch Sports',
    title: 'Experiences and Events',
    category: 'Experiences & Premium Hospitality',
    description:
      'Premium sports, lifestyle and entertainment experiences for Parimatch Sports\' VIP clients — loyalty programmes covering luxury travel, match access, and hospitality.',
    metrics: [{ value: '2,000+', label: 'VIPs Served To Date' }],
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
  return (
    <div className="bg-ink">
      {/* Case Studies */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <SectionHeading
          eyebrow="Our Work"
          title="Select Case Studies"
          subtitle="From stadium activations to VIP experiences — a look at how we bring brands to life through sport."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="group bg-forest border border-forest-light rounded-xl p-6 hover:border-brand-green hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-green/10 transition-all duration-500"
            >
              <span className="text-xs font-bold uppercase tracking-wide text-brand-green">
                {study.category}
              </span>
              <h3 className="font-display text-2xl font-bold uppercase text-cream mt-2 mb-1">
                {study.title}
              </h3>
              <p className="text-xs font-semibold text-muted mb-4">{study.brand}</p>
              <p className="text-muted text-sm leading-relaxed mb-5">
                {study.description}
              </p>
              <div className="flex flex-wrap gap-4 pt-4 border-t border-forest-light">
                {study.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="font-display text-xl font-bold text-cream">
                      {m.value}
                    </div>
                    <div className="text-muted text-[10px] uppercase tracking-wide">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brands wall */}
      <section className="bg-forest py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <span className="font-body text-sm font-bold uppercase tracking-widest text-brand-green animate-fade-in-up inline-block">
            Trusted By
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase text-cream mt-3 leading-[0.95] animate-fade-in-up delay-1">
            Brands We Have <span className="text-brand-green">Worked With</span>
          </h2>
          <div className="w-24 h-1.5 bg-signal-yellow mx-auto mt-6 animate-scale-x delay-2" />
        </div>

        {/* Infinite scrolling marquee */}
        <div className="relative">
          <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] w-max">
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="flex items-center justify-center bg-cream rounded-lg h-28 w-56 shrink-0 px-6 hover:scale-110 hover:shadow-xl hover:shadow-brand-green/20 transition-all duration-300"
              >
                <img
                  src={`https://logo.clearbit.com/${brand.domain}`}
                  alt={brand.name}
                  className="max-h-14 w-auto object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'block'
                  }}
                />
                <span className="hidden font-display text-lg font-bold uppercase text-ink text-center leading-tight">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>

          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-forest to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-forest to-transparent" />
        </div>
      </section>
    </div>
  )
}

export default Clients