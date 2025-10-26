import React from 'react'
import { Link } from 'react-router-dom'

// Dummy data
const teamMembers = [
  { name: 'Adv. Bhardwaj Kulkarni', position: 'Founder', image: 'https://via.placeholder.com/150' },
  { name: 'Adv. Siddarth Desarda', position: 'bhai 2 Founder', image: 'https://via.placeholder.com/150' },
  { name: 'Adv. Yukta Yadav', position: 'Partner', image: 'https://via.placeholder.com/150' }
]

const expertiseList = [
  { title: 'Corporate', text: 'Corporate advisory, M&A, compliance, commercial contracts.' },
  { title: 'Litigation', text: 'Civil, commercial and regulatory litigation across courts.' },
  { title: 'Arbitration', text: 'Domestic & international arbitration and dispute resolution.' }
]

export default function Main() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[400px]">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" 
          alt="Hero" 
          className="w-full h-full object-cover"
        />
        <Link 
          to="/contact" 
          className="absolute bottom-10 right-10 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
        >
          Get in Touch
        </Link>
      </section>

      {/* About Summary */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-gray-700 mb-4">
          August Law House provides strategic legal advice with practical solutions. We are committed to trusted advocacy across multiple sectors and jurisdictions...
        </p>
        <Link 
          to="/about" 
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Read More
        </Link>
      </section>

      {/* Team Members */}
      <section className="bg-gray-50 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6 w-64 text-center hover:shadow-lg transition">
              <img src={member.image} alt={member.name} className="w-32 h-32 mx-auto rounded-full mb-4 object-cover" />
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Major Expertise */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Major Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {expertiseList.map((exp, idx) => (
            <div key={idx} className="p-6 bg-white rounded-lg shadow-sm border border-transparent hover:border-indigo-600 hover:shadow-lg transition cursor-pointer">
              <h3 className="font-semibold mb-2 text-indigo-700">{exp.title}</h3>
              <p className="text-gray-600 text-sm">{exp.text}</p>
            </div>
          ))}
        </div>
        <Link to="/expertise" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
          View More
        </Link>
      </section>
    </main>
  )
}
