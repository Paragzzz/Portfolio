import { motion } from 'framer-motion';
import { Section } from './Section';
import { Award, BookOpen } from 'lucide-react';

const education = [
  {
    degree: 'BCA (Bachelor of Computer Applications)',
    school: 'GLS University',
    year: 'July 2022 – May 2025',
    grade: 'CGPA: 8.4',
  },
  {
    degree: 'HSC (Science)',
    school: 'Unique School of Science',
    year: '2021 – 2022',
    grade: 'Percentage: 8.7',
  },
];

const achievements = [
  {
    title: 'Secured 3rd Position in "Syber Shadezz" (IoT Presentation)',
    location: 'GLS University',
    year: '2023',
  },
];

export function Education() {
  return (
    <Section id="education" className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto space-y-24">
        
        {/* Education */}
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Education</h2>
          <div className="grid gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 md:gap-6 group"
              >
                <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center border border-[#333] group-hover:border-[#ededed]/50 transition-colors">
                  <BookOpen size={20} className="text-[#ededed]/50 group-hover:text-[#ededed] transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#ededed]">{edu.degree}</h3>
                  <div className="text-[#ededed]/60 mt-1 space-y-1">
                    <p>{edu.school}</p>
                    <p className="text-sm font-mono opacity-80">{edu.year}</p>
                    <p className="text-sm font-semibold text-[#ededed]/80">{edu.grade}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Achievements</h2>
          <div className="grid gap-8">
            {achievements.map((ach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex gap-4 md:gap-6 group"
              >
                <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center border border-[#333] group-hover:border-[#ededed]/50 transition-colors">
                  <Award size={20} className="text-[#ededed]/50 group-hover:text-[#ededed] transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#ededed]">{ach.title}</h3>
                  <div className="text-[#ededed]/60 mt-1 space-y-1">
                    <p>{ach.location}</p>
                    <p className="text-sm font-mono opacity-80">{ach.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
}
