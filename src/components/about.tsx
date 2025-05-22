export default function About() {
  const skills = ["Next.js", "Tailwind CSS", "React", "React Query", "Node.js", "Express.js", "Nest.js", "MongoDB", "TypeScript"]

  return (
    <section id="about" className="py-20 scroll-mt-16">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
          <div className="w-20 h-1 bg-emerald-600 dark:bg-emerald-500"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              I'm a passionate full-stack developer with over a year of experience building modern web applications. I
              love creating clean, efficient, and user-friendly interfaces that solve real-world problems.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              My journey in web development started with HTML, CSS, and JavaScript, and has evolved to embrace modern
              frameworks and tools like Next.js, React, and TypeScript.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              enjoying outdoor activities.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">My Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
