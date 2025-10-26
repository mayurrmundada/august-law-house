import React from 'react'

export default function People(){
  const team = [
    { name: 'Adv. Bhardwaj Kulkarni', role: 'Founding Partner', bio: 'Experienced Data Protection and Compliance', img: '' },
    { name: 'Adv. Siddharth Desarda', role: 'Founding Partner', bio: 'Experienced litigator in commercial disputes.', img: 'https://images.unsplash.com/photo-1545996124-9b2c0d9f1d9e?q=80&w=800&auto=format&fit=crop' },
    { name: 'Adv. Yukta Yadav', role: 'Partner', bio: 'Experienced in Real Estate.', img: 'https://images.unsplash.com/photo-1545996124-9b2c0d9f1d9e?q=80&w=800&auto=format&fit=crop' }
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
