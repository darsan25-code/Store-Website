import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.15)']
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    [0, 24]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Brands', href: '#brands' },
    { name: 'Products', href: '#products' },
    { name: 'Why Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      style={{ 
        backgroundColor,
        backdropFilter: useTransform(backdropBlur, (blur) => `blur(${blur}px)`)
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'shadow-2xl shadow-black/30 border-b border-white/10' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 group"
          >
            <motion.div
              whileHover={{ rotate: [0, -5, 5, -5, 0] }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-[#B11226] to-[#D61C3A] p-2.5 rounded-xl shadow-lg group-hover:shadow-[#B11226]/50 transition-shadow"
            >
              <div className="w-9 h-9 flex items-center justify-center">
                <span className="text-white text-xl font-bold">SV</span>
              </div>
            </motion.div>
            <div>
              <h1 className="text-white font-bold text-lg md:text-xl leading-tight">
                Sree Vel Murugan
              </h1>
              <p className="text-gray-300 text-xs">Hardware & Tiles</p>
            </div>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="text-white hover:text-[#D61C3A] transition-colors duration-300 relative group font-medium text-sm"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#B11226] to-[#D61C3A] group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
            <motion.a
              href="tel:+917305274926"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(177, 18, 38, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#B11226] to-[#D61C3A] text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg hover:shadow-[#B11226]/50 transition-all duration-300 font-semibold text-sm"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2.5 hover:bg-white/10 rounded-xl transition-colors backdrop-blur-xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 backdrop-blur-xl bg-white/15 rounded-2xl border border-white/25 overflow-hidden shadow-2xl"
          >
            <div className="p-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-white hover:text-[#D61C3A] py-3 transition-colors border-b border-white/10 last:border-0 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="tel:+917305274926"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#B11226] to-[#D61C3A] text-white px-6 py-3.5 rounded-full shadow-lg font-semibold mt-2"
                onClick={() => setIsOpen(false)}
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}