import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Kaami Naturalz <onboarding@resend.dev>',
        to: ['tussharalagh11@gmail.com'],
        subject: '🌿 New Waitlist Signup — Kaami Naturalz',
        html: `
          <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; padding: 32px; background: #091a0e; color: #fdfaf3; border-radius: 12px;">
            <div style="margin-bottom: 24px;">
              <p style="font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #d4a832; margin: 0 0 8px;">Kaami Naturalz</p>
              <h1 style="font-size: 22px; font-weight: 400; margin: 0; color: #fdfaf3;">New waitlist signup 🌿</h1>
            </div>
            <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(212,168,50,0.2); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
              <p style="margin: 0; font-size: 13px; color: rgba(255,255,255,0.5); margin-bottom: 4px;">Email address</p>
              <p style="margin: 0; font-size: 16px; color: #d4a832; font-weight: 500;">${email}</p>
            </div>
            <p style="font-size: 12px; color: rgba(255,255,255,0.3); margin: 0;">Submitted via kaaminaturalz.ca waitlist form</p>
          </div>
        `,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Resend error:', err)
      return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
