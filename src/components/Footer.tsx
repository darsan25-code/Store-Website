import { motion } from "framer-motion";
import { Facebook, Instagram, Phone, Mail, MapPin, MapPinned } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/sree.velmurugan.71', color: 'hover:text-blue-400', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/sree_velmurugan_?igsh=bnc0bjByZjVwNnkw', color: 'hover:text-pink-400', label: 'Instagram' },
    { icon: MapPinned, href: 'https://maps.app.goo.gl/r4BRKKNXsWwmPqJK8', color: 'hover:text-blue-500', label: 'Google' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Brands', href: '#brands' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const products = [
    'Pipes & Fittings',
    'Floor & Wall Tiles',
    'Bathroom Accessories',
    'Sanitaryware',
  ];

  return (
    <footer className="relative py-16 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F12] to-[#1A1A1F]"></div>
      <div className="absolute inset-0 backdrop-blur-3xl bg-white/5"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-[#B11226] to-[#D61C3A] p-2.5 rounded-xl shadow-lg">
                <div className="w-10 h-10 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">SV</span>
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Sree Vel Murugan</h3>
                <p className="text-gray-400 text-sm">Hardware & Tiles</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for premium hardware, tiles, and sanitaryware in Porur, Chennai.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 backdrop-blur-xl bg-white/15 rounded-xl border border-white/25 text-white ${social.color} transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:shadow-[#B11226]/20`}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#D61C3A] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-[#B11226] group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Products</h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product}>
                  <div className="text-gray-400 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#B11226]"></div>
                    {product}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.app.goo.gl/r4BRKKNXsWwmPqJK8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-400 hover:text-[#D61C3A] transition-colors duration-300 group"
                >
                  <MapPin size={20} className="mt-1 flex-shrink-0 group-hover:text-[#B11226]" />
                  <span className="text-sm">
                    No. 143, Kundrathur Main Road<br />
                    Porur, Chennai - 600116
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+917305274926"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#D61C3A] transition-colors duration-300 group"
                >
                  <Phone size={20} className="flex-shrink-0 group-hover:text-[#B11226]" />
                  <span className="text-sm">+91 73052 74926</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:sreevelmuruganhardwaretiles@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#D61C3A] transition-colors duration-300 group"
                >
                  <Mail size={20} className="flex-shrink-0 group-hover:text-[#B11226]" />
                  <span className="text-sm break-all">sreevelmuruganhardwaretiles@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Sree Vel Murugan Hardware And Tiles. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#D61C3A] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D61C3A] transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}