import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ShoppingCart, Plus, Minus, ArrowLeft, Zap, Search, SlidersHorizontal } from 'lucide-react';
import { useCart } from './CartContext';
import { toast } from 'sonner@2.0.3';
import aquilineImage from 'figma:asset/72a0435b5afb5d62ced7e518fc23934bc9604a38.png';
import inslimImage from 'figma:asset/46f2177e5e9bc2e8c341e15ea649cc5731441520.png';
import reeveImage from 'figma:asset/a4d203dfdf9aab4d25c9f654949363e0ecea56e5.png';
import zestImage from 'figma:asset/02c32dc68866a858b980ca68d8ded67b2b284266.png';
import primePlusImage from 'figma:asset/dca921c0a659a9c6a0884eacb2dc8c3fd1f2c2e3.png';
import atlasImage from 'figma:asset/388c0ffdf6e1d508d475a996e8396d5fda65ec59.png';
import canvasImage from 'figma:asset/8127e1ecb6212ecaa9d56104a2c045e55fcc1b20.png';
import milleniaImage from 'figma:asset/3f8ccf061a0436d697ed452b6b5205bac7944774.png';
import vivaImage from 'figma:asset/0b032a7ae092c7ec45c28ab97f1a19d1c7909791.png';
import marvelImage from 'figma:asset/ae5a633dd4e6a095506380e9d390895e89c5ee09.png';
import vistaImage from 'figma:asset/fa86a7a157ea59e40fdec1f695013a389ae6899b.png';
import apexImage from 'figma:asset/ce15ff7a4d010c2cf68ecb510480163cbf2b69fd.png';
import ovaloImage from 'figma:asset/3bed7d062f230230d495e8b5b3478b213fa3933f.png';
import crystalImage from 'figma:asset/0339e91f5e8476f75b634f957b322fec6790b906.png';
import opalImage from 'figma:asset/1937b9bc29dc15b5758b98e292f737b42daccfbd.png';
import jetaImage from 'figma:asset/a129aa5f391e530ea6d6a33d7cd77d79ddd4a407.png';
import honorImage from 'figma:asset/127f96d16cd86407c30ad22e8d5f08bb2829b20e.png';
import brezzaImage from 'figma:asset/4b80468922066b2c86a22586198ec534cf4d0c90.png';
import asterImage from 'figma:asset/e536ef797537f1db52cc86dac9121edbff29fcf4.png';
import briveImage from 'figma:asset/f000d76f13549ac7a7f57ffa09a3b3c1078ca3ff.png';
import claretImage from 'figma:asset/73620e6a681fcac4f7205a2ea262b9d05d403c15.png';
import plutoImage from 'figma:asset/0180fda0e0c8ddaf1cce8f0c0b5af2240717e583.png';
import primeImage from 'figma:asset/a533b97b05f308fbc544aec11eb1f32256229530.png';
import jupiterImage from 'figma:asset/19c3664e71912973f7d414ea8b8ad15eb09def18.png';
import auraImage from 'figma:asset/2dd068238c2ba35599bb6ea66b9a5da73b4b8abb.png';
import periImage from 'figma:asset/b63a234df767f94bbed8ce86462e149cad8acc48.png';
import sutraImage from 'figma:asset/e528b13b2b821b5e2e5c8418f1210015678aa076.png';
import tigerImage from 'figma:asset/24e7334a979f6d13b48f04b2feaef249bf6cf4d9.png';
import unoImage from 'figma:asset/3562a73121b23edf114cd7a16ae534ca6044e092.png';
import crownImage from 'figma:asset/6bbc35ff98bf2d1039657cc3d992740c96a20ca5.png';
import alphaImage from 'figma:asset/aeda0bc2c6dec112abe4e240580adf0264e89f20.png';
import gammaImage from 'figma:asset/dfdaac766ef735bf8ac266e9d57512204b537e0b.png';
import inslim540Image from 'figma:asset/6a2a39933bbd9961c3fcd1ea4314aa1df806f09d.png';
import inslim515Image from 'figma:asset/0707dac6fc1d31ea40262b426503b75ec6b72f45.png';
import imperial600Image from 'figma:asset/918230c5757f04bf7ff4fe847ebeb0037e773425.png';
import aquiline600Image from 'figma:asset/9b291ac752575f064677199b748baf42124d7302.png';
import imperial500Image from 'figma:asset/31be52904a22511313b7e1ecd6cd862cddc963e6.png';
import rombiImage from 'figma:asset/3474e9a12809ea0534567d40bfe902c484686755.png';
import floatImage from 'figma:asset/641db00dbd55b2e63b49e159cef7d1c2f4ad7c24.png';
import swiftImage from 'figma:asset/e7eb8e31caf96c7502c6200834a000b0bdc4b8a4.png';
import aquiline400Image from 'figma:asset/942c5483c3bfc63c4a7a0fcd3fe3db6aeddb80d2.png';
import glideImage from 'figma:asset/c4ed0b079679e1f723517fe921e150a405466c22.png';
import imperialNeo600Image from 'figma:asset/6b1ec788bb121845701bb1de57b7deb10fa85318.png';
import ariaImage from 'figma:asset/1f2f36676a7b735e3a77f8820b2aa8b23e8d83cf.png';
import refineImage from 'figma:asset/5bbcb4659e1d1405ea92c00234c89aee768e71ab.png';
import zestBasinImage from 'figma:asset/e4ac56749bc3b6840450599aba7ea5a067609019.png';
import quad560Image from 'figma:asset/0e522653b4bda5ac998056857ae49065dee1b405.png';
import camryImage from 'figma:asset/c97728fb22e08e20e8a8a6538587c9764f47bf26.png';
import imperialNeo500Image from 'figma:asset/49f340f2eba69c6591141a27ff29db01d676751b.png';
import zestPlusImage from 'figma:asset/b9232754361c05ef4f6913017b9c022e58b326d3.png';
import vibgyorImage from 'figma:asset/3d80d18721c24cb833ee0740d5d428e50f99c0b5.png';
import jordonImage from 'figma:asset/3e1fdeb3e66568032505c6f021c14368152d72d5.png';
import pearlImage from 'figma:asset/b5d792e260453eb1fe4c1cf2f0a922241e072e35.png';
import luxeImage from 'figma:asset/590b6425640d3dac3a44099ce5e7f9298fb5187c.png';
import pristineIVImage from 'figma:asset/515f1391668e2db5ad51a7f13b80a067fa1def3a.png';
import eleganceImage from 'figma:asset/704fa7149f6a9dee9335284761183c03f00e5903.png';
import flairImage from 'figma:asset/8cc6bffdcb18da56008ed4de098220a958b4955a.png';
import claraImage from 'figma:asset/7c97915ac6811cd95cddf11066a21592b422a3ff.png';
import cascadeNXTImage from 'figma:asset/cdbf55a23866cff89b364dabf32e7119701c6527.png';
import imperialNeo400_1Image from 'figma:asset/2b5ab6f35d238df3f2e8ba4bda50dbde51f16607.png';
import aquaImage from 'figma:asset/db5d14fe37a917fe3665eb304e46d0e9bfd88003.png';
import imperialNeo400_2Image from 'figma:asset/01338cb77064c6124fc82050c405ab0c02ad9ffb.png';
import vallureImage from 'figma:asset/9d7406d2b41316513b408e3d1aad76f6517be38c.png';
import royalImage from 'figma:asset/749ae22ad075f211d8d4add9154e28c21ecf4aed.png';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

