import Layout from '../components/Layout';
import ParticleBackground from '../components/ParticleBackground';
import CodeBlock from '../components/CodeBlock';
import AwardCard from '../components/AwardCard';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight, FaBriefcase, FaLaptopCode, FaUserAlt, FaAward } from 'react-icons/fa';

const codeSnippet = `// Mohaimen Khan
const focus = [
  'LLM evaluation and agent systems',
  'Developer tools and code intelligence',
  'Cloud platforms and distributed systems'
];

const recentWork = {
  team: 'GitHub Applied Science and Model Evaluation',
  platform: 'GitHub Copilot'
};`;

const awards = [
  {
    title: "AI-based code generation using a dynamically constructed symbol graph and code skeletons",
    description: "Co-inventor on Microsoft patent application EP 4647896 A1, published November 12, 2025. Patent pending; this is a published application, not a granted patent.",
    url: "https://patents.google.com/patent/EP4647896A1/en",
    year: "EP 4647896 A1 · 2025"
  },
  {
    title: "System and method for electronic rental platform",
    description: "Co-inventor on Royal Bank of Canada patent application CA 3090161 A1, published February 14, 2021. Patent pending; this is a published application, not a granted patent.",
    url: "https://patents.google.com/patent/CA3090161A1/en",
    year: "CA 3090161 A1 · 2021"
  }
];

export default function Home() {
  return (
    <Layout>
      <div className="relative min-h-screen">
        <ParticleBackground />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <motion.div 
              className="lg:w-1/2 mb-10 lg:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-4">
                <span className="block">Hi, I'm</span> 
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-code-blue to-code-purple">
                  Mohaimen Khan
                </span>
              </h1>
              
              <div className="text-xl md:text-2xl text-gray-300 mb-6 font-mono">
                <span className="text-code-green">&gt;</span> Senior Software Engineer
                <span className="text-white animate-cursor-blink ml-1">_</span>
              </div>
              
              <p className="text-gray-300 text-lg mb-8">
                I'm a software engineer at Microsoft working on GitHub Copilot evaluation and applied science.
                I build AI systems, developer tools, and cloud experiences, with earlier work spanning Copilot
                for Visual Studio, Azure Dev Center, Amazon Learning Products, and Windows Packaging.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <motion.a 
                  href="/portfolio/about" 
                  className="px-6 py-3 rounded bg-code-blue text-white font-medium flex items-center gap-2 hover:bg-blue-700 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaUserAlt /> About Me
                </motion.a>
                
                <motion.a 
                  href="/portfolio/projects" 
                  className="px-6 py-3 rounded bg-gray-800 text-white font-medium flex items-center gap-2 hover:bg-gray-700 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLaptopCode /> Projects
                </motion.a>
                
                <motion.a 
                  href="/portfolio/contact" 
                  className="px-6 py-3 rounded bg-gray-800 text-white font-medium flex items-center gap-2 hover:bg-gray-700 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaBriefcase /> Contact
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2 max-w-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <CodeBlock 
                code={codeSnippet} 
                language="javascript"
                fileName="mohaimen.js"
              />
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-code-green mr-2">#</span> Featured Projects & Skills
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-code-blue transition-colors">
                <h3 className="text-code-yellow font-mono mb-2">GitHub Copilot Evaluation</h3>
                <p className="text-gray-300 mb-4">Building evaluation infrastructure supporting 300K+ submitted runs and 10M+ task evaluations per month.</p>
                <Link href="/projects" className="text-code-blue hover:underline flex items-center">
                  <span className="mr-2">Learn more</span>
                  <FaArrowRight size={12} />
                </Link>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-code-blue transition-colors">
                <h3 className="text-code-yellow font-mono mb-2">Developer Experiences</h3>
                <p className="text-gray-300 mb-4">From Visual Studio code intelligence to cloud workstation workflows across VS Code and Visual Studio.</p>
                <Link href="/about" className="text-code-blue hover:underline flex items-center">
                  <span className="mr-2">View skills</span>
                  <FaArrowRight size={12} />
                </Link>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-code-blue transition-colors">
                <h3 className="text-code-yellow font-mono mb-2">Cloud Systems</h3>
                <p className="text-gray-300 mb-4">Experience building Azure and AWS services, distributed workflows, and production developer tooling.</p>
                <Link href="/projects" className="text-code-blue hover:underline flex items-center">
                  <span className="mr-2">See projects</span>
                  <FaArrowRight size={12} />
                </Link>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="text-code-green mr-2">#</span>
              <FaAward className="text-code-yellow mr-2" />
              Patent Applications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <AwardCard 
                  key={index}
                  title={award.title}
                  description={award.description}
                  url={award.url}
                  year={award.year}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}