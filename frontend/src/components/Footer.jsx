import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-slate-50 border-t mt-12">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between">
        <div>
          <div className="font-semibold">August Law House</div>
          <div className="text-sm text-slate-600">Advocates & Legal Consultants</div>
          <div className="text-sm text-slate-500 mt-2">© {new Date().getFullYear()} August Law House. All rights reserved.</div>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="text-sm text-slate-600">Registered Office:</div>
          <div className="text-sm text-slate-500">123 Legal Avenue, Mumbai, Maharashtra, India</div>
        </div>
      </div>
    </footer>
  )
}
