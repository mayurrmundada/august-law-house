import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState(null)

  // Backend URL from environment variable (Vercel)
  const BACKEND_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000'

  async function submit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', phone: '', message: '' })
      } else {
        setStatus('error')
        console.error(data)
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form onSubmit={submit} className="space-y-4">
          <input
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
            className="w-full p-3 border rounded-md"
            required
          />
          <input
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            placeholder="Email"
            className="w-full p-3 border rounded-md"
            type="email"
            required
          />
          <input
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
            placeholder="Phone (optional)"
            className="w-full p-3 border rounded-md"
          />
          <textarea
            value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })}
            placeholder="Message"
            className="w-full p-3 border rounded-md"
            rows={6}
            required
          />
          <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md">
            Send Message
          </button>
          {status === 'sending' && <div className="text-sm text-slate-500">Sending...</div>}
          {status === 'sent' && (
            <div className="text-sm text-green-600">
              Message sent — we will contact you shortly.
            </div>
          )}
          {status === 'error' && (
            <div className="text-sm text-red-600">
              There was an error sending your message. Please try later.
            </div>
          )}
        </form>
        <div>
          <h3 className="font-medium">Office</h3>
          <p className="text-sm text-slate-600">Freshia Apartments, Baner, Maharashtra, India</p>
          <p className="text-sm text-slate-600 mt-2">Phone: +91 92633</p>
          <p className="text-sm text-slate-600 mt-2">
            Email:{' '}
            <a href="mailto:info@augustlawhouse" className="text-indigo-600">
              info@augustlawhouse
            </a>
          </p>
          <div className="mt-4 h-40 bg-slate-100 flex items-center justify-center">
            [Map placeholder]
          </div>
        </div>
      </div>
    </div>
  )
}
