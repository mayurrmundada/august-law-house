import React, { useState } from 'react'

const peopleData = [
  {
    name: 'Siddharth Desarda',
    role: 'Principal Counsel',
    location: 'Pune, India',
    image: 'https://via.placeholder.com/150',
    bio: 'Siddharth is a Principal Counsel at August Law House and is based in Pune. His work focuses on litigation, advisory and strategic legal planning, with particular emphasis on structured legal analysis and rights-based matters.'
  },
  {
    name: 'Bhardwaj Kulkarni',
    role: 'Principal Counsel',
    location: 'Mumbai, India',
    image: 'https://via.placeholder.com/150',
    bio: 'Bhardwaj serves as a Principal Counsel at August Law House and works from Mumbai. His areas of practice include commercial litigation and regulatory advisory, with particular emphasis on clarity, preparation and consistent legal reasoning.'
  },
  {
    name: 'Pranit Lohiya',
    role: 'Industrial Practice Executive',
    location: 'Pune, India',
    image: 'https://via.placeholder.com/150',
    bio: 'Pranit supports internal coordination and external engagement across the firm, ensuring matters progress efficiently and in a structured manner.'
  },
  {
    name: 'Tanoj Joshi',
    role: 'Counsel',
    location: 'Mumbai, India',
    image: 'https://via.placeholder.com/150',
    bio: 'Tanoj contributes to drafting, research and organised handling of matters across litigation and advisory practice areas.'
  },
  {
    name: 'Parimal Wagh',
    role: 'Counsel',
    location: 'Pune, India',
    image: 'https://via.placeholder.com/150',
    bio: 'Parimal focuses on research, drafting and assisting in the structured progression of matters across the firm.'
  },
  {
    name: 'Bhushan Walunj',
    role: 'Counsel',
    location: 'Pune, India',
    image: 'https://via.placeholder.com/150',
    bio: 'Bhushan supports case preparation, legal research and drafting across litigation and advisory assignments.'
  },
  {
    name: 'Rahul Elummalai',
    role: 'Counsel',
    location: 'Pune, India',
    image: 'https://via.placeholder.com/150',
    bio: 'Rahul contributes to litigation and advisory work with focus on structured execution and research.'
  },
  {
    name: 'Ritik Madnani',
    role: 'Counsel',
    location: 'Indore, India',
    image: 'https://via.placeholder.com/150',
    bio: 'Ritik assists in drafting, research and orderly management of matters across the firm.'
  },
  {
    name: 'Mayur Mundada',
    role: 'Digital Architecture Consultant',
    location: 'Pune, India',
    image: 'https://via.placeholder.com/150',
    bio: 'Mayur oversees digital systems, online presence and technical infrastructure supporting the firm’s operations.'
  }
]

export default function People() {
  const [active, setActive] = useState(null)

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-semibold mb-10">Our Team</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {peopleData.map((p, i) => (
          <div
            key={i}
            onClick={() => setActive(p)}
            className="cursor-pointer bg-white p-6 rounded-lg border hover:shadow-md transition"
          >
            <img src={p.image} alt={p.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h3 className="font-medium text-lg text-center">{p.name}</h3>
            <p className="text-sm text-center text-slate-600">{p.role}</p>
            <p className="text-xs text-center text-slate-500">{p.location}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {active && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white max-w-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{active.name}</h3>
            <p className="text-sm text-slate-600 mb-4">{active.role} · {active.location}</p>
            <p className="text-slate-700">{active.bio}</p>
            <button
              onClick={() => setActive(null)}
              className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
