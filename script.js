/**
 * Pari Garg Portfolio — Main Script
 */

(function () {
  "use strict";

  const CONFIG = {
    email: "pari216garg@gmail.com",
  };

  /* ---- Data ---- */
  const EXPERIENCE = [
    {
      role: "Full Stack Development & Generative AI Intern",
      organization: "Indira Gandhi Delhi Technological University for Women",
      location: "Delhi, India",
      period: "06/2026 – 07/2026",
      icon: "💼",
      bullets: [
        "Worked on full-stack web development project and gained hands-on experience in designing and developing modern web applications.",
        "Developed and integrated frontend and backend components for real-world applications.",
        "Explored and implemented Generative AI capabilities within web-based applications.",
        "Worked with APIs, databases, and modern development tools to build functional and scalable solutions.",
        "Worked with React, Node.js, and MongoDB to develop and integrate complete web application workflows."
      ],
      tags: ["React", "Node.js", "MongoDB", "Generative AI", "REST APIs", "Full Stack"]
    }
  ];

  const SKILLS = [
    { category: "Languages", items: ["C", "C++", "JavaScript", "TypeScript", "Python", "R"], icon: "💻" },
    { category: "Frontend", items: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"], icon: "🎨" },
    { category: "Backend & Database", items: ["Node.js", "MongoDB", "Supabase", "Neon PostgreSQL", "Firebase"], icon: "🗄️" },
    { category: "AI & APIs", items: ["Generative AI", "AI Integration", "REST APIs"], icon: "🤖" },
    { category: "Tools & Platforms", items: ["Git", "GitHub", "VS Code", "Vercel"], icon: "🛠️" },
    { category: "Concepts & Certifications", items: ["Data Structures & Algorithms in C++ (DICS Innovatives)", "Object-Oriented Programming"], icon: "🧠" }
  ];

  const PROJECTS = [
    {
      title: "TravelMindAI",
      emoji: "✈️",
      description:
        "Developed an AI-powered smart travel planning platform featuring AI itinerary generation, budget and expense tracking, hotel suggestions, packing checklists, travel journals, and an AI travel assistant. Built with secure authentication and backend modular AI services.",
      tags: ["React", "Node.js", "Generative AI", "MongoDB"],
      github: "https://github.com/pari-216/TravelMindAI",
      demo: null,
      period: "06/2026 – 07/2026"
    },
    {
      title: "AudienceLens",
      emoji: "📊",
      description:
        "AI-powered platform to analyze creator and audience data to support informed campaign decisions before launch. Integrated social media data and AI analysis to generate actionable insights. Selected among Top 40 Finalists at Hackfluence 2026 (Team Vibecoders).",
      tags: ["Next.js", "TypeScript", "Generative AI", "Apify API"],
      github: "https://github.com/pari-216/AudienceLens",
      demo: null,
      period: "06/2026 – 06/2026"
    },
    {
      title: "PingD — Operational Inbox",
      emoji: "📥",
      description:
        "AI-powered operational inbox built during AutomateIndia HackDriven at Microsoft Office, Noida. Secured a top 12 position in the Notion Track.",
      tags: ["Generative AI", "Node.js", "React", "Notion API"],
      github: "https://github.com/pari-216",
      demo: null,
      period: "2026"
    },
    {
      title: "Aurora Weather App",
      emoji: "🌤️",
      description:
        "A beautiful weather application with clean UI, location-based forecasts, and smooth animations for a delightful user experience.",
      tags: ["Kotlin", "Android", "Jetpack Compose", "API"],
      github: "https://github.com/pari-216/Aurora-Weather",
      demo: "https://aurora-weather-rosy.vercel.app/",
      period: "2025"
    },
    {
      title: "To-Do List App",
      emoji: "📝",
      description:
        "A minimalist task manager with add, edit, delete, and local persistence — designed for clarity and everyday productivity.",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/pari-216/To-Do-List",
      demo: "https://to-do-list-iota-ivory.vercel.app/",
      period: "2025"
    }
  ];

  const ACHIEVEMENTS = [
    {
      icon: "🏆",
      badge: "Top 12 Teams (Notion Track)",
      title: "AutomateIndia — HackDriven",
      subtitle: "Microsoft Office, Noida (2026)",
      description:
        "Secured a position among the Top 12 teams in the Notion Track for building PingD, an AI-powered operational inbox.",
      tags: ["Generative AI", "Hackathon", "Notion Track"],
      accent: "lavender",
    },
    {
      icon: "🌟",
      badge: "Top 40 Finalist",
      title: "Hackfluence 2026",
      subtitle: "Team Vibecoders (2026)",
      description:
        "Selected among the Top 40 Finalists for developing AudienceLens, an AI-powered campaign pre-flight system for the creator economy.",
      tags: ["Next.js", "AI", "Apify API", "Creator Economy"],
      accent: "sunshine",
    },
    {
      icon: "🏅",
      badge: "Top 10 / 50 Teams",
      title: "Ideathon — Enactus NSUT",
      subtitle: "NSUT (2026)",
      description:
        "Secured among Top 10 teams out of 50 for developing an AI-based solution to predict pharmaceutical tablet quality.",
      tags: ["AI/ML", "Ideathon", "Healthcare Tech"],
      accent: "lavender",
    },
    {
      icon: "⭐",
      badge: "Top 100 / 250 Teams",
      title: "Makeathon 8 — Thapar University",
      subtitle: "Microsoft Student Ambassadors (2025)",
      description:
        "Ranked among Top 100 teams out of 250 for building an AI-based nurse shift handoff system.",
      tags: ["AI/ML", "Makeathon", "Microsoft"],
      accent: "sunshine",
    },
  ];

  const EDUCATION = [
    {
      title: "B.Tech in Computer Science Engineering",
      institution: "Indira Gandhi Delhi Technological University for Women (IGDTUW)",
      period: "Present",
      detail: "Computer Science Engineering student focusing on full-stack web, Generative AI, and software development fundamentals.",
      badge: "SGPA Semester 1: 7.95 / 10",
    },
    {
      title: "Class XII",
      institution: "P.D. Model Sr. Sec. School",
      period: "2025",
      detail: "Completed Senior Secondary education with high academic distinction.",
      badge: "Score: 90%",
    },
    {
      title: "Class X",
      institution: "Jagannath International School",
      period: "2023",
      detail: "Completed Secondary education with excellence in core science and mathematics.",
      badge: "Score: 91%",
    },
  ];

  /* ---- DOM Ready ---- */
  document.addEventListener("DOMContentLoaded", init);

  function init() {
    renderExperience();
    renderSkills();
    renderProjects();
    renderAchievements();
    renderEducation();
    initLoader();
    initCursorGlow();
    initPetals();
    initParticles();
    initNav();
    initPrintResume();
    initEmailLink();
    initScrollReveal();
    initActiveNav();
    initContactForm();
    setYear();
  }

  /* ---- Render Experience ---- */
  function renderExperience() {
    const container = document.getElementById("experience-container");
    if (!container) return;

    container.innerHTML = EXPERIENCE.map(
      (exp) => `
      <article class="experience-card glass-card">
        <div class="experience-header">
          <div class="experience-title-wrap">
            <span class="experience-icon">${exp.icon}</span>
            <div>
              <h3 class="experience-role">${escapeHtml(exp.role)}</h3>
              <p class="experience-org">${escapeHtml(exp.organization)}</p>
            </div>
          </div>
          <div class="experience-meta">
            <span class="experience-period">${escapeHtml(exp.period)}</span>
            <span class="experience-location">📍 ${escapeHtml(exp.location)}</span>
          </div>
        </div>
        <ul class="experience-bullets">
          ${exp.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
        </ul>
        <div class="experience-tags">
          ${exp.tags.map((t) => `<span class="experience-tag">${escapeHtml(t)}</span>`).join("")}
        </div>
      </article>
    `
    ).join("");
  }

  /* ---- Render Skills ---- */
  function renderSkills() {
    const grid = document.getElementById("skills-grid");
    if (!grid) return;

    grid.innerHTML = SKILLS.map(
      (cat, i) => `
      <article class="skill-category-card glass-card" tabindex="0" style="--delay:${i * 0.06}s">
        <div class="skill-category-header">
          <span class="skill-category-icon" aria-hidden="true">${cat.icon}</span>
          <h3 class="skill-category-title">${escapeHtml(cat.category)}</h3>
        </div>
        <div class="skill-pills">
          ${cat.items.map((item) => `<span class="skill-pill">${escapeHtml(item)}</span>`).join("")}
        </div>
      </article>
    `
    ).join("");
  }

  /* ---- Render Projects ---- */
  function renderProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    grid.innerHTML = PROJECTS.map((p) => {
      const demoBtn = p.demo
        ? `<a href="${escapeHtml(p.demo)}" class="btn btn-demo" target="_blank" rel="noopener noreferrer" aria-label="Live demo of ${escapeHtml(p.title)}">Live Demo</a>`
        : `<span class="btn btn-demo btn-disabled" aria-disabled="true" title="Coming soon">Live Demo</span>`;

      return `
      <article class="project-card glass-card">
        <div class="project-visual" aria-hidden="true">${p.emoji}</div>
        <div class="project-body">
          <div class="project-header-meta">
            <h3>${escapeHtml(p.title)}</h3>
            ${p.period ? `<span class="project-date">${escapeHtml(p.period)}</span>` : ""}
          </div>
          <p>${escapeHtml(p.description)}</p>
          <div class="project-tags">
            ${p.tags.map((t) => `<span class="project-tag">${escapeHtml(t)}</span>`).join("")}
          </div>
          <div class="project-actions">
            <a href="${escapeHtml(p.github)}" class="btn btn-github" target="_blank" rel="noopener noreferrer" aria-label="GitHub repository for ${escapeHtml(p.title)}">GitHub</a>
            ${demoBtn}
          </div>
        </div>
      </article>
    `;
    }).join("");
  }

  function escapeHtml(str) {
    const el = document.createElement("div");
    el.textContent = str;
    return el.innerHTML;
  }

  /* ---- Render Achievements ---- */
  function renderAchievements() {
    const timeline = document.getElementById("achievements-timeline");
    if (!timeline) return;

    timeline.innerHTML = ACHIEVEMENTS.map(
      (a, i) => `
      <article class="achievement-item achievement-${a.accent}" style="--i:${i}">
        <div class="achievement-card">
          <span class="achievement-sparkle" aria-hidden="true"></span>
          <span class="achievement-sparkle achievement-sparkle-2" aria-hidden="true"></span>
          <div class="achievement-icon-wrap">
            <span class="achievement-icon" aria-hidden="true">${a.icon}</span>
            <span class="achievement-medal">✿</span>
          </div>
          <div class="achievement-content">
            <span class="achievement-badge">${escapeHtml(a.badge)}</span>
            <h3>${escapeHtml(a.title)}</h3>
            ${a.subtitle ? `<p class="achievement-subtitle">${escapeHtml(a.subtitle)}</p>` : ""}
            <p class="achievement-desc">${escapeHtml(a.description)}</p>
            <div class="achievement-tags">
              ${a.tags.map((t) => `<span class="achievement-tag">${escapeHtml(t)}</span>`).join("")}
            </div>
          </div>
        </div>
      </article>
    `
    ).join("");
  }

  /* ---- Render Education ---- */
  function renderEducation() {
    const timeline = document.getElementById("education-timeline");
    if (!timeline) return;

    timeline.innerHTML = EDUCATION.map(
      (e) => `
      <article class="timeline-item">
        <div class="timeline-card glass-card">
          <h3>${e.title}</h3>
          <p class="timeline-meta">${e.institution} · ${e.period}</p>
          <p class="timeline-detail">${e.detail}</p>
          ${e.badge ? `<span class="timeline-badge">${e.badge}</span>` : ""}
        </div>
      </article>
    `
    ).join("");
  }

  /* ---- Loader ---- */
  function initLoader() {
    const loader = document.getElementById("loader");
    document.body.classList.add("loading");

    const minTime = 1800;
    const start = Date.now();

    window.addEventListener("load", () => {
      const elapsed = Date.now() - start;
      const delay = Math.max(0, minTime - elapsed);

      setTimeout(() => {
        loader?.classList.add("hidden");
        document.body.classList.remove("loading");
        document.querySelectorAll(".reveal").forEach((el, i) => {
          if (el.closest("#hero")) {
            setTimeout(() => el.classList.add("visible"), 100);
          }
        });
      }, delay);
    });

    setTimeout(() => {
      loader?.classList.add("hidden");
      document.body.classList.remove("loading");
    }, 4000);
  }

  /* ---- Cursor Glow ---- */
  function initCursorGlow() {
    const glow = document.getElementById("cursor-glow");
    if (!glow || window.matchMedia("(hover: none)").matches) return;

    let x = 0;
    let y = 0;
    let cx = 0;
    let cy = 0;

    document.addEventListener("mousemove", (e) => {
      x = e.clientX;
      y = e.clientY;
      if (!document.body.classList.contains("cursor-ready")) {
        document.body.classList.add("cursor-ready");
      }
    });

    function animate() {
      cx += (x - cx) * 0.12;
      cy += (y - cy) * 0.12;
      glow.style.left = `${cx}px`;
      glow.style.top = `${cy}px`;
      requestAnimationFrame(animate);
    }
    animate();
  }

  /* ---- Glowing Particles ---- */
  function initParticles() {
    const container = document.getElementById("particles");
    if (!container || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const count = window.innerWidth < 768 ? 15 : 30;
    for (let i = 0; i < count; i++) {
      const p = document.createElement("span");
      p.className = "particle";
      p.style.left = `${Math.random() * 100}%`;
      p.style.top = `${Math.random() * 100}%`;
      p.style.animationDelay = `${Math.random() * 4}s`;
      p.style.animationDuration = `${3 + Math.random() * 4}s`;
      container.appendChild(p);
    }
  }

  /* ---- Email Link ---- */
  function initEmailLink() {
    const link = document.getElementById("email-link");
    const display = document.getElementById("email-display");
    if (link && CONFIG.email) {
      link.href = `mailto:${CONFIG.email}`;
      if (display) display.textContent = CONFIG.email;
    }
  }

  /* ---- Print Resume ---- */
  function initPrintResume() {
    document.getElementById("print-resume")?.addEventListener("click", () => {
      window.open("assets/resume.html", "_blank")?.print();
    });
  }

  /* ---- Floating Petals ---- */
  function initPetals() {
    const container = document.getElementById("petals");
    if (!container || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const count = window.innerWidth < 768 ? 12 : 22;

    for (let i = 0; i < count; i++) {
      const petal = document.createElement("span");
      petal.className = "petal";
      petal.style.left = `${Math.random() * 100}%`;
      petal.style.animationDuration = `${12 + Math.random() * 18}s`;
      petal.style.animationDelay = `${Math.random() * 15}s`;
      petal.style.width = `${6 + Math.random() * 8}px`;
      petal.style.height = `${8 + Math.random() * 10}px`;
      const hues = ["#d4b8f0", "#f8d4e0", "#e8c8f0", "#ffe9b8"];
      petal.style.background = `linear-gradient(135deg, ${hues[Math.floor(Math.random() * hues.length)]}, ${hues[Math.floor(Math.random() * hues.length)]})`;
      container.appendChild(petal);
    }
  }

  /* ---- Navigation ---- */
  function initNav() {
    const toggle = document.getElementById("nav-toggle");
    const menu = document.getElementById("nav-menu");
    const header = document.getElementById("header");
    const links = document.querySelectorAll(".nav-link");

    toggle?.addEventListener("click", () => {
      const open = menu?.classList.toggle("open");
      toggle.classList.toggle("active", open);
      toggle.setAttribute("aria-expanded", String(!!open));
    });

    links.forEach((link) => {
      link.addEventListener("click", () => {
        menu?.classList.remove("open");
        toggle?.classList.remove("active");
        toggle?.setAttribute("aria-expanded", "false");
      });
    });

    window.addEventListener("scroll", () => {
      header?.classList.toggle("scrolled", window.scrollY > 40);
    });
  }

  /* ---- Scroll Reveal ---- */
  function initScrollReveal() {
    const reveals = document.querySelectorAll(".reveal:not(#hero .reveal)");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    reveals.forEach((el) => observer.observe(el));
  }

  /* ---- Active Nav Link ---- */
  function initActiveNav() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
              link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
            });
          }
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach((s) => observer.observe(s));
  }

  /* ---- Contact Form ---- */
  function initContactForm() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    if (!form) return;

    // Initialize EmailJS
    emailjs.init("1W0lnjeZyWAs_Vrjr");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_3cy1jfq",
          "template_8ecu30w",
          form
        )
        .then(() => {
          showStatus("Message sent successfully! ✨", "success");
          form.reset();
        })
        .catch((error) => {
          console.log(error);
          showStatus("Failed to send message. Try again later.", "error");
        });
    });

    function showStatus(msg, type) {
      if (!status) return;

      status.textContent = msg;
      status.className = `form-status ${type}`;

      setTimeout(() => {
        status.textContent = "";
        status.className = "form-status";
      }, 4000);
    }
  }

  function setYear() {
    const el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }
})();
