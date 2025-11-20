import { ArrowRight } from 'lucide-react'

const FinalCTA = ({ onPrimaryCta }) => (
  <section className="py-14 md:py-20 bg-gradient-to-b from-slate-900 to-slate-950">
    <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
      <h2 className="text-white text-2xl md:text-3xl font-bold">Ready to move fast and win?</h2>
      <p className="mt-2 text-slate-300">Grab a 30‑minute slot this week. No obligations — just clarity.</p>
      <div className="mt-6">
        <a href="#booking" onClick={onPrimaryCta} className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-amber-500 text-slate-900 font-semibold shadow-[0_10px_30px_rgba(245,158,11,0.35)] hover:bg-amber-400 transition">
          Book Your Consultation
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
)

export default FinalCTA
