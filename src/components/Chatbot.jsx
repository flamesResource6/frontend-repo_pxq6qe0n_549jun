import { useEffect, useMemo, useRef, useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || ''

const Chatbot = () => {
  const [open, setOpen] = useState(false)
  const [pending, setPending] = useState(false)
  const [input, setInput] = useState('')
  const [error, setError] = useState('')
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        "Hi! I'm the BL Consultants assistant. Ask me about our services (Executive Search, Permanent/Temporary Staffing, Head Hunting, Mass Recruitment, Contract-to-Hire), our values, or how we work.",
    },
  ])

  const listRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const el = listRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, open])

  const canChat = useMemo(() => Boolean(BACKEND_URL), [])

  const sendMessage = async () => {
    if (!input.trim() || pending) return
    setError('')
    const userMsg = { role: 'user', content: input.trim() }
    setMessages((m) => [...m, userMsg])
    setInput('')
    setPending(true)
    try {
      if (!canChat) throw new Error('Backend URL not configured')
      const res = await fetch(`${BACKEND_URL}/api/blc/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg.content }),
      })
      if (!res.ok) {
        const txt = await res.text()
        throw new Error(txt || `Request failed (${res.status})`)
      }
      const data = await res.json()
      const answer = data?.answer || 'Sorry, I could not find an answer.'
      setMessages((m) => [
        ...m,
        { role: 'assistant', content: answer },
      ])
    } catch (e) {
      setError('Unable to get an answer right now. Please try again.')
    } finally {
      setPending(false)
    }
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 h-12 w-12 rounded-full bg-amber-500 text-black font-semibold shadow-xl hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400"
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        {open ? '×' : '💬'}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-20 right-5 z-50 w-[360px] max-w-[92vw] rounded-2xl border border-white/10 bg-slate-900 shadow-2xl overflow-hidden">
          <div className="p-3 border-b border-white/10 bg-slate-900/70 backdrop-blur flex items-center justify-between">
            <div className="text-sm">
              <div className="font-semibold text-white">BL Consultants Assistant</div>
              <div className="text-xs text-slate-400">Ask anything about our company and services</div>
            </div>
            <span className="text-xs text-slate-400">AI</span>
          </div>

          <div ref={listRef} className="h-80 overflow-y-auto p-3 space-y-3 bg-slate-950/40">
            {messages.map((m, i) => (
              <div key={i} className={`text-sm leading-relaxed ${m.role === 'assistant' ? 'text-slate-200' : 'text-slate-100'}`}>
                <div className={`max-w-[90%] rounded-xl px-3 py-2 shadow ${
                  m.role === 'assistant' ? 'bg-slate-800/80 border border-white/5' : 'bg-amber-500 text-black'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {pending && (
              <div className="text-sm text-slate-400">Typing…</div>
            )}
            {error && (
              <div className="text-xs text-red-400">{error}</div>
            )}
          </div>

          <div className="p-3 border-t border-white/10 bg-slate-900/70 backdrop-blur">
            {!canChat && (
              <div className="mb-2 text-xs text-amber-300">
                Chat backend not configured. Set VITE_BACKEND_URL in your environment.
              </div>
            )}
            <div className="flex items-end gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                rows={1}
                placeholder="Type your question…"
                className="flex-1 resize-none rounded-lg bg-slate-800/70 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || pending || !canChat}
                className="px-3 py-2 rounded-lg bg-amber-500 text-black text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot
