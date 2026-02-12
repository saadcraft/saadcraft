import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import ThemeToggle from "@/components/theme-toggle"

export const metadata: Metadata = {
  title: "Saad Khouani | Full-Stack Developer",
  description: "Personal portfolio of Saad Khouani, a full-stack web developer specializing in Next.js, React, and Node.js, nestJs",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="py-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Saad Khounai. All rights reserved. 2026</p>
      </footer>
    </div>
  )
}
