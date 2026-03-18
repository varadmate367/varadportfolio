import { motion } from "framer-motion";
import { Code, GraduationCap, Briefcase, Heart, Mail, Github, ChevronDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const SectionWrapper = ({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`py-20 md:py-28 px-4 sm:px-6 ${className}`}>
    <div className="max-w-5xl mx-auto">{children}</div>
  </section>
);

/* ── HERO ── */
export const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
    </div>
    <motion.div
      initial="hidden"
      animate="visible"
      className="text-center relative z-10"
    >
      <motion.p variants={fadeUp} custom={0} className="text-primary font-mono text-sm mb-4">
        &lt;welcome /&gt;
      </motion.p>
      <motion.h1 variants={fadeUp} custom={1} className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">
        <span className="gradient-text">Varad Mate</span>
      </motion.h1>
      <motion.p variants={fadeUp} custom={2} className="text-xl md:text-2xl text-muted-foreground mb-6">
        Student Web Designer | Front-End Learner
      </motion.p>
      <motion.p variants={fadeUp} custom={3} className="max-w-lg mx-auto text-muted-foreground mb-8">
        I'm a student passionate about crafting clean, modern web experiences. Currently learning front-end development and building simple, beautiful websites one project at a time.
      </motion.p>
      <motion.button
        variants={fadeUp}
        custom={4}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
      >
        Explore <ChevronDown className="w-4 h-4" />
      </motion.button>
    </motion.div>
  </section>
);

/* ── ABOUT ── */
export const AboutSection = () => (
  <SectionWrapper id="about">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
      <motion.h2 variants={fadeUp} className="section-heading">About Me</motion.h2>
      <motion.div variants={fadeUp} custom={1} className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded mb-8" />
      <motion.div variants={fadeUp} custom={2} className="glass-card p-6 md:p-8 glow-primary">
        <p className="text-muted-foreground leading-relaxed text-lg">
          Hi! I'm <span className="text-foreground font-semibold">Varad Abhijeet Mate</span>, a student currently exploring the world of web design and front-end development. I enjoy turning ideas into visually appealing, functional websites. My journey started with curiosity about how websites work, and now I'm building my skills in HTML, CSS, JavaScript, and modern design principles. I believe in keeping things simple, clean, and user-friendly.
        </p>
      </motion.div>
    </motion.div>
  </SectionWrapper>
);

/* ── EDUCATION ── */
export const EducationSection = () => {
  const focuses = [
    "Programming fundamentals",
    "Website design",
    "Application development",
    "Problem solving",
  ];
  return (
    <SectionWrapper id="education" className="bg-secondary/20">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <motion.h2 variants={fadeUp} className="section-heading flex items-center gap-3">
          <GraduationCap className="w-8 h-8 text-primary" /> Education
        </motion.h2>
        <motion.div variants={fadeUp} custom={1} className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded mb-8" />
        <motion.div variants={fadeUp} custom={2} className="glass-card p-6 md:p-8 glow-accent">
          <h3 className="text-xl font-semibold text-foreground mb-1">Computer Engineering / Web Development Studies</h3>
          <p className="text-muted-foreground mb-6">Building a strong foundation in technology and design</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {focuses.map((f, i) => (
              <motion.div key={f} variants={fadeUp} custom={i + 3} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/40">
                <Code className="w-4 h-4 text-accent shrink-0" />
                <span className="text-foreground text-sm">{f}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

/* ── SKILLS ── */
export const SkillsSection = () => {
  const skills = ["HTML", "CSS", "C", "Python", "Basic JavaScript", "Responsive Web Design"];
  return (
    <SectionWrapper id="skills">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <motion.h2 variants={fadeUp} className="section-heading">Skills</motion.h2>
        <motion.div variants={fadeUp} custom={1} className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded mb-8" />
        <div className="flex flex-wrap gap-3">
          {skills.map((s, i) => (
            <motion.span key={s} variants={fadeUp} custom={i + 2} className="skill-badge">
              {s}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

/* ── PROJECTS ── */
export const ProjectsSection = () => {
  const projects = [
    { title: "Portfolio Website", desc: "A personal portfolio built with modern web technologies, featuring responsive design and smooth animations.", icon: <Code className="w-6 h-6" /> },
    { title: "C Programming Mini App", desc: "A command-line application built in C demonstrating core programming concepts like data structures and algorithms.", icon: <Briefcase className="w-6 h-6" /> },
    { title: "UI Design Practice", desc: "A collection of UI design exercises exploring layout, typography, color theory, and user experience principles.", icon: <Heart className="w-6 h-6" /> },
  ];
  return (
    <SectionWrapper id="projects" className="bg-secondary/20">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <motion.h2 variants={fadeUp} className="section-heading">Projects</motion.h2>
        <motion.div variants={fadeUp} custom={1} className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded mb-8" />
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.title} variants={fadeUp} custom={i + 2} className="glass-card p-6 hover:glow-primary transition-shadow duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                {p.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

/* ── INTERESTS ── */
export const InterestsSection = () => {
  const interests = ["Web Design", "Programming Technologies", "Automobiles & Car Design"];
  return (
    <SectionWrapper id="interests">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <motion.h2 variants={fadeUp} className="section-heading">Interests</motion.h2>
        <motion.div variants={fadeUp} custom={1} className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded mb-8" />
        <div className="flex flex-wrap gap-4">
          {interests.map((item, i) => (
            <motion.div key={item} variants={fadeUp} custom={i + 2} className="glass-card px-6 py-4 glow-accent">
              <span className="text-foreground font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

/* ── CONTACT ── */
export const ContactSection = () => (
  <SectionWrapper id="contact" className="bg-secondary/20">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
      <motion.h2 variants={fadeUp} className="section-heading">Get In Touch</motion.h2>
      <motion.div variants={fadeUp} custom={1} className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded mb-8" />
      <motion.div variants={fadeUp} custom={2} className="glass-card p-6 md:p-8 max-w-lg glow-primary">
        <h3 className="text-xl font-semibold text-foreground mb-6">Varad Abhijeet Mate</h3>
        <div className="space-y-4">
          <a href="mailto:varadmate087@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
            varadmate087@gmail.com
          </a>
          <a href="https://github.com/varadmate" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
            github.com/varadmate
          </a>
        </div>
      </motion.div>
    </motion.div>
  </SectionWrapper>
);
