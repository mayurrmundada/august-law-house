import React from 'react'
import { Link } from 'react-router-dom'

// Team preview (Home page only)
const teamMembers = [
  {
    name: 'Adv. Bhardwaj Kulkarni',
    position: 'Principal Counsel',
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Adv. Siddharth Desarda',
    position: 'Principal Counsel',
    image: 'https://via.placeholder.com/150'
  }
]

// Major expertise highlights
const expertiseList = [
  {
    title: 'Corporate and Commercial',
    text: 'Corporate governance, commercial contracts, business structuring and transactional advisory.'
  },
  {
    title: 'Dispute Resolution',
    text: 'Civil, commercial and regulatory litigation, arbitration and investigations.'
  },
  {
    title: 'Technology and Digital Advisory',
    text: 'Technology law, data protection, platform governance and digital compliance.'
  }
]

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[420px]">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
          alt="August Law House"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <Link
          to="/contact"
          className="absolute bottom-10 right-10 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
        >
          Get in Touch
        </Link>
      </section>

      {/* About Summary */}
      <section className="max-w-4xl mx-auto px-6 py-14 text-center">
        <h1 className="text-3xl font-semibold mb-4">
          August Law House
        </h1>
        <p className="text-slate-700 mb-6 leading-relaxed">
          August Law House is a boutique legal practice offering advisory,
          transactional and dispute resolution services. The firm focuses on
          providing clear, practical legal guidance supported by structured
          decision making and consistent client engagement.
        </p>
        <Link
          to="/about"
          className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Read More
        </Link>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-14">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Team
        </h2>

        <div className="flex flex-wrap justify-center gap-6 px-6">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-sm p-6 w-64 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="font-medium text-lg">{member.name}</h3>
              <p className="text-sm text-slate-600">{member.position}</p>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-10 text-center">
          <Link
            to="/people"
            className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            View Full Team
          </Link>
        </div>
      </section>

      {/* Major Expertise */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-10">
          Our Major Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {expertiseList.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-lg border border-slate-200 hover:border-indigo-600 hover:shadow-md transition"
            >
              <h3 className="font-medium mb-2 text-indigo-700">
                {exp.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {exp.text}
              </p>
            </div>
          ))}
        </div>

        <Link
          to="/expertise"
          className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          View All Practice Areas
        </Link>
      </section>
    </main>
  )
}
