import { motion } from 'framer-motion';
import { ExternalLink, CreditCard, Music, Bus } from 'lucide-react';
import { Section } from './Section';

const projects = [
  {
    title: 'Book-Verse',
    tech: 'MERN Stack',
    desc: 'An online bookstore and music platform allowing users to explore books and music with a smooth user interface.',
    icon: <Music className="text-[#ededed]" size={40} />,
    color: 'bg-indigo-900/20',
  },
  {
    title: 'TransTrack',
    tech: 'Python-Flask',
    desc: 'A transport management system replacing manual ledgers with a digital platform for vehicles and drivers.',
    icon: <Bus className="text-[#ededed]" size={40} />,
    color: 'bg-emerald-900/20',
  },
  {
    title: 'Payment Display Box',
    tech: 'IoT',
    desc: 'A real-time payment status display using IoT technology to track transactions instantly without manual updates.',
    icon: <CreditCard className="text-[#ededed]" size={40} />,
    color: 'bg-orange-900/20',
  },
];

export function Projects() {
  return (
    <Section id="projects" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          Featured Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className={`p-8 rounded-2xl border border-[#333] ${project.color} backdrop-blur-sm transition-colors hover:border-[#ededed]/50 group relative overflow-hidden`}
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={20} className="text-[#ededed]/70" />
              </div>
              
              <div className="mb-6 bg-[#0a0a0a]/50 w-16 h-16 rounded-xl flex items-center justify-center border border-[#333]">
                {project.icon}
              </div>

              <h3 className="text-2xl font-bold mb-2 text-[#ededed] group-hover:text-white transition-colors">
                {project.title}
              </h3>
              
              <span className="inline-block px-3 py-1 text-xs font-mono rounded-full border border-[#333] bg-[#0a0a0a]/50 text-[#ededed]/60 mb-4">
                {project.tech}
              </span>
              
              <p className="text-[#ededed]/60 leading-relaxed">
                {project.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
