const testimonials = [
  {
    quote: 'We closed our largest enterprise deal within 6 weeks. The playbook was plug-and-play.',
    name: 'VP Sales, SaaS (Bengaluru)'
  },
  {
    quote: 'Their automation saved us ~₹1.3 Cr annually. Paid for itself in month one.',
    name: 'COO, D2C (Delhi NCR)'
  },
  {
    quote: 'Crystal-clear communication. Zero fluff. Our board loved the outcomes.',
    name: 'CEO, Finserv (Mumbai)'
  }
]

const Testimonials = () => (
  <section id="social-proof" className="py-14 md:py-20 bg-slate-950">
    <div className="max-w-7xl mx-auto px-6 md:px-10">
      <h2 className="text-white text-2xl md:text-3xl font-bold">Trusted by Indian Leaders</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {testimonials.map(t => (
          <div key={t.name} className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <p className="text-slate-200">“{t.quote}”</p>
            <p className="mt-4 text-sm text-slate-400">{t.name}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex items-center gap-6 opacity-80">
        <img src="https://dummyimage.com/100x30/fff/aaa&text=ISO+27001" className="h-6"/>
        <img src="https://dummyimage.com/100x30/fff/aaa&text=SOC2" className="h-6"/>
        <img src="https://dummyimage.com/100x30/fff/aaa&text=DPIIT" className="h-6"/>
      </div>
    </div>
  </section>
)

export default Testimonials
