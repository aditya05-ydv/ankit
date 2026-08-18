import { useLocation } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'

const services = [
  {
    id: 'brand-solutions',
    title: 'Brand Solutions',
    description:
      'TSEC delivers high-impact on-ground activations and marketing campaigns for leading brands across India. With deep expertise in stadium activations, BTL/ATL campaigns, and mall activations, we bring brands to life where audiences are most engaged. Our proven capability to execute across 15+ cities — managing everything from venue procurement, authority liaisons, permits, and vendor coordination to creative production and real-time execution — makes us a trusted partner for brands seeking pan-India scale and seamless delivery.',
    capabilities: [
      'Stadium Activations',
      'Mall Activations',
      'Vendor Coordination',
      'Creative Production',
      'BTL/ATL Campaigns',
      'Authority Liaison & Permits',
      'Pan-India Execution',
    ],
    metrics: [
      { value: '12,000+', label: 'Primary Fans Activated' },
      { value: '15+', label: 'Cities' },
    ],
  },
  {
    id: 'events-ips',
    title: 'Events & IP',
    description:
      'A trusted partner for international sports properties entering India, we deliver end-to-end fan experience solutions across all scales — from premium screenings for 50–60 guests to mass fan events hosting 20,000+ attendees. We have executed projects for brands including Star Sports, the Premier League, Apollo Tyres, and LaLiga, ranging from hosting Manchester United legends for Apollo Tyres to producing India\'s largest Premier League fan festival. Global sports brands rely on us as their on-ground partner to conceptualise, manage, and execute impactful fan engagement experiences.',
    capabilities: [
      'Venue Sourcing & Production',
      'Celebrity Management',
      'Sponsor Integration',
      'Multi-City Execution',
      'IP Ideation',
    ],
    metrics: [
      { value: '100+', label: 'Large-Scale Events' },
      { value: '15+', label: 'Cities Covered' },
      { value: '80,000+', label: 'Fans Reached' },
      { value: '100%', label: 'International Standards' },
    ],
  },
  {
    id: 'community-grassroots',
    title: 'Community & Grassroots',
    description:
      'We help in building sports culture from the ground up for brands looking to deepen engagement in key metros and expand into newer Tier 1 and Tier 2 markets. Enabling brands to create real brand value within communities through school outreach, coaching camps, and grassroots tournaments. Our pan-India capabilities and track record with brands like Gujarat Titans, Premier League, and Apollo Tyres makes us proven partners to deliver events of such scale.',
    capabilities: [
      'School Outreach Programs',
      'Talent Identification',
      'Fan Engagement Activities',
      'Brand Integration',
      'Coaching Camps & Clinics',
      'Community Tournaments',
    ],
    metrics: [
      { value: '25,000+', label: 'Young Athletes Reached' },
      { value: '300+', label: 'Schools & Academies Engaged' },
      { value: '20+', label: 'Cities Covered' },
    ],
  },
  {
    id: 'experiences-vip',
    title: 'Experiences & VIP Hospitality',
    description:
      'TSEC curates bespoke luxury experiences and gifting programmes, spanning international travel, VIP hospitality, sports and lifestyle events, loyalty rewards and handcrafted solutions — delivered end-to-end with white-glove precision and personalised excellence.',
    capabilities: [
      'Curating Client Specific Experiences',
      'VIP Hospitality Services',
      'Event Ticketing',
      'Running HNIs Loyalty Programmes',
      'Bespoke Gifting Solutions',
      'Flight & Accommodation Booking',
      'White-Glove Concierge',
    ],
    metrics: [
      { value: '10+', label: 'International Destinations' },
      { value: '2000+', label: 'VIPs & HNIs Engaged' },
      { value: '50+', label: 'Luxury Dining Events' },
      { value: '15+', label: 'Exclusive Match Screenings' },
    ],
  },
]

function Services() {
  const location = useLocation()
  const activeId = location.hash ? location.hash.replace('#', '') : null

  const servicesToShow = activeId
    ? services.filter((s) => s.id === activeId)
    : services

  return (
    <div className="bg-ink">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <SectionHeading
          eyebrow="What We Do"
          title={activeId ? servicesToShow[0]?.title || 'Our Services' : 'TSEC Service Offerings'}
          subtitle={
            !activeId &&
            'From brand activations to VIP hospitality — a single-window partner for brands looking to leverage sports and entertainment.'
          }
        />

        <div className="flex flex-col gap-16">
          {servicesToShow.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-forest border border-forest-light rounded-xl p-8 md:p-10 hover:border-brand-green/40 transition-all duration-500 scroll-mt-24"
            >
              <div>
                <span className="font-body text-xs font-bold text-brand-green">
                  0{index + 1}
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-bold uppercase text-cream mt-2 mb-4">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="text-xs font-semibold uppercase tracking-wide bg-forest-light text-cream px-3 py-1.5 rounded-full border border-brand-green/20"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center gap-6 bg-ink/40 rounded-lg p-6">
                <span className="font-body text-xs font-bold uppercase tracking-widest text-brand-green">
                  Key Metrics
                </span>
                <div className="grid grid-cols-2 gap-6">
                  {service.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-display text-3xl md:text-4xl font-bold text-cream">
                        {m.value}
                      </div>
                      <div className="text-muted text-xs uppercase tracking-wide mt-1">
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
    </div>
  )
}

export default Services