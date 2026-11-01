import Layout from '../components/Layout';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { FaCode, FaCloud, FaRobot, FaDesktop, FaServer, FaDatabase } from 'react-icons/fa';

const ResumeViewer = dynamic(() => import('../components/ResumeViewer'), {
  ssr: false,
});

const experience = [
  {
    company: 'Microsoft · GitHub Copilot',
    role: 'Senior Software Engineer, Applied Science and Model Evaluation',
    dates: 'January 2026–Present',
    color: 'border-code-purple',
    highlights: [
      'Built cross-platform grading and run orchestration for an LLM evaluation platform supporting 300K+ submitted runs and 10M+ task evaluations each month.',
      'Implemented privacy, security, and benchmark-integrity graders producing 10M+ pass/fail judgments monthly, plus a self-service grader registry and reproducible release pipelines.',
      'Developed a Harbor-native benchmark with 58 real-world Windows tasks and productionized analysis generating 2,600+ full-run reports per month.',
    ],
  },
  {
    company: 'Microsoft · GitHub Copilot for Azure Compute (W365 / Dev Center)',
    role: 'Senior Software Engineer',
    dates: 'April 2024–December 2025 · Redmond, WA',
    color: 'border-code-blue',
    highlights: [
      'Built an Azure OpenAI and Cosmos DB service that turned natural-language requests into validated, user-approved execution plans for cloud workstations; delivered the initial VS Code and Visual Studio experience with a two-engineer team in one quarter.',
      'Co-developed MCP tools for cloud workstation discovery, management, task planning, approval, and remote workflow monitoring.',
      'Built a VS Code extension using Azure AI Search and Copilot Chat, and cross-platform Electron workstation integration with secure tunnels and WebSocket streaming.',
      'Co-developed AI-assisted infrastructure build and versioning workflows that won a Microsoft Hackathon Popular Choice award.',
    ],
  },
  {
    company: 'Microsoft · GitHub Copilot for Visual Studio',
    role: 'Software Engineer II',
    dates: 'August 2022–April 2024 · Redmond, WA',
    color: 'border-code-green',
    highlights: [
      'Co-developed a semantic-context prototype using indexed code symbols and token-efficient code skeletons; 44.0% of responses met both “no hallucination” and “problem solved” criteria in a 91-case offline comparison, versus 31.9% without it.',
      'Built Visual Studio indexing services and expanded evaluation to 500+ cases across four repositories, exposing 14 previously masked model regressions.',
      'Reduced snapshot-lookup network calls by 75% and reported code-index queue volume from about 100,000 to 4,000 messages per day.',
    ],
  },
  {
    company: 'Amazon · Amazon Learning Products',
    role: 'Software Engineer',
    dates: 'October 2021–July 2022 · Seattle, WA',
    color: 'border-code-yellow',
    highlights: [
      'Built AWS CDK/API Gateway infrastructure and TypeScript authentication and authorization for Amazon Learn users and downstream learning services.',
      'Shipped a React/TypeScript frontend and AWS pipeline that reduced third-party learning-software costs by over $4 million annually (30%).',
    ],
  },
  {
    company: 'Microsoft · Windows Packaging Service',
    role: 'Software Engineer',
    dates: 'August 2020–October 2021 · Redmond, WA',
    color: 'border-code-orange',
    highlights: [
      'Extended Windows Packaging and Servicing APIs for a geo-redundant update pipeline serving 1.5 million+ clients every two weeks.',
      'Built a .NET certificate-rotation service that reduced legacy service downtime from two hours to under 30 seconds, and enabled migration to cloud services with 0% downtime.',
    ],
  },
];

