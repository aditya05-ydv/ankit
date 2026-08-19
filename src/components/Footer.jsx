import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import logo from '../assets/logo-svg.svg'

function Footer() {
  return (
    <footer className="bg-forest border-t border-forest-light">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={logo} alt="TSEC Logo" className="h-8 w-auto" />
            <h3 className="font-display text-2xl font-bold text-cream">TSEC</h3>
          </div>
          <p className="text-muted text-sm leading-relaxed">
            The Sports & Entertainment Company — connecting brands with passionate
            audiences through sports, entertainment, and culture.
          </p>
        </div>

        <div>
          <h4 className="font-body text-sm font-bold uppercase tracking-wide text-brand-green mb-4">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2">
            <li><Link to="/about" className="text-muted hover:text-cream text-sm">About</Link></li>
            <li><Link to="/services" className="text-muted hover:text-cream text-sm">Services</Link></li>
            <li><Link to="/clients" className="text-muted hover:text-cream text-sm">Clients</Link></li>
            <li><Link to="/contact" className="text-muted hover:text-cream text-sm">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-body text-sm font-bold uppercase tracking-wide text-brand-green mb-4">
            Get in Touch
          </h4>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2 text-muted text-sm">
              <Mail size={16} /> hello@tsec.co.in
            </li>
            <li className="flex items-center gap-2 text-muted text-sm">
              <Phone size={16} /> +91 00000 00000
            </li>
            <li className="flex items-center gap-2 text-muted text-sm">
              <MapPin size={16} /> India
            </li>
          </ul>
          
        </div>
      </div>

      <div className="border-t border-forest-light py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} TSEC. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer