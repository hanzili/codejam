import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, History } from 'lucide-react';
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/clerk-react';

const devAuthBypass = import.meta.env.VITE_DEV_AUTH_BYPASS === 'true';

const Navbar = () => {
  const AuthenticatedLinks = () => (
    <>
      <Link to="/color-analysis" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
        Color Analysis
      </Link>
      <Link to="/recommendations" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
        Recommendations
      </Link>
      <Link to="/history" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
        <History className="h-4 w-4 inline-block mr-1" />
        History
      </Link>
      {!devAuthBypass && <UserButton afterSignOutUrl="/" />}
    </>
  );

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-rose-500" />
              <span className="text-xl font-semibold text-gray-800">StyleSage</span>
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