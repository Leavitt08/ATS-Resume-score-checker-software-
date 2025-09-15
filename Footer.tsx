import React from 'react';
import { Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="text-center">
          {/* Author Info */}
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
            Created by{' '}
            <span className="font-semibold text-gray-900">Leavitt Nathan</span> —{' '}
            <span className="text-blue-600">AI Engineer & Business Technology Enthusiast</span>
          </p>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6">
            
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/leavitt-nathan-b88489347"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 text-gray-600 hover:text-[#0077B5] transition-all duration-300 transform hover:scale-105 touch-manipulation"
              aria-label="Visit Leavitt Nathan's LinkedIn profile"
            >
              <div className="relative">
                <Linkedin className="h-6 w-6 sm:h-7 sm:w-7 transition-all duration-300 group-hover:drop-shadow-lg" />
                <ExternalLink className="h-3 w-3 absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-sm sm:text-base">LinkedIn</span>
            </a>

            {/* Email */}
            <a
              href="mailto:leavittnathan008@gmail.com"
              className="group flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-all duration-300 transform hover:scale-105 touch-manipulation"
              aria-label="Send email to Leavitt Nathan"
            >
              <Mail className="h-6 w-6 sm:h-7 sm:w-7 transition-all duration-300 group-hover:drop-shadow-lg group-hover:animate-pulse" />
              <span className="text-sm sm:text-base">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
