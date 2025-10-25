import React from 'react'

export default function BciModal({ onAccept }){
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="max-w-2xl bg-white rounded-2xl shadow-lg p-6 m-4">
        <h2 className="text-2xl font-semibold mb-3">BCI Declaration</h2>
        <p className="mb-4">The rules of the Bar Council of India do not permit advocates to solicit work or advertise. By clicking "I Agree" below, you acknowledge that there has been no solicitation, advertisement, or inducement by the firm. This website is for informational purposes only.</p>
        <ul className="list-disc pl-5 mb-4 text-sm text-slate-600">
          <li>August Law House is managed and staffed by qualified advocates.</li>
          <li>No communication on this site should be construed as legal advice; instruct a lawyer after a conflict check and formal engagement.</li>
        </ul>
        <div className="flex justify-end gap-3">
          <button onClick={() => window.location.replace('about:blank')} className="px-4 py-2 rounded-lg border">Decline</button>
          <button onClick={onAccept} className="px-4 py-2 rounded-lg bg-indigo-600 text-white">I Agree</button>
        </div>
      </div>
    </div>
  )
}
