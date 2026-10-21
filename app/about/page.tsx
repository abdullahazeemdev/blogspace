import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import { ArrowRight, Code, Sparkles, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      
      {/* Navbar yahan lag gaya hai */}
      <Navbar />

      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24 space-y-16">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <span className="rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
            About BlogSpace
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Empowering ideas through <span className="text-blue-600">modern web</span> storytelling.
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed">
            BlogSpace is a clean, modern, and fast platform built to share thoughts, explore insightful articles, and connect developers and readers globally.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Code size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Modern Technology</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Built using the latest Next.js App Router, Tailwind CSS, TypeScript, and high-performance React components.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Sparkles size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Seamless Experience</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Designed with user experience in mind, offering lightning-fast dynamic routing, clean typography, and responsive layouts.
            </p>
          </div>

        </div>

        {/* Creator / Mission Section */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-8 sm:p-10 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-slate-950">Our Mission</h2>
          <p className="text-slate-600 text-base leading-relaxed">
            We believe that sharing knowledge makes the web a better place. Whether you are a frontend developer exploring new techniques or an avid reader looking for daily inspiration, BlogSpace provides an open platform to learn and grow.
          </p>
          <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-500 flex items-center gap-1.5 font-medium">
              <span>Crafted with</span>
              <Heart size={16} className="text-rose-500 fill-rose-500" />
              <span>by Abdullah Azeem</span>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 shadow-sm"
            >
              <span>Explore Blogs</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}