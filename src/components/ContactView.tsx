/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  User, 
  PhoneCall, 
  BookOpen 
} from 'lucide-react';

export default function ContactView() {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    inquiryPurpose: 'Admissions Inquiry',
    detailedMessage: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.detailedMessage || !formData.phoneNumber) {
      alert('Please fill in the required fields (Name, Phone Number, and Message).');
      return;
    }

    setIsSubmitting(true);
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({
        fullName: '',
        emailAddress: '',
        phoneNumber: '',
        inquiryPurpose: 'Admissions Inquiry',
        detailedMessage: ''
      });
    }, 1200);
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-secondary uppercase block mb-1">
            Reach Out
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary uppercase tracking-tight">
            Contact His Grace School
          </h1>
          <p className="mt-4 text-gray-500 leading-relaxed">
            Have questions about admissions, fees, curriculum, or boarding guidelines? Fill out the contact form below or reach us directly via our phone lines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Contact Form (7/12) */}
          <div className="lg:col-span-7 bg-gray-50 rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm">
            
            {formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="inline-flex p-4 bg-emerald-50 rounded-full text-emerald-600 mb-6 border border-emerald-100">
                  <CheckCircle2 className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold text-primary uppercase tracking-tight">
                  Message Transmitted!
                </h3>
                <p className="text-sm font-semibold text-secondary uppercase tracking-widest mt-1 mb-4">
                  Phase 2 Offline Simulation
                </p>
                <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed mb-6">
                  Thank you for contacting His Grace School! Your message has been compiled successfully. (Since Firebase and EmailJS are scheduled for later phases, this represents an offline submission success).
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 bg-primary text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 shadow-md hover:bg-opacity-95"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-lg font-bold text-primary uppercase tracking-wider mb-2">
                  Send Us A Direct Message
                </h3>

                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                      <User className="h-4 w-4" />
                    </span>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Samuel Adekunle"
                      className="w-full pl-10 pr-4 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:border-[#d97706] focus:ring-1 focus:ring-[#d97706] outline-none transition-all text-gray-800 font-medium"
                    />
                  </div>
                </div>

                {/* Email Address & Phone Number Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="emailAddress" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <Mail className="h-4 w-4" />
                      </span>
                      <input
                        type="email"
                        id="emailAddress"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleChange}
                        placeholder="e.g. sam@example.com"
                        className="w-full pl-10 pr-4 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:border-[#d97706] focus:ring-1 focus:ring-[#d97706] outline-none transition-all text-gray-800 font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phoneNumber" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        <PhoneCall className="h-4 w-4" />
                      </span>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        required
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="e.g. 08031234567"
                        className="w-full pl-10 pr-4 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:border-[#d97706] focus:ring-1 focus:ring-[#d97706] outline-none transition-all text-gray-800 font-medium"
                      />
                    </div>
                  </div>
                </div>

                {/* Inquiry Purpose */}
                <div>
                  <label htmlFor="inquiryPurpose" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Inquiry Purpose
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                      <BookOpen className="h-4 w-4" />
                    </span>
                    <select
                      id="inquiryPurpose"
                      name="inquiryPurpose"
                      value={formData.inquiryPurpose}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:border-[#d97706] focus:ring-1 focus:ring-[#d97706] outline-none transition-all text-gray-700 font-medium appearance-none"
                    >
                      <option value="Admissions Inquiry">Admissions Inquiry</option>
                      <option value="Tuition & Fee Structure">Tuition & Fee Structure</option>
                      <option value="Staff Employment">Staff Employment</option>
                      <option value="Complaints & Reports">Complaints & Reports</option>
                      <option value="Other Inquiries">Other Inquiries</option>
                    </select>
                  </div>
                </div>

                {/* Detailed Message */}
                <div>
                  <label htmlFor="detailedMessage" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Detailed Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute top-3 left-3 text-gray-400">
                      <MessageSquare className="h-4 w-4" />
                    </span>
                    <textarea
                      id="detailedMessage"
                      name="detailedMessage"
                      required
                      rows={5}
                      value={formData.detailedMessage}
                      onChange={handleChange}
                      placeholder="Type your message here..."
                      className="w-full pl-10 pr-4 py-3 text-sm bg-white border border-gray-200 rounded-xl focus:border-[#d97706] focus:ring-1 focus:ring-[#d97706] outline-none transition-all text-gray-800 font-medium"
                    ></textarea>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary hover:bg-opacity-95 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center space-x-2 disabled:bg-gray-400 disabled:pointer-events-none"
                >
                  {isSubmitting ? (
                    <span>Transmitting Message...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="h-4 w-4 text-[#d97706]" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

          {/* Column 2: Direct Contacts (5/12) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Box: Operational Info */}
            <div className="bg-primary text-white rounded-3xl p-8 border border-primary/20 relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
              
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">
                Office Hours
              </h3>
              
              <div className="space-y-4 text-sm text-gray-200">
                <div className="flex items-center space-x-3.5">
                  <Clock className="h-5 w-5 text-[#d97706] shrink-0" />
                  <div>
                    <p className="font-bold">Monday - Friday</p>
                    <p className="text-xs text-gray-300">7:30 AM - 4:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3.5">
                  <Clock className="h-5 w-5 text-[#d97706] shrink-0" />
                  <div>
                    <p className="font-bold">Weekends & Public Holidays</p>
                    <p className="text-xs text-gray-300">Closed (Physical Campus)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box: Detailed info */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-primary uppercase tracking-wider mb-2">
                Quick Communications
              </h3>

              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-accent rounded-xl text-[#d97706] shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm">Physical Address</h4>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-0.5">
                      Agbugburu Village, Odeda Local Government, Abeokuta, Ogun State, Nigeria.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-accent rounded-xl text-[#d97706] shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm">Telephone Contacts</h4>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-0.5">
                      +234 803 123 4567<br />
                      +234 815 987 6543
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-accent rounded-xl text-[#d97706] shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm">E-mail Correspondence</h4>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-0.5">
                      info@hisgraceschools.edu.ng<br />
                      admissions@hisgraceschools.edu.ng
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
