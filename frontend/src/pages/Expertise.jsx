import React from 'react'

export default function Expertise(){
  const areas = [
    'Corporate & Commercial',
    'Mergers & Acquisitions',
    'Litigation & Dispute Resolution',
    'Arbitration',
    'Intellectual Property',
    'Employment & Labour',
    'Tax & Regulatory'
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-6">Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {areas.map(a=> (
          <div key={a} className="p-4 bg-white rounded-lg shadow-sm">
            <div className="font-medium">{a}</div>
            <div className="text-sm text-slate-600 mt-2">Brief description about {a} practice area and typical services offered.</div>
          </div>
        ))}
      </div>
    </div>
  )
}
