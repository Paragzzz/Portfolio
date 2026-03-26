import { Section } from './Section';
import { motion } from 'framer-motion';

const experience = [
  {
    role: 'Junior Mern Stack Developer',
    company: 'Maxgen Technology',
    period: 'July 2025 – Present',
    description: 'Working on full-stack web applications using MongoDB, Express, React, and Node.js.',
  },
];

export function Experience() {
  return (
    <Section id="experience" className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Experience</h2>
        
        <div className="relative border-l border-[#333] ml-3 md:ml-6 space-y-12 pl-8 md:pl-12">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <span className="absolute -left-[41px] md:-left-[59px] top-1 h-5 w-5 rounded-full border-4 border-[#0a0a0a] bg-[#ededed]" />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-2xl font-bold text-[#ededed]">{item.role}</h3>
                <span className="text-sm font-mono text-[#ededed]/50 mt-1 sm:mt-0">{item.period}</span>
              </div>
              <p className="text-lg text-[#ededed]/70 font-medium mb-2">{item.company}</p>
              <p className="text-[#ededed]/60 leading-relaxed max-w-2xl">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
