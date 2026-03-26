import { Section } from './Section';

export function About() {
  return (
    <Section id="about" className="bg-[#0f0f0f]">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">About Me</h2>
        <div className="text-lg md:text-xl text-[#ededed]/80 leading-relaxed space-y-6">
          <p>
            Recent BCA graduate with strong programming skills and hands-on experience in web development, IoT, and full-stack projects. Eager to apply technical knowledge to real-world solutions.
          </p>
        </div>
      </div>
    </Section>
  );
}
