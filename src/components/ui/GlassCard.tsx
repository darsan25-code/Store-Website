import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  onClick?: () => void;
}

export function GlassCard({ children, className = '', hover = true, delay = 0, onClick }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { y: -8, scale: 1.03 } : {}}
      className={`group relative ${className}`}
      onClick={onClick}
    >
      <div className="relative h-full backdrop-blur-xl bg-white/15 rounded-3xl border border-white/25 p-8 
                      hover:bg-white/20 hover:border-white/30 hover:shadow-2xl hover:shadow-[#B11226]/20 
                      transition-all duration-500 shadow-xl">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#B11226]/0 via-[#B11226]/0 to-[#D61C3A]/0 
                        group-hover:from-[#B11226]/10 group-hover:via-[#D61C3A]/5 group-hover:to-[#B11226]/10 
                        transition-all duration-500 pointer-events-none"></div>
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
