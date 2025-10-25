import React from 'react'

export default function Resources(){
  const posts = [
    { id: 1, title: 'Recent changes in corporate law', date: '2025-04-01', excerpt: 'Summary of important amendments.' },
    { id: 2, title: 'Arbitration trends in India', date: '2025-02-14', excerpt: 'Best practices for dispute resolution.' }
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-6">Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map(p=> (
          <article key={p.id} className="p-4 bg-white rounded-lg shadow-sm">
            <div className="text-sm text-slate-500">{p.date}</div>
            <h3 className="font-medium mt-2">{p.title}</h3>
            <p className="text-slate-600 mt-2">{p.excerpt}</p>
            <div className="mt-3 text-sm text-indigo-600">Download PDF →</div>
          </article>
        ))}
      </div>
    </div>
  )
}
