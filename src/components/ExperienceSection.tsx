import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const education = [
  {
    title: "B.Tech Computer Science & Engineering",
    org: "Swarnandhra College of Engineering and Technology, Narasapuram",
    date: "July 2024 – Present",
    badge: "CGPA: 7.63",
    desc: "Pursuing Bachelor's in Computer Science and Engineering with a focus on software development, data structures, algorithms, and full-stack web technologies.",
  },
  {
    title: "Diploma — Computer Engineering",
    org: "Smt.B.Seetha Polytechnic, Bhimavaram",
    date: "June 2021 – April 2024",
    badge: "77.35%",
    desc: "Focused on core computer engineering concepts including programming, computer hardware, networking, and problem-solving.",
  },
  {
    title: "10th Class — Secondary Education",
    org: "Brmv Municipal High School, Palakollu",
    date: "2020 – 2021",
    badge: "CGPA: 8.7",
    desc: "Completed secondary education with excellent academic performance and consistent top rankings.",
  },
];

const experience = [
  {
    title: "SLG Milk Dairies Billing System (Freelance)",
    org: "SLG Milk Dairies, P.Gannavaram, Andhra Pradesh",
    date: "May 2026 – June 2026",
    points: [
      "Developed a production-ready billing system using React.js, Express.js, Node.js, and MongoDB for customer, product, and invoice management.",
      "Integrated the WhatsApp Cloud API for automated invoice delivery and deployed on an Ubuntu VPS using Nginx and PM2.",
      "Delivered the production-ready application to the client, ensuring smooth deployment, testing, and handover.",
    ],
  },
  {
    title: "Java Web Developer Intern",
    org: "R.K.InfoSystems, Hyderabad, Telangana",
    date: "June 2023 – November 2023",
    points: [
      "Developed a QR-based Dine-in Reservation application using ReactJS, Java Servlets, and MySQL.",
      "Designed and implemented RESTful APIs for efficient frontend-backend communication.",
      "Improved application performance, fixed bugs, and enhanced security features.",
      "Gained hands-on experience in full-stack development and collaborative team workflows.",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 relative">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-sm font-medium text-primary uppercase tracking-wider">My Journey</span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2">
          Education & <span className="text-gradient">Experience</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <GraduationCap size={20} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Education</h3>
          </div>
          <div className="relative pl-8 border-l-2 border-border space-y-8">
            {education.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="relative"
              >
                <div className="absolute -left-[calc(2rem+5px)] w-3 h-3 rounded-full bg-primary border-2 border-background" />
                <div className="card-glass rounded-xl p-5 hover:card-glass-hover transition-shadow">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <span className="shrink-0 text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">{item.badge}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.org}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <Calendar size={12} /> {item.date}
                  </p>
                  <p className="text-sm text-muted-foreground mt-3">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Briefcase size={20} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Professional Experience</h3>
          </div>
          <div className="relative pl-8 border-l-2 border-border space-y-8">
            {experience.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className="relative"
              >
                <div className="absolute -left-[calc(2rem+5px)] w-3 h-3 rounded-full bg-primary border-2 border-background" />
                <div className="card-glass rounded-xl p-5 hover:card-glass-hover transition-shadow">
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.org}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <Calendar size={12} /> {item.date}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {item.points.map((point, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
