import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BarChart2,
  BookOpen,
  Briefcase,
  Code2,
  Database,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Mic,
  Music,
  PieChart,
  Star,
  Table,
  TrendingUp,
  Trophy,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ─── useInView hook ───────────────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

// ─── Reveal wrapper ───────────────────────────────────────────────────────────
type RevealDirection = "up" | "left" | "right";

function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`${inView ? `reveal-${direction}` : "reveal-hidden"} ${className}`}
      style={inView && delay > 0 ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  { icon: Code2, label: "Python", status: "Learning", statusType: "learning" },
  { icon: Database, label: "SQL", status: "Learning", statusType: "learning" },
  {
    icon: Table,
    label: "Excel",
    status: "Intermediate",
    statusType: "intermediate",
  },
  {
    icon: BarChart2,
    label: "Data Analysis",
    status: "Learning",
    statusType: "learning",
  },
  {
    icon: TrendingUp,
    label: "Power BI",
    status: "Exploring",
    statusType: "exploring",
  },
  {
    icon: PieChart,
    label: "Tableau",
    status: "Exploring",
    statusType: "exploring",
  },
];

const EXPERIENCE = [
  {
    role: "Data Management Associate",
    company: "AYUR Enabling Digital Tomorrow",
    duration: "6 Months",
    bullets: [
      "Managed and organized data efficiently across multiple systems",
      "Assisted in maintaining structured datasets and day-to-day operations",
    ],
  },
  {
    role: "Counsellor Intern",
    company: "Voice4Girls",
    duration: "Internship",
    bullets: [
      "Guided and supported students through targeted awareness sessions",
      "Facilitated group discussions to promote confidence and communication",
    ],
  },
  {
    role: "Field Coordinator Intern",
    company: "Voice4Girls",
    duration: "Internship",
    bullets: [
      "Managed on-ground field activities and coordinated with local teams",
      "Ensured smooth execution of outreach programs and community events",
    ],
  },
];

const PROJECTS = [
  {
    title: "Sales Data Analysis Dashboard",
    description:
      "An upcoming project analyzing sales trends and KPIs using Python and SQL to uncover actionable business insights.",
    tech: ["Python", "SQL", "Excel"],
    github: "https://github.com/manishkumar0105",
    upcoming: true,
  },
  {
    title: "Customer Segmentation Analysis",
    description:
      "Machine learning-based customer segmentation project using clustering algorithms to group customers by behavior.",
    tech: ["Python", "scikit-learn", "Pandas"],
    github: "https://github.com/manishkumar0105",
    upcoming: true,
  },
  {
    title: "Data Visualization Portfolio",
    description:
      "A curated collection of data visualizations built with Excel and Power BI showcasing analytical storytelling.",
    tech: ["Excel", "Power BI", "Tableau"],
    github: "https://github.com/manishkumar0105",
    upcoming: true,
  },
];

const ACHIEVEMENTS = [
  "NSS Unit-1 Coordinator",
  "Literary & Debate Club President",
  "Flashmob Coordinator – CEZAR2K26",
  "Active participation in college technical and cultural events",
];

const INTERESTS = [
  { label: "Event Organizing", icon: Star },
  { label: "Public Speaking", icon: Mic },
  { label: "Anchoring", icon: BookOpen },
  { label: "Dancing", icon: Music },
  { label: "Learning Tech", icon: Zap },
];

