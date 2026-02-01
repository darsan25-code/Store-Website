import { Phone, Award, MapPin } from 'lucide-react';
import companyPoster from 'figma:asset/6f3ef862bde3edea80078f452d9b3803268921c7.png';

export function CompanyInfoCard() {
  return (
    <section id="home" className="py-12 pb-4 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Content Section */}
            <div className="p-8 md:p-12 flex flex-col justify-center bg-[rgba(0,0,0,0)]">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B11226]/10 border border-[#B11226]/20 w-fit mb-6">
                <Award size={18} className="text-[#B11226]" />
                <span className="text-sm font-semibold text-[#B11226]">Authorized Dealer</span>
              </div>

              {/* Company Name */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(255,225,0)] mb-4 leading-tight">
                SREE VEL MURUGAN<br />
                <span className="text-[#B11226]">HARDWARE & TILES</span>
              </h1>

              {/* Tagline */}
              <p className="text-lg text-gray-600 mb-8 font-medium">
                Hardware • Tiles • Sanitaryware • Pipes & Fittings
              </p>

              {/* Location */}
              <div className="flex items-start gap-3 mb-8 text-gray-700">
                <MapPin size={20} className="text-[#B11226] mt-1 flex-shrink-0" />
                <p className="text-base">
                  Premium Showroom in Porur, Chennai
                </p>
              </div>

              {/* Phone Numbers */}
              <div className="space-y-3">
                <a
                  href="tel:+917305274926"
                  className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#B11226] to-[#D61C3A] text-white rounded-2xl font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Phone size={22} />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-xs opacity-90 mb-1">Call Us Now</div>
                    <div className="text-xl tracking-wide">73052 74926</div>
                  </div>
                </a>

                <a
                  href="tel:+919840461152"
                  className="flex items-center gap-4 px-6 py-4 bg-white border-2 border-[#B11226] text-[#B11226] rounded-2xl font-bold shadow-md hover:shadow-lg hover:bg-[#B11226] hover:text-white hover:scale-[1.02] transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#B11226]/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Phone size={22} />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-xs opacity-75 mb-1">Alternate Number</div>
                    <div className="text-xl tracking-wide">98404 61152</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative h-[300px] lg:h-auto min-h-[400px] bg-gradient-to-br from-gray-100 to-gray-200">
              {/* Image with overlay for better text visibility on original poster */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={companyPoster}
                  alt="Sree Vel Murugan Hardware & Tiles Showroom"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle overlay to blend with card */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/30"></div>
              </div>

              {/* Decorative corner element */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#B11226] opacity-10 rounded-tl-[100px]"></div>
            </div>
          </div>
        </div>

        {/* Bottom trust indicators */}
        <div className="mt-8 text-center">
          <p className="text-white/80 text-sm md:text-base">
            🏆 Trusted by 10,000+ Customers • ✓ Authentic Products • ⚡ Same Day Delivery Available
          </p>
        </div>
      </div>
    </section>
  );
}