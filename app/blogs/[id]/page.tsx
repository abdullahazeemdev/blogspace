import React, { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Heart, Eye, Loader2 } from 'lucide-react';

async function getBlogDetails(id: string) {
  try {
    const res = await fetch(`https://dummyjson.com/posts/${id}`, {
      cache: 'no-store',
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    return null;
  }
}


async function BlogContent({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const blog = await getBlogDetails(resolvedParams.id);

  if (!blog || !blog.id) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Blog Not Found</h1>
        <p className="text-sm text-slate-600">The article you are looking for does not exist.</p>
        <Link className="rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700" href="/">
          Back to Home
        </Link>
      </div>
    );
  }


  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">

      <div className="p-6 sm:p-10 space-y-6">
        <div className="flex flex-wrap gap-2">
          {blog.tags?.map((tag: string, i: number) => (
            <span key={i} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
              #{tag}
            </span>
          ))}
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold capitalize text-slate-900 leading-tight">
          {blog.title}
        </h1>

        <div className="flex flex-wrap items-center justify-between border-y border-slate-100 py-4 text-xs sm:text-sm text-slate-500">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-rose-500 font-medium">
              <Heart fill="currentColor" size={16} />
              {blog.reactions?.likes ?? blog.reactions} Likes
            </span>
            <span className="flex items-center gap-1.5 text-slate-600 font-medium">
              <Eye size={16} />
              {blog.views} Views
            </span>
          </div>

          <span className="rounded-md bg-slate-100 px-2.5 py-1 font-medium text-slate-600">
            Author ID: {blog.userId}
          </span>
        </div>

        <div className="prose max-w-none text-slate-700 text-base sm:text-lg leading-relaxed whitespace-pre-line pt-2">
          {blog.body}
        </div>
      </div>
    </article>
  );
}

export default async function BlogDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl space-y-8">
        
        <Link className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700" href="/">
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>

        <Suspense fallback={
          <div className="flex min-h-[350px] w-full flex-col items-center justify-center gap-4">
            <Loader2 className="animate-spin text-blue-600" size={36} />
            <p className="text-sm font-medium text-slate-500">Loading article details...</p>
          </div>
        }>
          <BlogContent params={params} />
        </Suspense>

      </div>
    </main>
  );
}