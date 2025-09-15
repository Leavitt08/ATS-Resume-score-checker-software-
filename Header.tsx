import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Menu, X, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  // Close menu when route changes
  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/upload', label: 'Upload' },
    { path: '/results', label: 'Results' },
    { path: '/about', label: 'About' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 relative z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-lg sm:text-2xl font-bold text-blue-600"
          >
            <FileText className="h-6 w-6 sm:h-8 sm:w-8" />
            <span className="hidden xs:inline">RE-SCAN ATS</span>
            <span className="xs:hidden">RE-SCAN</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-all duration-200"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-40">
          <div className="absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center space-x-2 text-lg font-bold text-blue-600">
                <FileText className="h-6 w-6" />
                <span>RE-SCAN ATS</span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-6 py-3 text-base font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 border-l-4 border-transparent'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Menu Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-gray-50">
              <p className="text-sm text-gray-600 text-center mb-3">
                Created by <span className="font-semibold">Leavitt Nathan</span>
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/leavitt-nathan-b88489347"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-[#0077B5] hover:text-blue-800 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="mailto:leavittnathan008@gmail.com"
                  className="flex items-center space-x-1 text-red-600 hover:text-red-800 transition-colors duration-200"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                  <span className="text-sm">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
