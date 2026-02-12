import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  techStack: string[]
  githubUrl: string
  liveUrl: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with product listings, cart functionality, and secure checkout process.",
      image: "/perfecrt.png?height=600&width=800",
      techStack: ["Next.js", "React Query", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/tawsildash.png?height=600&width=800",
      techStack: ["Next.js", "react Query", "Nest.js", "Postgresql"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: 3,
      title: "Landing Page",
      description: "Designed and developed a high-converting landing page using Next.js and Tailwind CSS, focused on performance, responsiveness, smooth animations, and mobile-first design principles.",
      image: "/tawsilland.png?height=600&width=800",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: 4,
      title: "Razzy Delivery food application",
      description: "Designed and developed a full-stack food delivery platform including a mobile application, admin dashboard, and backend API.",
      image: "/razzyapp.png?height=600&width=800",
      techStack: ["React native", "Expo", "NextJs", "NestJs"],
      githubUrl: "https://github.com",
      liveUrl: "https://play.google.com/store/apps/details?id=com.delivry",
    }
  ]

  return (
    <section id="projects" className="py-20 scroll-mt-16">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h2>
          <div className="w-20 h-1 bg-emerald-600 dark:bg-emerald-500"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            Here are some of my recent projects. Each one presented unique challenges and opportunities to learn and
            grow as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400 flex-1">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* <div className="mt-6 flex gap-4">
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500"
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </Link>
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </Link>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
