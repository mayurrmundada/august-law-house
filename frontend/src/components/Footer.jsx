import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10">
        
        {/* Top Footer */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              August Law House
            </h3>
            <p className="text-sm text-gray-400">
              Boutique legal practice offering advisory, transactional and
              dispute resolution services.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-2">
              Connect
            </h4>
            <div className="flex gap-4 text-sm">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-400 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-400 transition"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6" />

        {/* BCI Declaration */}
        <div className="text-xs text-gray-400 leading-relaxed space-y-3">
          <p className="font-semibold text-gray-300">
            Disclaimer
          </p>
          <p>
            As per the rules of the Bar Council of India, we are not permitted to
            solicit work and advertise. By accessing this website, the user
            acknowledges that they are seeking information of their own accord
            and that there has been no form of solicitation, advertisement or
            inducement by August Law House or its members.
          </p>
          <p>
            The content of this website is for informational purposes only and
            should not be interpreted as legal advice. August Law House shall not
            be liable for any consequence of any action taken by the user relying
            on the information provided on this website.
          </p>
        </div>

        {/* Bottom Footer */}
        <div className="mt-6 text-xs text-gray-500 text-center">
          © {new Date().getFullYear()} August Law House. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
