import React, { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const profile = {
    name: "Mohammad Mustafa",
    title:
      "",
    location: "Nautanawa, Maharajganj, Uttar Pradesh, India",
    phone: "+91 8932022806",
    phone2: "+91 7376919052",
    email: "mustfashah0786@gmail.com",
    linkedin: "https://www.linkedin.com/in/md-mustafa/",
    github: "https://github.com/md-mustafa786",
    hackerrank: "https://www.hackerrank.com/profile/mustfashah0786",
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Simple Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-semibold text-lg">{profile.name}</div>
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("summary")}
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              Summary
            </button>
            <button
              onClick={() => scrollToSection("expertise")}
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              Expertise
            </button>
            <button
              onClick={() => scrollToSection("journey")}
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              Journey
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden md:inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm hover:from-blue-500 hover:to-purple-500 transition-all shadow-md"
            >
              Get in Touch
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-600"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white px-6 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("summary")}
              className="block w-full text-left text-sm text-gray-600"
            >
              Summary
            </button>
            <button
              onClick={() => scrollToSection("expertise")}
              className="block w-full text-left text-sm text-gray-600"
            >
              Expertise
            </button>
            <button
              onClick={() => scrollToSection("journey")}
              className="block w-full text-left text-sm text-gray-600"
            >
              Journey
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-sm text-gray-600"
            >
              Contact
            </button>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-400 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          {/* Code-like decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 font-mono text-white text-sm">
              <div className="mb-2">{""}</div>
              <div className="ml-4 mb-2">{''}</div>
               <div className="ml-4 mb-2"></div>
    
            </div>
            <div className="absolute bottom-10 right-10 font-mono text-white text-sm">
              <div className="mb-2">{"function create() {"}</div>
              <div className="ml-4 mb-2">{"return <Portfolio />;"}</div>
              <div>{"}"}</div>
            </div>
            <div className="absolute top-1/4 right-1/4 font-mono text-white text-xs"> 
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-6"
            >
              {/* Profile Image and Name with Programming Visual */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                {/* Profile Image */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="relative"
                >
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-white/20 via-white/10 to-transparent backdrop-blur-xl border-4 border-white/30 p-1 shadow-2xl">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-4xl md:text-5xl font-bold text-white">
                      {profile.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>

                {/* Name with Programming Visual */}
                <div className="flex flex-col items-center md:items-start gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center gap-4"
                  >
                    <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                      {profile.name}
                    </h1>
                    {/* Programming Style Visual */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6, type: "spring" }}
                      className="relative hidden md:block"
                    >
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-400 p-2 shadow-2xl transform rotate-12">
                        <div className="w-full h-full rounded-lg bg-gray-900 p-3 font-mono text-xs text-green-400 overflow-hidden">
                          <div className="text-blue-400">const</div>
                          <div className="text-purple-400">developer</div>
                          <div className="text-yellow-400">=</div>
                          <div className="text-green-400">'coder'</div>
                          <div className="text-pink-400">;</div>
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
                      <div
                        className="absolute -bottom-2 -left-2 w-4 h-4 bg-red-400 rounded-full animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                    </motion.div>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-lg md:text-xl text-white/90 max-w-3xl drop-shadow-md"
                  >
                    🚀 Java Backend Developer | Spring Boot | API Specialist
                  </motion.p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  onClick={() => scrollToSection("contact")}
                  className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all shadow-xl font-semibold hover:scale-105"
                >
                  Get in Touch
                </motion.button>
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-medium backdrop-blur-sm"
                >
                  View LinkedIn
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Professional Summary */}
        <section
          id="summary"
          className="relative py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Professional Summary
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                  <p className="text-xl font-semibold text-gray-800">
                    {profile.title}
                  </p>
                  <p>
                    I'm a passionate Java Backend Developer who loves building
                    clean, scalable, and high-performance applications. I work
                    with Java, Spring Boot, REST APIs, MySQL, and focus on
                    writing reliable, maintainable code that solves real
                    business problems.
                  </p>
                  <p>
                    I've built multiple real-time projects like Food Delivery
                    API, Chat Application, Movie Review System, and I enjoy
                    turning ideas into fully working backend systems.
                  </p>
                  <p>
                    I'm fast at learning, strong in debugging, and always
                    focused on delivering professional-quality work that clients
                    and teams can trust.
                  </p>
                </div>
              </div>
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  className="w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 relative"
                >
                  {imageError ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-white text-6xl font-bold opacity-50">
                        💻
                      </div>
                    </div>
                  ) : (
                    <motion.img
                      src="/profile.jpg.png"
                      alt="Professional Profile"
                      className="w-full h-full object-contain"
                      onError={() => setImageError(true)}
                      initial={{ opacity: 0, scale: 0.9, y: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -8, 0],
                      }}
                      transition={{
                        opacity: { duration: 0.8, delay: 0.2 },
                        scale: { duration: 0.8, delay: 0.2 },
                        y: {
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                      whileHover={{ scale: 1.05 }}
                    />
                  )}
                  {/* Animated floating elements */}
                  <motion.div
                    animate={{
                      y: [0, -12, 0],
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-4 right-4 w-10 h-10 bg-blue-300 rounded-full opacity-60 blur-sm"
                  ></motion.div>
                  <motion.div
                    animate={{
                      y: [0, 10, 0],
                      rotate: [0, -360],
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="absolute bottom-4 left-4 w-8 h-8 bg-pink-300 rounded-full opacity-60 blur-sm"
                  ></motion.div>
                  <motion.div
                    animate={{
                      x: [0, 15, 0],
                      y: [0, -10, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="absolute top-1/2 left-1/4 w-6 h-6 bg-purple-300 rounded-full opacity-50 blur-sm"
                  ></motion.div>
                </motion.div>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-80 blur-xl"
                ></motion.div>
                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.6, 0.9, 0.6],
                    rotate: [0, -180, -360],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.7,
                  }}
                  className="absolute -top-4 -left-4 w-16 h-16 bg-blue-300 rounded-full opacity-70 blur-lg"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Strengths */}
        <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
            >
              Core Strengths
            </motion.h2>
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-6"
            >
              {[
                {
                  text: "Strong in Java & Spring Boot",
                  icon: "☕",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  text: "Hands-on REST API Development",
                  icon: "🔌",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  text: "Clear Understanding of MySQL & Database Design",
                  icon: "🗄️",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  text: "Solid Debugging & Problem-Solving Skills",
                  icon: "🔍",
                  color: "from-orange-500 to-red-500",
                },
                {
                  text: "Clean, Maintainable & Scalable Code Writing",
                  icon: "✨",
                  color: "from-indigo-500 to-purple-500",
                },
                {
                  text: "Quick Learner & Adaptable to New Technologies",
                  icon: "📚",
                  color: "from-teal-500 to-cyan-500",
                },
                {
                  text: "Good Understanding of Real-time Project Flow",
                  icon: "⚡",
                  color: "from-yellow-500 to-orange-500",
                },
                {
                  text: "Professional Communication & Team Collaboration",
                  icon: "🤝",
                  color: "from-pink-500 to-rose-500",
                },
              ].map((strength, idx) => (
                <motion.li
                  key={idx}
                  variants={fadeInUp}
                  className="flex items-center gap-4 p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div
                    className={`text-4xl bg-gradient-to-br ${strength.color} bg-clip-text text-transparent`}
                  >
                    {strength.icon}
                  </div>
                  <span className="text-lg font-medium text-gray-800">
                    {strength.text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>

        {/* Technical Expertise */}
        <section
          id="expertise"
          className="relative py-16 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-400 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent"
            >
              Technical Expertise
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-12"
            >
              {[
                {
                  title: "Core Java (OOP, Collections, Exception Handling)",
                  description:
                    "Strong foundation in Java fundamentals including Object-Oriented Programming, Collections framework, and robust exception handling",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  title:
                    "Spring Boot (Web, Data JPA, Validation, Security basics)",
                  description:
                    "Proficient in Spring Boot framework including web development, Data JPA for database operations, validation, and security fundamentals",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  title: "RESTful API Design & Development",
                  description:
                    "Expertise in designing and developing RESTful APIs with proper HTTP methods, status codes, and API best practices",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  title: "MySQL Database Design & Query Optimization",
                  description:
                    "Skilled in MySQL database design, normalization, indexing, and query optimization for high-performance applications",
                  color: "from-orange-500 to-red-500",
                },
                {
                  title: "JPA / Hibernate (ORM Mapping, Relationships)",
                  description:
                    "Deep understanding of JPA and Hibernate for Object-Relational Mapping, entity relationships, and database interactions",
                  color: "from-indigo-500 to-purple-500",
                },
                {
                  title: "Postman for API Testing & Documentation",
                  description:
                    "Proficient in using Postman for API testing, debugging, and creating comprehensive API documentation",
                  color: "from-teal-500 to-cyan-500",
                },
                {
                  title: "Git & GitHub Version Control",
                  description:
                    "Expert in Git version control and GitHub for collaborative development, branching strategies, and code management",
                  color: "from-yellow-500 to-orange-500",
                },
                {
                  title: "Maven/Gradle Build Tools",
                  description:
                    "Experienced with Maven and Gradle build tools for dependency management, project building, and automation",
                  color: "from-pink-500 to-rose-500",
                },
                {
                  title: "JSON, JDBC, Servlets Basics",
                  description:
                    "Solid understanding of JSON data format, JDBC for database connectivity, and Java Servlets for web development",
                  color: "from-cyan-500 to-blue-500",
                },
                {
                  title: "Basic Microservices Understanding",
                  description:
                    "Fundamental knowledge of microservices architecture, service communication, and distributed system concepts",
                  color: "from-violet-500 to-purple-500",
                },
              ].map((tech, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="space-y-2 p-6 rounded-xl bg-white border-l-4 border-blue-600 hover:shadow-xl transition-all hover:scale-105"
                >
                  <h3
                    className={`text-2xl font-semibold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}
                  >
                    {tech.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {tech.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Data Structures & Algorithms */}
        <section className="py-16 bg-gradient-to-r from-orange-50 to-red-50">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 relative"
                >
                  {/* Animated Code Background */}
                  <div className="absolute inset-0">
                    <div className="absolute top-4 left-4 font-mono text-white text-sm space-y-2 z-10">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-orange-100 font-bold drop-shadow-lg bg-black/30 px-2 py-1 rounded backdrop-blur-sm"
                      >
                        function
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-red-100 font-bold drop-shadow-lg bg-black/30 px-2 py-1 rounded backdrop-blur-sm"
                      >
                        {" "}
                        quickSort()
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-pink-100 font-bold drop-shadow-lg bg-black/30 px-2 py-1 rounded backdrop-blur-sm"
                      >
                        {" "}
                        binarySearch()
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        className="text-orange-100 font-bold drop-shadow-lg bg-black/30 px-2 py-1 rounded backdrop-blur-sm"
                      >
                        {" "}
                        treeTraversal()
                      </motion.div>
                    </div>
                    <div className="absolute bottom-4 right-4 font-mono text-white text-sm space-y-2 z-10">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-red-100 font-bold drop-shadow-lg bg-black/30 px-2 py-1 rounded backdrop-blur-sm"
                      >
                        array[]
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-pink-100 font-bold drop-shadow-lg bg-black/30 px-2 py-1 rounded backdrop-blur-sm"
                      >
                        linkedList
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                        className="text-orange-100 font-bold drop-shadow-lg bg-black/30 px-2 py-1 rounded backdrop-blur-sm"
                      >
                        hashMap
                      </motion.div>
                    </div>
                  </div>

                  {/* Central Visual - Data Structure Tree */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: 0.5,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="relative"
                    >
                      {/* Tree Structure Visualization */}
                      <div className="flex flex-col items-center">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-16 h-16 bg-white/30 rounded-full backdrop-blur-sm border-2 border-white/50 mb-4 flex items-center justify-center text-2xl"
                        >
                          📊
                        </motion.div>
                        <div className="flex gap-8">
                          <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: 0,
                            }}
                            className="w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm border border-white/40"
                            
                          ></motion.div>
                          <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: 0.3,
                            }}
                            className="w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm border border-white/40"
                          ></motion.div>
                          <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: 0.6,
                            }}
                            className="w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm border border-white/40"
                          ></motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Animated floating elements */}
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-4 right-4 w-12 h-12 bg-yellow-400 rounded-full opacity-60 blur-sm"
                  ></motion.div>
                  <motion.div
                    animate={{
                      y: [0, 15, 0],
                      rotate: [0, -360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="absolute bottom-4 left-4 w-8 h-8 bg-orange-300 rounded-full opacity-60 blur-sm"
                  ></motion.div>
                  <motion.div
                    animate={{
                      x: [0, 20, 0],
                      y: [0, -10, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="absolute top-1/2 right-1/4 w-6 h-6 bg-red-300 rounded-full opacity-50 blur-sm"
                  ></motion.div>
                </motion.div>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400 rounded-full opacity-70 blur-xl"
                ></motion.div>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Data Structures & Algorithms
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                I have a solid understanding of Data Structures & Algorithms, focusing on writing efficient, optimized code using concepts like arrays, lists, stacks, queues, hashing, trees, and problem-solving patterns.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hibernate & Spring JPA */}
        <section className="relative py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-80 h-80 bg-purple-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-pink-400 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Hibernate & Spring JPA
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                I have strong experience working with Hibernate and Spring Data JPA, including entity mapping, relationships, custom queries, pagination, and efficient database operations to build reliable and scalable backend systems.
                </p>
              </div>
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400 relative"
                >
                  {/* Animated Code Background */}
                  <div className="absolute inset-0">
                    <div className="absolute top-4 left-4 font-mono text-white text-sm space-y-2 z-10">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-purple-100 font-bold drop-shadow-lg bg-black/30 px-2 py-1 rounded backdrop-blur-sm"
                      >
                        @Entity
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-pink-100 font-bold drop-shadow-lg bg-black/30 px-2 py-1 rounded backdrop-blur-sm"
                      >
                        @Repository
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-rose-100 font-bold drop-shadow-lg bg-black/30 px-2 py-1 rounded backdrop-blur-sm"
                      >
                        @Service
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        className="text-purple-100 font-bold drop-shadow-lg bg-black/30 px-2 py-1 rounded backdrop-blur-sm"
                      >
                        @Autowired
                      </motion.div>
                    </div>
                    <div className="absolute bottom-4 right-4 font-mono text-white text-sm space-y-2 z-10">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-pink-100 font-bold drop-shadow-lg bg-black/30 px-2 py-1 rounded backdrop-blur-sm"
                      >
                        JPA
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-rose-100 font-bold drop-shadow-lg bg-black/30 px-2 py-1 rounded backdrop-blur-sm"
                      >
                        Hibernate
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                        className="text-purple-100 font-bold drop-shadow-lg bg-black/30 px-2 py-1 rounded backdrop-blur-sm"
                      >
                        ORM
                      </motion.div>
                    </div>
                  </div>

                  {/* Central Visual - Database Connection */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0, rotate: 180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: 0.5,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="relative"
                    >
                      {/* Database Connection Visualization */}
                      <div className="flex flex-col items-center">
                        <motion.div
                          animate={{ scale: [1, 1.15, 1], rotate: [0, 360] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="w-16 h-16 bg-white/30 rounded-full backdrop-blur-sm border-2 border-white/50 mb-4 flex items-center justify-center text-2xl"
                        >
                          ⚙️
                        </motion.div>
                        <div className="flex gap-6">
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.6, 1, 0.6],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: 0,
                            }}
                            className="w-10 h-10 bg-white/25 rounded-lg backdrop-blur-sm border border-white/40 flex items-center justify-center text-xs text-white font-bold"
                          >
                            DB
                          </motion.div>
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.6, 1, 0.6],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: 0.4,
                            }}
                            className="w-10 h-10 bg-white/25 rounded-lg backdrop-blur-sm border border-white/40 flex items-center justify-center text-xs text-white font-bold"
                          >
                            API
                          </motion.div>
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.6, 1, 0.6],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: 0.8,
                            }}
                            className="w-10 h-10 bg-white/25 rounded-lg backdrop-blur-sm border border-white/40 flex items-center justify-center text-xs text-white font-bold"
                          >
                            ORM
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Animated floating elements */}
                  <motion.div
                    animate={{
                      y: [0, -18, 0],
                      rotate: [0, 360],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-6 right-6 w-10 h-10 bg-blue-400 rounded-full opacity-60 blur-sm"
                  ></motion.div>
                  <motion.div
                    animate={{
                      y: [0, 15, 0],
                      rotate: [0, -360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.7,
                    }}
                    className="absolute bottom-6 left-6 w-14 h-14 bg-purple-300 rounded-full opacity-60 blur-sm"
                  ></motion.div>
                  <motion.div
                    animate={{
                      x: [0, -15, 0],
                      y: [0, 12, 0],
                      rotate: [0, -180, -360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.2,
                    }}
                    className="absolute top-1/3 left-1/4 w-8 h-8 bg-pink-300 rounded-full opacity-50 blur-sm"
                  ></motion.div>
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.4, 0.8, 0.4],
                      rotate: [0, 90, 180],
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-pink-300 rounded-full opacity-50 blur-md"
                  ></motion.div>
                </motion.div>
                <motion.div
                  animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.8, 1, 0.8],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-400 rounded-full opacity-80 blur-xl"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Development & Learning Platforms */}
        <section className="py-16 bg-gradient-to-r from-cyan-50 to-blue-50">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"
            >
              Development & Learning Platforms
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              {[
                {
                  title: "Visual Studio",
                  description:
                    "Leveraging this comprehensive IDE for developing, debugging, and deploying high-quality applications across various platforms.",
                },
                {
                  title: "Intellij Idea",
                  description:
                    "Utilizing this powerful IDE for developing and debugging Java and Spring Boot applications, leveraging its advanced coding assistance and smart refactoring capabilities.",
                },
                {
                  title: "Leetcode",
                  description:
                    "Practicing coding problems and mastering Data Structures & Algorithms through real-world challenges and tutorials. Consistently improving problem-solving and analytical skills for technical interviews.",
                },
                {
                  title: "GeeksForGeeks",
                  description:
                    "Utilizing this platform for comprehensive learning on computer science topics, algorithms, and data structures to strengthen foundational knowledge.",
                },
                {
                  title: "HTML & CSS",
                  description:
                    "My expertise extends to developing semantic, accessible HTML5 structures and crafting responsive, visually appealing designs with modern CSS3. I ensure cross-browser compatibility and optimal performance, collaborating closely with UI/UX designers to translate wireframes into pixel-perfect, engaging user interfaces. This foundational knowledge is crucial for building robust front-end experiences that enhance user interaction and satisfaction across all devices.",
                },
              ].map((platform, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="space-y-2 p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all"
                >
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    {platform.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {platform.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Professional Journey */}
        <section
          id="journey"
          className="relative py-16 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-violet-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-fuchsia-400 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent"
            >
              Professional Journey
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              {[
                
                
                {
                  number: "1",
                  period: "January 2023 - January 2024",
                  title: "Java SpringBoot Developer Intern",
                  company: "Geekster",
                  location: "Remote",
                  description:
                    "Immersed in Java, Spring Boot, MySQL, and related technologies for 1 year.",
                },
              ].map((job, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="flex gap-6 p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    {job.number}
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="text-sm text-gray-600 font-medium">
                      {job.period}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {job.title}
                    </h3>
                    <div className="text-lg text-gray-700">
                      <span className="font-semibold text-blue-600">
                        {job.company}
                      </span>
                      , {job.location}
                    </div>
                    <p className="text-gray-600">{job.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Geekster Journey Highlights */}
        <section className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                Geekster Journey Highlights
              </h2>
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 border-l-4 border-blue-600 pl-6 py-6 space-y-4 rounded-r-lg shadow-lg">
                <p className="text-lg text-gray-700 italic">
                  "My journey as a Software Developer Apprentice at Geekster has
                  been nothing short of incredible! From mastering Java
                  intricacies to building robust Spring Boot applications, every
                  line of code has been a stepping stone toward becoming a
                  proficient developer."
                </p>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <span className="font-semibold">Hands-On Learning:</span>{" "}
                    Contributing to real-world projects and solving complex
                    challenges with practical application of theoretical
                    knowledge
                  </div>
                  <div>
                    <span className="font-semibold">Technical Growth:</span>{" "}
                    Deep understanding of Java, Spring Boot, MySQL, and database
                    management through intensive training
                  </div>
                  <div>
                    <span className="font-semibold">
                      Collaborative Environment:
                    </span>{" "}
                    Supportive mentorship and community fostering innovation and
                    meaningful contributions
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Educational Background */}
        <section className="relative py-16 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-80 h-80 bg-teal-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-400 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent"
            >
              Educational Background
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              {[
                {
                  number: "01",
                  degree: "Bachelor of Technology",
                  field: "Electrical Engineering",
                  institution:
                    "M.G. Institute of Management and Technology (MGIMT)",
                  location: "Gram Khandedev, Lucknow, Uttar Pradesh",
                  period: "2019-2023",
                  website: "https://mgimt.edu.in/",
                  logo: "🏛️",
                },
                {
                  number: "02",
                  degree: "Diploma",
                  field: "Electrical Engineering",
                  institution:
                    "M.G. Institute of Management and Technology (MGIMT)",
                  location: "Gram Khandedev, Lucknow, Uttar Pradesh",
                  period: "2016-2019",
                  website: "https://mgimt.edu.in/",
                  logo: "🏛️",
                },
              ].map((edu, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-2xl"></div>
                  <div className="relative p-8 flex flex-col md:flex-row gap-6">
                    {/* College Logo/Image */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 p-1 shadow-lg group-hover:scale-110 transition-transform">
                        <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                          {idx === 0 ? (
                            <div className="text-center">
                              <div className="text-4xl md:text-5xl mb-1">
                                {edu.logo}
                              </div>
                              <div className="text-xs font-bold text-teal-600">
                                MGIMT
                              </div>
                              
                            </div>
                          ) : (
                            <div className="text-center">
                              <div className="text-4xl md:text-5xl mb-1">
                                {edu.logo}
                              </div>
                              <div className="text-xs font-bold text-teal-600">
                                MGIMT
                              </div>
                              
                            </div>

                            
                            
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Education Details */}
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 text-xs font-semibold mb-2">
                            {edu.number}
                          </div>
                          <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                            {edu.degree}
                          </h3>
                          <div className="text-lg font-semibold text-gray-800 mb-1">
                            {edu.field}
                          </div>
                          <div className="text-base text-gray-600 font-medium">
                            {edu.institution}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                            <span>📍</span>
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 pt-2 border-t border-gray-200">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="font-semibold">📅</span>
                          <span>{edu.period}</span>
                        </div>
                        {edu.website && (
                          <a
                            href={edu.website}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm font-medium hover:from-teal-600 hover:to-cyan-600 transition-all shadow-md hover:shadow-lg"
                          >
                            <span>🌐</span>
                            <span>Visit Website</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Certifications & Achievements */}
        <section className="py-16 bg-gradient-to-r from-emerald-50 to-green-50">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent"
            >
              Certifications & Achievements
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-4"
            >
              {[
                {
                  title: "Problem Solving (Basic)",
                  issuer:
                    "HackerRank certification demonstrating fundamental problem-solving capabilities and algorithmic thinking",
                },
                {
                  title: "SQL Certification",
                  issuer:
                    "HackerRank SQL certification validating database querying and management expertise",
                },
              ].map((cert, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="space-y-1 p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all"
                >
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                    {cert.title}
                  </h3>
                  <p className="text-gray-700">{cert.issuer}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Development Philosophy */}
        <section className="relative py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-400 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent"
            >
              Development Philosophy
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-5 gap-6 mb-8"
            >
              {[
                {
                  name: "Innovation",
                  desc: "Embracing new technologies",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  name: "Collaboration",
                  desc: "Working together effectively",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  name: "Growth",
                  desc: "Continuous learning mindset",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  name: "Quality",
                  desc: "Delivering excellence",
                  color: "from-orange-500 to-red-500",
                },
                {
                  name: "Impact",
                  desc: "Creating meaningful solutions",
                  color: "from-indigo-500 to-purple-500",
                },
              ].map((philosophy, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="text-center p-4 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow"
                >
                  <div
                    className={`text-2xl font-semibold bg-gradient-to-r ${philosophy.color} bg-clip-text text-transparent mb-2`}
                  >
                    {philosophy.name}
                  </div>
                  <div className="text-sm text-gray-600">{philosophy.desc}</div>
                </motion.div>
              ))}
            </motion.div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-lg text-gray-700 leading-relaxed"
            >
              Driven by a passion for creating efficient, scalable software
              solutions that make a real difference. Every project is an
              opportunity to learn, innovate, and contribute to the future of
              technology.
            </motion.p>
          </div>
        </section>

        {/* Connect & Collaborate */}
        <section
          id="contact"
          className="py-16 bg-gradient-to-r from-slate-50 to-gray-50"
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent"
            >
              Connect & Collaborate
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-8"
            >
              <motion.div variants={fadeInUp} className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Location</div>
                  <div className="text-lg text-gray-900">
                    {profile.location}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Mobile</div>
                  <div className="text-lg text-gray-900">{profile.phone}</div>
                  <div className="text-lg text-gray-900">{profile.phone2}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Email</div>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-lg text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {profile.email}
                  </a>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">LinkedIn</div>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {profile.linkedin}
                  </a>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">GitHub</div>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {profile.github}
                  </a>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">HackerRank</div>
                  <a
                    href={profile.hackerrank}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {profile.hackerrank}
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Let's Build Something Amazing */}
        <section className="relative py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-400 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Let's Build Something Amazing
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Open to exciting opportunities in software development where I
                can contribute my expertise in MySQL, Android Studio, Git, Java,
                and Spring Boot. Let's connect and explore how we can create
                impactful solutions together.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-blue-500/30"
                >
                  Start a Conversation
                </button>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                >
                  Connect on LinkedIn
                </a>
              </div>
              <p className="text-sm text-gray-600 pt-4">
                <strong>Available for:</strong> Full-time opportunities,
                freelance projects, and collaborative ventures in software
                development
              </p>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-gray-200 text-center text-gray-600">
          <div className="max-w-6xl mx-auto px-6">
            <p>Made with ❤️</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
