'use client'
import Image from 'next/image'
import EmailForm from '@/components/EmailForm'

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: '#091a0e' }}>

      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute rounded-full" style={{ width: 700, height: 700, top: -250, left: -200, background: 'radial-gradient(circle, rgba(26,97,38,0.35) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="absolute rounded-full" style={{ width: 500, height: 500, bottom: -150, right: -150, background: 'radial-gradient(circle, rgba(212,168,50,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="absolute rounded-full" style={{ width: 350, height: 350, top: '45%', right: '15%', background: 'radial-gradient(circle, rgba(17,53,25,0.4) 0%, transparent 70%)', filter: 'blur(30px)' }} />

        <svg className="absolute animate-spin-slow" style={{ top: -80, right: -80, width: 520, height: 520, opacity: 0.06 }} viewBox="0 0 520 520">
          {[0,30,60,90,120,150,180,210,240,270,300,330].map((a, i) => (
            <ellipse key={i} cx="260" cy="90" rx="22" ry="62" fill="white" transform={`rotate(${a} 260 260)`} />
          ))}
        </svg>
        <svg className="absolute animate-spin-reverse" style={{ bottom: -60, left: -60, width: 340, height: 340, opacity: 0.05 }} viewBox="0 0 340 340">
          {[0,45,90,135,180,225,270,315].map((a, i) => (
            <ellipse key={i} cx="170" cy="55" rx="16" ry="48" fill="#d4a832" transform={`rotate(${a} 170 170)`} />
          ))}
        </svg>

        <svg className="absolute animate-leaf" style={{ top: '18%', left: '7%', width: 72, height: 72, opacity: 0.07 }} viewBox="0 0 72 72">
          <path d="M36 5 C56 20,64 44,36 67 C8 44,16 20,36 5Z" fill="white"/>
          <line x1="36" y1="8" x2="36" y2="64" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
        </svg>
        <svg className="absolute animate-float" style={{ top: '52%', right: '8%', width: 52, height: 52, opacity: 0.06, animationDelay: '2.5s' }} viewBox="0 0 52 52">
          <path d="M26 4 C40 14,46 30,26 48 C6 30,12 14,26 4Z" fill="#d4a832"/>
        </svg>
        <svg className="absolute animate-leaf" style={{ top: '28%', right: '4%', width: 38, height: 38, opacity: 0.05, animationDelay: '5s' }} viewBox="0 0 38 38">
          <path d="M19 3 C30 11,34 22,19 35 C4 22,8 11,19 3Z" fill="white"/>
        </svg>
        <svg className="absolute animate-float-slow" style={{ bottom: '22%', left: '5%', width: 44, height: 44, opacity: 0.05, animationDelay: '1s' }} viewBox="0 0 44 44">
          <path d="M22 3 C34 13,38 25,22 41 C6 25,10 13,22 3Z" fill="#d4a832"/>
        </svg>

        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '52px 52px', opacity: 0.012 }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 75% 65% at 50% 50%, transparent 25%, rgba(9,26,14,0.65) 100%)' }} />
      </div>

      {/* ── Nav ── */}
      <nav className="relative z-10 flex items-center justify-between px-8 md:px-16 pt-8 pb-4 hidden-start animate-fade-in d1">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Kaami Naturalz"
            width={160}
            height={160}
            className="w-20 h-20 object-contain"
            priority
          />
        </div>
        <div className="hidden md:flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#d4a832] animate-pulse" />
          <span className="font-body text-[#d4a832] text-[11px] tracking-[0.18em] uppercase font-light">Launching Soon</span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 md:px-12 py-16 md:py-24">

        <div className="flex items-center gap-4 mb-8 hidden-start animate-fade-up d2">
          <div className="divider-gold w-10" />
          <span className="font-body text-[#d4a832] text-[10px] tracking-[0.28em] uppercase font-light">From Nature · For All Living Things</span>
          <div className="divider-gold w-10" />
        </div>

        <h1 className="text-center mb-6 hidden-start animate-fade-up d3" style={{ lineHeight: 0.92 }}>
          <span className="block font-display font-light text-white" style={{ fontSize: 'clamp(56px,9vw,118px)', letterSpacing: '-0.01em' }}>Something</span>
          <span className="block font-display" style={{ fontSize: 'clamp(56px,9vw,118px)', letterSpacing: '-0.01em' }}>
            <span className="gold-text font-medium" style={{ fontStyle: 'italic' }}>Pure</span>
            <span className="font-light text-white"> is</span>
          </span>
          <span className="block font-display font-light text-white" style={{ fontSize: 'clamp(56px,9vw,118px)', letterSpacing: '-0.01em' }}>Coming.</span>
        </h1>

        <p className="font-body text-center font-light leading-relaxed max-w-lg mt-8 mb-6 hidden-start animate-fade-up d4"
          style={{ color: 'rgba(200,224,200,0.7)', fontSize: 'clamp(15px,1.8vw,18px)' }}>
          Clean, plant-based care rooted in the botanical wisdom of India —
          crafted for pets, homes, and every living thing you love.
        </p>

        <div className="divider-gold w-20 my-6 hidden-start animate-fade-up d4" />

        <div className="w-full max-w-md hidden-start animate-fade-up d5">
          <EmailForm />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-10 hidden-start animate-fade-up d6">
          {[
            { label: 'Pet Grooming', active: true },
            { label: 'Pet Wellness', active: false },
            { label: 'Home & Living', active: false },
            { label: 'Personal Care', active: false },
          ].map(cat => (
            <div key={cat.label} className={`pill ${cat.active ? 'pill-active' : 'pill-inactive'}`}>
              {cat.active && <span className="w-1.5 h-1.5 rounded-full bg-[#d4a832]" />}
              {cat.label}
              {!cat.active && <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.18)' }}>Soon</span>}
            </div>
          ))}
        </div>

        <p className="font-body text-[10px] tracking-[0.22em] uppercase mt-14 hidden-start animate-fade-up d7"
          style={{ color: 'rgba(255,255,255,0.2)' }}>
          Rooted in India · Made for Canada
        </p>
      </div>

      {/* ── Footer ── */}
      <footer className="relative z-10 px-8 md:px-16 py-6 hidden-start animate-fade-in d8"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[11px] tracking-wide" style={{ color: 'rgba(255,255,255,0.18)' }}>
            © 2025 Kaami Naturalz. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://instagram.com/kaaminaturalz" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 footer-link">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
              <span className="font-body text-[11px] tracking-[0.12em] uppercase">@kaaminaturalz</span>
            </a>
            <a href="mailto:tussharalagh11@gmail.com"
              className="flex items-center gap-2 footer-link">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span className="font-body text-[11px] tracking-[0.12em] uppercase">Contact</span>
            </a>
          </div>
        </div>
      </footer>

    </main>
  )
}
