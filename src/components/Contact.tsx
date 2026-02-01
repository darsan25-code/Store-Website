import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    detail: '+91 XXXX-XXXXXX',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Mail,
    title: 'Email',
    detail: 'info@sreevelmurugan.com',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: MapPin,
    title: 'Location',
    detail: 'Your City, State, India',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    detail: 'Mon-Sat: 9AM - 7PM',
    color: 'from-green-500 to-emerald-500',
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-6 pb-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-blue-100">
            Visit our store or reach out to us for any inquiries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="backdrop-blur-md bg-white/10 rounded-3xl border border-white/20 p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${info.color} mb-4`}
                >
                  <Icon className="text-white" size={28} />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                <p className="text-blue-100">{info.detail}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="backdrop-blur-md bg-white/10 rounded-3xl border border-white/20 p-8 md:p-12 shadow-2xl"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="tel"
                placeholder="Phone Number"
                className="w-full px-6 py-4 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                placeholder="Your Message"
                rows={5}
                className="w-full px-6 py-4 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
              />
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-blue-200">
            © 2026 Sree Vel Murugan Hardware And Tiles. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
