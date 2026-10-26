import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import FloatingActions from './components/FloatingActions.jsx';
import ScopingDrawerModal from './components/ScopingDrawerModal.jsx';
import DiagnosticAuditModal from './components/DiagnosticAuditModal.jsx';
import Toast from './components/Toast.jsx';

import HomePage from './pages/HomePage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import TechnicalInsightsPage from './pages/TechnicalInsightsPage.jsx';
import AdminPortalPage from './pages/AdminPortalPage.jsx';

export default function App() {
  // Navigation state: 'home', 'services', 'about-leadership', 'technical-insights', 'admin-portal'
  const [currentPath, setCurrentPath] = useState(() => {
    const hash = window.location.hash.replace('#', '').trim();
    if (['home', 'services', 'about-leadership', 'technical-insights', 'admin-portal'].includes(hash)) {
      return hash;
    }
    return 'home';
  });

  // Modals state
  const [scopingDrawerOpen, setScopingDrawerOpen] = useState(false);
  const [scopingVector, setScopingVector] = useState('');
  const [diagnosticModalOpen, setDiagnosticModalOpen] = useState(false);

  // Toast state
  const [toast, setToast] = useState(null);

  // Sync hash with currentPath
  useEffect(() => {
    window.location.hash = currentPath;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPath]);

  // Handle popstate / hashchange from browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (['home', 'services', 'about-leadership', 'technical-insights', 'admin-portal'].includes(hash)) {
        setCurrentPath(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const showToast = (toastObj) => {
    setToast(toastObj);
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  const handleOpenScoping = (vectorName) => {
    setScopingVector(vectorName || 'Vector Engagement Scope');
    setScopingDrawerOpen(true);
  };

  const handleOpenDiagnostic = () => {
    setDiagnosticModalOpen(true);
  };

  const handleScopingSuccess = (data) => {
    showToast({
      title: 'Scoping Dossier Transmitted',
      message: `Direct review assigned for ${data.vector}. Target turnaround <12 hours.`,
      type: 'success',
    });
  };

  const handleBookingSuccess = (data) => {
    showToast({
      title: 'Consultation Requested',
      message: `Principal architect review requested for ${data.name || data.email}. Calendar link sent.`,
      type: 'success',
    });
  };

  const renderPublicPage = () => {
    switch (currentPath) {
      case 'services':
        return (
          <ServicesPage
            onOpenScoping={handleOpenScoping}
            onOpenDiagnostic={handleOpenDiagnostic}
            onShowToast={showToast}
          />
        );
      case 'about-leadership':
        return (
          <AboutPage
            onOpenDiagnostic={handleOpenDiagnostic}
            onShowToast={showToast}
          />
        );
      case 'technical-insights':
        return (
          <TechnicalInsightsPage
            onShowToast={showToast}
          />
        );
      case 'home':
      default:
        return (
          <HomePage
            onOpenScoping={handleOpenScoping}
            onOpenDiagnostic={handleOpenDiagnostic}
            onShowToast={showToast}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface flex flex-col selection:bg-primary/20 selection:text-primary">
      {/* Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* Scoping Drawer Modal */}
      <ScopingDrawerModal
        isOpen={scopingDrawerOpen}
        serviceName={scopingVector}
        onClose={() => setScopingDrawerOpen(false)}
        onSubmitSuccess={handleScopingSuccess}
      />

      {/* Diagnostic Audit Modal */}
      <DiagnosticAuditModal
        isOpen={diagnosticModalOpen}
        onClose={() => setDiagnosticModalOpen(false)}
        onBookingSuccess={handleBookingSuccess}
      />

      {/* Conditional Layout: Admin Portal has its own dedicated shell */}
      {currentPath === 'admin-portal' ? (
        <AdminPortalPage
          navigate={setCurrentPath}
          onShowToast={showToast}
        />
      ) : (
        <>
          {/* Public Header */}
          <Header
            currentPath={currentPath}
            navigate={setCurrentPath}
            onOpenDiagnostic={handleOpenDiagnostic}
          />

          {/* Main Public Content */}
          <main className="w-full pt-20 bg-background flex-1">
            {renderPublicPage()}
          </main>

          {/* Floating Actions */}
          <FloatingActions
            onOpenDiagnostic={handleOpenDiagnostic}
            onOpenScoping={handleOpenScoping}
          />

          {/* Public Footer */}
          <Footer navigate={setCurrentPath} />
        </>
      )}
    </div>
  );
}
