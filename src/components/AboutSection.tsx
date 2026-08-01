import { motion } from "framer-motion";
import { FileText, Download, MapPin, Calendar, Globe } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AboutSection = () => {
  const details = [
    { label: "Name", value: "Katakam Bhargav" },
    { label: "Date of Birth", value: "28-01-2006" },
    { label: "Email", value: "Katakambhargav073@gmail.com" },
    { label: "Location", value: "Palakollu, West Godavari, Andhra Pradesh, India" },
    { label: "Languages", value: "Telugu, English, Hindi" },
    { label: "Status", value: "Open to Opportunities" },
  ];

  const stats = [
    { num: "3+", label: "Projects" },
    { num: "4+", label: "Certifications" },
    { num: "1+", label: "Internship" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Get To Know Me</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A Final Year Engineering graduate specializing in Computer Science, with expertise in Programming,
              Web app development and Data analysis. Previously been a Full stack Java development Intern for 6 months,
              thus gained hands-on experience. A self starter, learner, has strong problem solving skills and has a passion
              for technology. Currently seeking internship opportunities to improve skills and perform to the best of my abilities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {details.map((d) => (
                <div key={d.label} className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">{d.label}</span>
                  <span className="text-foreground font-medium mt-0.5">{d.value}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/assets/KATAKAM_BHARGAV_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all text-sm"
              >
                <FileText size={16} /> View Resume
              </a>
              <a
                href="/assets/KATAKAM_BHARGAV_RESUME.pdf"
                download="KATAKAM_BHARGAV_RESUME.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-medium hover:bg-muted transition-all text-sm"
              >
                <Download size={16} /> Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } } }}
          >
            <div className="relative mb-8">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden card-glass border border-primary/20 shadow-lg">
                <img
                  src="/assets/IMG_7926.png"
                  alt="Katakam Bhargav"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="card-glass rounded-xl p-4 text-center hover:card-glass-hover transition-shadow">
                  <div className="text-2xl font-bold text-gradient">{s.num}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
