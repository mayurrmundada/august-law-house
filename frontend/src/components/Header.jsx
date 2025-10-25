import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">A</div>
          <div>
            <div className="font-semibold">August Law House</div>
            <div className="text-xs text-slate-500">Advocates & Legal Consultants</div>
          </div>
        </Link>
        <nav className="hidden md:flex gap-4 items-center">
          <Link to="/about" className="text-sm text-slate-700 hover:text-indigo-600">About</Link>
          <Link to="/expertise" className="text-sm text-slate-700 hover:text-indigo-600">Expertise</Link>
          <Link to="/people" className="text-sm text-slate-700 hover:text-indigo-600">People</Link>
          <Link to="/resources" className="text-sm text-slate-700 hover:text-indigo-600">Resources</Link>
          <Link to="/careers" className="text-sm text-slate-700 hover:text-indigo-600">Careers</Link>
          <Link to="/contact" className="text-sm text-slate-700 hover:text-indigo-600">Contact</Link>
        </nav>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

function MobileMenu(){
  const [open, setOpen] = React.useState(false)
  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="p-2 border rounded-md">Menu</button>
      {open && (
        <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md p-4 w-44">
          <Link to="/about" className="block py-1">About</Link>
          <Link to="/expertise" className="block py-1">Expertise</Link>
          <Link to="/people" className="block py-1">People</Link>
          <Link to="/resources" className="block py-1">Resources</Link>
          <Link to="/careers" className="block py-1">Careers</Link>
          <Link to="/contact" className="block py-1">Contact</Link>
        </div>
      )}
    </div>
  )
}