const skillCategories = [
  {
    name: 'Languages',
    icon: <FaCode className="text-code-blue text-xl" />,
    skills: ['C#', 'C++', 'Python', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'KQL'],
  },
  {
    name: 'AI & Agent Engineering',
    icon: <FaRobot className="text-code-pink text-xl" />,
    skills: ['Azure OpenAI', 'Azure AI Foundry', 'LLM evaluation', 'Agent orchestration', 'MCP', 'Tool calling', 'Prompt and context engineering'],
  },
  {
    name: 'Retrieval & Code Intelligence',
    icon: <FaDesktop className="text-code-green text-xl" />,
    skills: ['Azure AI Search', 'RAG', 'Embeddings', 'Semantic retrieval', 'Code indexing', 'Symbol retrieval'],
  },
  {
    name: 'Cloud & Data',
    icon: <FaCloud className="text-code-purple text-xl" />,
    skills: ['Azure', 'AWS', 'Cosmos DB', 'Azure Blob Storage', 'Azure Data Explorer', 'DynamoDB', 'PostgreSQL', 'MongoDB'],
  },
  {
    name: 'Frameworks & Tools',
    icon: <FaServer className="text-code-orange text-xl" />,
    skills: ['.NET', 'Node.js', 'React', 'Electron', 'VS Code extensions', 'Visual Studio extensions', 'Dev Box', 'Dev Tunnels'],
  },
  {
    name: 'Systems & Delivery',
    icon: <FaDatabase className="text-code-yellow text-xl" />,
    skills: ['Distributed systems', 'Workflow orchestration', 'Microservices', 'Event-driven processing', 'WebSocket streaming', 'CI/CD', 'GitHub Actions', 'Azure DevOps', 'Service Fabric'],
  },
];

export default function About() {
  return (
    <Layout
      title="About | Mohaimen Khan"
      description="Experience, technical focus, and education of Mohaimen Khan, a software engineer at Microsoft."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-14 max-w-4xl">
          <motion.h1
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-code-green">&lt;</span>
            About Me
            <span className="text-code-green">/&gt;</span>
          </motion.h1>
          <p className="text-lg text-gray-300 mb-4">
            I’m a software engineer at Microsoft working on applied science and model evaluation for GitHub Copilot. My work spans LLM evaluation, agent tooling, benchmark infrastructure, and the systems that make developer experiences reliable at scale.
          </p>
          <p className="text-lg text-gray-300">
            Before my current role, I worked on GitHub Copilot for Azure Compute and Visual Studio, Amazon Learning Products, and Windows Packaging Service. I earned a Bachelor of Applied Science and Engineering in Computer Engineering, with a minor in Engineering Business, from the University of Toronto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <section className="lg:col-span-2" aria-labelledby="experience-heading">
            <h2 id="experience-heading" className="text-2xl font-bold text-white mb-8">
              <span className="text-code-green mr-2">#</span> Experience
            </h2>
            <div className="space-y-8">
              {experience.map((job) => (
                <article key={job.company} className={`border-l-4 ${job.color} pl-6 py-1`}>
                  <h3 className="text-xl font-semibold text-white">{job.company}</h3>
                  <p className="text-code-blue font-mono mt-1">{job.role}</p>
                  <p className="text-gray-400 text-sm mt-1 mb-3">{job.dates}</p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    {job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                </article>
              ))}
            </div>

            <section className="mt-12 bg-gray-800 rounded-lg p-6 border border-gray-700" aria-labelledby="education-heading">
              <h2 id="education-heading" className="text-2xl font-bold text-white mb-3">
                <span className="text-code-green mr-2">#</span> Education
              </h2>
              <h3 className="text-lg font-semibold text-white">University of Toronto</h3>
              <p className="text-gray-300">Bachelor of Applied Science and Engineering, Computer Engineering</p>
              <p className="text-gray-400">Minor in Engineering Business · Toronto, ON, Canada</p>
              <p className="text-gray-400 mt-3">IEEE-Canadian Foundation Scholar (2019), Jeffery Skoll Scholarship (2019), and Vern Gomes Memorial Award (2018).</p>
            </section>
          </section>

          <aside>
            <section aria-labelledby="skills-heading">
              <h2 id="skills-heading" className="text-2xl font-bold text-white mb-6">
                <span className="text-code-green mr-2">#</span> Skills
              </h2>
              <div className="space-y-4 mb-10">
                {skillCategories.map((category) => (
                  <div key={category.name} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <h3 className="flex items-center text-white font-semibold mb-3">
                      {category.icon}
                      <span className="ml-2">{category.name}</span>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span key={skill} className="px-2 py-1 text-xs font-mono rounded bg-gray-700 text-gray-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section aria-labelledby="resume-heading">
              <h2 id="resume-heading" className="text-2xl font-bold text-white mb-4">
                <span className="text-code-green mr-2">#</span> Resume
              </h2>
              <ResumeViewer pdfUrl="/portfolio/Mohaimen_Khan_Resume.pdf" />
            </section>
          </aside>
        </div>
      </div>
    </Layout>
  );
}
