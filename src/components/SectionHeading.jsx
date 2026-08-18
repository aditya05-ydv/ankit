function SectionHeading({ eyebrow, title, subtitle, light = false }) {
  return (
    <div className="max-w-4xl mb-16">
      {eyebrow && (
        <div className="flex items-center gap-3 mb-5 animate-fade-in-up">
          <div className="w-8 h-0.5 bg-brand-green" />
          <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold uppercase text-cream leading-[0.95] mb-6 animate-fade-in-up delay-1">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted text-lg leading-relaxed max-w-2xl animate-fade-in-up delay-2">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeading