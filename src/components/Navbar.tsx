import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, Menu, X } from 'lucide-react';
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/clerk-react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinkClass = (path: string) => `
    relative px-3 py-2 rounded-md text-sm font-medium transition-colors
    ${isActive(path)
      ? 'text-rose-500'
      : 'text-gray-600 hover:text-gray-900'
    }
    ${isActive(path) && 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-rose-500'}
  `;

  const mobileNavLinkClass = (path: string) => `
    block px-3 py-2 rounded-md text-base font-medium transition-colors
    ${isActive(path)
      ? 'text-rose-500 bg-rose-50'
      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
    }
  `;

  const AuthenticatedLinks = ({ isMobile = false }: { isMobile?: boolean }) => (
    <>
      <Link 
        to="/color-analysis" 
        className={isMobile ? mobileNavLinkClass('/color-analysis') : navLinkClass('/color-analysis')}
        onClick={() => setIsMenuOpen(false)}
      >
        Color Analysis
      </Link>
      <Link 
        to="/recommendations" 
        className={isMobile ? mobileNavLinkClass('/recommendations') : navLinkClass('/recommendations')}
        onClick={() => setIsMenuOpen(false)}
      >
        Recommendations
      </Link>
      <Link 
        to="/history" 
        className={isMobile ? mobileNavLinkClass('/history') : navLinkClass('/history')}
        onClick={() => setIsMenuOpen(false)}
      >
        History
      </Link>
      <UserButton afterSignOutUrl="/" />
    </>
  );

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className={`flex items-center space-x-2 ${
                isActive('/') ? 'text-rose-500' : 'text-gray-800 hover:text-rose-500'
              } transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Sparkles className="h-8 w-8" />
              <span className="text-xl font-semibold">SeasonOfYou</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <SignedIn>
              <AuthenticatedLinks />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-rose-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-rose-600 transition-colors">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          <SignedIn>
            <AuthenticatedLinks isMobile />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="w-full text-left px-3 py-2 text-base font-medium text-rose-500 hover:bg-rose-50 rounded-md transition-colors">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;