import React from 'react'

export default function Expertise() {
  const areas = [
    {
      title: 'Corporate and Commercial',
      description:
        'Corporate governance, commercial contracts, business structuring, and transactional advisory for companies, startups and organisations.'
    },
    {
      title: 'Mergers, Acquisitions and Investments',
      description:
        'End-to-end support across mergers, acquisitions, joint ventures, private equity and investment transactions.'
    },
    {
      title: 'Dispute Resolution and Investigations',
      description:
        'Litigation across civil, commercial and regulatory matters, along with arbitration, white-collar issues, internal investigations and compliance-related disputes.'
    },
    {
      title: 'Technology, Data and Digital Advisory',
      description:
        'Advisory relating to technology law, platform governance, privacy, cybersecurity, artificial intelligence and digital compliance.'
    },
    {
      title: 'Intellectual Property',
      description:
        'Trademark, copyright and design protection, licensing, infringement actions and brand strategy advisory.'
    },
    {
      title: 'Employment and Labour',
      description:
        'Employment documentation, HR policies, workplace practices, compliance issues, compensation structures and labour law matters.'
    },
    {
      title: 'Tax and Regulatory Advisory',
      description:
        'Direct and indirect tax advisory, regulatory interpretation, compliance support and cross-sector regulatory guidance.'
    },
    {
      title: 'Real Estate and Construction',
      description:
        'Property transactions, drafting, due diligence, leasing, land-related disputes and construction documentation.'
    },
    {
      title: 'Public Policy and Government Affairs',
      description:
        'Policy advisory, regulatory strategy, government liaison support, ESG-linked advisory and broader public law issues.'
    },
    {
      title: 'Private Wealth and Personal Legal Advisory',
      description:
        'Estate planning, succession, private wealth structuring and family office related advisory.'
    },
    {
      title: 'Social Impact, Human Rights and Child Rights Practice',
      description:
        'Legal support for NGOs and social enterprises, rights-based litigation, governance assistance and child protection advisory.'
    },
    {
      title: 'Startup and New-Firm Incubation Support',
      description:
        'End-to-end legal assistance for early-stage companies, including incorporation, founders’ agreements, shareholding structures, investment readiness, documentation and compliance guidance.'
    }
  ]

  return (
    <div className="container mx-auto px-6 py-16">
      {/* Page Heading */}
      <div className="max-w-3xl mb-10">
        <h2 className="text-3xl font-semibold mb-3">Expertise</h2>
        <p className="text-slate-700">
          August Law House offers legal services across advisory, transactional,
          regulatory and dispute resolution matters. Our practice is designed to
          support both focused legal requirements and broader strategic needs.
        </p>
      </div>

      {/* Expertise Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {areas.map((area, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg border border-slate-200 hover:border-indigo-600 hover:shadow-md transition"
          >
            <h3 className="text-lg font-medium mb-2 text-indigo-700">
              {area.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {area.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
