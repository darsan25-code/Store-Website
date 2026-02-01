import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Phone, Award } from 'lucide-react';
import heroImage from 'figma:asset/6f3ef862bde3edea80078f452d9b3803268921c7.png';

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with Glassmorphism */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F0F12] via-[#1A1A1F] to-[#0F0F12]"></div>
        
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F12] via-[#0F0F12]/80 to-[#0F0F12]/40"></div>
        
        {/* Animated gradient circles */}
        <motion.div 
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(177, 18, 38, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(177, 18, 38, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(177, 18, 38, 0.15) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      </motion.div>

      {/* Content - Single Full Width Hero Card */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-16"
      >
        {/* Expanded Hero Card - Full Width */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full"
        >
          {/* Image Container with Glassmorphism Card */}
          <div className="relative backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 shadow-2xl p-4 md:p-6 lg:p-8 hover:shadow-[#B11226]/20 hover:border-white/30 transition-all duration-500">
            {/* Image wrapper with aspect ratio lock and contain */}
            <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50">
              <img
                src={heroImage}
                alt="Sree Vel Murugan Hardware & Tiles - Premium Brands Showcase"
                className="w-full h-auto object-contain"
                style={{ aspectRatio: 'auto' }}
              />
            </div>

            {/* Decorative corner accent */}
            <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-[#B11226] to-[#D61C3A] opacity-20 rounded-full blur-3xl"></div>
            <div className="absolute -top-2 -left-2 w-24 h-24 bg-gradient-to-br from-[#D61C3A] to-[#B11226] opacity-20 rounded-full blur-3xl"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-7 h-11 rounded-full border-2 border-white/30 flex items-start justify-center p-2 backdrop-blur-sm bg-white/5"
        >
          <motion.div
            animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[#B11226] rounded-full shadow-lg shadow-[#B11226]/50"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}