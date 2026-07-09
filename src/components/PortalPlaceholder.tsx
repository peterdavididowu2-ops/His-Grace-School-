/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Calendar, 
  Award, 
  ShieldCheck, 
  Clock, 
  Database,
  Calculator,
  UserCheck,
  FileSpreadsheet,
  ArrowLeft,
  Settings
} from 'lucide-react';
import { Page } from '../types';

interface PortalPlaceholderProps {
  portalType: 'student' | 'teacher' | 'admin';
  setCurrentPage: (page: Page) => void;
}

export default function PortalPlaceholder({ portalType, setCurrentPage }: PortalPlaceholderProps) {
  const getPortalDetails = () => {
    switch (portalType) {
      case 'student':
        return {
          title: 'Student Portal',
          motto: 'Your Academic Companion',
          icon: <GraduationCap className="h-12 w-12 text-[#d97706]" />,
          description: 'A dedicated dashboard for students and parents to stay synchronized with assignments, results, attendance, and fee status.',
          features: [
            { icon: <BookOpen className="h-5 w-5 text-primary" />, title: 'Assignment Board', desc: 'Download and submit assignments directly online.' },
            { icon: <Award className="h-5 w-5 text-primary" />, title: 'Report Cards', desc: 'Access end-of-term results and performance progress analytics.' },
            { icon: <Calendar className="h-5 w-5 text-primary" />, title: 'Timetables & Exams', desc: 'View up-to-date daily class and examination schedules.' },
            { icon: <Clock className="h-5 w-5 text-primary" />, title: 'Attendance Logs', desc: 'Monitor daily attendance records and classroom participation.' },
          ]
        };
      case 'teacher':
        return {
          title: 'Teacher Portal',
          motto: 'Empowering Educators',
          icon: <Users className="h-12 w-12 text-[#d97706]" />,
          description: 'The digital workstation for His Grace academic staff. Grade assessments, compile lesson plans, and communicate with parents seamlessly.',
          features: [
            { icon: <UserCheck className="h-5 w-5 text-primary" />, title: 'Grade Book Manager', desc: 'Record and compile student marks for continuous assessments.' },
            { icon: <FileSpreadsheet className="h-5 w-5 text-primary" />, title: 'E-Lesson Notes', desc: 'Upload, review, and submit weekly lesson plans for approval.' },
            { icon: <Users className="h-5 w-5 text-primary" />, title: 'Class Registers', desc: 'Take roll calls and record daily attendance indicators dynamically.' },
            { icon: <Settings className="h-5 w-5 text-primary" />, title: 'Parent Broadcasts', desc: 'Send announcements and progress updates directly to parent dashboards.' },
          ]
        };
      case 'admin':
        return {
          title: 'Administrator Portal',
          motto: 'Institutional Control & Operations',
          icon: <ShieldCheck className="h-12 w-12 text-[#d97706]" />,
          description: 'The administrative command center. Configure academic terms, audit tuition accounts, manage payroll, and oversee admissions.',
          features: [
            { icon: <Database className="h-5 w-5 text-primary" />, title: 'Student Directory', desc: 'Secure repository for all nursery, primary, and secondary student bio-data.' },
            { icon: <Calculator className="h-5 w-5 text-primary" />, title: 'Tuition & Auditing', desc: 'Track payment histories, issue receipts, and manage billing accounts.' },
            { icon: <Users className="h-5 w-5 text-primary" />, title: 'Staff Directory & Payroll', desc: 'Oversee academic staff records, permissions, and salary allocations.' },
            { icon: <Settings className="h-5 w-5 text-primary" />, title: 'Term Configurations', desc: 'Define academic calendars, session terms, classes, and subjects.' },
          ]
        };
    }
  };

  const details = getPortalDetails();

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Navigation back button */}
        <button
          onClick={() => setCurrentPage('home')}
          className="inline-flex items-center text-sm font-medium text-primary hover:text-[#d97706] mb-8 group transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Back to Public Home
        </button>

        {/* Portal Jumbotron */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 sm:p-12 shadow-md border border-gray-100 text-center relative overflow-hidden"
        >
          {/* Decorative Corner Ribbon */}
          <div className="absolute top-0 right-0 bg-[#d97706] text-white text-xs font-bold px-8 py-2 uppercase tracking-widest transform rotate-45 translate-x-7 translate-y-3 shadow-sm">
            Phase 3
          </div>

          <div className="inline-flex p-4 bg-accent rounded-2xl mb-6 shadow-inner">
            {details.icon}
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary uppercase tracking-tight">
            {details.title}
          </h1>
          <p className="text-sm font-semibold text-secondary tracking-widest uppercase mt-1 mb-4">
            {details.motto}
          </p>
          <p className="max-w-2xl mx-auto text-gray-500 leading-relaxed text-base">
            {details.description}
          </p>

          <div className="mt-8 inline-flex items-center space-x-2 px-4 py-2 bg-[#fef3c7] text-[#92400e] text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d97706] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#d97706]"></span>
            </span>
            <span>Coming Soon — Under Development</span>
          </div>
        </motion.div>

        {/* Portal Expected Modules Section */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-primary mb-6 text-center uppercase tracking-wider">
            Expected Portal Modules
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {details.features.map((feat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-start space-x-4 hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-2.5 bg-accent rounded-xl shrink-0">
                  {feat.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-primary text-base">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA to return */}
        <div className="text-center mt-12">
          <button
            onClick={() => setCurrentPage('home')}
            className="px-6 py-3 bg-primary hover:bg-opacity-95 text-white font-medium text-sm rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Return to Homepage
          </button>
        </div>
      </div>
    </div>
  );
}
