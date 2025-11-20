import { useEffect } from 'react'

/*
  n8n chatbot embed
  Replace N8N_CHAT_URL with your deployed n8n chatbot widget URL.
  For Gemini via n8n: build a workflow exposing a webchat widget and set the endpoint below.
*/
const CHAT_URL = import.meta.env.VITE_N8N_CHAT_URL || ''

const Chatbot = () => {
  useEffect(() => {
    if (!CHAT_URL) return
    // Example generic widget embed using iframe; replace with your n8n widget script if available
    const iframe = document.createElement('iframe')
    iframe.src = CHAT_URL
    iframe.style.position = 'fixed'
    iframe.style.bottom = '20px'
    iframe.style.right = '20px'
    iframe.style.width = '360px'
    iframe.style.height = '560px'
    iframe.style.border = '1px solid rgba(255,255,255,0.1)'
    iframe.style.borderRadius = '16px'
    iframe.style.boxShadow = '0 10px 30px rgba(0,0,0,0.4)'
    iframe.style.background = 'white'
    iframe.style.zIndex = '50'
    iframe.allow = 'microphone;'

    document.body.appendChild(iframe)
    return () => iframe.remove()
  }, [])

  return null
}

export default Chatbot
