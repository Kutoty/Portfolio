const TECH = [
  "Python",
  "TypeScript",
  "Node.js",
  "React",
  "PostgreSQL",
  "Docker",
  "Next.js",
  "Nest.js",
  "AI / LLMs",
  "Tailwind",
];

export default function Home() {
  // Duplicate the list so the marquee can loop seamlessly
  const techLoop = [...TECH, ...TECH];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#" className="text-base font-bold tracking-tight text-foreground">
            Francis Kisio
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-muted sm:flex">
            <a href="#work" className="transition hover:text-foreground">Work</a>
            <a href="#skills" className="transition hover:text-foreground">Skills</a>
            <a href="#experience" className="transition hover:text-foreground">Experience</a>
            <a href="#about" className="transition hover:text-foreground">About</a>
            <a href="#contact" className="transition hover:text-foreground">Contact</a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Let&apos;s talk
          </a>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Hero */}
        <header className="grid gap-6 py-16 md:grid-cols-[1.5fr_1fr]">
  <div className="flex flex-col justify-center rounded-xl border border-border bg-card px-9 py-10 md:px-11">
    {/* Subheader with blinking green dot and matched site typography */}
    <div className="mb-4 flex items-center gap-2">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <p className="text-sm font-semibold tracking-wide text-foreground">
        Software Engineer · Open to opportunities
      </p>
    </div>

    <h1 className="mb-5 text-[2.35rem] font-extrabold leading-[1.2] tracking-tight text-foreground sm:text-[2.75rem]">
      Full-stack engineer focused on{" "}
      <span className="text-accent">reliable systems</span> and AI evaluation
    </h1>
    
    <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted">
      I build production web applications and apply the same engineering discipline to AI evaluation work — clear rubrics, structured rationales, and reproducible pipelines.
    </p>
    
    <div className="flex flex-wrap gap-3">
      <a href="#work" className="inline-flex items-center rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90">
        View work
      </a>
      <a href="#contact" className="inline-flex items-center rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-card">
        Get in touch
      </a>
    </div>
  </div>

  <div className="flex flex-col gap-4">
    {/* Right container changed to black with accessible text colors */}
    <div className="flex flex-1 flex-col justify-center rounded-xl border border-zinc-800 bg-black px-7 py-7">
      <div className="space-y-5">
        <div>
          <p className="text-sm font-medium text-zinc-400">Focus</p>
          <p className="mt-1 text-base font-bold text-white">Systems · AI Evaluation</p>
        </div>
        <div>
          <p className="text-sm font-medium text-zinc-400">Location</p>
          <p className="mt-1 text-base font-bold text-white">Nairobi, Kenya · Remote</p>
        </div>
        <div>
          <p className="text-sm font-medium text-zinc-400">Education</p>
          <p className="mt-1 text-base font-bold text-white">BSc Computer Technology</p>
        </div>
      </div>
    </div>

         <div className="rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Location</p>
              <p className="mt-1 font-medium text-slate-900">Nairobi, Kenya · Remote</p>
          </div>
  </div>
