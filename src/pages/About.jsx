import SectionHeading from '../components/SectionHeading'

const leaders = [
  {
    photo: null, // import photo yahan jab ready ho, jaise: import founderPhoto from '../assets/ravi.jpg'
    placeholderLabel: 'Founder 1',
    name: 'Ravi Boparai',
    role: 'Founder & Director',
    bio: 'Ravi comes with 14+ years of experience in the Indian sports industry. Expert in sports events, on-ground activations, grassroots development, school sports programmes, and brand experience creation. Ravi has built a strong reputation for translating global sports properties and brand objectives into impactful, executionally flawless campaigns in the Indian market.',
  },
  {
    photo: null,
    placeholderLabel: 'Director 1',
    name: 'Arnold Wilson',
    role: 'Director',
    bio: 'Arnold is a seasoned business development and marketing leader with extensive experience in the sports and entertainment industry. Across a career spanning almost 2 decades, Arnold has worked closely with entities such as the Premier League, LaLiga, NBA, Unilever, Arsenal FC, Manchester City FC, Red Bull, Decathlon, adidas, Diageo, Kingfisher, Carlsberg, DHL and the Indian Super League — successfully leading commercial strategies, securing marquee partnerships and developing new IPs.',
  },
]

function About() {
  return (
    <div className="bg-ink">
      {/* About TSEC section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <SectionHeading
          eyebrow="Who We Are"
          title="About TSEC"
        />
        <div className="max-w-3xl space-y-5 text-muted text-base leading-relaxed">
          <p>
            TSEC is a full-service sports marketing and experiential agency that
            connects brands with passionate audiences through sports, entertainment,
            and culture.
          </p>
          <p>
            We have partnered with multiple brands across industries — from FMCG and
            automotive to tech and lifestyle — delivering campaigns and experiences
            across some of the biggest sports properties in the world, including the
            ISL, Premier League, LaLiga, UEFA Champions League, UFC, and Formula 1.
          </p>
          <p>
            Our reach extends across 15+ cities in India and multiple international
            destinations, with proven capabilities in grassroots community programmes,
            large-scale fan events, stadium activations, BTL/ATL campaigns, and curated
            VIP experiences.
          </p>
          <p className="text-cream font-semibold">
            From concept to execution, we are a single-window partner for brands
            looking to leverage sports and entertainment.
          </p>
        </div>
      </section>

      {/* Leadership section */}
      <section className="bg-forest py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Meet The Team"
            title="Leadership"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="group bg-forest-light rounded-lg overflow-hidden border border-brand-green/20 hover:border-brand-green hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-green/10 transition-all duration-500"
              >
                {/* Photo placeholder frame */}
                <div className="aspect-[4/3] bg-ink/40 border-b border-brand-green/20 flex items-center justify-center overflow-hidden">
                  {leader.photo ? (
                    <img
                      src={leader.photo}
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <span className="font-display text-2xl uppercase tracking-wide text-muted group-hover:scale-105 group-hover:text-brand-green transition-all duration-500">
                      {leader.placeholderLabel}
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-cream uppercase">
                    {leader.name}
                  </h3>
                  <p className="font-body text-sm font-semibold uppercase tracking-wide text-brand-green mb-3">
                    {leader.role}
                  </p>
                  <p className="text-muted text-sm leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About