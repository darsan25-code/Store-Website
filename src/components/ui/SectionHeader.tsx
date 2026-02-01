import { motion, useInView } from 'motion/react';
import { useRef, ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  icon: LucideIcon;
  badge: string;
  title: string;
  highlight: string;
  description: string;
}

export function SectionHeader({ icon: Icon, badge, title, highlight, description }: SectionHeaderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-[#B11226]/10 border border-[#B11226]/20 mb-6"
      >
        <Icon className="text-[#D61C3A]" size={20} />
        <span className="text-[#D61C3A] font-semibold">{badge}</span>
      </motion.div>

      <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
        {title}{' '}
        <span className="bg-gradient-to-r from-[#B11226] to-[#D61C3A] bg-clip-text text-transparent">
          {highlight}
        </span>
      </h2>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        {description}
      </p>
    </motion.div>
  );
}
