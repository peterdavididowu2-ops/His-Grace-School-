/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  HelpCircle, 
  BookOpen, 
  Calendar, 
  Clock, 
  AlertCircle, 
  ArrowRight,
  FileText,
  BadgeAlert
} from 'lucide-react';

export default function AdmissionsView() {
  const steps = [
    {
      num: '01',
      title: 'Obtain Application Form',
      desc: 'Purchase the application form from the school administrative office at Agbugburu Village, Odeda, Abeokuta. (Online registration coming soon in Phase 3).'
    },
    {
      num: '02',
      title: 'Schedule Entrance Screening',
      desc: 'All primary and secondary applicants will undergo a written entrance examination in Mathematics, English Language, and general critical thinking.'
    },
    {
      num: '03',
      title: 'Interview & Documents Audit',
      desc: 'Parents and candidates attend an interactive chat session with the Principal. Please submit previous terminal reports and birth certificates.'
    },
    {
      num: '04',
      title: 'Admission Offer & Onboarding',
      desc: 'Successful candidates receive an official Admission Offer Letter. Secure placement by paying the first-term tuition and uniforms deposit.'
    }
  ];

  const requirements = [
    {
      level: 'Nursery Requirements',
      items: [
        'Photocopy of Candidate’s Birth Certificate (National Population Commission preferred)',
        'Immunization clearance record showing complete basic vaccines',
        'Two (2) recent passport-sized photographs of the child',
        'One (1) recent passport-sized photograph of each parent/guardian'
      ]
    },
    {
      level: 'Primary Requirements',
      items: [
        'Photocopy of Candidate’s Birth Certificate',
        'Certified academic report cards from the applicant’s previous nursery/primary school',
        'Two (2) recent passport photographs of the pupil',
        'Letter of good conduct from previous headteacher'
      ]
    },
    {
      level: 'Secondary Requirements',
      items: [
        'Photocopy of Candidate’s Birth Certificate',
        'Official primary school leaving certificate or continuous assessment record',
        'Excellent score in His Grace Entrance Screening Examination',
        'Transfer certificate (for applicants transferring mid-term from other secondary schools)'
      ]
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-secondary uppercase block mb-1">
            Enrolling Now
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary uppercase tracking-tight">
            Admissions Procedures
          </h1>
          <p className="mt-4 text-gray-500 leading-relaxed">
            Welcome to the gateway of academic excellence. We operate a fair, merit-based admission policy, ensuring your child is placed appropriately for optimal study.
          </p>
        </div>

        {/* 1. Steps Roadmap */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-primary uppercase text-center tracking-tight mb-12">
            The Admission Roadmap
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((st) => (
              <div 
                key={st.num}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 relative overflow-hidden"
              >
                <span className="absolute -top-4 -right-2 text-6xl font-extrabold text-black/5 select-none font-mono">
                  {st.num}
                </span>
                <span className="inline-flex h-8 w-8 items-center justify-center bg-[#fef3c7] text-[#92400e] text-sm font-bold rounded-lg mb-4">
                  {st.num}
                </span>
                <h3 className="font-bold text-primary text-base mb-2">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Requirements Cards Grid */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-primary uppercase text-center tracking-tight mb-12">
            Placement Requirements
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {requirements.map((req) => (
              <div 
                key={req.level}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-primary uppercase tracking-tight border-b border-gray-100 pb-3 mb-4">
                    {req.level}
                  </h3>
                  <ul className="space-y-3">
                    {req.items.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3 text-sm text-gray-600">
                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-6 mt-6 border-t border-gray-50 text-xs text-gray-400">
                  <span>His Grace Admissions Board</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Online Application Placeholder Card (Phase 3 Note) */}
        <div className="max-w-4xl mx-auto bg-amber-50 border border-[#fef3c7] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-secondary text-white text-[10px] font-bold px-6 py-1.5 uppercase tracking-widest transform rotate-45 translate-x-6 translate-y-2">
            Upcoming
          </div>
          <FileText className="h-12 w-12 text-secondary mx-auto mb-4" />
          
          <h3 className="text-2xl font-bold text-[#92400e] uppercase tracking-tight">
            E-Admission Portal Coming Soon
          </h3>
          <p className="text-sm font-medium text-[#b45309] mt-0.5 mb-4">
            Phase 3 System Release Integration
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-6">
            In our next phase, parents will be able to complete enrollment registration, upload candidate birth certs, make secure payments via card, and print screening passes entirely from home!
          </p>

          <div className="inline-flex items-center space-x-2 bg-white/80 border border-amber-100 px-4 py-2 rounded-xl text-xs text-[#92400e] font-semibold">
            <BadgeAlert className="h-4 w-4 shrink-0" />
            <span>Currently, please visit the physical campus for forms and screenings.</span>
          </div>
        </div>

      </div>
    </div>
  );
}
