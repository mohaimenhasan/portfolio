import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'GitHub Copilot Model Evaluation',
    description: 'Built cross-platform grading and run orchestration for an LLM evaluation platform supporting 300K+ submitted runs and 10M+ task evaluations per month. Work also includes a self-service grader registry and production run analysis.',
    tags: ['LLM evaluation', 'Python', 'SQL', 'Linux', 'Windows', 'Harbor'],
  },
  {
    title: 'Real-World Windows Agent Benchmark',
    description: 'Developed a Harbor-native benchmark of 58 real-world Windows tasks for VS Code Copilot, Copilot CLI, Copilot App, and other company products.',
    tags: ['Benchmarking', 'Windows', 'Agent evaluation', 'Harbor'],
  },
  {
    title: 'Copilot for Azure Compute and Dev Center',
    description: 'Built an Azure OpenAI and Cosmos DB service that translated natural-language requests into validated, user-approved execution plans for cloud workstations. Delivered the initial VS Code and Visual Studio experience with a two-engineer team in one quarter.',
    tags: ['Azure OpenAI', 'Cosmos DB', 'MCP', 'VS Code', 'Visual Studio', 'Dev Box'],
  },
  {
    title: 'GitHub Copilot for Visual Studio',
    description: 'Co-developed semantic code context using indexed symbols and token-efficient code skeletons. In a 91-case offline comparison, 44.0% of responses met both “no hallucination” and “problem solved” criteria, compared with 31.9% without the context prototype.',
    tags: ['Visual Studio', 'Code indexing', 'Symbol retrieval', 'Embeddings', 'Azure Blob Storage'],
  },
  {
    title: 'Amazon Learning Products',
    description: 'Built AWS infrastructure and TypeScript authorization for Amazon Learn users, then shipped a React frontend and AWS pipeline that reduced third-party learning-software costs by over $4 million annually (30%).',
    tags: ['AWS CDK', 'API Gateway', 'TypeScript', 'React', 'Cognito', 'IAM'],
  },
  {
    title: 'Windows Packaging Service',
    description: 'Extended Windows Packaging and Servicing APIs for a geo-redundant update pipeline serving 1.5 million+ clients every two weeks. A .NET certificate-rotation service reduced legacy service downtime from two hours to under 30 seconds.',
    tags: ['.NET', 'Azure IaaS', 'Service Fabric', 'Windows'],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function Projects() {
  return (
    <Layout
      title="Selected Work | Mohaimen Khan"
      description="Selected engineering work across GitHub Copilot, Azure cloud development, Amazon Learning Products, and Windows Packaging."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-6">
            <span className="text-code-green">&lt;</span>
            Selected Work
            <span className="text-code-green">/&gt;</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Engineering work across GitHub Copilot evaluation, AI-assisted cloud development, Visual Studio, and large-scale services.
          </p>
        </motion.div>

        <section aria-labelledby="selected-work-heading" className="mb-12">
          <h2 id="selected-work-heading" className="text-2xl font-bold text-white mb-8 flex items-center">
            <span className="text-code-green mr-2">#</span> Projects & Experience
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.tags}
              />
            ))}
          </motion.div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gray-800 rounded-xl p-8 border border-gray-700"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="text-code-yellow mr-2">&gt;</span> Get in touch
          </h2>
          <p className="text-gray-300 mb-6">
            For questions about my work or to connect, please reach out.
          </p>
          <motion.a
            href="/portfolio/contact"
            className="inline-block px-6 py-3 bg-code-blue text-white rounded font-medium hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact me
          </motion.a>
        </motion.div>
      </div>
    </Layout>
  );
}
