"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { ArrowRight, Loader2, Heart, Eye } from "lucide-react";

const FeaturedBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(
          "https://dummyjson.com/posts?limit=6"
        );

        const sampleImages = [
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80",
        ];

        const formattedBlogs = response.data.posts.map((item, index) => ({
          id: item.id,
          title: item.title,
          description: item.body,
          tags: item.tags || ["general"],
          likes: item.reactions?.likes ?? item.reactions ?? 0,
          views: item.views || 0,
          userId: item.userId,
          image: sampleImages[index % sampleImages.length],
          authorName: "Abdullah Azeem",
          authorRole: "Oct 18, 2026",
          path: `/blogs/${item.id}`,
        }));

        setBlogs(formattedBlogs);
      } catch (err) {
        setError("Unable to load blogs. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[300px] flex-col items-center justify-center gap-3">
        <Loader2 size={32} className="animate-spin text-blue-600" />
        <p className="text-sm text-slate-500">Loading blogs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 text-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <section className="bg-slate-50 px-5 py-16 sm:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-blue-600">
              Latest Articles
            </p>

            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Featured <span className="text-blue-600">Blogs</span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
              Explore our latest articles about technology and development.
            </p>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={blog.path}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  {blog.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-white px-3 py-1 text-xs font-medium text-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="mb-3 line-clamp-2 text-xl font-bold capitalize text-slate-900 transition group-hover:text-blue-600">
                  {blog.title}
                </h3>

                <p className="line-clamp-3 text-sm leading-6 text-slate-600">
                  {blog.description}
                </p>

                {/* Likes and Views */}
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 text-rose-500">
                      <Heart size={16} />
                      {blog.likes}
                    </span>

                    <span className="flex items-center gap-1.5 text-slate-500">
                      <Eye size={16} />
                      {blog.views}
                    </span>
                  </div>

                  <span className="text-xs text-slate-500">
                    User #{blog.userId}
                  </span>
                </div>

                {/* Author */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                      AA
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {blog.authorName}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {blog.authorRole}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    size={18}
                    className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedBlogs;
