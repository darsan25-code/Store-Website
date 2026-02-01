import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ShoppingCart, Plus, Minus, ArrowLeft, Zap } from 'lucide-react';
import { useCart } from './CartContext';
import { toast } from 'sonner@2.0.3';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

const productsData: Product[] = [
  {
    id: 'ba-1',
    name: 'Jaquar Bathroom Faucet',
    price: 2850,
    image: 'https://images.unsplash.com/photo-1761353854551-361b1c804849?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMGZhdWNldCUyMHRhcHxlbnwxfHx8fDE3Njc4MDY4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Premium chrome finish bathroom tap with modern design'
  },
  {
    id: 'ba-2',
    name: 'Parryware Basin Mixer',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1761353854551-361b1c804849?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMGZhdWNldCUyMHRhcHxlbnwxfHx8fDE3Njc4MDY4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Elegant basin mixer with water-saving technology'
  },
  {
    id: 'ba-3',
    name: 'Rain Shower Head (8 inch)',
    price: 1850,
    image: 'https://images.unsplash.com/photo-1761353854551-361b1c804849?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMGZhdWNldCUyMHRhcHxlbnwxfHx8fDE3Njc4MDY4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Luxury rain shower head with anti-limescale nozzles'
  },
  {
    id: 'ba-4',
    name: 'Towel Rod - Stainless Steel',
    price: 650,
    image: 'https://images.unsplash.com/photo-1761353854551-361b1c804849?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMGZhdWNldCUyMHRhcHxlbnwxfHx8fDE3Njc4MDY4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Premium quality stainless steel towel rod - 24 inches'
  },
  {
    id: 'ba-5',
    name: 'Soap Dispenser - Wall Mount',
    price: 480,
    image: 'https://images.unsplash.com/photo-1761353854551-361b1c804849?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMGZhdWNldCUyMHRhcHxlbnwxfHx8fDE3Njc4MDY4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Modern wall-mounted soap dispenser with chrome finish'
  },
  {
    id: 'ba-6',
    name: 'Bathroom Mirror with LED',
    price: 4200,
    image: 'https://images.unsplash.com/photo-1761353854551-361b1c804849?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMGZhdWNldCUyMHRhcHxlbnwxfHx8fDE3Njc4MDY4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Premium LED-lit bathroom mirror with anti-fog feature'
  }
];

function ProductCard({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: 'Bathroom Accessories',
      quantity
    });
    toast.success('Added to Cart!', {
      description: `${quantity} x ${product.name}`,
    });
  };

  const handleBuyNow = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: 'Bathroom Accessories',
      quantity
    });
    toast.success('Redirecting to cart...', {
      description: 'Product added successfully',
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="group relative backdrop-blur-2xl bg-white/10 rounded-3xl border border-white/20 overflow-hidden shadow-2xl hover:shadow-[#B11226]/30 hover:border-white/30 transition-all duration-500"
    >
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-900/50 to-gray-800/50">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D61C3A] transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {product.description}
        </p>

        <div className="mb-4">
          <div className="inline-flex items-baseline gap-2 px-4 py-2 bg-gradient-to-r from-[#B11226]/20 to-[#D61C3A]/20 border border-[#B11226]/30 rounded-xl">
            <span className="text-3xl font-bold text-white">₹{product.price}</span>
            <span className="text-gray-300 text-sm">per unit</span>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-gray-300 text-sm font-medium">Quantity:</span>
          <div className="flex items-center gap-2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-1">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleQuantityChange(-1)}
              className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              <Minus size={16} className="text-white" />
            </motion.button>
            <span className="text-white font-bold text-lg w-12 text-center">{quantity}</span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleQuantityChange(1)}
              className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              <Plus size={16} className="text-white" />
            </motion.button>
          </div>
        </div>

        <div className="mb-4 text-gray-200 text-sm">
          Total: <span className="text-white font-bold text-lg">₹{product.price * quantity}</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAddToCart}
            className="py-3 backdrop-blur-xl bg-white/15 border-2 border-white/25 text-white rounded-xl font-bold hover:bg-white/25 transition-all flex items-center justify-center gap-2"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: '0 10px 40px rgba(177, 18, 38, 0.5)' }}
            whileTap={{ scale: 0.98 }}
            onClick={handleBuyNow}
            className="py-3 bg-gradient-to-r from-[#B11226] to-[#D61C3A] text-white rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
          >
            <Zap size={18} />
            Buy Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export function BathroomAccessoriesPage({ onBackToHome, onNavigateToCart }: { onBackToHome: () => void; onNavigateToCart: () => void }) {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const { cartCount } = useCart();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0F12] via-[#1A1A1F] to-[#0F0F12] overflow-x-hidden">
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1A1F]/50 to-transparent pointer-events-none"></div>
        
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(177, 18, 38, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(177, 18, 38, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(177, 18, 38, 0.15) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 pointer-events-none"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-between mb-8">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={onBackToHome}
              className="flex items-center gap-2 px-6 py-3 backdrop-blur-xl bg-white/15 border border-white/25 rounded-full text-white font-semibold hover:bg-white/25 transition-all group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={onNavigateToCart}
              className="relative flex items-center gap-2 px-6 py-3 backdrop-blur-xl bg-white/15 border border-white/25 rounded-full text-white font-semibold hover:bg-white/25 transition-all"
            >
              <ShoppingCart size={20} />
              Cart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-[#B11226] to-[#D61C3A] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </motion.button>
          </div>

          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              <span className="bg-gradient-to-r from-[#B11226] via-[#D61C3A] to-[#B11226] bg-clip-text text-transparent">Bathroom Accessories</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto"
            >
              Modern bathroom accessories including taps, showers, and designer fittings from premium brands
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
