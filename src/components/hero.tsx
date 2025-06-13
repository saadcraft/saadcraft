"use client"

import { ArrowDownIcon, ArrowDownToLine } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner";

export default function Hero() {

  const file = "./KhouaniSaad.pdf";

  const fileDownloader = () => {
    const link = document.createElement('a');

    link.href = file;
    link.download = 'TAWSILSTAR.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success("Téléchargement en cours...");
  };

  return (
    <section id="home" className="flex flex-col justify-center min-h-screen py-12 sm:py-24">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
            Hi, I'm <span className="text-emerald-600 dark:text-emerald-500">Khouani Saad</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-700 dark:text-gray-300">
            A Next.js developer building fast, responsive web apps.
          </h2>
        </div>

        <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          I specialize in creating modern web applications with a focus on performance, accessibility, and user
          experience.
        </p>

        <div className="flex flex-wrap gap-3 pt-4">
          <Link
            href="#projects"
            className="inline-flex items-center px-6 py-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition-colors duration-200"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"

          >
            Contact Me
          </Link>
          <button
            onClick={fileDownloader}
            className="inline-flex items-center cursor-pointer px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"

          >
            Download CV <ArrowDownToLine />
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about">
          <ArrowDownIcon className="h-8 w-8 text-emerald-600 dark:text-emerald-500" />
        </Link>
      </div>
    </section>
  )
}
