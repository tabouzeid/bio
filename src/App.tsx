import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header, Footer } from './components/layout';
import { FrontPage } from './components/features';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load WorkPage for code splitting
const WorkPage = lazy(() => import('./components/features/WorkPage'));

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      <p className="mt-4 text-gray-600">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Header />
          <main id="main-content">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<FrontPage />} />
                <Route path="/work" element={<WorkPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
