/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  ArrowRight, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Flame, 
  Calendar, 
  ChevronRight, 
  ShieldCheck, 
  Library, 
  FlaskConical, 
  Dribbble, 
  Monitor, 
  HeartPulse, 
  Quote, 
  MapPin, 
  Phone, 
  Mail, 
  Clock 
} from 'lucide-react';
import { Page, NewsItem, Testimonial, Facility, GalleryItem } from '../types';

interface HomeViewProps {
  setCurrentPage: (page: Page) => void;
}

export default function HomeView({ setCurrentPage }: HomeViewProps) {
  
  // Static data for home sections
  const academicLevels = [
    {
      level: 'Nursery School',
      motto: 'Foundational Discovery & Play',
      desc: 'Our nursery program is carefully designed to foster critical thinking, social skills, and cognitive development in young children through integrated play-based and structured learning.',
      ages: 'Ages: 2 - 5 Years',
      bgColor: 'bg-indigo-50 border-indigo-100',
      iconBg: 'bg-indigo-100 text-indigo-700',
      points: ['Early literacy & sensory development', 'Creative arts & motor skill play', 'Phonics & basic numeracy']
    },
    {
      level: 'Primary School',
      motto: 'Molding Academic Excellence',
      desc: 'Focusing on core academic subjects alongside character modeling. Our primary curriculum equips pupils with strong foundational knowledge, digital literacy, and critical values.',
      ages: 'Ages: 6 - 11 Years',
      bgColor: 'bg-[#fffbeb] border-[#fef3c7]',
      iconBg: 'bg-[#fef3c7] text-[#b45309]',
      points: ['Mathematics & Science proficiency', 'Computer education & coding intro', 'Creative Writing & Moral Instruction']
    },
    {
      level: 'Secondary School',
      motto: 'Greatness & Global Competitiveness',
      desc: 'Preparing future leaders for external certifications (WAEC, NECO, JAMB) and tertiary education. We offer comprehensive science, arts, and commercial classes with strict guidance.',
      ages: 'Ages: 12 - 17 Years',
      bgColor: 'bg-emerald-50 border-emerald-100',
      iconBg: 'bg-emerald-100 text-emerald-700',
      points: ['Advanced STEM & Business studies', 'WAEC / NECO / JAMB preparation', 'Career guidance & leadership workshops']
    }
  ];

  const facilities: Facility[] = [
    { id: '1', name: 'Science Laboratory', description: 'Modern physics, chemistry, and biology equipment for practical experimentation.', iconName: 'FlaskConical' },
    { id: '2', name: 'Computer & ICT Lab', description: 'Fully networked desktops equipped with programming and computer systems learning tools.', iconName: 'Monitor' },
    { id: '3', name: 'Well-Stocked Library', description: 'A quiet haven hosting thousands of textbooks, journals, reference books, and e-learning catalogs.', iconName: 'Library' },
    { id: '4', name: 'Sports Arena', description: 'Basketball court, football training field, and track facilities for physical fitness and teams.', iconName: 'Dribbble' },
    { id: '5', name: 'Air-conditioned Classrooms', description: 'Spacious classrooms with interactive whiteboards and comfortable dual desks.', iconName: 'BookOpen' },
    { id: '6', name: 'School Clinic', description: 'On-campus first-aid room staffed with a certified nurse for rapid student medical response.', iconName: 'HeartPulse' }
  ];

  const newsAndEvents: NewsItem[] = [
    {
      id: '1',
      title: 'Admission Now Open for 2026/2027 Session',
      date: 'July 15, 2026',
      category: 'Admission',
      summary: 'Applications are now being accepted for all nursery, primary, and secondary classes. Contact the Registrar or register for screening.'
    },
    {
      id: '2',
      title: 'Annual Inter-House Sports Competition',
      date: 'May 12, 2026',
      category: 'Sports',
      summary: 'His Grace sports arena was filled with excitement as students competed across track, soccer, and relay games, showcasing superb teamwork.'
    },
    {
      id: '3',
      title: 'His Grace Science Exhibition Day',
      date: 'April 05, 2026',
      category: 'Academic',
      summary: 'Our secondary science scholars presented outstanding robotic models, organic fuel cell solutions, and creative chemistry displays.'
    }
  ];

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Mrs. Oluchi Adebayo',
      role: 'Parent',
      content: 'His Grace School is exceptional. Beyond the academic excellence which is visible in my daughters terminal grades, their emphasis on Christian morals and manners is unmatched.'
    },
    {
      id: '2',
      name: 'Dr. Joseph Babalola',
      role: 'Parent',
      content: 'The dedication of the secondary school staff is highly commendable. My son obtained 7 distinctions in his WAEC on his first attempt and scored 315 in JAMB!'
    },
    {
      id: '3',
      name: 'Blessing Emmanuel',
      role: 'Alumni',
      content: 'Molding Lives for Greatness is not just a motto; it is the reality. The leadership opportunities I gained in His Grace gave me the confidence to excel in my university education.'
    }
  ];

  const galleryItems: GalleryItem[] = [
    { id: '1', title: 'Science Lab Experiment', category: 'Academic', imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80' },
    { id: '2', title: 'Nursery Graduation Ceremony', category: 'Campus', imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80' },
    { id: '3', title: 'Secondary Sports Tournament', category: 'Sports', imageUrl: 'https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&w=600&q=80' },
    { id: '4', title: 'Spacious Library Session', category: 'Academic', imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80' }
  ];

  const renderFacilityIcon = (iconName: string) => {
    switch (iconName) {
      case 'FlaskConical': return <FlaskConical className="h-6 w-6 text-[#d97706]" />;
      case 'Monitor': return <Monitor className="h-6 w-6 text-[#d97706]" />;
      case 'Library': return <Library className="h-6 w-6 text-[#d97706]" />;
      case 'Dribbble': return <Dribbble className="h-6 w-6 text-[#d97706]" />;
      case 'BookOpen': return <BookOpen className="h-6 w-6 text-[#d97706]" />;
      case 'HeartPulse': return <HeartPulse className="h-6 w-6 text-[#d97706]" />;
      default: return <BookOpen className="h-6 w-6 text-[#d97706]" />;
    }
  };

  const handleApplyClick = () => {
    setCurrentPage('admissions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePortalClick = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-dark-blue text-white overflow-hidden py-24 sm:py-32">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-300 via-primary to-dark-blue"></div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-secondary opacity-20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text & Action */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center space-x-2 px-4 py-1.5 bg-[#d97706] text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-sm">
                <Award className="h-3.5 w-3.5" />
                <span>Nursery · Primary · Secondary</span>
              </span>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase leading-none">
                His Grace School
              </h1>
              
              <p className="text-xl sm:text-2xl font-semibold text-[#d97706] italic tracking-wide">
                "Molding Lives for Greatness"
              </p>
              
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Welcome to Abeokuta's premium model school, where academic excellence meets godly character, discipline, and modern facilities. We empower children to find their purpose and excel globally.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <button
                  onClick={handleApplyClick}
                  className="px-8 py-4 bg-secondary hover:bg-opacity-95 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Apply for Admission</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handlePortalClick('student-portal')}
                  className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Student Portal</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Visual Hero Showcase card */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative mx-auto max-w-sm sm:max-w-md bg-white text-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="absolute -top-3 -right-3 bg-secondary text-white p-3 rounded-2xl shadow-lg">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-primary uppercase tracking-tight">
                  Academic Sessions
                </h3>
                <p className="text-xs font-semibold text-secondary tracking-widest uppercase mt-0.5 mb-4">
                  2026 / 2027 Registrations
                </p>

                <div className="space-y-3.5 text-sm">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Entrance Exams Open</p>
                      <p className="text-xs text-gray-500">Scheduled entrance screening batches available weekly.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">E-Learning & Tech Systems</p>
                      <p className="text-xs text-gray-500">Fully equipped ICT laboratory and remote assignment downloads.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Highly Secured Environment</p>
                      <p className="text-xs text-gray-500">Serene campus environment with round-the-clock guards.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-gray-100 flex justify-between items-center text-xs text-gray-400">
                  <span>Authorized by management</span>
                  <span className="font-semibold text-primary">Est. Abeokuta</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. About His Grace School */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold tracking-widest text-secondary uppercase block mb-1">
                Our Foundation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary uppercase tracking-tight mb-6">
                About His Grace School
              </h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                <p>
                  Established with a supreme vision to provide affordable, standard, and highly qualitative education, <strong>His Grace School</strong> has stood as a beacon of academic excellence and outstanding discipline.
                </p>
                <p>
                  We are situated in the serene and peaceful enclave of Agbugburu Village, Odeda, Abeokuta. Our environment is entirely free from urban noise and distractions, creating the perfect atmosphere for study, deep learning, and character building.
                </p>
                <p>
                  At His Grace, we run an enriched curriculum that integrates local national requirements with creative thinking paradigms. This guarantees our children remain competitive in regional examinations and global standards.
                </p>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => setCurrentPage('about')}
                  className="px-6 py-3 bg-primary hover:bg-opacity-95 text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-md inline-flex items-center space-x-2"
                >
                  <span>Read Full School History</span>
                  <ArrowRight className="h-4 w-4 text-[#d97706]" />
                </button>
              </div>
            </div>

            {/* Side visual card */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-accent relative aspect-video">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80" 
                  alt="Students at His Grace School" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                  <p className="text-white font-bold text-lg">Molding the minds of future leaders and global innovators.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us */}
      <section className="py-20 bg-accent/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-secondary uppercase block mb-1">
              The His Grace Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary uppercase tracking-tight">
              Why Choose Us
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              We stand apart through our commitment to quality instructions, excellent discipline, and holistic talent discovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Academic Excellence', desc: 'Consistently outstanding performances in WAEC, NECO, and external math competitions.' },
              { title: 'Godly Character & Discipline', desc: 'Strict focus on moral upbringing, high integrity, respect, and spiritual grounding.' },
              { title: 'Modern Facilities', desc: 'Fully equipped science laboratories, ICT coding center, and a rich, quiet library.' },
              { title: 'Affordable Standard', desc: 'State-of-the-art educational quality made accessible through reasonable tuition and flexible payments.' }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary font-bold">
                  0{index + 1}
                </div>
                <h3 className="font-bold text-primary text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Academic Levels */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-secondary uppercase block mb-1">
              Programs of Study
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary uppercase tracking-tight">
              Academic Levels We Offer
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              His Grace School caters to children from early discovery stages up to preparatory secondary school graduation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {academicLevels.map((lvl) => (
              <div 
                key={lvl.level}
                className={`rounded-2xl p-8 border ${lvl.bgColor} flex flex-col justify-between h-full`}
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                    {lvl.ages}
                  </span>
                  <h3 className="text-2xl font-bold text-primary uppercase mt-1 mb-2">
                    {lvl.level}
                  </h3>
                  <p className="text-sm font-medium text-gray-700 italic mb-4">
                    {lvl.motto}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {lvl.desc}
                  </p>
                </div>

                <div className="space-y-2 border-t border-black/5 pt-5">
                  <p className="text-xs font-bold uppercase text-primary tracking-wide mb-2">Curriculum Highlights:</p>
                  {lvl.points.map((pt, i) => (
                    <div key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. School Facilities */}
      <section className="py-20 bg-accent/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-secondary uppercase block mb-1">
              Learning Infrastructure
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary uppercase tracking-tight">
              Our Modern Facilities
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              We invest heavily in the structures and tools required to make modern theoretical study highly engaging and practical.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((fac) => (
              <div 
                key={fac.id}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start space-x-4"
              >
                <div className="p-3 bg-accent rounded-xl shrink-0">
                  {renderFacilityIcon(fac.iconName)}
                </div>
                <div>
                  <h3 className="font-bold text-primary text-base">
                    {fac.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1.5 leading-relaxed">
                    {fac.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Latest News & Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <span className="text-xs font-bold tracking-widest text-secondary uppercase block mb-1">
                Announcements
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary uppercase tracking-tight">
                Latest News & Events
              </h2>
            </div>
            <button 
              onClick={() => {
                setCurrentPage('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="mt-4 md:mt-0 inline-flex items-center text-sm font-semibold text-primary hover:text-secondary group transition-colors duration-150"
            >
              <span>View all announcements</span>
              <ArrowRight className="h-4 w-4 ml-1.5 transform group-hover:translate-x-1 transition-transform text-[#d97706]" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {newsAndEvents.map((item) => (
              <div 
                key={item.id}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider mb-4">
                    <span className="px-2.5 py-0.5 bg-accent text-primary rounded-md">
                      {item.category}
                    </span>
                    <span className="text-gray-400">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="font-bold text-primary text-base leading-snug mb-2 hover:text-[#d97706] cursor-pointer">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                    Read More Info
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-20 bg-accent/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-secondary uppercase block mb-1">
              Feedback from Our Community
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary uppercase tracking-tight">
              What Parents & Alumni Say
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div 
                key={t.id}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between relative"
              >
                <div className="absolute top-6 right-8 text-accent">
                  <Quote className="h-10 w-10 shrink-0 opacity-40 text-secondary" />
                </div>
                
                <p className="text-sm text-gray-600 leading-relaxed italic z-10 mb-6">
                  "{t.content}"
                </p>

                <div className="flex items-center space-x-3.5 border-t border-gray-100 pt-4">
                  <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                    {t.name[4]}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm">{t.name}</h4>
                    <p className="text-xs text-[#d97706] font-semibold uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Gallery Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <span className="text-xs font-bold tracking-widest text-secondary uppercase block mb-1">
                Visual Showcase
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary uppercase tracking-tight">
                Our Gallery Preview
              </h2>
            </div>
            <button 
              onClick={() => {
                setCurrentPage('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="mt-4 md:mt-0 inline-flex items-center text-sm font-semibold text-primary hover:text-secondary group transition-colors duration-150"
            >
              <span>See campus photos</span>
              <ArrowRight className="h-4 w-4 ml-1.5 transform group-hover:translate-x-1 transition-transform text-[#d97706]" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <div 
                key={item.id}
                className="group relative rounded-2xl overflow-hidden shadow-sm aspect-[4/3] border border-gray-100 bg-gray-100"
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-[10px] font-bold uppercase text-[#d97706] tracking-widest mb-0.5">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-semibold text-white">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Admission Call-to-Action */}
      <section className="py-16 bg-gradient-to-r from-[#1e3a8a] to-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white mb-4">
              Molding the Path to Greatness Starts Here
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
              Give your child the lifelong gift of qualitative and moral-focused instructions. Secure a place in our Nursery, Primary or Secondary class for the upcoming academic session.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={handleApplyClick}
                className="px-8 py-3.5 bg-secondary hover:bg-opacity-95 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-md transition-all duration-200"
              >
                Apply for Admission Now
              </button>
              <button
                onClick={() => handlePortalClick('contact')}
                className="px-8 py-3.5 bg-transparent border border-white/40 hover:bg-white hover:text-primary text-white font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-200"
              >
                Inquire Fees & Info
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Contact Information */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Box 1: Location */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start space-x-4">
              <div className="p-3 bg-indigo-50 text-indigo-700 rounded-xl">
                <MapPin className="h-6 w-6 text-[#d97706]" />
              </div>
              <div>
                <h4 className="font-bold text-primary text-lg mb-1">Our Location</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Agbugburu Village, Odeda Local Government, Abeokuta, Ogun State, Nigeria.
                </p>
              </div>
            </div>

            {/* Box 2: Telephone */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start space-x-4">
              <div className="p-3 bg-amber-50 text-[#b45309] rounded-xl">
                <Phone className="h-6 w-6 text-[#d97706]" />
              </div>
              <div>
                <h4 className="font-bold text-primary text-lg mb-1">Call Admissions</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  +234 803 123 4567<br />
                  +234 815 987 6543
                </p>
              </div>
            </div>

            {/* Box 3: General Inquiries */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-start space-x-4">
              <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl">
                <Mail className="h-6 w-6 text-[#d97706]" />
              </div>
              <div>
                <h4 className="font-bold text-primary text-lg mb-1">Email Inquiries</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  info@hisgraceschools.edu.ng<br />
                  admissions@hisgraceschools.edu.ng
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