const PROFILE_PHOTO =
  "/assets/whatsapp_image_2026-04-01_at_5.09.46_pm-019d48d8-a665-745d-af1b-8a77f9814b55.jpeg";

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="flex items-center gap-0"
          data-ocid="nav.home.link"
        >
          <span className="font-bold text-lg tracking-wider text-primary">
            MANISH
          </span>
          <span className="font-bold text-lg tracking-wider text-foreground ml-1.5">
            KUMAR
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              data-ocid={`nav.${l.label.toLowerCase()}.link`}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {l.label}
              <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
            </a>
          ))}
        </nav>
        <button
          type="button"
          data-ocid="nav.menu.toggle"
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-muted-foreground hover:text-foreground border-b border-border last:border-0"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, oklch(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* Glow blob */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full opacity-[0.07] blur-3xl bg-primary" />

      <div className="max-w-[1100px] mx-auto px-6 py-20 w-full relative">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left: text — slides in from left on load */}
          <Reveal direction="left" className="flex-1 text-center md:text-left">
            <p className="text-muted-foreground text-sm font-medium tracking-widest uppercase mb-3">
              Hi, I&apos;m
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-3">
              Manish Kumar
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-primary mb-4">
              Aspiring Data Analyst
            </p>
            <p className="text-muted-foreground text-base md:text-lg max-w-md mb-6 leading-relaxed">
              Building skills in data analysis and solving real-world problems.
            </p>
            {/* Motivational quote */}
            <blockquote className="border-l-4 border-primary pl-4 mb-8 italic text-muted-foreground text-sm md:text-base max-w-md">
              &ldquo;Not the best yet — but getting better every single
              day.&rdquo;
            </blockquote>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Button
                data-ocid="hero.primary_button"
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button
                data-ocid="hero.secondary_button"
                asChild
                variant="outline"
                size="lg"
                className="border-primary/50 text-primary hover:bg-primary/10 font-semibold px-8"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </Reveal>

          {/* Right: profile photo — slides in from right */}
          <Reveal
            direction="right"
            className="shrink-0 flex items-center justify-center"
          >
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary opacity-20 blur-2xl scale-110" />
              {/* Border ring */}
              <div
                className="relative rounded-2xl p-1"
                style={{ background: "oklch(var(--primary) / 0.9)" }}
              >
                {/* Portrait frame: wider + taller to show waist-to-head */}
                <div className="w-56 h-80 md:w-64 md:h-96 rounded-xl border-4 border-card overflow-hidden">
                  <img
                    src={PROFILE_PHOTO}
                    alt="Manish Kumar"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center top" }}
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <Reveal>
          <SectionHeading label="About Me" />
        </Reveal>
        <div className="mt-12 flex flex-col md:flex-row items-start gap-10">
          {/* Photo card */}
          <Reveal direction="left" className="shrink-0 mx-auto md:mx-0">
            <div
              className="w-48 h-64 rounded-2xl overflow-hidden"
              style={{
                border: "2px solid oklch(var(--primary) / 0.6)",
              }}
            >
              <img
                src={PROFILE_PHOTO}
                alt="Manish Kumar"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center top" }}
              />
            </div>
          </Reveal>
          {/* Text */}
          <Reveal direction="right" className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Manish Kumar
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-5">
              B.Tech IT 3rd-year student at JNTUH University College of
              Engineering Jagtial (UCEJ) with a strong interest in Data
              Analytics, AI, and Machine Learning. Currently learning Python,
              SQL, and data analytics tools to build practical expertise.
              Passionate about analyzing data and extracting meaningful insights
              to solve real-world problems. Focused on continuous learning and
              consistent self-improvement.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "B.Tech IT",
                "JNTUH UCEJ",
                "3rd Year",
                "Data Analytics",
                "AI & ML",
              ].map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-xs border-primary/30 text-primary/80"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── Skills ───────────────────────────────────────────────────────────────────
function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/10">
      <div className="max-w-[1100px] mx-auto px-6">
        <Reveal>
          <SectionHeading label="Skills" />
        </Reveal>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5">
          {SKILLS.map((skill, i) => {
            const Icon = skill.icon;
            const pillClass =
              skill.statusType === "intermediate"
                ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
                : skill.statusType === "exploring"
                  ? "bg-muted text-muted-foreground border-border"
                  : "bg-primary/15 text-primary border-primary/30";
            return (
              <Reveal key={skill.label} delay={i * 80}>
                <div
                  data-ocid={`skills.item.${i + 1}`}
                  className="card-hover rounded-xl p-5 flex flex-col gap-4 h-full"
                  style={{
                    background: "oklch(var(--card))",
                    border: "1px solid oklch(var(--primary) / 0.25)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center"
                    style={{ background: "oklch(var(--primary) / 0.12)" }}
                  >
                    <Icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-2">
                      {skill.label}
                    </p>
                    <Badge variant="outline" className={`text-xs ${pillClass}`}>
                      {skill.status}
                    </Badge>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Experience ───────────────────────────────────────────────────────────────
function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <Reveal>
          <SectionHeading label="Experience" />
        </Reveal>
        <div className="mt-12 relative">
          {/* vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />
          <div className="flex flex-col gap-8">
            {EXPERIENCE.map((exp, i) => (
              <Reveal key={`${exp.company}-${i}`} delay={i * 100}>
                <div
                  data-ocid={`experience.item.${i + 1}`}
                  className="flex gap-6"
                >
                  {/* Blue square marker */}
                  <div className="shrink-0 hidden sm:flex flex-col items-center">
                    <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center z-10">
                      <Briefcase
                        size={14}
                        className="text-primary-foreground"
                      />
                    </div>
                  </div>
                  <div
                    className="card-hover flex-1 rounded-xl p-6"
                    style={{
                      background: "oklch(var(--card))",
                      border: "1px solid oklch(var(--border))",
                    }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h4 className="font-bold text-foreground">
                          {exp.role}
                        </h4>
                        <p className="text-primary text-sm font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="text-xs text-muted-foreground border-border"
                      >
                        {exp.duration}
                      </Badge>
                    </div>
                    <ul className="space-y-1">
                      {exp.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────
function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/10">
      <div className="max-w-[1100px] mx-auto px-6">
        <Reveal>
          <SectionHeading label="Projects" />
        </Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((proj, i) => (
            <Reveal key={proj.title} delay={i * 100}>
              <div
                data-ocid={`projects.item.${i + 1}`}
                className="card-hover flex flex-col rounded-xl p-6 h-full"
                style={{
                  background: "oklch(var(--card))",
                  border: "1px solid oklch(var(--primary) / 0.3)",
                }}
              >
                <div className="flex-1">
                  {proj.upcoming && (
                    <Badge
                      variant="outline"
                      className="text-xs text-muted-foreground border-border mb-3"
                    >
                      Coming Soon
                    </Badge>
                  )}
                  <h4 className="font-bold text-foreground mb-2">
                    {proj.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded-md font-medium"
                        style={{
                          background: "oklch(var(--primary) / 0.12)",
                          color: "oklch(var(--primary))",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <Button
                  data-ocid={`projects.github_button.${i + 1}`}
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full border-primary/40 text-muted-foreground hover:text-primary hover:border-primary"
                >
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={14} className="mr-2" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Achievements & Interests ─────────────────────────────────────────────────
function AchievementsAndInterests() {
  return (
    <section id="achievements" className="py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Achievements */}
          <div>
            <Reveal>
              <SectionHeading label="Achievements & Leadership" align="left" />
            </Reveal>
            <ul className="mt-8 space-y-4">
              {ACHIEVEMENTS.map((a, i) => (
                <Reveal key={a} delay={i * 80}>
                  <li
                    data-ocid={`achievements.item.${i + 1}`}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <Trophy
                      size={16}
                      className="mt-0.5 shrink-0 text-primary"
                    />
                    <span className="text-sm leading-relaxed">{a}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Interests */}
          <div>
            <Reveal>
              <SectionHeading label="Interests" align="left" />
            </Reveal>
            <div className="mt-8 flex flex-wrap gap-3">
              {INTERESTS.map((interest, i) => {
                const Icon = interest.icon;
                return (
                  <Reveal key={interest.label} delay={i * 70}>
                    <div
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-primary"
                      style={{
                        background: "oklch(var(--primary) / 0.1)",
                        border: "1px solid oklch(var(--primary) / 0.25)",
                      }}
                    >
                      <Icon size={14} />
                      {interest.label}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
const CONTACT = [
  {
    icon: Mail,
    label: "Email",
    value: "manishkumarakula0105@gmail.com",
    href: "mailto:manishkumarakula0105@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/manishkumar0105",
    href: "https://github.com/manishkumar0105",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/manish-kumar-56460b2a8",
    href: "https://www.linkedin.com/in/manish-kumar-56460b2a8",
  },
];

function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/10">
      <div className="max-w-[1100px] mx-auto px-6">
        <Reveal>
          <SectionHeading label="Contact" />
          <p className="text-center text-muted-foreground mt-3 mb-12 max-w-lg mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a
            conversation.
          </p>
        </Reveal>
        <div className="max-w-lg mx-auto flex flex-col gap-4">
          {CONTACT.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.label} delay={i * 90}>
                <a
                  href={c.href}
                  data-ocid={`contact.${c.label.toLowerCase()}.link`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hover flex items-center gap-4 rounded-xl px-6 py-5 group"
                  style={{
                    background: "oklch(var(--card))",
                    border: "1px solid oklch(var(--border))",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center"
                    style={{ background: "oklch(var(--primary) / 0.12)" }}
                  >
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground">{c.label}</p>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
                      {c.value}
                    </p>
                  </div>
                  <ExternalLink
                    size={14}
                    className="text-muted-foreground group-hover:text-primary transition-colors shrink-0"
                  />
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="border-t border-border py-10"
      style={{ background: "oklch(var(--card))" }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-baseline gap-1 mb-3">
              <span className="font-bold text-primary">MANISH</span>
              <span className="font-bold text-foreground">KUMAR</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              B.Tech IT Student · Aspiring Data Analyst
              <br />
              JNTUH UCEJ
            </p>
          </div>
          {/* Col 2: Social */}
          <div>
            <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
              Connect
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/manishkumar0105"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={13} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/manish-kumar-56460b2a8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={13} /> LinkedIn
              </a>
              <a
                href="mailto:manishkumarakula0105@gmail.com"
                className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={13} /> Email
              </a>
            </div>
          </div>
          {/* Col 3: Nav */}
          <div>
            <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
              Navigate
            </p>
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 flex items-center justify-center text-xs text-muted-foreground">
          <span>© {year} Manish Kumar. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

// ─── Shared ───────────────────────────────────────────────────────────────────
function SectionHeading({
  label,
  align = "center",
}: { label: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
        {label}
      </h2>
      <div
        className={`mt-2 h-1 w-12 rounded-full bg-primary ${align === "center" ? "mx-auto" : ""}`}
      />
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <AchievementsAndInterests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
