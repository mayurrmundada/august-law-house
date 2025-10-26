import React from 'react'

export default function Careers(){
  const openings = [
    { id: 1, title: 'Associate - Litigation', location: 'Mumbai', desc: '3+ years litigation experience.' },
    { id: 2, title: 'Intern - Corporate', location: 'Remote/Hybrid', desc: 'Law students (3rd year+).' }
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-6">Careers</h2>
      <p className="text-slate-700 mb-4">We welcome talented professionals and students. To apply, send your CV and a cover letter to <a href="mailto:careers@augustlawhouse.com" className="text-indigo-600">careers@augustlaw.house</a>.</p>
      <div className="space-y-4">
        {openings.map(o => (
          <div key={o.id} className="p-4 bg-white rounded-lg shadow-sm">
            <div className="flex justify-between">
              <div>
                <div className="font-medium">{o.title}</div>
                <div className="text-sm text-slate-500">{o.location}</div>
              </div>
              <div className="text-sm text-indigo-600">Apply</div>
            </div>
            <p className="text-sm text-slate-600 mt-2">{o.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
