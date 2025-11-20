import { useEffect, useMemo, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

function formatDateInput(d) {
  const yyyy = d.getFullYear()
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${yyyy}-${mm}-${dd}`
}

function isWeekend(d) {
  const day = d.getDay() // 0=Sun 6=Sat
  return day === 0 || day === 6
}

const Booking = () => {
  const [date, setDate] = useState(() => {
    const now = new Date()
    // If weekend, move to next Monday
    let d = new Date(now)
    while (isWeekend(d)) {
      d.setDate(d.getDate() + 1)
    }
    return formatDateInput(d)
  })
  const [slots, setSlots] = useState([])
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', notes: '' })
  const [selected, setSelected] = useState('')
  const [status, setStatus] = useState(null)

  const minDate = useMemo(() => formatDateInput(new Date()), [])

  useEffect(() => {
    const run = async () => {
      setLoading(true)
      try {
        const res = await fetch(`${BACKEND}/api/availability?date=${date}`)
        const data = await res.json()
        setSlots(data?.slots || [])
      } catch (e) {
        console.error(e)
        setSlots([])
      } finally {
        setLoading(false)
      }
    }
    if (date) run()
  }, [date])

  const book = async (e) => {
    e.preventDefault()
    if (!selected) return
    setStatus('booking')
    try {
      const res = await fetch(`${BACKEND}/api/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          notes: form.notes,
          date: date,
          time: selected,
        })
      })
      if (!res.ok) throw new Error('Failed')
      const data = await res.json()
      setStatus('confirmed')
    } catch (e) {
      console.error(e)
      setStatus('error')
    }
  }

  return (
    <section id="booking" className="py-14 md:py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-white text-2xl md:text-3xl font-bold">Book Your Consultation</h2>
        <p className="mt-2 text-slate-300">30-minute slots • Monday–Friday • 9:00–17:00 IST</p>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <label className="block text-sm text-slate-300 mb-2">Choose a date</label>
            <input type="date" min={minDate} value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-slate-800 text-white rounded-lg px-3 py-2 border border-white/10" />

            <div className="mt-4">
              <p className="text-sm text-slate-300 mb-2">Available times (IST)</p>
              {loading ? (
                <p className="text-slate-400 text-sm">Loading...</p>
              ) : slots.length === 0 ? (
                <p className="text-slate-400 text-sm">No slots available on this date. Please choose another day.</p>
              ) : (
                <div className="grid grid-cols-3 gap-2">
                  {slots.map((s) => (
                    <button key={s} onClick={() => setSelected(s)} className={`px-3 py-2 rounded-lg border text-sm ${selected === s ? 'bg-amber-500 text-black border-amber-500' : 'bg-slate-800 text-white border-white/10 hover:bg-slate-700'}`}>
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <form onSubmit={book} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <div className="grid grid-cols-1 gap-3">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Full name</label>
                <input required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="w-full bg-slate-800 text-white rounded-lg px-3 py-2 border border-white/10" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Email</label>
                <input required type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} className="w-full bg-slate-800 text-white rounded-lg px-3 py-2 border border-white/10" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Phone (optional)</label>
                <input value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} className="w-full bg-slate-800 text-white rounded-lg px-3 py-2 border border-white/10" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Notes (optional)</label>
                <textarea rows="3" value={form.notes} onChange={(e)=>setForm({...form, notes:e.target.value})} className="w-full bg-slate-800 text-white rounded-lg px-3 py-2 border border-white/10" />
              </div>
            </div>
            <button disabled={!selected || status==='booking'} className="mt-4 w-full px-4 py-3 rounded-xl bg-amber-500 text-black font-semibold disabled:opacity-60">
              {status==='booking' ? 'Booking…' : selected ? `Confirm ${date} • ${selected} IST` : 'Select a time'}
            </button>
            {status==='confirmed' && (
              <p className="mt-3 text-green-400 text-sm">Your call is confirmed. A confirmation has been recorded.</p>
            )}
            {status==='error' && (
              <p className="mt-3 text-red-400 text-sm">This slot was just taken or an error occurred. Please try another.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Booking