const productsData: Product[] = [
  {
    id: 'sw-1',
    name: 'Parryware – Aquiline One Piece Closet',
    price: 17250,
    image: aquilineImage,
    description: 'One piece WC S-TRAP which has soft close and Vortex flushing system'
  },
  {
    id: 'sw-2',
    name: 'Parryware - Inslim',
    price: 16866,
    image: inslimImage,
    description: 'One piece WC S-TRAP which has soft close and Vortex flushing system'
  },
  {
    id: 'sw-3',
    name: 'Parryware - Reeve',
    price: 16866,
    image: reeveImage,
    description: 'One piece WC S-TRAP which has soft close and Vortex flushing system with 3D flushing'
  },
  {
    id: 'sw-4',
    name: 'Parryware - Zest',
    price: 14181,
    image: zestImage,
    description: 'One piece WC S-TRAP which has soft close and dual flush system'
  },
  {
    id: 'sw-5',
    name: 'Parryware - Prime Plus',
    price: 13031,
    image: primePlusImage,
    description: 'One piece WC S-TRAP which has soft close and Vortex flushing system with 3D flushing'
  },
  {
    id: 'sw-6',
    name: 'Parryware - Atlas',
    price: 13031,
    image: atlasImage,
    description: 'One piece WC S-TRAP which has soft close and dual flushing system'
  },
  {
    id: 'sw-7',
    name: 'Parryware - Canvas',
    price: 13031,
    image: canvasImage,
    description: 'One piece WC S-TRAP which has soft close and dual flush system'
  },
  {
    id: 'sw-8',
    name: 'Parryware - Millenia',
    price: 12647,
    image: milleniaImage,
    description: 'One piece WC S-TRAP which has soft close and Vortex flushing system with 4D flush'
  },
  {
    id: 'sw-9',
    name: 'Parryware - Viva',
    price: 12264,
    image: vivaImage,
    description: 'One piece WC S-TRAP which has soft close and dual flushing system'
  },
  {
    id: 'sw-10',
    name: 'Parryware - Marvel',
    price: 12264,
    image: marvelImage,
    description: 'One piece WC S-TRAP which has soft close and dual flush system'
  },
  {
    id: 'sw-11',
    name: 'Parryware - Vista',
    price: 11497,
    image: vistaImage,
    description: 'One piece WC S-TRAP which has soft close and dual flush'
  },
  {
    id: 'sw-12',
    name: 'Parryware - Apex',
    price: 11497,
    image: apexImage,
    description: 'One piece WC S-TRAP which has soft close and dual flush with 6D flushing system'
  },
  {
    id: 'sw-13',
    name: 'Parryware - Ovalo',
    price: 11113,
    image: ovaloImage,
    description: 'One piece WC S-TRAP which has soft close and dual flush system'
  },
  {
    id: 'sw-14',
    name: 'Parryware - Crystal',
    price: 11113,
    image: crystalImage,
    description: 'One piece WC S-TRAP which has soft close and dual flush'
  },
  {
    id: 'sw-15',
    name: 'Parryware - Opal',
    price: 11113,
    image: opalImage,
    description: 'One piece WC S-TRAP which has soft close and dual flushing system'
  },
  {
    id: 'sw-16',
    name: 'Parryware - Jeta',
    price: 11113,
    image: jetaImage,
    description: 'One piece WC S-TRAP which has soft close and dual flush system'
  },
  {
    id: 'sw-17',
    name: 'Parryware - Honor',
    price: 11113,
    image: honorImage,
    description: 'One piece WC S-TRAP which has soft close and dual flush'
  },
  {
    id: 'sw-18',
    name: 'Parryware - Brezza',
    price: 10730,
    image: brezzaImage,
    description: 'One piece WC S-TRAP which has soft close and dual flushing system'
  },
  {
    id: 'sw-19',
    name: 'Parryware - Aster',
    price: 10730,
    image: asterImage,
    description: 'One piece WC S-TRAP which has soft close and dual flush system'
  },
  {
    id: 'sw-20',
    name: 'Parryware - Brive',
    price: 10730,
    image: briveImage,
    description: 'One piece WC S-TRAP which has soft close and syphonic flushing.'
  },
  {
    id: 'sw-21',
    name: 'Parryware - Claret',
    price: 10346,
    image: claretImage,
    description: 'One piece WC S-TRAP which has soft close and dual flushing system'
  },
  {
    id: 'sw-22',
    name: 'Parryware - Pluto',
    price: 10346,
    image: plutoImage,
    description: 'One piece WC S-TRAP which has soft close and dual flush system'
  },
  {
    id: 'sw-23',
    name: 'Parryware - Prime',
    price: 10346,
    image: primeImage,
    description: 'One piece WC S-TRAP which has soft close and dual flush'
  },
  {
    id: 'sw-24',
    name: 'Parryware - Jupiter',
    price: 9963,
    image: jupiterImage,
    description: 'One piece WC S-TRAP which has soft close and dual flushing system'
  },
  {
    id: 'sw-25',
    name: 'Parryware - Aura',
    price: 9963,
    image: auraImage,
    description: 'One piece WC S-TRAP which has soft close and dual flush system'
  },
  {
    id: 'sw-26',
    name: 'Parryware - Peri',
    price: 9579,
    image: periImage,
    description: 'One piece WC S-TRAP which has soft close and dual flush'
  },
  {
    id: 'sw-27',
    name: 'Parryware - Sutra',
    price: 9579,
    image: sutraImage,
    description: 'One piece WC S-TRAP which has soft close and dual flushing system'
  },
  {
    id: 'sw-28',
    name: 'Parryware - Tiger',
    price: 9196,
    image: tigerImage,
    description: 'One piece WC S-TRAP which has soft close and dual flush system'
  },
  {
    id: 'sw-29',
    name: 'Parryware - Uno',
    price: 9196,
    image: unoImage,
    description: 'One piece WC S-TRAP which has soft close and dual flush'
  },
  {
    id: 'sw-30',
    name: 'Parryware - Crown',
    price: 8429,
    image: crownImage,
    description: 'One piece WC S-TRAP which has soft close and dual flushing system'
  },
  {
    id: 'sw-31',
    name: 'Parryware - Alpha',
    price: 8429,
    image: alphaImage,
    description: 'One piece WC S-TRAP which has soft close and dual flush system'
  },
  {
    id: 'sw-32',
    name: 'Parryware - Gamma',
    price: 8429,
    image: gammaImage,
    description: 'One piece WC S-TRAP which has soft close and dual flush'
  },
  {
    id: 'sw-38',
    name: 'Parryware - Rombi',
    price: 5292,
    image: rombiImage,
    description: 'Bowl Basin'
  },
  {
    id: 'sw-43',
    name: 'Parryware - Imperial Neo 600#',
    price: 4678,
    image: imperialNeo600Image,
    description: 'Bowl Basin'
  },
  {
    id: 'sw-47',
    name: 'Parryware - Quad 560',
    price: 4371,
    image: quad560Image,
    description: 'Bowl Basin'
  },
  {
    id: 'sw-48',
    name: 'Parryware - Camry',
    price: 4218,
    image: camryImage,
    description: 'Bowl Basin'
  },
  {
    id: 'sw-49',
    name: 'Parryware - Imperial Neo 500#',
    price: 4295,
    image: imperialNeo500Image,
    description: 'Bowl Basin'
  },
  {
    id: 'sw-50',
    name: 'Parryware - Zest Plus',
    price: 4065,
    image: zestPlusImage,
    description: 'Bowl Basin'
  },
  {
    id: 'sw-51',
    name: 'Parryware - Vibgyor',
    price: 4065,
    image: vibgyorImage,
    description: 'Bowl Basin'
  },
  {
    id: 'sw-52',
    name: 'Parryware - Jordon',
    price: 3911,
    image: jordonImage,
    description: 'Bowl Basin'
  },
  {
    id: 'sw-53',
    name: 'Parryware - Pearl',
    price: 3835,
    image: pearlImage,
    description: 'Bowl Basin'
  },
  {
    id: 'sw-54',
    name: 'Parryware - Luxe',
    price: 3451,
    image: luxeImage,
    description: 'Bowl Basin'
  },
  {
    id: 'sw-55',
    name: 'Parryware - Pristine IV',
    price: 3451,
    image: pristineIVImage,
    description: 'Bowl Basin'
  },
  {
    id: 'sw-56',
    name: 'Parryware - Elegance#',
    price: 6849,
    image: eleganceImage,
    description: 'Bowl Basin'
  },
  {
    id: 'sw-57',
    name: 'Parryware - Flair',
    price: 3144,
    image: flairImage,
    description: 'Bowl Basin'
  },
  {
    id: 'sw-58',
    name: 'Parryware - Clara',
    price: 2914,
    image: claraImage,
    description: 'Bowl Basin'
  },
  {
    id: 'sw-59',
    name: 'Parryware - Cascade NXT',
    price: 2914,
    image: cascadeNXTImage,
    description: 'Bowl Basin'
  },
  {
    id: 'sw-60',
    name: 'Parryware - Imperial Neo 400#',
    price: 2301,
    image: imperialNeo400_1Image,
    description: 'Bowl Basin'
  },
  {
    id: 'sw-61',
    name: 'Parryware - Aqua',
    price: 2224,
    image: aquaImage,
    description: 'Bowl Basin'
  },
  {
    id: 'sw-62',
    name: 'Parryware - Imperial Neo 400#',
    price: 2224,
    image: imperialNeo400_2Image,
    description: 'Bowl Basin'
  },
  {
    id: 'sw-63',
    name: 'Parryware - Vallure',
    price: 2400,
    image: vallureImage,
    description: 'Bowl Basin'
  },
  {
    id: 'sw-64',
    name: 'Parryware - Royal',
    price: 1150,
    image: royalImage,
    description: 'Bowl Basin'
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
      category: 'Sanitaryware',
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
      category: 'Sanitaryware',
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
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-white/90 to-white/80">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4 drop-shadow-lg"
          style={{
            filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1))'
          }}
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

