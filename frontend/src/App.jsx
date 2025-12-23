import React, { useState, useEffect } from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import BciModal from './components/BciModal'

import Home from './pages/Home'
import About from './pages/About'
import Expertise from './pages/Expertise'
import People from './pages/People'
import Resources from './pages/Resources'
import Careers from './pages/Careers'
import Contact from './pages/Contact'

export default function App(){
  const [bciAccepted, setBciAccepted] = useState(false)
  useEffect(()=>{
    if (localStorage.getItem('august_bci_accepted') === '1') setBciAccepted(true)
  }, [])

  function handleAccept(){
    localStorage.setItem('august_bci_accepted', '1')
    setBciAccepted(true)
  }

  if (!bciAccepted) return <BciModal onAccept={handleAccept} />

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/expertise" element={<Expertise/>} />
          <Route path="/people" element={<People/>} />
          <Route path="/resources" element={<Resources/>} />
          <Route path="/careers" element={<Careers/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<Navigate to='/' replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

/* import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import People from './pages/People'
import Expertise from './pages/Expertise'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/people" element={<People />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}
 */