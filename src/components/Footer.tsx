/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { GraduationCap, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', id: 'home' as Page },
    { label: 'About Us', id: 'about' as Page },
    { label: 'Admissions Info', id: 'admissions' as Page },
    { label: 'Contact Us', id: 'contact' as Page },
  ];

  const portals = [
    { label: 'Student Portal', id: 'student-portal' as Page },
    { label: 'Teacher Portal', id: 'teacher-portal' as Page },
    { label: 'Admin Portal', id: 'admin-portal' as Page },
  ];

  const levels = ['Nursery Education', 'Primary Education', 'Secondary Education'];

  const handleLinkClick = (pageId: Page) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-blue text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-gray-800">
          
          {/* Column 1: Brand & Moto */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-xl text-primary">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <span className="text-lg font-bold uppercase tracking-wider text-[#d97706]">
                His Grace School
              </span>
            </div>
            <p className="text-sm text-gray-300 italic font-medium">
              "Molding Lives for Greatness"
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              We provide standard educational instruction integrated with strong moral and character development, preparing children to excel in all areas of life.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold uppercase tracking-wider text-[#d97706] border-b border-gray-800 pb-2">
              Explore Campus
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="group flex items-center text-sm text-gray-400 hover:text-white transition-all duration-150"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 text-[#d97706] transform group-hover:translate-x-1 transition-transform" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Portals & Programs */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold uppercase tracking-wider text-[#d97706] border-b border-gray-800 pb-2">
              School Portals
            </h3>
            <ul className="space-y-2.5 mb-6">
              {portals.map((portal) => (
                <li key={portal.id}>
                  <button
                    onClick={() => handleLinkClick(portal.id)}
                    className="group flex items-center text-sm text-gray-400 hover:text-white transition-all duration-150"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 text-[#d97706] transform group-hover:translate-x-1 transition-transform" />
                    <span>{portal.label}</span>
                  </button>
                </li>
              ))}
            </ul>

            <h3 className="text-base font-semibold uppercase tracking-wider text-[#d97706] border-b border-gray-800 pb-1">
              Academic Levels
            </h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {levels.map((lvl) => (
                <span
                  key={lvl}
                  className="px-2.5 py-1 text-xs bg-gray-900 border border-gray-800 rounded-md text-gray-300"
                >
                  {lvl.split(' ')[0]}
                </span>
              ))}
            </div>
          </div>

          {/* Column 4: Contact info */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold uppercase tracking-wider text-[#d97706] border-b border-gray-800 pb-2">
              Contact Details
            </h3>
            <ul className="space-y-3.5 text-sm text-gray-300">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#d97706] shrink-0 mt-0.5" />
                <span className="leading-relaxed text-gray-400">
                  Agbugburu Village, Odeda Local Government, Abeokuta, Ogun State, Nigeria.
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-[#d97706] shrink-0" />
                <span className="text-gray-400">+234 803 123 4567, +234 815 987 6543</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[#d97706] shrink-0" />
                <span className="text-gray-400">info@hisgraceschools.edu.ng</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-[#d97706] shrink-0" />
                <span className="text-gray-400">Mon - Fri: 7:30 AM - 4:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {currentYear} His Grace School. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0 font-medium">
            Designed for Academic Excellence & Spiritual Growth
          </p>
        </div>
      </div>
    </footer>
  );
}