type CategoryType = 'closets' | 'basins';

export function SanitarywarePage({ onBackToHome, onNavigateToCart }: { onBackToHome: () => void; onNavigateToCart: () => void }) {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const { cartCount } = useCart();
  const [activeCategory, setActiveCategory] = useState<CategoryType>('closets');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState('all');

  // Split products into categories
  const closetsProducts = productsData.slice(0, 32); // Products 1-32
  const basinsProducts = productsData.slice(32); // Products 33-64

  // Get category products first
  const categoryProducts = activeCategory === 'closets' ? closetsProducts : basinsProducts;

  // Apply search and price filters
  const displayedProducts = categoryProducts.filter(product => {
    // Search filter
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Price filter
    let matchesPrice = true;
    if (priceRange === 'below5000') {
      matchesPrice = product.price < 5000;
    } else if (priceRange === '5000-10000') {
      matchesPrice = product.price >= 5000 && product.price <= 10000;
    } else if (priceRange === '10000-20000') {
      matchesPrice = product.price >= 10000 && product.price <= 20000;
    } else if (priceRange === 'above20000') {
      matchesPrice = product.price > 20000;
    }

    return matchesSearch && matchesPrice;
  });

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
            className="text-center mb-12"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold text-white mb-4"
            >
              <span className="bg-gradient-to-r from-[#B11226] via-[#D61C3A] to-[#B11226] bg-clip-text text-transparent">Sanitaryware Products</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 text-lg md:text-xl"
            >
              Choose the right closet or basin easily
            </motion.p>
          </motion.div>

          {/* Search and Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5 }}
            className="mb-8 backdrop-blur-2xl bg-white/10 rounded-3xl border border-white/20 p-6 shadow-2xl"
          >
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
              {/* Search Input */}
              <div className="flex-1 relative">
                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search sanitaryware products..."
                  className="w-full pl-12 pr-4 py-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#B11226] focus:bg-white/15 transition-all"
                />
              </div>

              {/* Price Filter Dropdown */}
              <div className="relative md:w-64">
                <SlidersHorizontal size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-[#B11226] focus:bg-white/15 transition-all appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='white' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center'
                  }}
                >
                  <option value="all" className="bg-[#1C1C1C] text-white">All Prices</option>
                  <option value="below5000" className="bg-[#1C1C1C] text-white">Below ₹5,000</option>
                  <option value="5000-10000" className="bg-[#1C1C1C] text-white">₹5,000 – ₹10,000</option>
                  <option value="10000-20000" className="bg-[#1C1C1C] text-white">₹10,000 – ₹20,000</option>
                  <option value="above20000" className="bg-[#1C1C1C] text-white">Above ₹20,000</option>
                </select>
              </div>
            </div>

            {/* Active Filters Display */}
            {(searchQuery || priceRange !== 'all') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center gap-2"
              >
                <span className="text-gray-300 text-sm">Active filters:</span>
                {searchQuery && (
                  <span className="px-3 py-1 bg-[#B11226]/20 border border-[#B11226]/30 rounded-lg text-white text-sm flex items-center gap-2">
                    Search: "{searchQuery}"
                    <button
                      onClick={() => setSearchQuery('')}
                      className="hover:text-[#D61C3A] transition-colors"
                    >
                      ✕
                    </button>
                  </span>
                )}
                {priceRange !== 'all' && (
                  <span className="px-3 py-1 bg-[#B11226]/20 border border-[#B11226]/30 rounded-lg text-white text-sm flex items-center gap-2">
                    Price: {priceRange === 'below5000' ? 'Below ₹5,000' : 
                            priceRange === '5000-10000' ? '₹5,000 – ₹10,000' :
                            priceRange === '10000-20000' ? '₹10,000 – ₹20,000' : 'Above ₹20,000'}
                    <button
                      onClick={() => setPriceRange('all')}
                      className="hover:text-[#D61C3A] transition-colors"
                    >
                      ✕
                    </button>
                  </span>
                )}
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setPriceRange('all');
                  }}
                  className="text-gray-400 hover:text-white text-sm underline transition-colors"
                >
                  Clear all
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory('closets')}
              className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                activeCategory === 'closets'
                  ? 'bg-gradient-to-r from-[#B11226] to-[#D61C3A] text-white shadow-xl shadow-[#B11226]/30 border-2 border-white/30'
                  : 'backdrop-blur-xl bg-white/10 border-2 border-white/20 text-gray-300 hover:bg-white/20 hover:border-white/30'
              }`}
            >
              Closets ({closetsProducts.length})
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory('basins')}
              className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                activeCategory === 'basins'
                  ? 'bg-gradient-to-r from-[#B11226] to-[#D61C3A] text-white shadow-xl shadow-[#B11226]/30 border-2 border-white/30'
                  : 'backdrop-blur-xl bg-white/10 border-2 border-white/20 text-gray-300 hover:bg-white/20 hover:border-white/30'
              }`}
            >
              Wash Basins ({basinsProducts.length})
            </motion.button>
          </motion.div>

          {/* Products Grid with Animation */}
          <motion.div
            key={`${activeCategory}-${searchQuery}-${priceRange}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            {displayedProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 backdrop-blur-2xl bg-white/10 rounded-3xl border border-white/20 shadow-2xl"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No products found</h3>
                <p className="text-gray-300 mb-6">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setPriceRange('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-[#B11226] to-[#D61C3A] text-white rounded-xl font-bold hover:shadow-xl transition-all"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}