function SectionHeading({ eyebrow, title, subtitle, light = false }) {
  return (
    <div className="max-w-3xl mb-12">
      {eyebrow && (
        <span className="font-body text-sm font-bold uppercase tracking-widest text-brand-green">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-4xl md:text-5xl font-bold uppercase mt-2 mb-4 ${
          light ? 'text-cream' : 'text-cream'
        }`}
      >
        {title}
      </h2>
      <div className="w-20 h-1 bg-signal-yellow mb-4" />
      {subtitle && (
        <p className="text-muted text-base leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}

export default SectionHeading