</header>


        {/* Scrolling tech bar */}
        <div className="marquee-mask relative overflow-hidden border-y border-border py-5 bg-background">
          <div className="marquee-track">
            {techLoop.map((tech, i) => (
              <span key={i} className="flex items-center">
                <span className="px-5 text-3xl font-medium text-slate-500 whitespace-nowrap">
                  {tech}
                </span>
                <span className="text-border text-2xl">◆</span>
              </span>
            ))}
          </div>
        </div>

        {/* Skills */}
        <section id="skills" className="scroll-mt-20 py-16">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-accent">
            Skills
          </p>
          <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-foreground">Technical capabilities</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Languages", items: ["Python", "TypeScript", "JavaScript", "SQL", "Bash"] },
              { title: "Backend & Systems", items: ["Node.js", "Nest.js", "FastAPI", "Flask", "PostgreSQL", "Docker"] },
              { title: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
              { title: "AI & Evaluation", items: ["LLM Evaluation", "Rubric Design", "Dataset Curation", "OpenAI API"] },
              { title: "Engineering Practice", items: ["Debugging", "Refactoring", "Testing", "Code Review", "CI/CD"] },
              { title: "Data", items: ["PostgreSQL", "MySQL", "MongoDB", "Pandas"] },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-lg border border-border bg-card p-5 transition hover:border-muted"
              >
                <h3 className="mb-3 text-sm font-bold text-foreground">{card.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {card.items.map((item) => (
                    <span
                      key={item}
                      className="rounded bg-background border border-border px-2.5 py-1 text-[13px] font-medium text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

                {/* Projects */}
        <section id="work" className="scroll-mt-20 py-16 border-t border-border">
          <p className="mb-2 text-[11px] font-mono uppercase tracking-[0.25em] text-muted">
            02 — SELECTED WORK
          </p>
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground">Recent projects</h2>
          <p className="mb-8 max-w-xl text-base text-muted">
            Work that demonstrates both product delivery and evaluation discipline.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                cat: "AI Evaluation",
                title: "LLM Response Evaluation Harness",
                desc: "TypeScript/Node tool that batches prompts across models, ranks outputs against multi-dimensional rubrics, and exports structured rationales with JSONL datasets for supervised fine-tuning.",
                tags: ["TypeScript", "Node.js", "OpenAI", "Evaluation"],
              },
              {
                cat: "Engineering",
                title: "Reproducible Debugging Task Set",
                desc: "Containerised broken-repo scenarios (failing tests, bad merges, misconfigured builds) paired with verified golden-patch solutions and automated pass/fail scripts.",
                tags: ["Python", "Docker", "Git", "CI"],
              },
              {
                cat: "Full Stack",
                title: "Task Management Platform",
                desc: "End-to-end application with JWT authentication, role-based access control, modular Nest.js API, and typed React frontend. Fully containerized for consistent deployment.",
                tags: ["Nest.js", "React", "PostgreSQL", "Docker"],
              },
              {
                cat: "Full Stack",
                title: "Real-Time Metrics Dashboard",
                desc: "Operational metrics streamed to a React dashboard over WebSockets, backed by a typed Node service and efficient SQL aggregation queries.",
                tags: ["React", "WebSockets", "Node.js", "PostgreSQL"],
              },
            ].map((project) => (
              <article
                key={project.title}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 transition hover:border-muted/40 hover:bg-card/70"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted font-semibold">
                    {project.cat}
                  </span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-background text-sm text-foreground transition group-hover:bg-foreground group-hover:text-background">
                    ↗
                  </span>
                </div>
                <h3 className="mb-2 text-base font-bold text-foreground">{project.title}</h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 font-mono">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-background border border-border px-2.5 py-0.5 text-xs text-muted font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-20 py-16 border-t border-border">
          <p className="mb-2 text-[11px] font-mono uppercase tracking-[0.25em] text-muted">
            03 — EXPERIENCE
          </p>
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground">Professional experience</h2>
          <div className="space-y-4">
            {[
              {
                role: "Software Engineer",
                org: "Freelance / Contract",
                period: "2023 – Present",
                location: "Remote",
                points: [
                  "Designed and shipped full-stack applications in TypeScript and Python used by operational teams.",
                  "Diagnosed production issues (race conditions, memory growth, slow queries) by reproducing failures in isolated Docker environments.",
                  "Established CI pipelines and wrote detailed code-review rationales covering correctness, readability, and trade-offs.",
                ],
              },
              {
                role: "Data Analyst",
                org: "Converge Catalyst",
                period: "2022",
                location: "Nairobi, Kenya",
                points: [
                  "Built Python data pipelines that replaced manual spreadsheet workflows with repeatable, documented processes.",
                  "Defined acceptance criteria and documented discrepancies with evidence — the same discipline required for high-quality evaluation datasets.",
                ],
              },
              {
                role: "IT / Web Developer",
                org: "Kenya Airways",
                period: "2019",
                location: "Nairobi, Kenya",
                points: [
                  "Developed internal web tools used daily by operational staff, with emphasis on reliability and clear failure handling.",
                  "Automated recurring workflows, reducing manual effort and operational error.",
                ],
              },
            ].map((job) => (
              <div
                key={job.role + job.org}
                className="grid gap-2 rounded-xl border border-border bg-card p-6 sm:grid-cols-[160px_1fr] sm:gap-6"
              >
                <div className="text-sm font-mono text-muted">
                  <p className="font-bold text-foreground">{job.period}</p>
                  <p className="mt-0.5 text-xs">{job.location}</p>
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-foreground">
                    {job.role}
                    <span className="font-normal font-mono text-xs text-muted"> · {job.org}</span>
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {job.points.map((point, i) => (
                      <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted/60" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-20 py-16 border-t border-border">
          <p className="mb-2 text-[11px] font-mono uppercase tracking-[0.25em] text-muted">
            04 — ABOUT
          </p>
          <div className="grid gap-5 md:grid-cols-[1.55fr_1fr]">
            <div className="rounded-xl border border-border bg-card p-7 flex flex-col justify-between">
              <div>
                <h2 className="mb-4 text-xl font-bold tracking-tight text-foreground">
                  A tech-savvy generalist who ships.
                </h2>
                <div className="space-y-3 text-sm md:text-base leading-relaxed text-muted">
                  <p>
                    Software engineer based in Kenya, working remotely. My work sits at the 
                    intersection of full-stack delivery and the practices required for high-quality 
                    AI systems — clear specifications, reproducible environments, rigorous evaluation, 
                    and well-documented reasoning.
                  </p>
                  <p>
                    Comfortable owning systems end-to-end: designing APIs, modelling data, 
                    building React interfaces, containerising services, and writing the tests 
                    and CI pipelines that keep them reliable.
                  </p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-1.5 font-mono">
                {["Problem solver", "Fast learner", "Detail obsessed", "Product minded"].map((tag) => (
                  <span key={tag} className="rounded-full border border-border bg-background px-3 py-1 text-[11px] text-muted font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-7 flex flex-col justify-between">
              <div>
                <div className="mb-4 text-2xl">🎓</div>
                <div className="mb-6">
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted mb-1">Education</p>
                  <p className="text-base font-bold text-foreground">BSc, Computer Technology</p>
                </div>
                <div className="mb-6">
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted mb-1">Focus</p>
                  <p className="text-base font-bold text-foreground">Full stack · AI systems</p>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted mb-1">Currently</p>
                <p className="text-base font-bold text-foreground">Open to freelance & roles</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 py-16 border-t border-border">
          <p className="mb-2 text-[11px] font-mono uppercase tracking-[0.25em] text-muted">
            05 — CONTACT
          </p>
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="grid md:grid-cols-[1.3fr_1fr]">
              <div className="px-8 py-10 md:px-10 md:py-12">
                <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Have an idea?<br />Let&apos;s build it.
                </h2>
                <p className="mb-8 max-w-md text-sm leading-relaxed text-muted">
                  Open to remote software engineering roles, AI evaluation and data quality work, 
                  and selected contract projects. I typically reply within 24 hours.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:kutoty004@gmail.com"
                    className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90"
                  >
                    ✉ kutoty004@gmail.com
                  </a>
                </div>
                <div className="mt-8 flex gap-5 text-sm font-mono text-muted">
                  <a
                    href="https://github.com/kutoty"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-foreground border-b border-transparent hover:border-foreground pb-0.5"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/kisiofrancis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-foreground border-b border-transparent hover:border-foreground pb-0.5"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="mailto:kutoty004@gmail.com" 
                    className="transition hover:text-foreground border-b border-transparent hover:border-foreground pb-0.5"
                  >
                    Email
                  </a>
                </div>
              </div>
              
              {/* Sidebar metadata tracking column */}
              <div className="flex flex-col justify-center border-t border-border px-8 py-8 md:border-l md:border-t-0 md:px-10 bg-background/40">
                <p className="mb-4 text-[10px] font-mono uppercase tracking-wider text-muted font-bold">
                  Quick details
                </p>
                <ul className="space-y-4 text-sm font-medium">
                  <li className="flex justify-between gap-4">
                    <span className="text-muted font-normal">Location</span>
                    <span className="text-right text-foreground">Nairobi · Remote</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span className="text-muted font-normal">Timezone</span>
                    <span className="text-right text-foreground">EAT (UTC+3)</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span className="text-muted font-normal">Availability</span>
                    <span className="text-right text-emerald-600 font-bold">Open to roles</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span className="text-slate-500 font-normal">Response time</span>
                    <span className="text-right text-foreground">Within 24 hours</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>


        {/* Footer */}
        <footer className="border-t border-white/[0.06] py-10 text-center text-sm text-slate-600">
          <p>© 2026 Francis Kisio · Built with care</p>
        </footer>
      </main>
    </div>
  );
}