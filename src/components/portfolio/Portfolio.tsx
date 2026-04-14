import { useState, useEffect } from "react";
import Particles from "./Particles";
import CursorGlow from "./CursorGlow";
import ProjectCover from "./ProjectCover";
import {
  ME, ACC, SKILLS_CORE, SKILLS_TOOLS, SKILLS_SOON, NETWORKING,
  PROJECTS, EXPERIENCE, EDUCATION, SECTIONS, LABELS,
} from "./data";

function Tag({ c, children }: { c: string; children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold font-mono"
      style={{ background: c + "1e", color: c, border: `1px solid ${c}44` }}
    >
      {children}
    </span>
  );
}

function SectionTitle({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <div className="mb-10">
      <h2 className="font-outfit text-[clamp(1.9rem,4vw,2.7rem)] font-black leading-none">{children}</h2>
      <div className="w-13 h-1 rounded-sm mt-3" style={{ background: color }} />
    </div>
  );
}

function PortfolioCard({ children, className = "", borderColor }: { children: React.ReactNode; className?: string; borderColor?: string }) {
  return (
    <div
      className={`bg-card border border-border rounded-[20px] p-5 md:p-6 transition-transform duration-250 hover:-translate-y-1 hover:shadow-lg ${className}`}
      style={borderColor ? { borderLeftColor: borderColor, borderLeftWidth: 4 } : undefined}
    >
      {children}
    </div>
  );
}

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [active, setActive] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.3 }
    );
    SECTIONS.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="font-outfit bg-background text-foreground min-h-screen overflow-x-hidden">
      <CursorGlow />

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-[22px] bg-background/88 border-b border-border flex items-center justify-between px-4 md:px-10 h-16">
        <span className="font-black text-xl cursor-pointer" onClick={() => go("hero")}>
          <span className="glow-text">amr.</span>
          <span className="text-muted-foreground">dev</span>
        </span>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {LABELS.slice(1).map((l, i) => (
            <button
              key={l}
              onClick={() => go(SECTIONS[i + 1])}
              className={`text-[13px] px-3.5 py-1.5 rounded-full font-semibold transition-colors cursor-pointer
                ${active === SECTIONS[i + 1]
                  ? "text-portfolio-purple bg-portfolio-purple/10"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {l}
            </button>
          ))}
          <button
            onClick={() => setDark(!dark)}
            className="ml-2 w-10 h-10 rounded-full text-lg bg-portfolio-subtle border border-border flex items-center justify-center cursor-pointer"
          >
            {dark ? "☀" : "🌙"}
          </button>
        </div>

        {/* Mobile hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button onClick={() => setDark(!dark)} className="w-10 h-10 rounded-full text-lg bg-portfolio-subtle border border-border flex items-center justify-center cursor-pointer">
            {dark ? "☀" : "🌙"}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="w-10 h-10 rounded-full bg-portfolio-subtle border border-border flex items-center justify-center cursor-pointer text-lg">
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-[99] bg-background/95 backdrop-blur-xl md:hidden flex flex-col items-center pt-8 gap-2">
          {LABELS.slice(1).map((l, i) => (
            <button
              key={l}
              onClick={() => go(SECTIONS[i + 1])}
              className={`text-base px-6 py-3 rounded-xl font-semibold w-48 text-center cursor-pointer transition-colors
                ${active === SECTIONS[i + 1] ? "text-portfolio-purple bg-portfolio-purple/10" : "text-muted-foreground"}`}
            >
              {l}
            </button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        <Particles dark={dark} />
        {/* Orbs */}
        {[
          { c: "#7C5CFC", x: "-8%", y: "5%", s: 550 },
          { c: "#FF5E84", x: "68%", y: "55%", s: 420 },
          { c: "#00E5BE", x: "45%", y: "-8%", s: 320 },
        ].map((o, i) => (
          <div key={i} className="absolute rounded-full pointer-events-none blur-[130px]"
            style={{ left: o.x, top: o.y, width: o.s, height: o.s, background: o.c, opacity: dark ? 0.11 : 0.06 }} />
        ))}

        <div className="max-w-[1020px] w-full px-6 md:px-10 relative z-[1] grid grid-cols-1 md:grid-cols-[1fr_320px] gap-10 md:gap-16 items-center">
          {/* Left */}
          <div>
            <div className="animate-fade-up mb-6" style={{ animationDelay: ".05s" }}>
              <span className="inline-flex items-center gap-2 bg-portfolio-purple/10 border border-portfolio-purple/25 rounded-full px-4 py-1.5 text-[13px] text-portfolio-purple font-bold font-mono">
                <span className="w-2 h-2 rounded-full bg-portfolio-teal animate-pulse-dot inline-block" />
                Open to opportunities
              </span>
            </div>

            <h1 className="animate-fade-up text-[clamp(2.2rem,5.5vw,4.4rem)] font-black leading-[1.05] mb-4" style={{ animationDelay: ".15s" }}>
              Hi, I'm<br />
              <span className="glow-text">{ME.name}</span>
            </h1>

            <p className="animate-fade-up text-[17px] text-muted-foreground leading-relaxed mb-8 max-w-[480px]" style={{ animationDelay: ".25s" }}>
              {ME.tagline}
            </p>

            <div className="animate-fade-up flex gap-3 flex-wrap mb-8" style={{ animationDelay: ".35s" }}>
              <button onClick={() => go("projects")} className="cursor-pointer font-semibold rounded-[14px] px-6 py-3 text-[15px] text-primary-foreground inline-flex items-center gap-2 transition-transform hover:scale-[1.04] active:scale-[0.97]" style={{ background: "linear-gradient(135deg,#7C5CFC,#FF5E84)" }}>
                View My Work →
              </button>
              <a href="https://drive.google.com/file/d/19IqkrJhjcGJw4fC12Pr-qarkvazcslBi/view" target="_blank" download className="font-semibold rounded-[14px] px-6 py-3 text-[15px] bg-portfolio-subtle border border-border inline-flex items-center gap-2 transition-transform hover:scale-[1.04]">
                📄 Download CV
              </a>
              <button onClick={() => go("contact")} className="cursor-pointer font-semibold rounded-[14px] px-6 py-3 text-[15px] text-portfolio-teal border border-portfolio-teal/30 bg-transparent inline-flex items-center gap-2 transition-transform hover:scale-[1.04]">
                Contact Me
              </button>
            </div>

            <div className="animate-fade-up flex gap-2 flex-wrap" style={{ animationDelay: ".45s" }}>
              {["React","JavaScript","Tailwind CSS","Git","Firebase","Java"].map((s, i) => (
                <Tag key={s} c={ACC[i % ACC.length]}>{s}</Tag>
              ))}
            </div>
          </div>

          {/* Right – avatar */}
          <div className="animate-fade-up hidden md:flex flex-col items-center gap-5" style={{ animationDelay: ".3s" }}>
            <div className="relative animate-float">
              <div className="animate-spin-slow rounded-full p-[3px]" style={{ background: "conic-gradient(#7C5CFC,#FF5E84,#00E5BE,#FF9F43,#7C5CFC)" }}>
                <div className="bg-background rounded-full p-1.5">
                  <div className="w-[220px] h-[220px] rounded-full bg-portfolio-subtle flex items-center justify-center text-[90px]">👨‍💻</div>
                </div>
              </div>
              {[
                { label: "React Dev", val: "⚛", c: "#61DBFB", pos: "top-[-20px] right-[-50px]" },
                { label: "Open Source", val: "🐙", c: "#7C5CFC", pos: "top-[60px] right-[-60px]" },
                { label: "4+ Projects", val: "🚀", c: "#00E5BE", pos: "bottom-[-18px] right-[-40px]" },
                { label: "Giza 🇪🇬", val: "📍", c: "#FF5E84", pos: "bottom-[30px] left-[-58px]" },
                { label: "Problem Solver", val: "🧠", c: "#FF9F43", pos: "top-[-10px] left-[-52px]" },
              ].map(b => (
                <div key={b.label} className={`absolute ${b.pos} bg-background/90 backdrop-blur-sm rounded-2xl px-3.5 py-2.5 text-center min-w-[68px]`}
                  style={{ border: `1.5px solid ${b.c}55`, boxShadow: `0 4px 22px ${b.c}33` }}>
                  <div className="text-[22px] leading-none mb-1">{b.val}</div>
                  <div className="text-[10px] font-bold font-mono whitespace-nowrap" style={{ color: b.c }}>{b.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 md:py-24 px-6 md:px-10 relative z-[1]">
        <div className="max-w-[900px] mx-auto">
          <SectionTitle color="#FF5E84">About Me</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6">
            <PortfolioCard>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">{ME.about}</p>
              <div className="flex gap-2.5 flex-wrap">
                {[{ lang: "Arabic", lvl: "Native" }, { lang: "English", lvl: "Fluent" }].map(l => (
                  <span key={l.lang} className="bg-portfolio-purple/10 text-portfolio-purple border border-portfolio-purple/20 rounded-full px-4 py-1.5 text-[13px] font-semibold font-mono">
                    {l.lang} · {l.lvl}
                  </span>
                ))}
              </div>
            </PortfolioCard>
            <div className="flex flex-col gap-3">
              {[
                { icon: "📧", label: "Email", val: ME.email, c: "#FF5E84", href: `mailto:${ME.email}` },
                { icon: "🔗", label: "LinkedIn", val: "amr-moussa-ahmed", c: "#4D96FF", href: ME.linkedin },
                { icon: "📍", label: "Location", val: ME.location, c: "#00E5BE", href: null },
                { icon: "📞", label: "Phone", val: ME.phone, c: "#FF9F43", href: `tel:${ME.phone}` },
              ].map(item => (
                <a key={item.label} href={item.href || "#"}
                  className="flex items-center gap-3.5 bg-card rounded-2xl px-4 py-3 transition-transform hover:translate-x-1.5"
                  style={{ border: `1px solid ${item.c}33` }}>
                  <div className="w-10 h-10 rounded-[10px] flex items-center justify-center text-[17px] shrink-0" style={{ background: item.c + "22" }}>{item.icon}</div>
                  <div>
                    <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider mb-0.5">{item.label}</div>
                    <div className="text-[13px] font-medium break-all">{item.val}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 md:py-24 px-6 md:px-10 bg-secondary relative z-[1]">
        <div className="max-w-[900px] mx-auto">
          <SectionTitle color="#7C5CFC">My Skillset</SectionTitle>

          {[
            { title: "Core Technologies", items: SKILLS_CORE, c: "#7C5CFC" },
            { title: "Tools & Platforms", items: SKILLS_TOOLS, c: "#00E5BE" },
          ].map(group => (
            <div key={group.title} className="mb-10">
              <div className="text-[12px] font-bold uppercase tracking-widest mb-4 font-mono" style={{ color: group.c }}>{group.title}</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {group.items.map(s => (
                  <PortfolioCard key={s.name} className="flex gap-3.5 items-start !p-4" borderColor={s.c}>
                    <div className="w-10 h-10 rounded-[10px] flex items-center justify-center text-[13px] shrink-0 font-mono font-bold" style={{ background: s.c + "22", color: s.c }}>{s.icon}</div>
                    <div>
                      <div className="font-bold text-sm mb-0.5">{s.name}</div>
                      <div className="text-[12px] text-muted-foreground leading-relaxed">{s.desc}</div>
                    </div>
                  </PortfolioCard>
                ))}
              </div>
            </div>
          ))}

          <div className="mb-9">
            <div className="text-[12px] font-bold uppercase tracking-widest mb-4 font-mono text-portfolio-orange">Currently Learning</div>
            <div className="flex gap-3 flex-wrap">
              {SKILLS_SOON.map((s, i) => (
                <div key={s} className="flex items-center gap-2.5 px-5 py-2.5 bg-card rounded-[14px]" style={{ border: `1px solid ${ACC[(i + 3) % ACC.length]}44` }}>
                  <span className="text-[11px] bg-portfolio-subtle text-muted-foreground rounded-md px-2 py-0.5 font-mono">learning</span>
                  <span className="font-bold text-sm" style={{ color: ACC[(i + 3) % ACC.length] }}>{s}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[12px] font-bold uppercase tracking-widest mb-4 font-mono text-portfolio-pink">Networking</div>
            <div className="flex flex-wrap gap-2">
              {NETWORKING.map(s => <Tag key={s} c="#FF5E84">{s}</Tag>)}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 md:py-24 px-6 md:px-10 relative z-[1]">
        <div className="max-w-[900px] mx-auto">
          <SectionTitle color="#00E5BE">Featured Projects</SectionTitle>
          <p className="text-muted-foreground text-[15px] mb-12 max-w-[500px]">Showcasing my ability to build modern, responsive, and functional web applications.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PROJECTS.map(p => (
              <div key={p.name} className="bg-card border border-border rounded-[22px] overflow-hidden transition-transform duration-250 hover:-translate-y-1.5 hover:shadow-xl">
                <div className="h-[166px] overflow-hidden"><ProjectCover p={p} /></div>
                <div className="p-5">
                  <div className="text-[10px] font-bold uppercase tracking-wider mb-2 font-mono" style={{ color: p.accent }}>{p.type}</div>
                  <h3 className="text-lg font-extrabold mb-2.5">{p.name}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map(t => <Tag key={t} c={p.accent}>{t}</Tag>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-20 md:py-24 px-6 md:px-10 bg-secondary relative z-[1]">
        <div className="max-w-[900px] mx-auto">
          <SectionTitle color="#FF9F43">Experience</SectionTitle>
          <div className="flex flex-col gap-5 mb-12">
            {EXPERIENCE.map((e, i) => (
              <PortfolioCard key={i} borderColor={e.c} className="!pl-5">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div>
                    <h3 className="text-lg font-extrabold mb-1">{e.role}</h3>
                    <p className="text-[13px] font-bold font-mono mb-3" style={{ color: e.c }}>{e.company}</p>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">{e.desc}</p>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <div className="rounded-[10px] px-3.5 py-1 text-[11px] font-bold font-mono mb-1.5 whitespace-nowrap inline-block" style={{ background: e.c + "22", color: e.c }}>{e.period}</div>
                    <div className="text-[12px] text-muted-foreground">📍 {e.location}</div>
                  </div>
                </div>
              </PortfolioCard>
            ))}
          </div>
          <h3 className="text-xl font-extrabold mb-4">Courses & Certifications</h3>
          <div className="flex flex-col gap-2.5">
            {EDUCATION.courses.map((c, i) => (
              <div key={i} className="flex items-center gap-4 bg-card border border-border rounded-[14px] px-5 py-3">
                <div className="w-2 h-2 rounded-full shrink-0" style={{ background: ACC[i % ACC.length] }} />
                <span className="text-sm font-medium">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="py-20 md:py-24 px-6 md:px-10 relative z-[1]">
        <div className="max-w-[900px] mx-auto">
          <SectionTitle color="#4D96FF">Education & Learning Journey</SectionTitle>
          <PortfolioCard className="!border-t-4 !border-t-portfolio-blue mb-9">
            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
              <div className="w-14 h-14 rounded-2xl bg-portfolio-blue/10 flex items-center justify-center text-[28px] shrink-0">🎓</div>
              <div className="flex-1">
                <h3 className="text-xl font-extrabold mb-0.5">{EDUCATION.degree}</h3>
                <p className="text-[13px] text-portfolio-blue font-bold font-mono">{EDUCATION.school}</p>
              </div>
              <div className="sm:text-right">
                <div className="bg-portfolio-blue/10 text-portfolio-blue rounded-[10px] px-3.5 py-1 text-[12px] font-bold font-mono mb-1.5 inline-block">{EDUCATION.period}</div>
                <div className="text-[12px] text-muted-foreground">Computer Science</div>
              </div>
            </div>
          </PortfolioCard>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-9">
            {EDUCATION.journey.map((j, i) => (
              <PortfolioCard key={i}>
                <div className="w-9 h-9 rounded-[10px] flex items-center justify-center font-black text-lg mb-3.5" style={{ background: ACC[i] + "22", color: ACC[i] }}>{j.n}</div>
                <div className="font-bold text-sm mb-1.5">{j.t}</div>
                <div className="text-[12px] text-muted-foreground leading-relaxed">{j.d}</div>
              </PortfolioCard>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {EDUCATION.values.map((v, i) => (
              <PortfolioCard key={i} className="text-center">
                <div className="text-[28px] mb-2.5">{v.icon}</div>
                <div className="font-bold text-sm mb-1.5">{v.t}</div>
                <div className="text-[12px] text-muted-foreground leading-relaxed">{v.d}</div>
              </PortfolioCard>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 md:py-24 pb-16 px-6 md:px-10 bg-secondary relative z-[1]">
        <div className="max-w-[900px] mx-auto">
          <SectionTitle color="#FF5E84">Contact Me</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <PortfolioCard>
              <h3 className="text-[22px] font-extrabold mb-2.5">Let's work together</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">I'm open to internships, freelance projects, and collaborations. Feel free to reach out — I'd love to hear about your project!</p>
              <div className="flex flex-col gap-2.5">
                <a href={`mailto:${ME.email}`} className="font-semibold rounded-[14px] py-3 text-sm text-center text-primary-foreground transition-transform hover:scale-[1.02]" style={{ background: "linear-gradient(135deg,#7C5CFC,#FF5E84)" }}>📧 Send an Email</a>
                <a href={ME.linkedin} target="_blank" rel="noreferrer" className="bg-portfolio-blue/10 text-portfolio-blue border border-portfolio-blue/25 font-semibold rounded-[14px] py-3 text-sm text-center transition-transform hover:scale-[1.02]">🔗 Connect on LinkedIn</a>
                <a href="https://drive.google.com/file/d/19IqkrJhjcGJw4fC12Pr-qarkvazcslBi/view?usp=sharing" target="_blank" className="bg-portfolio-subtle border border-border font-semibold rounded-[14px] py-3 text-sm text-center transition-transform hover:scale-[1.02]">📄 Download CV</a>
              </div>
            </PortfolioCard>
            <div className="flex flex-col gap-3">
              {[
                { icon: "📧", label: "Email", val: ME.email, c: "#FF5E84", href: `mailto:${ME.email}` },
                { icon: "🔗", label: "LinkedIn", val: "amr-moussa-ahmed", c: "#4D96FF", href: ME.linkedin },
                { icon: "📍", label: "Location", val: ME.location, c: "#00E5BE", href: null },
                { icon: "📞", label: "Phone", val: ME.phone, c: "#FF9F43", href: `tel:${ME.phone}` },
              ].map(item => (
                <a key={item.label} href={item.href || "#"}
                  className="flex items-center gap-3.5 bg-card rounded-2xl px-4 py-3 transition-transform hover:translate-x-1.5"
                  style={{ border: `1px solid ${item.c}33` }}>
                  <div className="w-10 h-10 rounded-[10px] flex items-center justify-center text-[17px] shrink-0" style={{ background: item.c + "22" }}>{item.icon}</div>
                  <div>
                    <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider mb-0.5">{item.label}</div>
                    <div className="text-[13px] font-medium break-all">{item.val}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="text-center mt-14 pt-7 border-t border-border">
            <p className="text-[12px] text-muted-foreground font-mono">
              Thanks for reviewing my portfolio ❤ · Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
