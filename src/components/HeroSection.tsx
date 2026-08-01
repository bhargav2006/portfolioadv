import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";

const roles = ["Full Stack Developer", "Data Analyst", "Tech Enthusiast"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1800);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-slow" />
              <span className="text-sm font-medium text-primary">Welcome to my portfolio</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Hi, I'm
              <br />
              <span className="text-gradient">Katakam Bhargav</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-4 h-8">
              I'm a{" "}
              <span className="text-primary font-semibold font-mono">{text}</span>
              <span className="inline-block w-0.5 h-6 bg-primary ml-0.5 animate-pulse" />
            </p>

            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              I build modern, scalable web applications and RESTful APIs. Passionate about solving complex problems with clean, efficient code.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all hover:gap-3"
              >
                View Projects <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-muted transition-all"
              >
                Get In Touch <Mail size={18} />
              </a>
            </div>

            <div className="flex gap-3 mt-8">
              {[
                { icon: Github, href: "https://github.com/bhargav2006", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/bhargav-katakam-62118227a/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:katakambhargav073@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-primary/20 rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                <img
                  src="/assets/IMG_7926.png"
                  alt="Katakam Bhargav"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 sm:w-80 sm:h-80 rounded-2xl border-2 border-primary/10 -z-10" />
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-lg border border-primary/20 bg-primary/5 -z-10 animate-float" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
