import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/clerk-react';

const devAuthBypass = import.meta.env.VITE_DEV_AUTH_BYPASS;

const Navbar = () => {
  const location = useLocation();

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

  const AuthenticatedLinks = () => (
    <>
      <Link to="/color-analysis" className={navLinkClass('/color-analysis')}>
        Color Analysis
      </Link>
      <Link to="/recommendations" className={navLinkClass('/recommendations')}>
        Recommendations
      </Link>
      {!devAuthBypass && <UserButton afterSignOutUrl="/" />}
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
            >
              <Sparkles className="h-8 w-8" />
              <span className="text-xl font-semibold">SeasonOfYou</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {devAuthBypass ? (
              <AuthenticatedLinks />
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;