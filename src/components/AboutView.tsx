/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Award, BookOpen, Target, Shield, Heart, Quote, GraduationCap } from 'lucide-react';

export default function AboutView() {
  const coreValues = [
    { title: 'Integrity', desc: 'Speaking the truth and upholding clean moral choices even when no one is watching.', icon: <Shield className="h-5 w-5 text-secondary" /> },
    { title: 'Excellence', desc: 'Striving for distinction in every academic subject, competition, and leadership pursuit.', icon: <Award className="h-5 w-5 text-secondary" /> },
    { title: 'Discipline', desc: 'Upholding self-control, correct comportment, and respect for school regulations.', icon: <BookOpen className="h-5 w-5 text-secondary" /> },
    { title: 'Diligence', desc: 'Consistent effort, hard work, and unwavering commitment to homework and class studies.', icon: <Heart className="h-5 w-5 text-secondary" /> },
    { title: 'Faith & Morality', desc: 'Instilling spiritual values and fear of God as the true foundation of wisdom.', icon: <Target className="h-5 w-5 text-secondary" /> }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-secondary uppercase block mb-1">
            Who We Are
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary uppercase tracking-tight">
            About His Grace School
          </h1>
          <p className="mt-4 text-gray-500 leading-relaxed italic font-medium">
            "Molding Lives for Greatness since inception."
          </p>
        </div>

        {/* 1. History Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-5 text-gray-600 leading-relaxed text-base">
            <h2 className="text-2xl font-bold text-primary uppercase tracking-tight border-l-4 border-secondary pl-3">
              Our Journey & History
            </h2>
            <p>
              His Grace School was established in Abeokuta with a resolute, god-given mandate: to lift the standards of primary and secondary education by producing pupils who are not only intellectually sound but also morally unblemished.
            </p>
            <p>
              What started as a modest vision to provide high-quality nursery education quickly expanded into a complete primary and high school setup, following requests from highly satisfied parents who witnessed the accelerated growth of their wards.
            </p>
            <p>
              Over the years, our students have achieved continuous distinctions in high-stakes regional screenings, science exhibitions, and state level tournaments, securing His Grace's position as a premium model institution in Abeokuta.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=80" 
                alt="His Grace Classroom Study" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* 2. Mission & Vision Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-primary text-white p-8 rounded-3xl border border-primary/20 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
            <Target className="h-10 w-10 text-[#d97706] mb-4" />
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-3">Our Mission</h3>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
              To provide a comprehensive, academically stimulating, and spiritually rich learning experience. We utilize qualified personnel, modern technical resources, and high moral guidelines to discover student talents, molding them into self-reliant, globally competitive leaders.
            </p>
          </div>

          <div className="bg-gray-50 text-gray-800 p-8 rounded-3xl border border-gray-100 relative overflow-hidden">
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/5 rounded-full blur-2xl"></div>
            <Award className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-2xl font-bold uppercase text-primary tracking-tight mb-3">Our Vision</h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              To be the preferred model institution in Ogun State and Nigeria, recognized worldwide for producing top-ranking academic scholars, scientific minds, and ethically upright leaders who transform societies for greatness.
            </p>
          </div>
        </div>

        {/* 3. Core Values */}
        <div className="bg-accent/30 rounded-3xl p-8 sm:p-12 border border-gray-100 mb-20">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h3 className="text-2xl font-bold text-primary uppercase tracking-tight">Our Core Values</h3>
            <p className="text-sm text-gray-500 mt-1">The moral pillar guides every student and staff member at His Grace School.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val) => (
              <div key={val.title} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="p-2 bg-accent rounded-lg inline-block mb-3">
                  {val.icon}
                </div>
                <h4 className="font-bold text-primary text-base uppercase tracking-tight mb-1">{val.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Proprietor Message */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 bg-white">
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-accent aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80" 
                alt="Proprietor Profile Placeholder" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-4 right-4 bg-secondary text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md">
              Office of the Proprietor
            </div>
          </div>
          <div className="lg:col-span-7 space-y-4">
            <Quote className="h-10 w-10 text-secondary" />
            <h3 className="text-2xl font-bold text-primary uppercase tracking-tight">
              A Warm Welcome from Our Proprietor
            </h3>
            <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed italic">
              <p>
                "At His Grace School, we look at every child and see a seed of greatness waiting to be watered and nurtured. We understand that educational qualifications without clean moral morals and discipline will produce incomplete citizens."
              </p>
              <p>
                "That is why our structure is intentionally situated in a quiet village environment in Odeda Local Government, Abeokuta. We exclude distractions and incorporate highly committed, God-fearing teachers to build the academic spirit."
              </p>
              <p>
                "We welcome you to entrust your children into our care, and see them molded into great scientific minds, literature professionals, and captains of industries."
              </p>
            </div>
            <div className="pt-2">
              <p className="font-extrabold text-primary text-base uppercase">Deacon J. A. Adebayo</p>
              <p className="text-xs text-secondary font-bold uppercase tracking-wider">Proprietor & Founder, His Grace School</p>
            </div>
          </div>
        </div>

        {/* 5. School Anthem Card */}
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary to-dark-blue text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-primary/20 text-center relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl"></div>
          
          <GraduationCap className="h-10 w-10 text-secondary mx-auto mb-4" />
          <h3 className="text-2xl font-bold uppercase tracking-wider text-secondary">
            Our School Anthem
          </h3>
          <p className="text-xs uppercase tracking-widest text-gray-300 mt-0.5 mb-8">
            Singing with pride & commitment
          </p>

          <div className="space-y-6 text-sm sm:text-base tracking-wide leading-relaxed font-medium text-gray-200">
            <div>
              <p className="font-semibold text-white uppercase text-xs tracking-wider mb-2">Stanza 1</p>
              <p className="italic">"His Grace School, our home of excellence,"</p>
              <p className="italic">"Molding lives with supreme diligence,"</p>
              <p className="italic">"We rise with faith, we step with grace,"</p>
              <p className="italic">"Greatness is our destiny in every space."</p>
            </div>

            <div className="border-t border-white/10 pt-4">
              <p className="font-semibold text-[#d97706] uppercase text-xs tracking-wider mb-2">Chorus</p>
              <p className="font-semibold text-white italic">"Hail His Grace School, Molding Lives so bright,"</p>
              <p className="font-semibold text-white italic">"Leading Abeokuta, shining with the light,"</p>
              <p className="font-semibold text-white italic">"By God's own grace, we will always excel,"</p>
              <p className="font-semibold text-white italic">"For molding lives, His Grace does well."</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
