import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  return (
    <div className="bg-ink">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Work Together"
          subtitle="Have a brand you want to bring to life through sports and entertainment? We'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-forest border border-forest-light rounded-xl p-6 flex items-start gap-4 hover:border-brand-green/40 hover:-translate-y-1 transition-all duration-500">
              <div className="bg-brand-green/10 rounded-lg p-3">
                <Mail className="text-brand-green" size={22} />
              </div>
              <div>
                <h4 className="font-body text-sm font-bold uppercase tracking-wide text-cream mb-1">
                  Email
                </h4>
                <p className="text-muted text-sm">hello@tsec.co.in</p>
              </div>
            </div>

            <div className="bg-forest border border-forest-light rounded-xl p-6 flex items-start gap-4 hover:border-brand-green/40 hover:-translate-y-1 transition-all duration-500">
              <div className="bg-brand-green/10 rounded-lg p-3">
                <Phone className="text-brand-green" size={22} />
              </div>
              <div>
                <h4 className="font-body text-sm font-bold uppercase tracking-wide text-cream mb-1">
                  Phone
                </h4>
                <p className="text-muted text-sm">+91 00000 00000</p>
              </div>
            </div>

            <div className="bg-forest border border-forest-light rounded-xl p-6 flex items-start gap-4 hover:border-brand-green/40 hover:-translate-y-1 transition-all duration-500">
              <div className="bg-brand-green/10 rounded-lg p-3">
                <MapPin className="text-brand-green" size={22} />
              </div>
              <div>
                <h4 className="font-body text-sm font-bold uppercase tracking-wide text-cream mb-1">
                  Location
                </h4>
                <p className="text-muted text-sm">India — Operating across 15+ cities</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3 bg-forest border border-forest-light rounded-xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16 animate-fade-in-up">
                <div className="bg-brand-green/10 rounded-full p-4 mb-4">
                  <Send className="text-brand-green" size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold text-cream uppercase mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted text-sm">
                  Thanks for reaching out — our team will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-muted mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-ink border border-forest-light rounded-lg px-4 py-3 text-cream text-sm focus:outline-none focus:border-brand-green transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-muted mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-ink border border-forest-light rounded-lg px-4 py-3 text-cream text-sm focus:outline-none focus:border-brand-green transition-colors"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-muted mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-ink border border-forest-light rounded-lg px-4 py-3 text-cream text-sm focus:outline-none focus:border-brand-green transition-colors"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-muted mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-ink border border-forest-light rounded-lg px-4 py-3 text-cream text-sm focus:outline-none focus:border-brand-green transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-brand-green text-ink font-body font-bold uppercase text-sm px-6 py-3 rounded-md hover:bg-brand-green-dark hover:scale-[1.02] transition-all duration-300"
                >
                  Send Message
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact