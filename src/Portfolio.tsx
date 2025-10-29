import React, { useEffect, useState } from "react";
import { Menu, X, Mail, Linkedin, ChevronDown, ExternalLink, Send } from "lucide-react";
import headshot from "./headshot.jpeg";
const Portfolio: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", message: "" });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "education", "experience", "projects", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault?.();
  
    const data = new FormData();
    data.append("form-name", "contact");
    data.append("firstName", formData.firstName);
    data.append("lastName", formData.lastName);
    data.append("email", formData.email);
    data.append("message", formData.message);
  
    try {
      await fetch("/", {
        method: "POST",
        body: data,
      });
  
      alert("✅ Message sent! Thanks for reaching out.");
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch (err) {
      alert("❌ Something went wrong. Please try again.");
      console.error(err);
    }
  };
  

  return (
    <div className="min-h-screen bg-[#0a0b1e] text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Grid Overlay */}
      <div
        className="fixed inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-[#0a0b1e]/80 backdrop-blur-lg border-b border-white/10 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <a
                href="#home"
                className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
              >
                YP
              </a>

              <div className="hidden md:flex items-center gap-8">
                {["Home", "About", "Education", "Experience", "Projects", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`text-sm font-medium transition-colors hover:text-purple-400 ${activeSection === item.toLowerCase() ? "text-purple-400" : "text-gray-300"
                      }`}
                  >
                    {item}
                  </a>
                ))}

                <a
                  href="#contact"
                  className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                >
                  Contact
                </a>
              </div>

              <button onClick={() => setIsMenuOpen((v) => !v)} className="md:hidden" aria-label="Toggle menu">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>

            {isMenuOpen && (
              <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
                {["Home", "About", "Education", "Experience", "Projects", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-300 hover:text-purple-400"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="max-w-7xl w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text */}
              <div className="text-left">
                <div className="inline-block px-4 py-2 bg-purple-500/20 rounded-full mb-6 backdrop-blur-sm border border-purple-500/30">
                  <span className="text-sm text-purple-300">👋 Welcome to my portfolio</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                  I&apos;m a{" "}
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Full Stack
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Developer
                  </span>
                </h1>

                

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#projects"
                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                  >
                    View My Work
                  </a>

                  
                </div>
              </div>

              {/* Right Side - 3D Photo */}
              <div className="flex justify-center md:justify-end">
                <div className="relative group">
                  {/* 3D Layered Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="absolute -inset-1 bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity rotate-3" />
                  <div className="absolute -inset-2 bg-gradient-to-br from-purple-700 via-blue-700 to-cyan-700 rounded-2xl opacity-50 -rotate-3" />

                  {/* Main Photo Container */}
                  <div className="relative w-80 h-80 transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-2xl p-1">
                      <div className="w-full h-full bg-[#0a0b1e] rounded-2xl p-2">
                        <div className="w-full h-full rounded-xl overflow-hidden border-4 border-purple-500/30">
                          <img
                            src={headshot}
                            alt="Yasaswi Pandaraboyina"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const img = e.currentTarget as HTMLImageElement;
                              img.src =
                                'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="320" height="320"%3E%3Crect fill="%23667" width="320" height="320"/%3E%3Ctext fill="white" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EYour Photo%3C/text%3E%3C/svg%3E';
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg opacity-50 blur-md animate-pulse" />
                  <div
                    className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg opacity-50 blur-md animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />
                </div>
              </div>
            </div>

            {/* Scroll Down Arrow */}
            <div className="mt-16 text-center animate-bounce">
              <ChevronDown className="mx-auto text-purple-400" size={32} />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-purple-500/20 rounded-full backdrop-blur-sm border border-purple-500/30 mb-4">
                  <span className="text-sm text-purple-300">About Me</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Code.
                  </span>{" "}
                  Create.{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Connect.
                  </span>
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  Hi there, I&apos;m <strong className="text-white">Yasaswi</strong>, but most people call me{" "}
                  <strong className="text-white">Yash</strong>. I&apos;m a passionate{" "}
                  <strong className="text-white">Full Stack Developer</strong> who loves building scalable, data-driven
                  applications that solve real-world problems. I enjoy bridging the gap between{" "}
                  <strong className="text-white">frontend creativity</strong> and{" "}
                  <strong className="text-white">backend logic</strong>, crafting experiences that are both intuitive
                  and impactful.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  I&apos;m currently pursuing my{" "}
                  <strong className="text-white">Master’s in Information Technology</strong> at{" "}
                  <strong className="text-white">Arizona State University</strong> and will be graduating in{" "}
                  <strong className="text-white">December 2025</strong>. During my time at ASU, I completed an
                  internship at{" "}
                  <strong className="text-white">Intuitive Surgical</strong> where I worked on software-focused
                  projects that enhanced product efficiency and data integration.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Before moving to the U.S., I spent three years in India working across{" "}
                  <strong className="text-white">web development, data analytics, and system integrations</strong>,
                  gaining a solid foundation in software engineering and architecture. That experience, combined
                  with my academic training, fuels my drive to create end-to-end solutions that merge innovation,
                  data, and usability
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-purple-300">Core Values</h3>
                <ul className="space-y-4">
                  {[
                    "Mixing technology with strategic thinking",
                    "Exploring innovative tools and solutions",
                    "Making work smarter, not harder",
                    "Continuous learning and experimentation",
                  ].map((value, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="inline-block px-4 py-2 bg-purple-500/20 rounded-full backdrop-blur-sm border border-purple-500/30 mb-8">
              <span className="text-sm text-purple-300">Education</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Academic Background</h2>

            <div className="space-y-8">
              {/* ASU */}
              <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Master of Science in Information Technology</h3>
                    <a
                      href="https://www.asu.edu"
                      target="_blank"
                      rel="noreferrer"
                      className="text-purple-400 hover:text-purple-300 flex items-center gap-2"
                    >
                      Arizona State University <ExternalLink size={16} />
                    </a>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30 mt-4 md:mt-0">
                    <span className="font-bold text-green-300">4.00 GPA</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                  <span>📅 January 2024 – December 2025</span>
                  <span>📍 Tempe, AZ</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Project Management",
                    "Big Data & Analysis",
                    "Advanced Database Systems",
                    "Cloud Security",
                    "NLP",
                    "Machine Learning",
                  ].map((course) => (
                    <span key={course} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm border border-purple-500/30">
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Vignan */}
              <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 hover:border-blue-500/50 transition-all">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Bachelor of Technology in Computer Science</h3>
                    <a
                      href="https://www.vignan.ac.in"
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2"
                    >
                      Vignan&apos;s Foundation for Science and Technology <ExternalLink size={16} />
                    </a>
                  </div>
                  <div className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30 mt-4 md:mt-0">
                    <span className="font-bold text-cyan-300">8.6 CGPA</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                  <span>📅 July 2017 – August 2021</span>
                  <span>📍 Guntur, India</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Data Structures",
                    "Database Management",
                    "Software Engineering",
                    "Machine Learning",
                    "Operating Systems",
                    "Java",
                  ].map((course) => (
                    <span key={course} className="px-3 py-1 bg-cyan-500/20 rounded-full text-sm border border-cyan-500/30">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Experience Section */}
        <section id="experience" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="inline-block px-4 py-2 bg-purple-500/20 rounded-full backdrop-blur-sm border border-purple-500/30 mb-8">
              <span className="text-sm text-purple-300">Experience</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-12">Work Experience</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Intuitive */}
              <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 hover:border-purple-500/50 transition-all">
                <h3 className="text-xl font-bold mb-2">Intuitive</h3>
                <div className="text-purple-300 mb-2">Software Engineering Intern</div>
                <p className="text-sm text-gray-400 mb-2">📍 Sunnyvale, CA</p>
                <p className="text-gray-300 mb-4 text-sm">
                  Worked on scalable software modules and internal AI Chatbot.
                </p>
                <div className="text-sm text-purple-300 font-semibold mb-2">Tech Stack</div>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "TypeScript", "Java (Microservices)", "AWS", "PostgreSQL"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-purple-500/20 rounded-full border border-purple-500/30 text-xs text-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* T-Mobile */}
              <div className="bg-gradient-to-br from-pink-900/40 to-purple-900/40 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-6 hover:border-pink-500/50 transition-all">
                <h3 className="text-xl font-bold mb-2">T-Mobile</h3>
                <div className="text-pink-300 mb-2">Software Engineer</div>
                <p className="text-sm text-gray-400 mb-2">📍 Hyderabad, India</p>
                <p className="text-gray-300 mb-4 text-sm">
                  Engineered scalable enterprise solutions enhancing analytics and integration efficiency across 10K+ workforce records and internal dashboards.
                </p>
                <div className="text-sm text-pink-300 font-semibold mb-2">Tech Stack</div>
                <div className="flex flex-wrap gap-2">
                  {["React.js", "Flux", "Java (Spring Boot)", "AWS Lambda", "PostgreSQL", "SQL", "Jenkins", "Git", "Jira"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-pink-500/20 rounded-full border border-pink-500/30 text-xs text-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cognizant */}
              <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-sm border border-indigo-500/30 rounded-2xl p-6 hover:border-indigo-500/50 transition-all">
                <h3 className="text-xl font-bold mb-2">Cognizant</h3>
                <div className="text-indigo-300 mb-2">Programmer Analyst</div>
                <p className="text-sm text-gray-400 mb-2">📍 Hyderabad, India</p>
                <p className="text-gray-300 mb-4 text-sm">
                  Supported full stack development for a government project, building responsive web interfaces and Java-based backends to improve data accessibility and system reliability.
                </p>
                <div className="text-sm text-indigo-300 font-semibold mb-2">Tech Stack</div>
                <div className="flex flex-wrap gap-2">
                  {["HTML", "CSS", "Java", "Spring Framework", "MySQL", "Agile"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-indigo-500/20 rounded-full border border-indigo-500/30 text-xs text-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div> {/* 🔚 closes the grid */}
          </div>   {/* 🔚 closes max-w-7xl container (this was missing) */}
        </section>



        {/* Projects Section */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="inline-block px-4 py-2 bg-purple-500/20 rounded-full backdrop-blur-sm border border-purple-500/30 mb-8">
              <span className="text-sm text-purple-300">Projects</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Featured Work</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "I Am Teen Strong – AI Chatbot",
                  category: "Applied AI",
                  description:
                    "Built a grounded Q&A chatbot to provide 24/7 support for teens using approved content, guardrails, and retrieval.",
                  impact: "Increased self-service support and reduced staff load after hours.",
                  tech: ["LLMs", "RAG", "Python", "FastAPI"],
                },
                {
                  title: "Book Recommender System",
                  category: "Machine Learning",
                  description:
                    "Implemented a collaborative filtering recommender with similarity search and ranking to personalize book discovery.",
                  impact: "~20% lift in recommendation accuracy versus baseline.",
                  tech: ["Python", "Pandas", "Scikit-learn", "Collaborative Filtering"],
                },
                {
                  title: "Indian Crime Report – Data Visualization",
                  category: "Analytics & Viz",
                  description:
                    "Built interactive dashboards exploring crime types, geography, and trends with drill-downs and filters for insights.",
                  impact: "Faster pattern discovery and better data-driven storytelling.",
                  tech: ["Tableau", "SQL", "Python"],
                },
                {
                  title: "Music Recommendation System",
                  category: "ML & Ranking",
                  description:
                    "Designed a hybrid recommender combining content features with user behavior to improve playlist relevance.",
                  impact: "Higher session completion and repeat plays in experiments.",
                  tech: ["Python", "NumPy", "Scikit-learn", "Feature Engineering"],
                },
                {
                  title: "Product & Growth for a Startup",
                  category: "Product & Growth",
                  description:
                    "Led experiments and funnel analysis to improve activation and retention; shipped insights to shape roadmap.",
                  impact: "Clear KPIs, faster decision cycles, and improved activation.",
                  tech: ["A/B Testing", "SQL", "Analytics", "Amplitude"],
                },
              ].map((project, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 hover:border-purple-500/50 transition-all group"
                >
                  <div className="text-sm text-purple-300 mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                  <div className="mb-4">
                    <div className="text-xs font-semibold text-purple-300 mb-1">Business Impact</div>
                    <p className="text-sm text-gray-400">{project.impact}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-1 bg-purple-500/20 rounded-lg text-xs border border-purple-500/30">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */ }
        {/* Hidden Netlify form setup */}
      <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="hidden" name="form-name" value="contact" />
        <input name="firstName" />
        <input name="lastName" />
        <input name="email" />
        <textarea name="message" />
      </form>
  <section id="contact" className="py-20 px-6">
    <div className="max-w-3xl mx-auto">
      <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 bg-purple-500/20 rounded-full backdrop-blur-sm border border-purple-500/30 mb-4">
            <span className="text-sm text-purple-300">Get In Touch</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Let&apos;s Connect</h2>
          <p className="text-gray-400">Send me a message or connect via email or LinkedIn</p>
        </div>

        <form onSubmit={handleSubmit} name="contact" className="space-y-4 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name *"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="w-full px-4 py-3 bg-[#0a0b1e]/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-500"
            />
            <input
              type="text"
              placeholder="Last Name *"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="w-full px-4 py-3 bg-[#0a0b1e]/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-500"
            />
          </div>
          <input
            type="email"
            placeholder="Email (optional)"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-[#0a0b1e]/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-500"
          />
          <textarea
            placeholder="Your Message... *"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="w-full px-4 py-3 bg-[#0a0b1e]/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors resize-none text-white placeholder-gray-500"
          />
          <button
            type="submit"
            className="w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2"
          >
            <Send size={18} />
            Send Message
          </button>
        </form>
      
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:yasaswi.srinivasan22@gmail.com"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-purple-500/50 rounded-lg hover:bg-purple-500/10 transition-all"
          >
            <Mail size={20} />
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/yasaswipandaraboyina/"
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-purple-500/50 rounded-lg hover:bg-purple-500/10 transition-all"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </section>

  {/* Footer */ }
  <footer className="py-8 text-center text-gray-500 border-t border-white/10">
    <p>© 2025 Yasaswi Pandaraboyina. All rights reserved.</p>
  </footer>
      </div >
    </div >
  );
};

export default Portfolio;
