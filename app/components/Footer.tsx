import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-slate-100 bg-slate-50/50 py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
    
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl font-extrabold text-slate-900">
              Blog<span className="text-blue-600">Space</span>.
            </Link>
            <p className="mt-1 text-xs font-medium text-slate-500">
              Better ideas. Better web.
            </p>
          </div>

          
          <div className="flex items-center gap-8 text-sm font-semibold text-slate-600">
            <Link href="/" className="transition hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="transition hover:text-blue-600">
              About
            </Link>
          </div>

          
          <div className="flex items-center gap-4 text-slate-600">
            <a
              href="https://github.com/abdullahazeemdev"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 transition hover:bg-slate-200/60 hover:text-slate-900"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/abdullahazeemdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 transition hover:bg-slate-200/60 hover:text-blue-600"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

      
        <div className="mt-8 border-t border-slate-200/60 pt-6 text-center text-xs text-slate-500">
          © 2026 BlogSpace. Built with Next.js by Abdullah Azeem.
        </div>
      </div>
    </footer>
  );
};

export default Footer;