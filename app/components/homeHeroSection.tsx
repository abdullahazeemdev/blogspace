
'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Laptop,
  Sparkles,
  BookOpen,
  Code2,
  PenLine,
  TrendingUp,
} from 'lucide-react';

const HomeHeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Background Decorations */}
      <div className="absolute -top-24 right-0 -z-10 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-72 w-72 rounded-full bg-indigo-100/50 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 sm:px-8 md:py-28 lg:grid-cols-2 lg:gap-20">

        {/* Left Content */}
        <div className="flex flex-col items-start">

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <Sparkles size={16} />
            <span>Ideas worth sharing</span>
          </div>

          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl">
            Discover Stories.
            <br />
            Explore New
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text pb-2 text-transparent">
              Possibilities.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Your space for technology, coding, creativity, and fresh
            perspectives. Discover ideas that inspire you to learn,
            build, and grow every day.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/blogs"
              className="group inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 active:translate-y-0"
            >
              Explore Blogs
              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-6 py-3.5 font-semibold text-slate-700 transition duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            >
              About Us
            </Link>
          </div>

          {/* Small Highlights */}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <Code2 size={17} className="text-blue-600" />
              Tech & Development
            </span>
            <span className="flex items-center gap-2">
              <BookOpen size={17} className="text-blue-600" />
              Helpful Articles
            </span>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative mx-auto flex w-full max-w-xl items-center justify-center lg:ml-auto">

         
          <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-[2rem] border border-blue-100/80 bg-gradient-to-br from-blue-50 via-white to-indigo-100/70 p-6 shadow-2xl shadow-blue-900/5 sm:p-10">

            {/* Decorative Grid */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  'radial-gradient(#93c5fd 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            {/* Center Card */}
            <div className="relative z-10 w-full max-w-sm rounded-3xl border border-white bg-white/95 p-7 shadow-2xl shadow-blue-900/10 backdrop-blur-sm transition duration-500 hover:-translate-y-2 sm:p-9">

              <div className="mb-7 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>

                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  Featured
                </span>
              </div>

              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/25">
                <Laptop size={42} strokeWidth={1.6} />
              </div>

              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                The Knowledge Hub
              </p>

              <h2 className="text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl">
                Learn Something
                <span className="block text-indigo-600">New Every Day.</span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Explore tutorials, ideas, and stories that help turn
                curiosity into knowledge.
              </p>

              <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <BookOpen size={17} className="text-blue-600" />
                  Explore & Learn
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>

            {/* Floating Top Badge */}
            <div className="absolute left-3 top-8 flex items-center gap-3 rounded-2xl border border-white bg-white/95 p-3.5 shadow-xl shadow-slate-900/5 sm:left-5 sm:top-12 sm:p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                <Sparkles size={21} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">
                  Fresh Ideas
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  Get inspired
                </p>
              </div>
            </div>

            {/* Floating Bottom Badge */}
            <div className="absolute bottom-8 right-3 flex items-center gap-3 rounded-2xl border border-white bg-white/95 p-3.5 shadow-xl shadow-slate-900/5 sm:bottom-12 sm:right-5 sm:p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <TrendingUp size={21} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">
                  Keep Growing
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  One article at a time
                </p>
              </div>
            </div>

            {/* Decorative Pen Icon */}
            <div className="absolute right-6 top-1/3 flex h-12 w-12 rotate-12 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/20 sm:right-10">
              <PenLine size={22} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeHeroSection;
