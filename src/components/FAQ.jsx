const faqs = [
  {
    q: 'What happens on the 30‑minute call?',
    a: 'We clarify goals, constraints, and success metrics. You leave with a 2-3 step action plan.'
  },
  { q: 'Do you work remotely or on‑site?', a: 'Both. We are available across major Indian cities and remote-first.' },
  { q: 'Pricing?', a: 'Transparent project or retainer pricing after scope. No prepayment for the intro call.' },
  { q: 'Can you sign an NDA?', a: 'Yes, we routinely work under NDAs and handle confidential data securely.' },
]

const FAQ = () => (
  <section id="faq" className="py-14 md:py-20 bg-slate-900">
    <div className="max-w-5xl mx-auto px-6 md:px-10">
      <h2 className="text-white text-2xl md:text-3xl font-bold">FAQ</h2>
      <div className="mt-6 space-y-4">
        {faqs.map((f, idx) => (
          <details key={idx} className="group bg-white/5 border border-white/10 rounded-xl p-4">
            <summary className="cursor-pointer text-white font-medium">{f.q}</summary>
            <p className="mt-2 text-slate-300 text-sm">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
)

export default FAQ
