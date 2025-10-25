import React from 'react'

export default function People(){
  const team = [
    { name: 'Adv. Priya Sharma', role: 'Founding Partner', bio: '20+ years in corporate law and arbitration.', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop' },
    { name: 'Adv. Rahul Mehta', role: 'Partner - Litigation', bio: 'Experienced litigator in commercial disputes.', img: 'https://images.unsplash.com/photo-1545996124-9b2c0d9f1d9e?q=80&w=800&auto=format&fit=crop' },
    { name: 'Adv. S. Iyer', role: 'Associate', bio: 'Focus on regulatory and compliance matters.', img: 'https://images.unsplash.com/photo-1545996124-9b2c0d9f1d9e?q=80&w=800&auto=format&fit=crop' }
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-6">People</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {team.map(p => (
          <div key={p.name} className="p-4 bg-white rounded-lg shadow-sm">
            <img src={p.img} alt={p.name} className="h-36 w-full object-cover rounded-md mb-4" />
            <div className="font-medium">{p.name}</div>
            <div className="text-sm text-slate-500">{p.role}</div>
            <p className="text-sm text-slate-600 mt-2">{p.bio}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
