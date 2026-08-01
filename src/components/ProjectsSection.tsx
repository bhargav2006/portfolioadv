import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "mini-Trello",
    date: "April 2026 - May 2026",
    desc: "Developed a full-stack multi-user task management system with secure authentication. Implemented real-time task creation, updates, deletion, and synchronization using Socket.IO.",
    tags: ["React", "Express.js", "MongoDB", "Socket.IO", "REST APIs"],
    image: "/assets/projects/mini-trello.png",
    github: "https://github.com/bhargav2006/mini-Trello",
    live: "https://mini-trello-0502.vercel.app/",
  },
  {
    title: "Personal Budget Tracker",
    date: "March 2026 - April 2026",
    desc: "Developed a client-side budget tracker with transaction CRUD operations and monthly financial summaries. Integrated SQLite (Wasm) with localStorage for offline data persistence.",
    tags: ["React", "SQLite", "localStorage", "Chart.js"],
    image: "https://github.com/bhargav2006/Personal-Budget-Tracker/blob/main/screenshots/dashboard_overview.png?raw=true",
    github: "https://github.com/bhargav2006/Personal-Budget-Tracker",
    live: "https://personal-budget-tracker-bice.vercel.app/",
  },
  {
    title: "StocksApp",
    date: "July 2025 - August 2025",
    desc: "Developed a responsive stock dashboard using ReactJs, Bootstrap CSS, and Finnhub API to display dynamic company profiles and real-time stock quotes.",
    tags: ["ReactJs", "Bootstrap", "Finnhub API", "Dashboard"],
    image: "/assets/projects/StocksApp.png",
    github: "https://github.com/bhargav2006/StocksApp",
    live: "https://bhargav2006.github.io/StocksApp/",
  },
  {
    title: "Simple React ToDo Application",
    date: "May 2025 - June 2025",
    desc: "Implemented a simple front-end To-Do application built with React and Bootstrap CSS, with React Toastify alerts for real-time notifications.",
    tags: ["React", "Bootstrap", "React Toastify"],
    image: "/assets/projects/React_ToDo.png",
    github: "https://github.com/bhargav2006/simple_ReactTODO",
    live: "https://simple-react-todo-virid.vercel.app/",
  },
  {
    title: "ToDo Application Backend",
    date: "March 2025 - May 2025",
    desc: "Developed a backend for a To-Do application using Node.js, Express.js, and MongoDB with REST APIs for user and task CRUD operations, including authentication.",
    tags: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    image: "/assets/projects/ToDo_Backend.png",
    github: "https://github.com/bhargav2006/ToDo_Backend",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 relative">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-sm font-medium text-primary uppercase tracking-wider">What I've Built</span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2">
          My <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground mt-3 max-w-md mx-auto">
          Here are some of my projects I have done lately. Feel free to check them out.
        </p>
        <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group card-glass rounded-xl overflow-hidden hover:card-glass-hover transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Project Image */}
              <div className="h-48 relative overflow-hidden bg-muted/30 border-b border-border/50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback in case remote image link fails
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{project.date}</p>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">{project.desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-5 pt-0 flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={16} /> Code
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
