import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ColorAnalysis from './pages/ColorAnalysis';
import Recommendations from './pages/Recommendations';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const devAuthBypass = import.meta.env.VITE_DEV_AUTH_BYPASS === 'true';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  if (devAuthBypass) {
    return <>{children}</>;
  }

  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <Navigate to="/" replace />
      </SignedOut>
    </>
  );
}

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-rose-50 to-teal-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/color-analysis"
              element={
                <ProtectedRoute>
                  <ColorAnalysis />
                </ProtectedRoute>
              }
            />
            <Route
              path="/recommendations"
              element={
                <ProtectedRoute>
                  <Recommendations />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </ClerkProvider>
  );
}

export default App;