import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import logo from '../assets/logo_this.png'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  {
    name: 'Services',
    path: '/services',
    subLinks: [
      { name: 'Brand Solutions', path: '/services#brand-solutions' },
      { name: 'Events & IPs', path: '/services#events-ips' },
      { name: 'Community & Grassroots', path: '/services#community-grassroots' },
      { name: 'Experiences & VIP Hospitality', path: '/services#experiences-vip' },
    ],
  },
  { name: 'Clients', path: '/clients' },
  { name: 'Contact', path: '/contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-ink/95 backdrop-blur border-b border-forest-light">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="TSEC Logo" className="h-10 w-auto" />
          <span className="font-display text-2xl font-bold text-cream tracking-wide">TSEC</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.subLinks ? (
              <div key={link.path} className="relative group">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1 font-body text-sm font-semibold uppercase tracking-wide transition-colors ${
                      isActive ? 'text-brand-green' : 'text-muted hover:text-cream'
                    }`
                  }
                >
                  {link.name}
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                </NavLink>

                {/* Dropdown */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                  <div className="bg-forest-light border border-brand-green/20 rounded-lg shadow-xl shadow-black/30 min-w-[260px] overflow-hidden">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="block px-5 py-3 text-sm text-muted hover:text-cream hover:bg-brand-green/10 transition-colors border-b border-forest last:border-b-0"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-body text-sm font-semibold uppercase tracking-wide transition-colors ${
                    isActive ? 'text-brand-green' : 'text-muted hover:text-cream'
                  }`
                }
              >
                {link.name}
              </NavLink>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-cream"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-1 px-6 pb-6">
          {navLinks.map((link) =>
            link.subLinks ? (
              <div key={link.path}>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between py-3 font-body text-sm font-semibold uppercase tracking-wide text-muted"
                >
                  {link.name}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="flex flex-col gap-1 pl-4 pb-2">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        onClick={() => {
                          setIsOpen(false)
                          setMobileServicesOpen(false)
                        }}
                        className="py-2 text-sm text-muted hover:text-cream"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `py-3 font-body text-sm font-semibold uppercase tracking-wide ${
                    isActive ? 'text-brand-green' : 'text-muted'
                  }`
                }
              >
                {link.name}
              </NavLink>
            )
          )}
        </div>
      )}
    </header>
  )
}

export default Navbar