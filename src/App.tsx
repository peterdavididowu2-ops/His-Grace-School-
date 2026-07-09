/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import AdmissionsView from './components/AdmissionsView';
import ContactView from './components/ContactView';
import PortalPlaceholder from './components/PortalPlaceholder';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Determine if the current page is a portal page (portal pages are self-contained)
  const isPortalPage = currentPage.endsWith('-portal');

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutView />;
      case 'admissions':
        return <AdmissionsView />;
      case 'contact':
        return <ContactView />;
      case 'student-portal':
        return <PortalPlaceholder portalType="student" setCurrentPage={setCurrentPage} />;
      case 'teacher-portal':
        return <PortalPlaceholder portalType="teacher" setCurrentPage={setCurrentPage} />;
      case 'admin-portal':
        return <PortalPlaceholder portalType="admin" setCurrentPage={setCurrentPage} />;
      default:
        return <HomeView setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div id="app-container" className="flex flex-col min-h-screen bg-white">
      {/* Conditionally render Header for public pages */}
      {!isPortalPage && (
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}

      {/* Main Content Area */}
      <main className="flex-grow">
        {renderContent()}
      </main>

      {/* Conditionally render Footer for public pages */}
      {!isPortalPage && (
        <Footer setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
}
