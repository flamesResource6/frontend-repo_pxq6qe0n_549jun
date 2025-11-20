const benefits = [
  {
    title: 'Clear ROI',
    desc: 'Every engagement mapped to measurable business outcomes — revenue, cost, or speed.'
  },
  {
    title: 'India-First Expertise',
    desc: 'Local compliance, payments, regional GTM strategies — tuned for Indian markets.'
  },
  {
    title: 'Speed to Value',
    desc: 'We move from plan to pilot in days, not months — without compromising quality.'
  },
  {
    title: 'Executive Communication',
    desc: 'Concise, decision-ready communication for CXOs and business heads.'
  }
]

const Benefits = () => {
  return (
    <section id="benefits" className="py-14 md:py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-white font-semibold text-lg">{b.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
