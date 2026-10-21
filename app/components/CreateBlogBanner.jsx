import React from 'react';
import Link from 'next/link';
import { ArrowRight, FileEdit } from 'lucide-react';

const CreateBlogBanner = () => {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 my-12">
      <div className="flex flex-col md:flex-row items-center justify-between rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50/60 via-indigo-50/30 to-white p-6 sm:p-8 shadow-sm gap-10">
        
        {/* Left Text Content */}
        <div className="mb-6 md:mb-0 text-center md:text-left space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
            Ready to share your thoughts?
          </h3>
          <p className="text-sm sm:text-base text-slate-600">
            Start writing and let your ideas reach the world.
          </p>
        </div>

        {/* Center Illustration / Icon */}
      <div className='flex justify-center items-center gap-3'>
          <div className="mb-6 md:mb-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md border border-slate-100 text-blue-600">
            <FileEdit size={32} />
          </div>
        </div>

        {/* Right Action Button */}
        <div>
          <Link
            href="/create-blog"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition hover:bg-blue-700 hover:shadow-lg"
          >
            <span>Create Blog</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      </div>
    </section>
  );
};

export default CreateBlogBanner;