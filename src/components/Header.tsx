/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, GraduationCap, ArrowRight } from 'lucide-react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' as Page },
    { label: 'About Us', id: 'about' as Page },
    { label: 'Admissions', id: 'admissions' as Page },
    { label: 'Contact', id: 'contact' as Page },
  ];

  const portalItems = [
    { label: 'Student Portal', id: 'student-portal' as Page },
    { label: 'Teacher Portal', id: 'teacher-portal' as Page },
    { label: 'Admin Portal', id: 'admin-portal' as Page },
  ];

  const handleNavClick = (pageId: Page) => {
    setCurrentPage(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="bg-primary hover:bg-primary-dark text-white p-2.5 rounded-xl transition-all duration-300 shadow-md group-hover:scale-105">
              <GraduationCap className="h-7 w-7 text-[#d97706]" />
            </div>
            <div>
              <span className="block text-xl font-bold tracking-tight text-primary uppercase">
                His Grace School
              </span>
              <span className="block text-xs font-medium tracking-wider text-secondary uppercase -mt-1">
                Molding Lives for Greatness
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  currentPage === item.id
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-accent hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Separator */}
            <div className="h-6 w-px bg-gray-200 mx-2" />

            {/* Portals Dropdown / Buttons */}
            <div className="flex items-center space-x-1">
              {portalItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg border transition-all duration-200 ${
                    currentPage === item.id
                      ? 'bg-secondary border-secondary text-white shadow-sm'
                      : 'border-gray-200 text-gray-700 hover:border-secondary hover:text-secondary'
                  }`}
                >
                  {item.label.split(' ')[0]}
                </button>
              ))}
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-500 hover:text-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 animate-fadeIn shadow-inner">
          <div className="px-4 pt-4 pb-6 space-y-1.5">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">
              Navigation
            </div>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex w-full items-center px-4 py-3 text-base font-medium rounded-xl transition-all duration-150 ${
                  currentPage === item.id
                    ? 'bg-primary text-white shadow-md'
                    : 'text-gray-600 hover:bg-accent hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="border-t border-gray-100 my-4" />

            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">
              Portals (Coming Soon)
            </div>
            {portalItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex w-full items-center justify-between px-4 py-3 text-sm font-medium rounded-xl border border-gray-100 transition-all duration-150 ${
                  currentPage === item.id
                    ? 'bg-secondary text-white border-secondary'
                    : 'text-gray-700 bg-gray-50 hover:bg-accent hover:border-secondary hover:text-secondary'
                }`}
              >
                <span>{item.label}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
