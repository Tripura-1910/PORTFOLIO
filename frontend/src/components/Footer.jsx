import React from "react";
import {
  
  
  ExternalLink,
  
 
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-cyan-500/20 bg-black">
      {/* Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-1/4 bottom-0 h-40 w-40 rounded-full bg-pink-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 py-20">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm tracking-[4px] uppercase">
              SAMUEL T THOMAS(SYNAX LABS)
            </span>

            <h3 className="mt-6 text-4xl font-black">
              <span className="text-white">BUILDING THE</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                FUTURE OF DIGITAL
              </span>
            </h3>

            <p className="mt-6 max-w-xl text-gray-400 leading-relaxed">
              Creating AI-powered applications, scalable platforms,
              automation systems, and immersive web experiences
              engineered for the next generation of businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold tracking-wider uppercase">
              Navigation
            </h4>

            <ul className="mt-6 space-y-4">
              {[
                
                "About",
                "Skills",
                "Projects",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="group flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition"
                  >
                    {item}
                    <ExternalLink 
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold tracking-wider uppercase">
              Connect
            </h4>

            <div className="mt-6 space-y-4">
              <a
                href="mailto:samueltthomas2002@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition"
              >
                <FaEnvelope size={18} />
                Email
              </a>

              <a
                href="tel:+917902901032"
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition"
              >
                <FaPhone size={18} />
                Call
              </a>

              <a
                href="https://github.com/Tripura-1910"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition"
              >
                <FaGithub size={18} />
                GitHub
              </a>

              <a
                href="http://linkedin.com/in/samuel-t-thomas-a7807439a/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition"
              >
                <FaLinkedin  size={18} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Neon Divider */}
        <div className="relative mt-16">
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-px w-32 bg-cyan-400 blur-sm" />
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} SYNAX LABS.
              All rights reserved.
            </p>
          </div>

   
        </div>
      </div>
    </footer>
  );
};

export default Footer;