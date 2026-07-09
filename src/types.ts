/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Page = 'home' | 'about' | 'admissions' | 'contact' | 'student-portal' | 'teacher-portal' | 'admin-portal';

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'Academic' | 'Sports' | 'Admission' | 'Event';
  summary: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: 'Parent' | 'Student' | 'Alumni';
  content: string;
  avatarUrl?: string;
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Sports' | 'Academic' | 'Culture';
  imageUrl: string;
}
