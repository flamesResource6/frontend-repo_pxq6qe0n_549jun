import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

const Hero = ({ onPrimaryCta }) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-950" />
      <div className="relative min-h-[70vh] md:min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full grid md:grid-cols-12 gap-8">
          <div className="md:col-span-7">
            <p className="inline-flex items-center text-amber-400/90 text-xs md:text-sm font-semibold tracking-wide uppercase bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-4 backdrop-blur-sm">Consulting • India • ROI-Focused</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Book a 30‑Minute Strategy Call and Unlock Faster Growth
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-slate-200/90 max-w-2xl">
              Senior consultants for Indian businesses. Clear ROI, fast execution, and decisions backed by data. Limited slots Monday–Friday, 9am–5pm IST.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button onClick={onPrimaryCta} className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-amber-500 text-slate-900 font-semibold shadow-[0_10px_30px_rgba(245,158,11,0.35)] hover:bg-amber-400 transition">
                Book Your Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <a href="#faq" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 border border-white/10 text-white font-semibold hover:bg-white/15 transition">
                Questions? Read FAQ
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-xs text-slate-300/80">
              <span>Avg. response <strong className="text-white">under 2 mins</strong> via chat</span>
              <span>•</span>
              <span><strong className="text-white">No prepayment</strong> required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
