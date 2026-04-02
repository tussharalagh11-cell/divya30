'use client'
import { useState } from 'react'

export default function EmailForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [msg, setMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.includes('@')) {
      setStatus('error')
      setMsg('Please enter a valid email address.')
      return
    }

    setStatus('loading')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
        setMsg('Something went wrong. Try again.')
      }
    } catch {
      setStatus('error')
      setMsg('Something went wrong. Try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-3 py-6">
        <div className="w-10 h-10 rounded-full border border-[#d4a832] flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2.5 8L6.5 12L13.5 4" stroke="#d4a832" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <p className="font-body text-[#a8c4a8] text-sm tracking-wide text-center">
          You're on the list. We'll be in touch.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
      <p className="font-body text-[rgba(255,255,255,0.35)] text-[11px] tracking-[0.18em] uppercase text-center">
        Be first to know when we launch
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={e => { setEmail(e.target.value); setStatus('idle') }}
          placeholder="your@email.com"
        />
        <button type="submit" className="btn-gold" disabled={status === 'loading'}>
          {status === 'loading' ? 'Joining...' : 'Notify Me'}
        </button>
      </div>
      {status === 'error' && (
        <p className="text-red-400 text-xs text-center font-body">{msg}</p>
      )}
    </form>
  )
}
