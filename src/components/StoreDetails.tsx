import { motion } from 'motion/react';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, Send, MessageCircle } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { SectionHeader } from './ui/SectionHeader';

export function StoreDetails() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      detail: 'No. 143, Kundrathur Main Road',
      detail2: 'Porur, Chennai - 600116',
      color: 'from-[#B11226] to-[#D61C3A]',
      action: 'https://maps.app.goo.gl/r4BRKKNXsWwmPqJK8',
      actionLabel: 'Get Directions',
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      detail: '+91 73052 74926',
      detail2: '+91 44 4806 3878',
      color: 'from-green-500 to-emerald-600',
      action: 'tel:+917305274926',
      actionLabel: 'Call Now',
    },
    {
      icon: Mail,
      title: 'Email Address',
      detail: 'sreevelmuruganhardwaretiles',
      detail2: '@gmail.com',
      color: 'from-blue-500 to-cyan-600',
      action: 'mailto:sreevelmuruganhardwaretiles@gmail.com',
      actionLabel: 'Send Email',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      detail: 'Monday - Sunday',
      detail2: '8:30 AM - 8:30 PM',
      color: 'from-purple-500 to-indigo-600',
      action: null,
      actionLabel: null,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1A1F]/50 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          icon={MapPin}
          badge="Visit Our Store"
          title="Get In"
          highlight="Touch"
          description="Visit our showroom in Porur, Chennai or reach out to us for any inquiries"
        />

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const content = (
              <div className="h-full">
                <GlassCard key={info.title} delay={index * 0.1}>
                  <div className="flex flex-col items-center text-center h-full min-h-[320px]">
                    {/* Icon - Fixed Size */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${info.color} mb-6 shadow-lg group-hover:shadow-2xl transition-all flex-shrink-0`}
                    >
                      <Icon className="text-white" size={28} />
                    </motion.div>

                    {/* Title - Fixed Size */}
                    <h3 className="text-lg font-bold text-white mb-4 flex-shrink-0">{info.title}</h3>
                    
                    {/* Content Area - Flexible */}
                    <div className="flex-grow flex flex-col justify-center mb-6">
                      <p className="text-gray-300 text-sm mb-1">{info.detail}</p>
                      <p className="text-gray-400 text-sm">{info.detail2}</p>
                    </div>

                    {/* CTA - Pushed to Bottom - Fixed Size */}
                    <div className="flex-shrink-0 w-full">
                      {info.actionLabel && (
                        <div className="text-[#D61C3A] text-sm group-hover:text-[#B11226] transition-colors inline-flex items-center gap-1.5 font-medium">
                          <Navigation size={14} />
                          {info.actionLabel}
                        </div>
                      )}
                      {!info.actionLabel && (
                        <div className="h-6"></div>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </div>
            );

            return info.action ? (
              <a key={info.title} href={info.action} target={info.action.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block h-full">
                {content}
              </a>
            ) : (
              <div key={info.title} className="h-full">{content}</div>
            );
          })}
        </div>

        {/* Map and Contact Form */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map Section with Glass Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group"
          >
            <div className="backdrop-blur-xl bg-white/15 rounded-3xl border border-white/25 overflow-hidden shadow-2xl h-full min-h-[600px] hover:border-white/30 transition-all">
              <div className="relative h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5442906947844!2d80.15165287507673!3d13.030243587301992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5260cc84042b4f%3A0x5d1cd6c9b74fc768!2sSREE%20VEL%20MURUGAN%20HARDWARE%20AND%20TILES!5e0!3m2!1sen!2sin!4v1736257800000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '600px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[0.2] opacity-90 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                ></iframe>
                
                {/* Glass Info Panel Overlay */}
                <div className="absolute bottom-6 left-6 right-6 backdrop-blur-xl bg-white/15 rounded-2xl border border-white/25 p-6 shadow-2xl">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-gradient-to-br from-[#B11226] to-[#D61C3A] p-3 rounded-xl shadow-lg flex-shrink-0">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-lg mb-1">Sree Vel Murugan – Hardware & Tiles</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        No. 143, Kundrathur Main Road, Ramanatheshwarar Nagar<br />
                        Porur, Kanchipuram District, Chennai – 600116
                      </p>
                    </div>
                  </div>
                  
                  {/* Get Directions Button */}
                  <motion.a
                    href="https://maps.app.goo.gl/r4BRKKNXsWwmPqJK8"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, boxShadow: '0 10px 40px rgba(177, 18, 38, 0.5)' }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-[#B11226] to-[#D61C3A] text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all"
                  >
                    <Navigation size={18} />
                    Get Directions
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="backdrop-blur-xl bg-white/15 rounded-3xl border border-white/25 p-8 md:p-10 shadow-2xl h-full hover:bg-white/20 hover:border-white/30 transition-all">
              <h3 className="text-3xl font-bold text-white mb-2">Send Us a Message</h3>
              <p className="text-gray-400 mb-8">We'll respond within 24 hours</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 text-sm font-medium">Your Name</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl backdrop-blur-xl bg-white/10 border border-white/25 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B11226] focus:border-transparent transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 text-sm font-medium">Email Address</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl backdrop-blur-xl bg-white/10 border border-white/25 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B11226] focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2 text-sm font-medium">Phone Number</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl backdrop-blur-xl bg-white/10 border border-white/25 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B11226] focus:border-transparent transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 text-sm font-medium">Message</label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-4 rounded-xl backdrop-blur-xl bg-white/10 border border-white/25 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B11226] focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: '0 20px 60px rgba(177, 18, 38, 0.6)' }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-8 py-5 bg-gradient-to-r from-[#B11226] to-[#D61C3A] rounded-xl text-white font-bold text-lg hover:shadow-2xl hover:shadow-[#B11226]/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>

              {/* Quick Contact Buttons */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-gray-400 text-sm mb-4 text-center">Or reach us directly via:</p>
                <div className="grid grid-cols-2 gap-4">
                  <motion.a
                    href="tel:+917305274926"
                    whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(34, 197, 94, 0.4)' }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold shadow-lg transition-all"
                  >
                    <Phone size={20} />
                    Call Now
                  </motion.a>
                  <motion.a
                    href="https://wa.me/917305274926"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(34, 197, 94, 0.4)' }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-semibold shadow-lg transition-all"
                  >
                    <MessageCircle size={20} />
                    WhatsApp
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}