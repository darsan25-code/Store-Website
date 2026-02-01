import { motion } from 'motion/react';
import { Wrench, Grid3x3, Droplet, Bath, Package } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { SectionHeader } from './ui/SectionHeader';

const products = [
  {
    title: 'Pipes & Fittings',
    description: 'Premium PVC, CPVC, and UPVC pipes with comprehensive fittings for all plumbing requirements.',
    image: 'https://images.unsplash.com/photo-1650246363606-a2402ec42b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmluZyUyMHBpcGVzJTIwZml0dGluZ3N8ZW58MXx8fHwxNzY3NjcwNzk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    icon: Wrench,
    features: ['CPVC Pipes', 'PVC Fittings', 'UPVC Pipes', 'Connectors'],
    color: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Tiles (Floor & Wall)',
    description: 'Extensive collection of ceramic, vitrified, and designer tiles for floors and walls.',
    image: 'https://images.unsplash.com/photo-1766708168795-6433d71740bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZmxvb3IlMjB0aWxlc3xlbnwxfHx8fDE3Njc2Nzk4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Grid3x3,
    features: ['Ceramic Tiles', 'Vitrified Tiles', 'Designer Tiles', 'Wall Tiles'],
    color: 'from-purple-500 to-pink-600',
  },
  {
    title: 'Bathroom Accessories',
    description: 'Modern bathroom accessories including taps, showers, and designer fittings.',
    image: 'https://images.unsplash.com/photo-1758548157466-7c454382035a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbSUyMGFjY2Vzc29yaWVzfGVufDF8fHx8MTc2NzY3OTgwNXww&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Droplet,
    features: ['Faucets', 'Showers', 'Towel Rails', 'Soap Holders'],
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Sanitaryware',
    description: 'Complete range of wash basins, toilets, and premium sanitaryware from top brands.',
    image: 'https://images.unsplash.com/photo-1763019792872-ea42f11c43a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMHNhbml0YXJ5d2FyZXxlbnwxfHx8fDE3Njc2Nzk4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Bath,
    features: ['Wash Basins', 'Toilets', 'Urinals', 'Sinks'],
    color: 'from-orange-500 to-red-600',
  },
];

interface ProductCardProps {
  product: typeof products[0];
  index: number;
  onNavigateToCategory: (category: string) => void;
}

function ProductCard({ product, index, onNavigateToCategory }: ProductCardProps) {
  const Icon = product.icon;

  return (
    <GlassCard delay={index * 0.15}>
      {/* Image Section */}
      <div className="relative h-56 -m-8 mb-6 overflow-hidden rounded-t-3xl">
        {/* Product Image */}
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
        
        {/* Icon Badge */}
        <motion.div
          whileHover={{ rotate: 360, scale: 1.15 }}
          transition={{ duration: 0.6 }}
          className={`absolute top-6 right-6 p-4 rounded-2xl bg-gradient-to-br ${product.color} shadow-2xl z-10`}
        >
          <Icon className="text-white" size={28} />
        </motion.div>
      </div>

      {/* Content Section */}
      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#D61C3A] transition-colors">
        {product.title}
      </h3>
      <p className="text-gray-300 mb-6 leading-relaxed">
        {product.description}
      </p>

      {/* Features */}
      <div className="space-y-2.5 mb-6">
        {product.features.map((feature, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2.5 text-sm text-gray-400"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#B11226] shadow-sm shadow-[#B11226]/50"></div>
            {feature}
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.button
        onClick={() => onNavigateToCategory(product.title)}
        whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(177, 18, 38, 0.4)' }}
        whileTap={{ scale: 0.95 }}
        className="block w-full py-3.5 bg-gradient-to-r from-[#B11226] to-[#D61C3A] text-white rounded-xl font-semibold hover:shadow-xl transition-all text-center"
      >
        Explore Products
      </motion.button>
    </GlassCard>
  );
}

export function Products({ onNavigateToCategory }: { onNavigateToCategory: (category: string) => void }) {
  return (
    <section id="products" className="py-24 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1A1F]/50 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          icon={Package}
          badge="Our Products"
          title="Explore Our"
          highlight="Product Range"
          description="From pipes to premium sanitaryware, we have everything for your construction and renovation needs"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <ProductCard key={product.title} product={product} index={index} onNavigateToCategory={onNavigateToCategory} />
          ))}
        </div>

        {/* Bottom Info Card */}
        <GlassCard delay={0.6} hover={false}>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Need Expert Advice?
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Our experienced team can help you choose the right products for your project
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(177, 18, 38, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 bg-gradient-to-r from-[#B11226] to-[#D61C3A] text-white rounded-full font-bold shadow-2xl transition-all"
            >
              Contact Our Team
            </motion.a>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}