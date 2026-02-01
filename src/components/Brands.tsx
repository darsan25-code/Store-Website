import { Award } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { SectionHeader } from './ui/SectionHeader';
import { ImageWithFallback } from './figma/ImageWithFallback';
import parrywareLogo from 'figma:asset/d394353560942f01e9ddd9d407e2b223b645fa95.png';
import jaquarLogo from 'figma:asset/6d4c0d16f89a1461e8bcd254763cb86423b5ad3e.png';
import supremeLogo from 'figma:asset/31f6e8af19d40eac62912a881884e9a1106d638a.png';
import kagLogo from 'figma:asset/c7bb6cf35a0606ce17fff455c2517425235d5f14.png';
import finolexLogo from 'figma:asset/c18fb3b475026cf17c6601732eb5b5bd525f1230.png';
import ashirvadLogo from 'figma:asset/b006143f847e6fdcb5a0614c35195278ba21a049.png';

const brands = [
  { name: 'Parryware', specialty: 'Sanitaryware & Fittings', verified: true, logo: parrywareLogo },
  { name: 'Jaquar', specialty: 'Premium Bath Fittings', verified: true, logo: jaquarLogo },
  { name: 'Supreme', specialty: 'Tanks & Pipes', verified: true, logo: supremeLogo },
  { name: 'KAG', specialty: 'Designer Tiles', verified: true, logo: kagLogo },
  { name: 'Finolex', specialty: 'Pipes & Fittings', verified: true, logo: finolexLogo },
  { name: 'Ashirvad', specialty: 'Pipes & Fittings', verified: true, logo: ashirvadLogo },
];

export function Brands() {
  return (
    <section id="brands" className="py-16 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1A1F]/50 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          icon={Award}
          badge="Premium Brands"
          title="Trusted"
          highlight="Brand Partners"
          description="We stock only authentic products from India's most trusted manufacturers"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {brands.map((brand, index) => (
            <GlassCard key={brand.name} delay={index * 0.1}>
              {/* Brand Icon */}
              <div className="flex flex-col items-center text-center">
                {/* Logo Container - 100x100px with image fill */}
                <div className="relative w-[100px] h-[100px] rounded-2xl bg-gradient-to-br from-[#B11226] to-[#D61C3A] mb-6 shadow-lg group-hover:shadow-2xl group-hover:shadow-[#B11226]/40 transition-all group-hover:scale-110 duration-500 overflow-hidden">
                  {/* Image Fill Layer - Always visible, centered */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageWithFallback
                      src={brand.logo}
                      alt={`${brand.name} Logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#D61C3A] transition-colors">
                  {brand.name}
                </h3>
                <p className="text-gray-400 mb-4">{brand.specialty}</p>

                {brand.verified && (
                  <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full backdrop-blur-md bg-[#B11226]/20 border border-[#B11226]/30">
                    <Award size={16} className="text-[#D61C3A]" />
                    <span className="text-xs text-gray-300 font-medium">Authorized Dealer</span>
                  </div>
                )}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-gray-300 text-lg mb-6">
            All products come with manufacturer warranty and guarantee
          </p>
          <a
            href="#products"
            className="inline-block px-10 py-4 bg-gradient-to-r from-[#B11226] to-[#D61C3A] text-white rounded-full font-bold shadow-2xl hover:shadow-[#B11226]/50 hover:scale-105 transition-all duration-300"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}