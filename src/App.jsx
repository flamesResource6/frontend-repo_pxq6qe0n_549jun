import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Booking from './components/Booking'
import Chatbot from './components/Chatbot'
import FinalCTA from './components/FinalCTA'

function App() {
  const scrollToBooking = (e) => {
    if (e) e.preventDefault()
    const el = document.querySelector('#booking')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-slate-950/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500" />
            <span className="font-semibold">India Strategy</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#benefits" className="hover:text-white">Benefits</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#social-proof" className="hover:text-white">Proof</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#booking" className="px-3 py-1.5 rounded-lg bg-amber-500 text-black font-semibold">Book</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero onPrimaryCta={scrollToBooking} />
        <Benefits />
        <Features />
        <Testimonials />
        <FAQ />
        <Booking />
        <FinalCTA onPrimaryCta={scrollToBooking} />
      </main>

      <footer className="py-8 text-center text-slate-400 text-sm bg-slate-950 border-t border-white/5">
        © {new Date().getFullYear()} India Strategy Advisors. All rights reserved.
      </footer>

      <Chatbot />
    </div>
  )
}

export default App
