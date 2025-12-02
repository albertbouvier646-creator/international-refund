
import React, { useState, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './Home';
import Layout from './Layout';
import './index.css';

// Lazy load legal pages
const TermsAndConditions = React.lazy(() => import('./components/legal/TermsAndConditions'));
const PrivacyPolicy = React.lazy(() => import('./components/legal/PrivacyPolicy'));

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'terms':
        return <TermsAndConditions />;
      case 'privacy':
        return <PrivacyPolicy />;
      default:
        return <Home />;
    }
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <Layout currentPage={currentPage} onNavigate={handleNavigate}>
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen bg-slate-50">
          <div className="flex flex-col items-center gap-4">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-slate-500 font-medium">Loading...</p>
          </div>
        </div>
      }>
        {renderPage()}
      </Suspense>
    </Layout>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
