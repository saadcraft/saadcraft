export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TawsilStar",
      period: "2024-2025 - Present",
      achievements: [
        "Built fast, SEO-friendly web applications using Next.js, focusing on server-side rendering and dynamic routing.",
        "Styled responsive, modern UIs with Tailwind CSS, ensuring consistent design across devices.",
        "Followed component-based development practices in ReactJS to create reusable and maintainable code.",
        "Optimized data fetching and caching strategies using NextJs server side and  React Query (useQuery) for enhanced performance and user experience.",
        "Integrated third-party APIs and managed authentication workflows to deliver dynamic and secure applications.",
      ],
    },
    {
      id: 2,
      title: "FullStack Intern",
      company: "Library Oscar",
      period: "2019-2020",
      achievements: [
        "Developed a user-friendly e-commerce website using HTML, CSS, and JavaScript.",
        "Utilized ReactJS for building user interfaces and NodeJS and PHP for back-end development.",
        "Used PhpMyAdmin for data persistence and management.",
        "Ensure a seamless user experience by regularly testing and debugging the website.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 scroll-mt-16">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Experience</h2>
          <div className="w-20 h-1 bg-emerald-600 dark:bg-emerald-500"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-800">
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-emerald-600 dark:bg-emerald-500"></div>

              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <span>{exp.company}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-emerald-600 dark:text-emerald-500">•</span>
                      <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
