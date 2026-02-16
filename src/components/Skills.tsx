import { motion } from 'framer-motion';
import { Section } from './Section';

const skills = [
  { category: 'Frontend', items: ['React.js', 'Next.js', 'HTML/CSS'] },
  { category: 'Backend', items: ['Node.js', 'Python (Flask)'] },
  { category: 'Database', items: ['MongoDB', 'MySQL'] },
  { category: 'Other', items: ['IoT', 'Networking'] },
];

export function Skills() {
  return (
    <Section id="skills" className="py-20 bg-[#0f0f0f]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0a0a0a] p-6 rounded-2xl border border-[#333] hover:border-[#ededed]/30 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-6 text-[#ededed]/80">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-[#1a1a1a] rounded-full text-sm font-medium text-[#ededed]/70 border border-[#333] hover:bg-[#252525] hover:text-[#ededed] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
