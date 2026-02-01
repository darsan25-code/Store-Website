import { motion } from 'motion/react';
import { Play, Video } from 'lucide-react';
import { SectionHeader } from './ui/SectionHeader';

const videos = [
  {
    id: 1,
    title: 'Premium Sanitaryware Collection - Parryware & Jaquar',
    category: 'Sanitaryware',
    thumbnail: 'https://images.unsplash.com/photo-1595515106705-257fa2d62381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc2NzY3ODY1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '3:24',
    categoryColor: 'from-blue-500 to-cyan-600',
  },
  {
    id: 2,
    title: 'Designer Tiles Showroom Tour - KAG Tiles Collection',
    category: 'Tiles',
    thumbnail: 'https://images.unsplash.com/photo-1728486885790-1454260d9246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB0aWxlcyUyMHNob3dyb29tfGVufDF8fHx8MTc2Nzc1MTg0MXww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '4:15',
    categoryColor: 'from-purple-500 to-indigo-600',
  },
  {
    id: 3,
    title: 'Premium Bathroom Fittings - Complete Installation Guide',
    category: 'Bathroom',
    thumbnail: 'https://images.unsplash.com/photo-1765745518739-bd8225374713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwcGx1bWJpbmclMjBmaXh0dXJlc3xlbnwxfHx8fDE3Njc3NTE4NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '5:42',
    categoryColor: 'from-green-500 to-emerald-600',
  },
  {
    id: 4,
    title: 'Pipes & Fittings Range - Supreme, Finolex & Ashirvad',
    category: 'Pipes',
    thumbnail: 'https://images.unsplash.com/photo-1767188949854-b67a5f83beda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJkd2FyZSUyMHN0b3JlJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzY3Njc0NjY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '2:58',
    categoryColor: 'from-[#B11226] to-[#D61C3A]',
  },
];

export function VideoShowcase() {
  return (
    <section id="videos" className="py-24 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A1A1F]/50 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          icon={Video}
          badge="Video Gallery"
          title="Product"
          highlight="Showcase"
          description="Explore our premium collection through detailed video presentations"
        />

        {/* Video Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94] // Custom easing
              }}
              className="group cursor-pointer"
            >
              {/* Video Card */}
              <motion.div
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
                className="backdrop-blur-xl bg-white/15 rounded-2xl border border-white/25 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-black/40 hover:border-white/30 transition-all duration-500"
              >
                {/* Thumbnail Container - 16:9 Aspect Ratio */}
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                  {/* Thumbnail Image */}
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ 
                        scale: 1.15,
                        transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] } // Bouncy easing
                      }}
                      className="relative"
                    >
                      {/* Play Button Background */}
                      <div className="w-16 h-16 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center shadow-2xl group-hover:bg-gradient-to-br group-hover:from-[#B11226] group-hover:to-[#D61C3A] transition-all duration-500">
                        <Play 
                          className="text-[#B11226] group-hover:text-white ml-1 transition-colors duration-500" 
                          size={28} 
                          fill="currentColor" 
                        />
                      </div>
                      
                      {/* Pulse Animation Ring */}
                      <div className="absolute inset-0 rounded-full bg-white/50 animate-ping opacity-0 group-hover:opacity-75 transition-opacity"></div>
                    </motion.div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md text-white text-xs font-semibold">
                    {video.duration}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <div className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${video.categoryColor} text-white text-xs font-bold shadow-lg`}>
                      {video.category}
                    </div>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <h3 className="text-white font-semibold text-sm leading-snug line-clamp-2 group-hover:text-[#D61C3A] transition-colors duration-300">
                    {video.title}
                  </h3>
                  
                  {/* View Count / Metadata */}
                  <div className="flex items-center gap-2 mt-3 text-gray-400 text-xs">
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#B11226]"></div>
                      <span>Featured</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 backdrop-blur-xl bg-white/10 border border-white/25 rounded-2xl">
            <Video className="text-[#D61C3A]" size={24} />
            <p className="text-white font-medium">
              Watch our product promo videos to explore the full collection
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}