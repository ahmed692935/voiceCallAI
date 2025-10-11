// import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Top Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
          {/* 🟦 Column 1 */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4">
              Voice<span className="text-blue-500"> AI</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Empowering businesses with intelligent AI agents to automate,
              connect, and grow in the digital era.
            </p>
          </div>

          {/* 🟩 Column 2 */}
          <div className="">
            <h3 className="text-lg font-semibold text-white mb-3">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Updates
                </a>
              </li>
            </ul>
          </div>

          {/* 🟨 Column 3 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-blue-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* 🟥 Column 4 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Line */}
        <div className="text-center text-sm text-gray-500 pt-6">
          © {currentYear} voice agents. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
