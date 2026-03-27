import { motion } from "framer-motion";

const Section = ({ title, children }) => (
  <section className="py-24 px-6 max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold mb-10 tracking-tight">{title}</h2>
    {children}
  </section>
);

const GlowCard = ({ children }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="p-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition"
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="bg-black text-white font-sans">
      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
        <motion.div
          className="absolute w-[500px] h-[500px] bg-blue-600 opacity-20 blur-3xl rounded-full"
          animate={{ x: [0, 120, -120, 0], y: [0, -120, 120, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold"
        >
          Kalyan Chakravarthi Thumu
        </motion.h1>

        <p className="mt-6 text-gray-400 max-w-xl text-lg">
          Full Stack Architect with 13+ years of experience building scalable
          systems, leading engineering teams, and delivering high-performance
          platforms across enterprise and modern web ecosystems.
        </p>

        <div className="flex gap-12 mt-12 text-center">
          <div>
            <h3 className="text-4xl font-bold">7M+</h3>
            <p className="text-gray-400">Users Impacted</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">13+</h3>
            <p className="text-gray-400">Years Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">&lt;200ms</h3>
            <p className="text-gray-400">Latency</p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <Section title="What I Do">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Frontend Engineering",
              desc: "Crafting high-performance UI systems using React, Vue, and modern web standards.",
            },
            {
              title: "Backend Systems",
              desc: "Designing scalable APIs, microservices, and distributed systems with Node.js and .NET.",
            },
            {
              title: "System Architecture",
              desc: "Building resilient, event-driven, and cloud-native architectures for any domain.",
            },
          ].map((item) => (
            <GlowCard key={item.title}>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-400 mt-3">{item.desc}</p>
            </GlowCard>
          ))}
        </div>
      </Section>

      

      {/* ARCHITECTURE */}
      <Section title="Architecture Capabilities">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Microservices & APIs",
            "Event-Driven Systems (Kafka)",
            "Cloud & DevOps",
          ].map((item) => (
            <GlowCard key={item}>
              <h3 className="text-xl font-semibold">{item}</h3>
              <p className="text-gray-400 mt-3">
                Production-grade implementation with scalability and resilience.
              </p>
            </GlowCard>
          ))}
        </div>
      </Section>

      {/* CASE STUDY GENERIC */}
      <Section title="Impact Delivered">
        <div className="grid md:grid-cols-3 gap-6">
          <GlowCard>
            <h4 className="font-semibold">Performance</h4>
            <p className="text-gray-400 mt-2">
              Achieved sub-second response times across high-load systems.
            </p>
          </GlowCard>

          <GlowCard>
            <h4 className="font-semibold">Scalability</h4>
            <p className="text-gray-400 mt-2">
              Designed systems handling millions of users seamlessly.
            </p>
          </GlowCard>

          <GlowCard>
            <h4 className="font-semibold">Reliability</h4>
            <p className="text-gray-400 mt-2">
              Ensured data consistency across distributed architectures.
            </p>
          </GlowCard>
        </div>
      </Section>

      {/* TECH STACK */}
      <Section title="Technology Stack">
        <div className="flex flex-wrap gap-4">
          {[
            "Node.js",
            "Kafka",
            "PostgreSQL",
            "React",
            "Angular",
            "Vue",
            "Docker",
            "Azure",
            ".NET Core",
            "GraphQL",
            "Adobe Experience Manager (Headless)",
            "Sitecore",
            "Optimizely (Episerver)",
          ].map((tech) => (
            <motion.span
              whileHover={{ scale: 1.1 }}
              key={tech}
              className="px-5 py-2 bg-gray-800 rounded-full text-sm border border-gray-700"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </Section>

      {/* AI SECTION */}
      <Section title="AI-Enabled Systems & Applied Intelligence">
        <div className="space-y-8">

          <div className="grid md:grid-cols-2 gap-6">
            <GlowCard>
              <h3 className="text-xl font-semibold">Computer Vision in Commerce</h3>
              <p className="text-gray-400 mt-3">
                Built an image-based product search system using TensorFlow to
                identify apparel attributes like color and patterns, enabling
                intelligent catalog discovery in an enterprise commerce platform.
              </p>
            </GlowCard>

            <GlowCard>
              <h3 className="text-xl font-semibold">RAG & AI Integration</h3>
              <p className="text-gray-400 mt-3">
                Experience working with embeddings, vector databases, and
                lightweight LLMs (Ollama) to build retrieval-based systems for
                enterprise data use cases.
              </p>
            </GlowCard>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <GlowCard>
              <h3 className="text-xl font-semibold">AI + Architecture</h3>
              <p className="text-gray-400 mt-3">
                Integrating AI into scalable microservices and event-driven
                systems, ensuring production readiness, performance, and
                reliability.
              </p>
            </GlowCard>

            <GlowCard>
              <h3 className="text-xl font-semibold">Early AI Adoption</h3>
              <p className="text-gray-400 mt-3">
                Implemented AI-driven solutions as early as 2019, before modern
                AI tooling maturity — demonstrating early adoption and practical
                experimentation mindset.
              </p>
            </GlowCard>
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-4">
              Demonstration of AI-powered visual search (developed ~7 years ago)
            </p>
            <a
              href="https://www.youtube.com/watch?v=jZpDc6EbvAI"
              target="_blank"
              className="inline-block px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg font-semibold"
            >
              Watch Demo
            </a>
          </div>

          <p className="text-center text-gray-500 max-w-2xl mx-auto">
            I specialize in integrating AI capabilities into scalable systems —
            not just building models, but making them production-ready.
          </p>
        </div>
      </Section>

      {/* GITHUB */}
      <Section title="Code & Contributions">
        <div className="flex justify-center">
          <motion.a
            href="https://github.com/ThumuKalyan"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl shadow-lg hover:shadow-green-500/20 transition max-w-md w-full text-center"
          >
            <h3 className="text-2xl font-semibold">GitHub</h3>
            <p className="text-gray-400 mt-3">
              Explore my repositories, experiments, and engineering work across
              full-stack systems, architecture patterns, and AI integrations.
            </p>
            <div className="mt-6 inline-block px-6 py-2 bg-gray-800 rounded-full text-sm">
              github.com/ThumuKalyan
            </div>
          </motion.a>
        </div>
      </Section>

      {/* CERTIFICATIONS */}
      <Section title="Certifications">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Certified Accessibility Developer (Deque)",
            "Microsoft Certified Solutions Developer",
            "Sitecore Certified Developer",
            "Coveo Certified Developer",
          ].map((cert) => (
            <GlowCard key={cert}>
              <p className="text-gray-300">{cert}</p>
            </GlowCard>
          ))}
        </div>
      </Section>

      {/* SIGNATURE PRINCIPLES */}
      <Section title="Engineering Principles">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Scalability First",
              desc: "Design systems that handle 10x growth without re-architecture.",
            },
            {
              title: "Simplicity Wins",
              desc: "Prefer clear, maintainable solutions over unnecessary complexity.",
            },
            {
              title: "Resilience by Design",
              desc: "Build fault-tolerant systems that fail gracefully under pressure.",
            },
            {
              title: "Security Built-In",
              desc: "Apply zero-trust and secure-by-default practices across all layers.",
            },
            {
              title: "Performance Matters",
              desc: "Optimize for latency, throughput, and real-world user experience.",
            },
            {
              title: "Developer Experience",
              desc: "Create systems that teams can scale, understand, and extend easily.",
            },
          ].map((item) => (
            <GlowCard key={item.title}>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-400 mt-3">{item.desc}</p>
            </GlowCard>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section title="Let’s Build Anything">
        <p className="text-gray-400 max-w-xl">
          From startups to enterprise systems — I design and deliver scalable
          digital platforms across any domain.
        </p>

        <div className="mt-6 flex flex-col md:flex-row gap-4 items-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="mailto:kalyanchakravarthi.thumu@gmail.com"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-semibold"
          >
            Contact Me
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://www.linkedin.com/in/kalyanchakravarthithumu/"
            target="_blank"
            className="px-8 py-3 bg-gray-800 border border-gray-700 rounded-xl font-semibold"
          >
            LinkedIn
          </motion.a>
        </div>
      </Section>
    </div>
  );
}
