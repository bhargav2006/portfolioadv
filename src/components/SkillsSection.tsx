import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const skills = [
  { name: "Programming", tech: "C, Java, Python", pct: 90 },
  { name: "Web Development", tech: "HTML, CSS, JavaScript, React.js, Java Servlets", pct: 85 },
  { name: "Database", tech: "MySQL", pct: 75 },
  { name: "Data Analysis", tech: "Pandas, Matplotlib, Seaborn", pct: 70 },
  { name: "Tools", tech: "VS Code, Eclipse, Git, GitHub", pct: 90 },
  { name: "Soft Skills", tech: "Problem Solving, Adaptability, Growth Oriented", pct: 100 },
];

const SkillBar = ({ name, tech, pct, index }: { name: string; tech: string; pct: number; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setWidth(pct), index * 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, pct, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="card-glass rounded-xl p-5 hover:card-glass-hover transition-shadow"
    >
      <div className="flex justify-between items-center mb-1">
        <span className="font-semibold text-foreground">{name}</span>
        <span className="text-sm font-mono text-primary font-medium">{pct}%</span>
      </div>
      <p className="text-xs text-muted-foreground mb-3">{tech}</p>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
          style={{ width: `${width}%`, backgroundImage: "var(--gradient-primary)" }}
        />
      </div>
    </motion.div>
  );
};

const SkillsSection = () => (
  <section id="skills" className="py-24 relative">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-sm font-medium text-primary uppercase tracking-wider">What I Know</span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2">
          My <span className="text-gradient">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4">
        {skills.map((skill, i) => (
          <SkillBar key={skill.name} {...skill} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
