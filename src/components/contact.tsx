"use client"

import type React from "react"

import { useState } from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitMessage("Thanks for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)

    // Clear success message after 5 seconds
    setTimeout(() => setSubmitMessage(""), 5000)
  }

  return (
    <section id="contact" className="py-20 scroll-mt-16">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
          <div className="w-20 h-1 bg-emerald-600 dark:bg-emerald-500"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out through the form
            below or via social media.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:focus:ring-emerald-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition-colors duration-200 disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitMessage && <p className="text-emerald-600 dark:text-emerald-500">{submitMessage}</p>}
          </form> */}

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="flex flex-col space-y-4">
                <Link
                  href="https://github.com/saadcraft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors duration-200"
                >
                  <Github className="h-5 w-5" />
                  <span>github.com/saadcraft</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/saad-khouani-b58998240"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors duration-200"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>linkedin.com/in/saad-khouani-b58998240</span>
                </Link>
                <Link
                  href="mailto:saadkhouani@gmail.com"
                  className="inline-flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors duration-200"
                >
                  <Mail className="h-5 w-5" />
                  <span>saadkhouani@gmail.com</span>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <p className="text-gray-600 dark:text-gray-400">Tlemcen, Algerie</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
