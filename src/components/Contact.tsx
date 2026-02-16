import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';
import { Section } from './Section';

export function Contact() {
  return (
    <Section id="contact" className="py-20 md:py-32 border-t border-[#333]">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Let's Work Together</h2>
        <p className="text-xl text-[#ededed]/60 max-w-2xl mx-auto">
          I'm currently available for freelance projects and full-time opportunities.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:paraggamara525@gmail.com"
            className="flex items-center gap-3 px-8 py-4 bg-[#ededed] text-[#0a0a0a] rounded-full font-semibold text-lg hover:bg-white transition-colors"
          >
            <Mail size={20} />
            <span>Email Me</span>
            <ArrowUpRight size={20} />
          </motion.a>
          
          <div className="flex items-center gap-3 text-[#ededed]/60 hover:text-[#ededed] transition-colors">
            <Phone size={20} />
            <span className="text-lg font-medium">+91 6351705346</span>
          </div>
        </div>

        <footer className="pt-20 text-sm text-[#ededed]/40">
          <p>© {new Date().getFullYear()} Parag Gamara. All rights reserved.</p>
        </footer>
      </div>
    </Section>
  );
}
