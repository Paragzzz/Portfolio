import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Section } from './Section';

export function Hero() {
  return (
    <Section id="home" className="pt-32 pb-20 flex flex-col justify-center min-h-[90vh]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 max-w-4xl"
      >
        <span className="text-[#ededed]/60 text-lg font-medium tracking-wide">Hello, I'm</span>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-[#ededed]">
          Parag Gamara
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#ededed]/80">
          Junior MERN Stack Developer
        </h2>
        <p className="text-xl md:text-2xl text-[#ededed]/60 max-w-2xl leading-relaxed">
          Recent BCA graduate building real-world solutions in web development and IoT.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-8 text-[#ededed]/60">
          <div className="flex items-center gap-2">
            <MapPin size={20} />
            <span>Ahmedabad, India</span>
          </div>
          <a href="mailto:paraggamara525@gmail.com" className="flex items-center gap-2 hover:text-[#ededed] transition-colors">
            <Mail size={20} />
            <span>paraggamara525@gmail.com</span>
          </a>
          <div className="flex items-center gap-2">
            <Phone size={20} />
            <span>+91 6351705346</span>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
