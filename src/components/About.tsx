import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Wide range of premium tiles and bathroom fittings',
  'Authorized dealer of leading brands',
  'Competitive pricing with quality assurance',
  'Expert consultation for your projects',
  'Quick delivery and installation support',
  'After-sales service and support',
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={isInView ? {
                y: [0, -15, 0],
              } : {}}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="backdrop-blur-md bg-white/10 rounded-3xl border border-white/20 p-6 shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1595515106705-257fa2d62381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc2NzY3ODY1N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="About Us"
                className="rounded-2xl w-full h-[500px] object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -right-8 backdrop-blur-md bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl border border-white/30 p-8 shadow-2xl"
            >
              <p className="text-4xl font-bold text-white mb-2">1000+</p>
              <p className="text-white">Happy Customers</p>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-bold text-white mb-6"
            >
              About{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Store
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-blue-100 mb-8"
            >
              Sree Vel Murugan Hardware And Tiles has been serving customers with dedication and quality for over 15 years. We are your trusted partner for all hardware, tiles, and bathroom fitting needs.
            </motion.p>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 backdrop-blur-md bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle2 className="text-green-400 flex-shrink-0 mt-1" size={24} />
                  <p className="text-blue-100">{highlight}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '#contact'}
              className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}