import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">August Law House</h1>
          <p className="text-lg text-slate-700 mb-6">Strategic legal advice. Practical solutions. Trusted advocacy.</p>
          <div className="flex gap-3">
            <Link to="/contact" className="px-4 py-2 bg-indigo-600 text-white rounded-lg">Contact Us</Link>
            <Link to="/expertise" className="px-4 py-2 border rounded-lg">Our Expertise</Link>
          </div>
        </div>
        <div className="rounded-lg bg-gradient-to-tr from-indigo-100 to-white h-64 flex items-center justify-center">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="law" className="max-h-64 rounded-md object-cover" />
        </div>
      </div>

      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Feature title="Corporate" text="Corporate advisory, M&A, compliance, commercial contracts." />
        <Feature title="Litigation" text="Civil, commercial and regulatory litigation across courts." />
        <Feature title="Arbitration" text="Domestic & international arbitration and dispute resolution." />
      </section>
    </div>
  )
}

function Feature({title, text}){ return (
  <div className="p-6 bg-white rounded-lg shadow-sm">
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-sm text-slate-600">{text}</p>
  </div>
)}
