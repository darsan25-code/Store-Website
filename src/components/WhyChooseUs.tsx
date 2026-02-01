import { motion } from 'motion/react';
import { Shield, Award, Users, Tag } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { SectionHeader } from './ui/SectionHeader';

const features = [
  {
    icon: Shield,
    title: 'Quality Products',
    description: 'Genuine products sourced directly from authorized manufacturers with complete authenticity guarantee.',
    color: 'from-[#B11226] to-[#D61C3A]',
  },
  {
    icon: Award,
    title: 'Trusted Brands',
    description: 'Partnered with industry leaders like Parryware, Jaquar, Finolex, Ashirvad and more.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Users,
    title: 'Expert Guidance',
    description: 'Our experienced team provides personalized consultation to help you make informed decisions.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Tag,
    title: 'Best Pricing',
    description: 'Competitive wholesale and retail pricing with special discounts for bulk orders and contractors.',
    color: 'from-purple-500 to-pink-600',
  },
];

const stats = [
  { label: 'Customer Satisfaction', value: '100%' },
  { label: 'On-Time Delivery', value: '99%' },
  { label: 'Quality Guarantee', value: '100%' },
];

export function WhyChooseUs() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1A1F]/50 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          icon={Shield}
          badge="Why Choose Us"
          title="Your"
          highlight="Trusted Partner"
          description="15+ years of excellence in serving Porur and surrounding areas"
        />

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <GlassCard key={feature.title} delay={index * 0.1}>
                <div className="text-center">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 shadow-lg group-hover:shadow-2xl group-hover:shadow-[#B11226]/40 transition-all`}
                  >
                    <Icon className="text-white" size={32} />
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D61C3A] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <GlassCard key={stat.label} delay={0.6 + index * 0.1} hover={false}>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-[#B11226] to-[#D61C3A] bg-clip-text text-transparent mb-3">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
